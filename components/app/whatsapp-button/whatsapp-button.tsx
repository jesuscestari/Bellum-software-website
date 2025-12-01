"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5491173672568"; // Número de WhatsApp (formato: código de país + número sin + ni espacios)
  const message =
    "Hola, me gustaría obtener más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Buscar la primera sección después del hero (AboutTeam)
    const firstSection = document.getElementById("about-team");

    if (!firstSection) return;

    // Usar IntersectionObserver para detectar cuando la sección entra en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección está visible en el viewport, mostrar el botón
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        // Trigger cuando al menos el 10% de la sección es visible
        threshold: 0.1,
      }
    );

    observer.observe(firstSection);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-black hover:bg-zinc-900 border-2 border-zinc-700 hover:border-zinc-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <span className="absolute -top-2 -right-2 bg-zinc-800 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
