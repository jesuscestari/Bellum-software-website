import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { projects } from "lib/projects";
import ProyectosTabs from "components/app/proyectos/proyectos-tabs";

const ProyectosPage = async () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center py-20 relative">
      {/* Enlace de volver al inicio */}
      <Link
        href="/"
        className="absolute top-10 left-8 flex gap-2 items-center text-gray-600 hover:text-black transition-colors duration-200 z-10"
      >
        <MdArrowBack className="text-xl" />
        <span className="text-sm font-medium">Volver a inicio</span>
      </Link>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 lg:text-5xl">
          Últimos Proyectos
        </h2>

        <ProyectosTabs projects={projects} />
      </div>
    </section>
  );
};

export default ProyectosPage;
