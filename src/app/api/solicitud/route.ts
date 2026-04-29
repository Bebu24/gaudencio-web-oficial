import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

export async function POST(req: Request) {
  try {
    // NUEVO: Agregamos "tipo" a lo que extraemos del frontend
    const { title, price, image, tipo } = await req.json();
    
    // Obtenemos la URL base (prioriza la variable de entorno, si no usa el origen del request)
    const origin = process.env.NEXT_PUBLIC_URL || req.headers.get("origin");

    // NUEVO: Decidimos a qué página regresarlo si cancela el pago
    const cancelPath = tipo === "curso" ? "/cursos" : "/libros";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "mxn", // CORREGIDO: Cobramos en Pesos Mexicanos
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
      cancel_url: `${origin}${cancelPath}`, // CORREGIDO: Ahora es dinámico
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Error detectado en Stripe API:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}