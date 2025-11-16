"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
// import MargeloImage from "public/logo.png";

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
          <Image src="/logo.png" width={30} height={30} alt="margelo logo" />
        </div>
        <h2 className="text-4xl font-bold text-center">Contacta con nosotros</h2>
        <form
          onSubmit={handleSubmit}
          className="min-w-full flex flex-col gap-4 px-10 mt-16 sm:min-w-[500px] md:min-w-[600px] lg:mt-20"
        >
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="bg-black text-white outline-none border-2 border-white rounded-3xl pl-12 pr-8 py-2 w-full"
              required
              maxLength={128}
              type="text"
              placeholder="Nombre"
              disabled={isSubmitting}
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-black text-white outline-none border-2 border-white rounded-3xl pl-12 pr-8 py-2 w-full"
              required
              maxLength={128}
              type="email"
              placeholder="Correo electrónico"
              disabled={isSubmitting}
            />
          </div>
          <div className="relative">
            <FaComment className="absolute left-4 top-4 text-white" />
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              maxLength={1048576}
              placeholder="Información adicional"
              className="min-h-[16em] bg-black text-white outline-none border-2 border-white rounded-3xl pl-12 pr-8 py-6 w-full"
              disabled={isSubmitting}
            />
          </div>

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
              className="bg-white text-black rounded-3xl px-8 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Enviar</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
