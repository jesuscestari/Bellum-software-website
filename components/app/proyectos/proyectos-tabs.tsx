"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project, ProjectCategory } from "lib/projects";

const tabs: { id: ProjectCategory; label: string }[] = [
  { id: "web", label: "Desarrollo web" },
  { id: "apps", label: "Apps" },
];

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
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web");

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
