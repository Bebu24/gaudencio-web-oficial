import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { 
      nombre, email, organizacion, fechaEvento, 
      tipoActividad, modalidad, ciudad, numeroParticipantes, mensaje 
    } = body;

    if (!nombre || !email || !tipoActividad || !modalidad || !numeroParticipantes) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Sitio Web Gaudencio <onboarding@resend.dev>", 
      to: ["novuschronos@gmail.com"], 
      replyTo: email, 
      subject: `Nueva solicitud de contratación: ${tipoActividad} - ${nombre}`,
      html: `
        <h2 style="color: #1F3A5F;">Nueva solicitud de evento</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organización:</strong> ${organizacion || "No especificada"}</p>
        <p><strong>Fecha preferida:</strong> ${fechaEvento || "No especificada"}</p>
        <p><strong>Tipo de Actividad:</strong> ${tipoActividad}</p>
        <p><strong>Modalidad:</strong> ${modalidad}</p>
        <p><strong>Ciudad:</strong> ${ciudad || "N/A"}</p>
        <p><strong>Número de participantes:</strong> ${numeroParticipantes}</p>
        <hr />
        <p><strong>Mensaje extra:</strong><br/> ${mensaje || "Sin mensaje"}</p>
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