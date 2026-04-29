import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Recibimos los datos enviados desde el formulario frontend
    const body = await request.json();
    const { nombre, email, organizacion, fechaEvento, mensaje } = body;

    // 2. Validación básica (asegurarnos de que vengan los campos obligatorios)
    if (!nombre || !email) {
      return NextResponse.json(
        { error: "El nombre y el email son obligatorios." },
        { status: 400 }
      );
    }

    // 3. AQUÍ IRÁ LA LÓGICA PARA ENVIAR EL CORREO REAL
    // Por ahora, lo imprimimos en la consola de tu servidor (terminal)
    // para verificar que los datos están llegando correctamente.
    console.log("=== NUEVA SOLICITUD DE CONTRATACIÓN ===");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Organización:", organizacion || "No especificada");
    console.log("Fecha:", fechaEvento || "No especificada");
    console.log("Mensaje:", mensaje || "Sin mensaje");
    console.log("=======================================");

    // 4. Respondemos al frontend que todo salió bien
    return NextResponse.json(
      { message: "Solicitud recibida con éxito" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor al procesar la solicitud." },
      { status: 500 }
    );
  }
}