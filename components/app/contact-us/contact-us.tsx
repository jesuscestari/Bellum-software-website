"use client";

import { useState } from "react";
import Image from "next/image";
import MargeloImage from "public/logo.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ companyName: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-content items-center py-6 lg:py-6">
      <div className="flex flex-1 flex-col justify-center items-center">
        <div className="pb-10">
          <Image src={MargeloImage} width={30} height={30} alt="margelo logo" />
        </div>
        <h2 className="text-4xl font-bold">Contactanos</h2>
        <form
          onSubmit={handleSubmit}
          className="min-w-full flex flex-col gap-4 px-10 mt-16 sm:min-w-[500px] md:min-w-[600px] lg:mt-20"
        >
          <input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            required
            maxLength={128}
            type="text"
            placeholder="Nombre"
            disabled={isSubmitting}
          />
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
            required
            maxLength={128}
            type="email"
            placeholder="Correo electrónico"
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            maxLength={1048576}
            placeholder="Información adicional"
            className="min-h-[16em] bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6"
            disabled={isSubmitting}
          />

          {submitStatus === "success" && (
            <div className="text-center text-green-400">
              ¡Mensaje enviado exitosamente! Te contactaremos pronto.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="text-center text-red-400">
              Error al enviar el mensaje. Por favor, intenta de nuevo.
            </div>
          )}

          <div className="text-center">
            <button
              className="bg-white text-black rounded-3xl px-8 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
