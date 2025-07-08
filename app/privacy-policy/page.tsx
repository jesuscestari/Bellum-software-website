import React from "react";
import Link from "next/link";
import Image from "next/image";
import MargeloLogo from "public/logo.png";
import { MdOutlineHome } from "react-icons/md";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-center">
      <header className="absolute top-0 pt-10">
        <Image
          src={MargeloLogo}
          width={128 / 3}
          height={114 / 3}
          alt="margelo logo"
        />
      </header>
      <div className="max-w-2xl mx-auto px-4 text-left">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="mb-4">
          Valoramos tu privacidad. Esta página explica de manera sencilla cómo
          manejamos tu información.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>No recopilamos datos personales sin tu consentimiento.</li>
          <li>
            Solo usamos la información que nos proporcionas para responder a tus
            consultas o mejorar nuestros servicios.
          </li>
          <li>No compartimos tu información con terceros.</li>
          <li>
            Puedes contactarnos en cualquier momento para solicitar la
            eliminación de tus datos.
          </li>
        </ul>
        <p>
          Si tienes preguntas sobre nuestra política de privacidad, por favor
          contáctanos.
        </p>
      </div>
      <Link href="/">
        <button className="bg-white text-black flex flex-row justify-center items-center gap-2 text-center rounded-3xl px-6 py-2">
          <MdOutlineHome className="text-xl" />
          <span>Volver a la página principal</span>
        </button>
      </Link>
    </main>
  );
}
