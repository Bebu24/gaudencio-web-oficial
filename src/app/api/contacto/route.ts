import { NextResponse } from "next/server";
import { Resend } from "resend";

// Destinatario de las solicitudes de contratación (Gaudencio).
// Se puede cambiar con la variable CONTACT_TO_EMAIL en Cloudflare.
const DEFAULT_TO = "gaudirj@hotmail.com";

// Límites de longitud por campo (evita correos gigantes o abuso del formulario)
const LIMITS = {
  nombre: 120,
  email: 254,
  organizacion: 160,
  fechaEvento: 40,
  tipoActividad: 60,
  modalidad: 40,
  ciudad: 120,
  numeroParticipantes: 40,
  mensaje: 3000,
} as const;

type Campo = keyof typeof LIMITS;

// Escapa caracteres HTML para evitar inyección en el cuerpo del correo
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Para el asunto: texto plano en una sola línea (sin saltos de línea)
function oneLine(value: string): string {
  return value.replace(/[\r\n\t\f\v]+/g, " ").trim();
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Campo trampa: los humanos no lo ven; si viene lleno, es un bot.
  // Respondemos "éxito" sin enviar nada para no darle pistas.
  if (typeof body.sitio === "string" && body.sitio.trim() !== "") {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // Normalizamos: solo texto, recortado y con longitud máxima
  const data = {} as Record<Campo, string>;
  for (const campo of Object.keys(LIMITS) as Campo[]) {
    const raw = body[campo];
    if (raw !== undefined && typeof raw !== "string") {
      return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
    }
    const value = (raw ?? "").trim();
    if (value.length > LIMITS[campo]) {
      return NextResponse.json({ error: "Uno de los campos es demasiado largo." }, { status: 400 });
    }
    data[campo] = value;
  }

  if (!data.nombre || !data.email || !data.tipoActividad || !data.modalidad || !data.numeroParticipantes) {
    return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(data.email)) {
    return NextResponse.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada");
    return NextResponse.json(
      { error: "El servicio de correo no está disponible en este momento." },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // El remitente debe ser una dirección de un dominio verificado en Resend.
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Sitio Web Gaudencio <onboarding@resend.dev>";
  const toAddress = process.env.CONTACT_TO_EMAIL || DEFAULT_TO;

  const e = (campo: Campo, vacio: string) => (data[campo] ? escapeHtml(data[campo]) : vacio);

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: data.email,
      subject: oneLine(`Nueva solicitud de contratación: ${data.tipoActividad} - ${data.nombre}`),
      html: `
        <h2 style="color: #1F3A5F;">Nueva solicitud de evento</h2>
        <p><strong>Nombre:</strong> ${e("nombre", "")}</p>
        <p><strong>Email:</strong> ${e("email", "")}</p>
        <p><strong>Organización:</strong> ${e("organizacion", "No especificada")}</p>
        <p><strong>Fecha preferida:</strong> ${e("fechaEvento", "No especificada")}</p>
        <p><strong>Tipo de actividad:</strong> ${e("tipoActividad", "")}</p>
        <p><strong>Modalidad:</strong> ${e("modalidad", "")}</p>
        <p><strong>Ciudad:</strong> ${e("ciudad", "N/A")}</p>
        <p><strong>Número de participantes:</strong> ${e("numeroParticipantes", "")}</p>
        <hr />
        <p><strong>Mensaje extra:</strong><br/> ${e("mensaje", "Sin mensaje").replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      // El detalle se queda en los logs; al visitante no se le muestran datos internos
      console.error("Resend rechazó el envío:", error.message);
      return NextResponse.json(
        { error: "No se pudo enviar la solicitud. Intenta de nuevo más tarde." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error capturado en el servidor:", err);
    return NextResponse.json({ error: "Error interno del servidor." }, { status: 500 });
  }
}
