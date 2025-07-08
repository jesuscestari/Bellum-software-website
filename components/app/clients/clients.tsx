import ClientsLogos from "components/app/clients/clients-logos/clients-logos";
import Image from "next/image";

// Rutas de las imágenes de los proyectos
const PROJECT_IMAGES = {
  boda: "/projects/boda-screenshot.webp",
  sologeneradores: "/projects/sologeneradores-screenshot.webp",
  perfumesivilara: "/projects/perfumesivilara-screenshot.webp",
  clinicaoe: "/projects/clinicaoe-screenshot.webp",
  petgeove: "/projects/petgeove-screenshot.webp",
  englishbyclau: "/projects/englishbyclau-screenshot.webp",
  selectstructural: "/projects/selectstructural-screenshot.webp",
  engassistusa: "/projects/engassistusa-screenshot.webp",
};

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
            href="https://boda-khaki.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.boda}
                alt="Sitio de Bodas"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Sitio de Bodas</h3>
            <p className="text-gray-600 text-sm">
              Sitio web elegante para organización de bodas
            </p>
          </a>

          {/* Proyecto 2 */}
          <a
            href="https://www.sologeneradores.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.sologeneradores}
                alt="Solo Generadores"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Solo Generadores</h3>
            <p className="text-gray-600 text-sm">
              Sitio web especializado en generadores eléctricos
            </p>
          </a>

          {/* Proyecto 3 */}
          <a
            href="https://www.perfumesivilara.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.perfumesivilara}
                alt="Perfumes Ivilara"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Perfumes Ivilara</h3>
            <p className="text-gray-600 text-sm">
              Tienda online de perfumes y fragancias premium
            </p>
          </a>

          {/* Proyecto 4 */}
          <a
            href="https://clinicaoe.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.clinicaoe}
                alt="Clínica OE"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Clínica OE</h3>
            <p className="text-gray-600 text-sm">
              Sitio web profesional para clínica médica
            </p>
          </a>

          {/* Proyecto 5 */}
          <a
            href="https://www.petgeove.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.petgeove}
                alt="Pet Geove"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pet Geove</h3>
            <p className="text-gray-600 text-sm">
              Sitio web especializado en servicios para mascotas
            </p>
          </a>

          {/* Proyecto 6 */}
          <a
            href="https://www.englishbyclauacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.englishbyclau}
                alt="English by Clau Academy"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              English by Clau Academy
            </h3>
            <p className="text-gray-600 text-sm">
              Academia online para aprendizaje de inglés
            </p>
          </a>

          {/* Proyecto 7 */}
          <a
            href="https://www.selectstructural.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.selectstructural}
                alt="Select Structural"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Select Structural</h3>
            <p className="text-gray-600 text-sm">
              Empresa de ingeniería estructural y construcción
            </p>
          </a>

          {/* Proyecto 8 */}
          <a
            href="https://www.engassistusa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
          >
            <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <Image
                src={PROJECT_IMAGES.engassistusa}
                alt="Eng Assist USA"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Eng Assist USA</h3>
            <p className="text-gray-600 text-sm">
              Servicios de asistencia técnica e ingeniería
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
