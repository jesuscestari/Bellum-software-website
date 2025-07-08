import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { companyName, email, message } = await request.json();

    // Validar que todos los campos requeridos estén presentes
    if (!companyName || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Enviar el email usando Resend
    const data = await resend.emails.send({
      from: "Bellum Software <onboarding@resend.dev>",
      to: ["bellum.software@gmail.com"],
      subject: `Nuevo mensaje de contacto de ${companyName}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ message: "Email enviado exitosamente", data });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
