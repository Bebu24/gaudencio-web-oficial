import { NextResponse } from "next/server";
import Stripe from "stripe";

// CORRECCIÓN 1: Eliminamos "as any". Si usas una versión reciente de la librería de Stripe, 
// pasarlo como string directo es la forma correcta y segura.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  // Si falta la llave de Stripe, fallamos de forma controlada en vez de exponer un error interno
  if (!process.env.STRIPE_SECRET_KEY) {
    console.error("STRIPE_SECRET_KEY no está configurada");
    return NextResponse.json(
      { error: "El servicio de pago no está disponible en este momento." },
      { status: 503 }
    );
  }

  try {
    // Agregamos "tipo" a lo que extraemos del frontend
    const { title, price, image, tipo } = await req.json();

    // Validamos que llegue un título y un precio numérico válido
    if (!title || typeof price !== "number" || !Number.isFinite(price) || price <= 0) {
      return NextResponse.json(
        { error: "Datos del producto inválidos." },
        { status: 400 }
      );
    }
    
    // Obtenemos la URL base (prioriza la variable de entorno, si no usa el origen del request)
    const origin = process.env.NEXT_PUBLIC_URL || req.headers.get("origin");

    // Decidimos a qué página regresarlo si cancela el pago
    const cancelPath = tipo === "curso" ? "/cursos" : "/libros";

    // Stripe solo acepta URLs públicas https para la imagen; descartamos cualquier otra cosa
    const safeImage =
      typeof image === "string" && /^https?:\/\//i.test(image) ? [image] : [];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "mxn", // Cobramos en Pesos Mexicanos
            product_data: {
              name: title,
              images: safeImage,
            },
            unit_amount: Math.round(price * 100),
          },
          quantity: 1,
        },
      ],
      // ESTO ACTIVA EL CÁLCULO DE IMPUESTOS
      automatic_tax: { enabled: true }, 
      billing_address_collection: 'required', 
      
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}${cancelPath}`, // Ahora es dinámico
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    // Derivamos el mensaje sin asumir que "error" es una instancia de Error
    const message = error instanceof Error ? error.message : "Error desconocido";
    console.error("Error detectado en Stripe API:", message);
    // No filtramos el detalle interno al cliente
    return NextResponse.json(
      { error: "No se pudo generar el enlace de pago." },
      { status: 500 }
    );
  }
}