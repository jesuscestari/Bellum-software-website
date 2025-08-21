import Image from "next/image";
import Link from "next/link";

// Importar imágenes directamente con rutas relativas
import BodaScreenshot from "../../../public/projects/boda-screenshot.webp";
import SologeneradoresScreenshot from "../../../public/projects/sologeneradores-screenshot.webp";
import PerfumesivilaraScreenshot from "../../../public/projects/perfumesivilara-screenshot.webp";
import ClinicaoeScreenshot from "../../../public/projects/clinicaoe-screenshot.webp";
import ConterraScreenshot from "../../../public/projects/conterra-screenshot.webp";
import EnglishbyclauScreenshot from "../../../public/projects/englishbyclau-screenshot.webp";
import SelectstructuralScreenshot from "../../../public/projects/selectstructural-screenshot.webp";
import EngassistusaScreenshot from "../../../public/projects/engassistusa-screenshot.webp";
import FloraScreenshot from "../../../public/projects/flora.png";

const Clients = async () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 lg:text-5xl">
          Ultimos Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Proyecto 1 - Arquitectura emocional */}
          <a
            href="https://floraguerra.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={FloraScreenshot}
                alt="Arquitectura emocional"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Arquitectura emocional
            </h3>
            <p className="text-gray-600 text-sm">
              Sitio web elegante y moderno para Flora Guerra.
            </p>
          </a>

          {/* Proyecto 2 - Conterra Desarrollos */}
          <a
            href="https://conterradesarrollos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={ConterraScreenshot}
                alt="Conterra Desarrollos"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Conterra Desarrollos</h3>
            <p className="text-gray-600 text-sm">
              Sitio web para la empresa Conterra Desarrollos.
            </p>
          </a>

          {/* Proyecto 3 - elmenu.app */}
          <a
            href="https://elmenu.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={EngassistusaScreenshot}
                alt="elmenu.app"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">elmenu.app</h3>
            <p className="text-gray-600 text-sm">
              Sitio web y aplicacion hecha a medida.
            </p>
          </a>

          {/* Proyecto 4 - Sitio de Bodas */}
          <a
            href="https://boda-khaki.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={BodaScreenshot}
                alt="Sitio de Bodas"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sitio de Bodas</h3>
            <p className="text-gray-600 text-sm">
              Sitio web elegante para organización de bodas
            </p>
          </a>
        </div>

        {/* Botón "Ver todos los proyectos" */}
        <div className="text-center mt-12">
          <Link
            href="/proyectos"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;
