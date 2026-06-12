export interface Project {
  id: string
  title: string
  company: string
  category: string
  year: string
  problem: string
  solution: string
  technologies: string[]
  decisions: string[]
  url?: string
}

export const projects: Project[] = [
  {
    id: "one-consultores",
    title: "ONE Consultores - Software a Medida",
    company: "ONE Consultores",
    category: "Software a Medida & DevOps",
    year: "2025",
    problem: "Empresas requerían soluciones de software personalizadas con ciclos de desarrollo ágiles y despliegues continuos.",
    solution: "Desarrollo de software a medida bajo metodología SCRUM, con implementación de pipelines CI/CD y arquitectura containerizada para entregas consistentes.",
    technologies: ["Vue 3", "TypeScript", "Python", "Express.js", "PostgreSQL", "Docker"],
    decisions: [
      "Metodología SCRUM para entregas iterativas y feedback continuo",
      "Contenedores Docker para ambientes reproducibles",
      "Despliegues continuos con Jenkins",
    ],
  },
  {
    id: "avisodecobro",
    title: "Avisodecobro - Plataforma SaaS",
    company: "Avisodecobro",
    category: "Plataforma SaaS",
    year: "2024",
    problem: "Administradores de edificios necesitaban una plataforma centralizada para gestionar gastos comunes de forma eficiente.",
    solution: "Plataforma web tipo SaaS para administración de gastos comunes, con participación completa en frontend y backend.",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    decisions: [
      "Arquitectura SaaS multi-tenant para escalabilidad",
      "API REST con Django REST Framework",
      "Interfaz responsive con React y TypeScript",
    ],
    url: "https://avisodecobro.cl",
  },
  {
    id: "graba2",
    title: "Graba2.cl - Aplicación Web",
    company: "Graba2.cl",
    category: "Aplicación Web Fullstack",
    year: "2023",
    problem: "Cliente necesitaba una aplicación web para gestionar pedidos de impresión de stickers personalizados para vidrios de autos.",
    solution: "Desarrollo de aplicación web completa con trabajo directo con cliente y liderazgo de equipo pequeño.",
    technologies: ["React", "Django", "SQL Server"],
    decisions: [
      "Comunicación directa con cliente para validar requerimientos",
      "Liderazgo técnico de equipo de desarrollo",
      "Stack React + Django para desarrollo fullstack eficiente",
    ],
    url: "https://graba2.cl",
  },
  {
    id: "da5",
    title: "DA5 - Dashboards y Visualización",
    company: "DA5",
    category: "Dashboards & Seguridad",
    year: "2022-2024",
    problem: "Calmly.cl requería dashboards de visualización de datos con seguridad reforzada y múltiples integraciones.",
    solution: "Desarrollo de dashboards para visualización de datos, implementación de proxy inverso en Node.js para seguridad, y participación en PredictiveLab.",
    technologies: ["Node.js", "React", "WordPress", "Docker"],
    decisions: [
      "Proxy inverso en Node.js para capa de seguridad adicional",
      "Dashboards interactivos para visualización de métricas",
      "Migraciones y optimización de sitios WordPress",
    ],
  },
  {
    id: "icono",
    title: "Icono Marketing - Infraestructura Cloud",
    company: "Icono Marketing",
    category: "Infraestructura Cloud",
    year: "2022-2023",
    problem: "Necesidad de migrar y configurar servidores web en la nube con stack LAMP optimizado.",
    solution: "Levantamiento de servidores web, migración a Google Cloud Platform y configuración completa de stack Apache, PHP y MariaDB en Linux Debian.",
    technologies: ["Linux", "Apache", "PHP", "MariaDB", "GCP"],
    decisions: [
      "Migración a Google Cloud Platform para escalabilidad",
      "Configuration optimizada de Apache y PHP",
      "Administración de servidores Linux Debian",
    ],
  },
]
