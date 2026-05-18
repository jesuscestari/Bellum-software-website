export type ProjectCategory = "web" | "apps";

export interface Project {
  id: string;
  title: string;
  description?: string;
  href: string;
  image?: string;
  category: ProjectCategory | ProjectCategory[];
}

export const projects: Project[] = [
  {
    id: "elmenu",
    title: "elmenu.app",
    description: "Sitio web y aplicacion hecha a medida.",
    href: "https://elmenu.app/",
    image: "/projects/elmenu.webp",
    category: ["apps", "web"],
  },
  {
    id: "lodatolab",
    title: "Lodato Lab",
    description: "Sitio web hecho a medida para Lodato Lab.",
    href: "https://lodatolab.com",
    image: "/projects/lodatolab.webp",
    category: "web",
  },
  {
    id: "hva-escritorio-juridico",
    title: "HVA Escritorio Jurídico",
    description: "Sitio web profesional para escritorio jurídico.",
    href: "https://hvaescritoriojuridico.com/",
    image: "/projects/hva.webp",
    category: "web",
  },
  {
    id: "takesbyus",
    title: "Takes by Us",
    description: "Sitio web moderno y elegante hecho a medida para Takes by Us.",
    href: "https://www.takesbyus.com/",
    image: "/projects/takesbyus.webp",
    category: "web",
  },
  {
    id: "packwin",
    title: "Pack.win",
    description: "Plataforma digital donde puedes acceder a productos a través de experiencias interactivas.",
    href: "https://pack.win",
    image: "/projects/pack.win.webp",
    category: "apps",
  },
  {
    id: "invertir-belfica",
    title: "Invertir Belfica",
    description: "Plataforma de inversión hecha a medida para Belfica.",
    href: "https://invertir.belfica.com/",
    image: "/projects/invertir.belfica.webp",
    category: "apps",
  },
  {
    id: "tiendea",
    title: "Tiendea.app",
    description: "Sitio web y aplicación hecha a medida para Tiendea.app",
    href: "https://tiendea.app",
    image: "/projects/tiendea.webp",
    category: "apps",
  },
  {
    id: "gaetanoseguros",
    title: "Gaetano Seguros",
    description: "Sitio web profesional para empresa de seguros.",
    href: "https://gaetanoseguros.com/",
    image: "/projects/gaetanoseguros.webp",
    category: "web",
  },
  {
    id: "arquitectura-emocional",
    title: "Arquitectura emocional",
    description: "Sitio web elegante y moderno para Flora Guerra.",
    href: "https://floraguerra.vercel.app/",
    image: "/projects/flora.png",
    category: "web",
  },
  {
    id: "conterra",
    title: "Conterra Desarrollos",
    description: "Sitio web para la empresa Conterra Desarrollos.",
    href: "https://conterradesarrollos.com/",
    image: "/projects/conterra-screenshot.webp",
    category: "web",
  },
  {
    id: "belfica",
    title: "Belfica",
    description: "Sitio web y apps hechas a medida para financiadora venezolana.",
    href: "https://www.belfica.com/",
    image: "/projects/belfica.webp",
    category: "apps",
  },
  {
    id: "sitio-bodas",
    title: "Sitio de Bodas",
    description: "Sitio web elegante para organización de bodas",
    href: "https://boda-khaki.vercel.app/",
    image: "/projects/boda-screenshot.webp",
    category: "web",
  },
  {
    id: "sologeneradores",
    title: "Solo Generadores",
    description: "Sitio web especializado en generadores eléctricos",
    href: "https://www.sologeneradores.com/",
    image: "/projects/sologeneradores-screenshot.webp",
    category: "web",
  },
  {
    id: "perfumes-ivilara",
    title: "Perfumes Ivilara",
    description: "Tienda online de perfumes y fragancias premium",
    href: "https://www.perfumesivilara.com/",
    image: "/projects/perfumesivilara-screenshot.webp",
    category: "web",
  },
  {
    id: "clinica-oe",
    title: "Clínica OE",
    description: "Sitio web profesional para clínica médica",
    href: "https://clinicaoe.com.ar/",
    image: "/projects/clinicaoe-screenshot.webp",
    category: "web",
  },
  {
    id: "englishbyclau",
    title: "English by Clau Academy",
    description: "Academia online para aprendizaje de inglés",
    href: "https://www.englishbyclauacademy.com/",
    image: "/projects/englishbyclau-screenshot.webp",
    category: "web",
  },
  {
    id: "select-structural",
    title: "Select Structural",
    description: "Empresa de ingeniería estructural y construcción",
    href: "https://www.selectstructural.com/",
    image: "/projects/selectstructural-screenshot.webp",
    category: "web",
  },
  {
    id: "lenerzi",
    title: "Lenerzi",
    description: "Sitio web para Lenerzi.",
    href: "https://www.lenerzi.com/",
    image: "/projects/lenerzi.png",
    category: "web",
  },
];
