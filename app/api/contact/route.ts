import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Debug: Verificar que la API key existe
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    const { companyName, email, message } = await request.json();

    console.log("Form data received:", {
      companyName,
      email,
      messageLength: message?.length,
    });

    // Validar que todos los campos requeridos estén presentes
    if (!companyName || !email || !message) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Verificar que la API key está configurada
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    console.log("Attempting to send email...");

    // Enviar el email usando Resend
    const data = await resend.emails.send({
      from: "Bellum Software <onboarding@resend.dev>",
      to: ["jescesta@gmail.com"],
      subject: `Nuevo mensaje de contacto de ${companyName}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json({ message: "Email enviado exitosamente", data });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
