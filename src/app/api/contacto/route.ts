import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    // 1. Recibimos los datos enviados desde el formulario frontend
    const body = await request.json();
    const { nombre, email, organizacion, fechaEvento, tipoActividad, modalidad, ciudad, numeroParticipantes, mensaje } = body;

    // 2. Validación básica (asegurarnos de que vengan los campos obligatorios)
    if (!nombre || !email|| !tipoActividad || !modalidad || !numeroParticipantes) {
      return NextResponse.json(
        { error: "Los campos obligatorios no están completos." },
        { status: 400 }
      );
    }

    
    const { data, error } = await resend.emails.send({
      // NOTA ADMINISTRATIVA: Mientras no verifiques el dominio de Gaudencio en Resend, 
      // debes usar esta dirección de pruebas por defecto.
      from: "Sitio Web Gaudencio <onboarding@resend.dev>", 
      
      // Coloca aquí el correo real de tu tío donde recibirá las solicitudes
      to: ["novuschronos@gmail.com"], 
      
      replyTo: email, // Permite que tu tío le dé a "Responder" y le conteste al cliente directamente
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
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}