import Image from "next/image";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

// Using string paths instead of imports to avoid Sharp optimization issues
// import BodaScreenshot from "../../public/projects/boda-screenshot.webp";
// import SologeneradoresScreenshot from "../../public/projects/sologeneradores-screenshot.webp";
// import PerfumesivilaraScreenshot from "../../public/projects/perfumesivilara-screenshot.webp";
// import ClinicaoeScreenshot from "../../public/projects/clinicaoe-screenshot.webp";
// import ConterraScreenshot from "../../public/projects/conterra-screenshot.webp";
// import EnglishbyclauScreenshot from "../../public/projects/englishbyclau-screenshot.webp";
// import SelectstructuralScreenshot from "../../public/projects/selectstructural-screenshot.webp";
// import EngassistusaScreenshot from "../../public/projects/engassistusa-screenshot.webp";
// import FloraScreenshot from "../../public/projects/flora.png";
// import LenerziScreenshot from "../../public/projects/lenerzi.png";
// import TakesbyusScreenshot from "../../public/projects/takesbyus.webp";

const ProyectosPage = async () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center py-20 relative">
      {/* Enlace de volver al inicio */}
      <Link
        href="/"
        className="absolute top-10 left-8 flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 z-10"
      >
        <MdArrowBack className="text-xl" />
        <span className="text-sm font-medium">Volver a inicio</span>
      </Link>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 lg:text-5xl">
          Ultimos Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Proyecto 1 - Gaetano Seguros */}
          <a
            href="https://gaetanoseguros.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/gaetanoseguros.webp"
                alt="Gaetano Seguros"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Gaetano Seguros</h3>
            <p className="text-gray-600 text-sm">
              Sitio web profesional para empresa de seguros.
            </p>
          </a>

          {/* Proyecto 2 - Takes by Us */}
          <a
            href="https://www.takesbyus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/takesbyus.webp"
                alt="Takes by Us"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Takes by Us</h3>
            <p className="text-gray-600 text-sm">
              Sitio web moderno y elegante hecho a medida para Takes by Us.
            </p>
          </a>

          {/* Proyecto 3 - Arquitectura emocional */}
          <a
            href="https://floraguerra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/flora.png"
                alt="Arquitectura emocional"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Arquitectura emocional
            </h3>
            <p className="text-gray-600 text-sm">
              Sitio web elegante y moderno para Flora Guerra.
            </p>
          </a>

          {/* Proyecto 4 - Conterra Desarrollos */}
          <a
            href="https://conterradesarrollos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/conterra-screenshot.webp"
                alt="Conterra Desarrollos"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Conterra Desarrollos</h3>
            <p className="text-gray-600 text-sm">
              Sitio web para la empresa Conterra Desarrollos.
            </p>
          </a>

          {/* Proyecto 5 - elmenu.app */}
          <a
            href="https://elmenu.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/engassistusa-screenshot.webp"
                alt="elmenu.app"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">elmenu.app</h3>
            <p className="text-gray-600 text-sm">
              Sitio web y aplicacion hecha a medida.
            </p>
          </a>

          {/* Proyecto 6 - Sitio de Bodas */}
          <a
            href="https://boda-khaki.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/boda-screenshot.webp"
                alt="Sitio de Bodas"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sitio de Bodas</h3>
            <p className="text-gray-600 text-sm">
              Sitio web elegante para organización de bodas
            </p>
          </a>

          {/* Proyecto 7 - Solo Generadores */}
          <a
            href="https://www.sologeneradores.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/sologeneradores-screenshot.webp"
                alt="Solo Generadores"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Solo Generadores</h3>
            <p className="text-gray-600 text-sm">
              Sitio web especializado en generadores eléctricos
            </p>
          </a>

          {/* Proyecto 8 - Perfumes Ivilara */}
          <a
            href="https://www.perfumesivilara.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/perfumesivilara-screenshot.webp"
                alt="Perfumes Ivilara"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Perfumes Ivilara</h3>
            <p className="text-gray-600 text-sm">
              Tienda online de perfumes y fragancias premium
            </p>
          </a>

          {/* Proyecto 9 - Clínica OE */}
          <a
            href="https://clinicaoe.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/clinicaoe-screenshot.webp"
                alt="Clínica OE"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clínica OE</h3>
            <p className="text-gray-600 text-sm">
              Sitio web profesional para clínica médica
            </p>
          </a>

          {/* Proyecto 10 - English by Clau Academy */}
          <a
            href="https://www.englishbyclauacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/englishbyclau-screenshot.webp"
                alt="English by Clau Academy"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              English by Clau Academy
            </h3>
            <p className="text-gray-600 text-sm">
              Academia online para aprendizaje de inglés
            </p>
          </a>

          {/* Proyecto 11 - Select Structural */}
          <a
            href="https://www.selectstructural.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/selectstructural-screenshot.webp"
                alt="Select Structural"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Select Structural</h3>
            <p className="text-gray-600 text-sm">
              Empresa de ingeniería estructural y construcción
            </p>
          </a>

          {/* Proyecto 12 - Lenerzi */}
          <a
            href="https://www.lenerzi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src="/projects/lenerzi.png"
                alt="Lenerzi"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lenerzi</h3>
            <p className="text-gray-600 text-sm">Sitio web para Lenerzi.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProyectosPage;
