import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  // Leemos la llave una sola vez. Si falta, fallamos de forma controlada
  // ANTES de crear el cliente de Stripe.
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    console.error("STRIPE_SECRET_KEY no está configurada");
    return NextResponse.json(
      { error: "El servicio de pago no está disponible en este momento." },
      { status: 503 }
    );
  }

  // Creamos el cliente AQUÍ DENTRO (no en el nivel superior del archivo) para que
  // solo se ejecute cuando llega una petición, no durante el "build".
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-02-25.clover",
  });

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
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      mode: "payment",
      success_url: `${origin}/success`,
      cancel_url: `${origin}${cancelPath}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    console.error("Error detectado en Stripe API:", message);
    return NextResponse.json(
      { error: "No se pudo generar el enlace de pago." },
      { status: 500 }
    );
  }
}