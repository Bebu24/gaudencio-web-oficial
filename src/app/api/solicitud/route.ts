import { NextResponse } from "next/server";
import Stripe from "stripe";
import { books } from "@/app/data/libros";

// URL pública del sitio. Nunca se toma de los encabezados de la petición
// (se podrían falsificar para redirigir al comprador a otro sitio).
const SITE_URL = (process.env.NEXT_PUBLIC_URL || "https://www.gaudenciorodriguez.com").replace(/\/+$/, "");

export async function POST(req: Request) {
  // Si falta la llave de Stripe, fallamos de forma controlada
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    console.error("STRIPE_SECRET_KEY no está configurada");
    return NextResponse.json(
      { error: "El servicio de pago no está disponible en este momento." },
      { status: 503 }
    );
  }

  // El navegador solo manda el ID del producto.
  // Precio, título e imagen salen del catálogo del servidor: no se pueden manipular.
  let id: unknown;
  try {
    ({ id } = await req.json());
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const book = books.find((b) => b.id === id);
  if (!book) {
    return NextResponse.json({ error: "Producto no encontrado." }, { status: 400 });
  }

  // Creamos el cliente aquí (no al nivel del archivo) para que el build no necesite la llave.
  // En Cloudflare Workers, Stripe debe usar fetch como cliente HTTP.
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-02-25.clover",
    httpClient: Stripe.createFetchHttpClient(),
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "mxn", // Cobramos en Pesos Mexicanos
            product_data: {
              name: book.title,
              images: [`${SITE_URL}${book.image}`],
            },
            unit_amount: Math.round(book.price * 100),
          },
          quantity: 1,
        },
      ],
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      mode: "payment",
      success_url: `${SITE_URL}/success`,
      cancel_url: `${SITE_URL}/libros`,
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
