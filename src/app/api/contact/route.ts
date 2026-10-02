import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Nuevo formulario recibido en /api/contact:", body);

    // Integración lista para Resend, EmailJS o Webhook
    return NextResponse.json({
      success: true,
      message: "Formulario recibido correctamente",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Error al procesar el formulario" },
      { status: 500 }
    );
  }
}
