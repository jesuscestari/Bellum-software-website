import Image from "next/image";

// Importar imágenes directamente con rutas relativas
import BodaScreenshot from "../../../public/projects/boda-screenshot.webp";
import SologeneradoresScreenshot from "../../../public/projects/sologeneradores-screenshot.webp";
import PerfumesivilaraScreenshot from "../../../public/projects/perfumesivilara-screenshot.webp";
import ClinicaoeScreenshot from "../../../public/projects/clinicaoe-screenshot.webp";
import PetgeoveScreenshot from "../../../public/projects/petgeove-screenshot.webp";
import EnglishbyclauScreenshot from "../../../public/projects/englishbyclau-screenshot.webp";
import SelectstructuralScreenshot from "../../../public/projects/selectstructural-screenshot.webp";
import EngassistusaScreenshot from "../../../public/projects/engassistusa-screenshot.webp";

const Clients = async () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 lg:text-5xl">
          Ultimos Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Proyecto 1 */}
          <a
            href="#"
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
          {/* Proyecto 2 */}
          <a
            href="#"
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

          {/* Proyecto 3 */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={SologeneradoresScreenshot}
                alt="Solo Generadores"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Solo Generadores</h3>
            <p className="text-gray-600 text-sm">
              Sitio web especializado en generadores eléctricos
            </p>
          </a>

          {/* Proyecto 4 */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PerfumesivilaraScreenshot}
                alt="Perfumes Ivilara"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Perfumes Ivilara</h3>
            <p className="text-gray-600 text-sm">
              Tienda online de perfumes y fragancias premium
            </p>
          </a>

          {/* Proyecto 5 */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={ClinicaoeScreenshot}
                alt="Clínica OE"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clínica OE</h3>
            <p className="text-gray-600 text-sm">
              Sitio web profesional para clínica médica
            </p>
          </a>

          {/* Proyecto 6 */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PetgeoveScreenshot}
                alt="Pet Geove"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pet Geove</h3>
            <p className="text-gray-600 text-sm">
              Sitio web especializado en servicios para mascotas
            </p>
          </a>

          {/* Proyecto 7 */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={EnglishbyclauScreenshot}
                alt="English by Clau Academy"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              English by Clau Academy
            </h3>
            <p className="text-gray-600 text-sm">
              Academia online para aprendizaje de inglés
            </p>
          </a>

          {/* Proyecto 8 */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={SelectstructuralScreenshot}
                alt="Select Structural"
                width={400}
                height={300}
                className="w-full h-full object-cover pointer-events-none"
                placeholder="blur"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Select Structural</h3>
            <p className="text-gray-600 text-sm">
              Empresa de ingeniería estructural y construcción
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
