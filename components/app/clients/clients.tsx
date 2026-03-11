import Link from "next/link";
import { projects } from "lib/projects";
import ProyectosTabs from "components/app/proyectos/proyectos-tabs";

const Clients = async () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 lg:text-5xl">
          Últimos Proyectos
        </h2>

        <ProyectosTabs projects={projects} />

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
