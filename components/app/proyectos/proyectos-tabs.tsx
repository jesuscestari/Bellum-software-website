"use client";

import Image from "next/image";
import type { Project } from "lib/projects";

interface ProyectosTabsProps {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.href}
    target={project.href === "#" ? undefined : "_blank"}
    rel={project.href === "#" ? undefined : "noopener noreferrer"}
    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow block"
  >
    {project.image && (
      <div className="h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    )}
    <h3 className={`text-lg font-semibold ${project.image ? "mb-2" : ""}`}>
      {project.title}
    </h3>
    {project.description && (
      <p className="text-gray-600 text-sm">{project.description}</p>
    )}
  </a>
);

export default function ProyectosTabs({ projects }: ProyectosTabsProps) {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-2 mb-12">
        <button
          className="px-6 py-3 rounded-lg font-medium bg-black text-white"
        >
          Desarrollos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
