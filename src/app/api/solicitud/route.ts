import { NextResponse } from "next/server";
import Stripe from "stripe";

// CORRECCIÓN 1: Eliminamos "as any". Si usas una versión reciente de la librería de Stripe, 
// pasarlo como string directo es la forma correcta y segura.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(req: Request) {
  try {
    // Agregamos "tipo" a lo que extraemos del frontend
    const { title, price, image, tipo } = await req.json();
    
    // Obtenemos la URL base (prioriza la variable de entorno, si no usa el origen del request)
    const origin = process.env.NEXT_PUBLIC_URL || req.headers.get("origin");

    // Decidimos a qué página regresarlo si cancela el pago
    const cancelPath = tipo === "curso" ? "/cursos" : "/libros";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "mxn", // Cobramos en Pesos Mexicanos
            product_data: {
              name: title,
              images: image ? [image] : [], 
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

  // CORRECCIÓN 2: Tipamos el error de forma estricta en lugar de usar "any"
  } catch (error) {
    const err = error as Error;
    console.error("Error detectado en Stripe API:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}