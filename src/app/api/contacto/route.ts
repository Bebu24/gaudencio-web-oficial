import { NextResponse } from "next/server";
import { Resend } from "resend";

// Escapa caracteres HTML para evitar inyección en el correo que se construye con los datos del formulario
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validación básica de formato de correo
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está configurada");
      return NextResponse.json(
        { error: "El servicio de correo no está disponible en este momento." },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const {
      nombre, email, organizacion, fechaEvento,
      tipoActividad, modalidad, ciudad, numeroParticipantes, mensaje
    } = body;

    if (!nombre || !email || !tipoActividad || !modalidad || !numeroParticipantes) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "El correo electrónico no es válido" }, { status: 400 });
    }

    // El remitente se puede configurar por entorno; por defecto usamos el dominio sandbox de Resend
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || "Sitio Web Gaudencio <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_TO_EMAIL || "novuschronos@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `Nueva solicitud de contratación: ${escapeHtml(tipoActividad)} - ${escapeHtml(nombre)}`,
      html: `
        <h2 style="color: #1F3A5F;">Nueva solicitud de evento</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organización:</strong> ${escapeHtml(organizacion) || "No especificada"}</p>
        <p><strong>Fecha preferida:</strong> ${escapeHtml(fechaEvento) || "No especificada"}</p>
        <p><strong>Tipo de Actividad:</strong> ${escapeHtml(tipoActividad)}</p>
        <p><strong>Modalidad:</strong> ${escapeHtml(modalidad)}</p>
        <p><strong>Ciudad:</strong> ${escapeHtml(ciudad) || "N/A"}</p>
        <p><strong>Número de participantes:</strong> ${escapeHtml(numeroParticipantes)}</p>
        <hr />
        <p><strong>Mensaje extra:</strong><br/> ${escapeHtml(mensaje) || "Sin mensaje"}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error capturado en el servidor:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}