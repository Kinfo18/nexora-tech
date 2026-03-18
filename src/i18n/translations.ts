// src/i18n/translations.ts
// Archivo central de todas las traducciones del sitio

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      process: "Proceso",
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
      cta: "Solicitar asesoría",
    },
    hero: {
      badge: "+10 proyectos entregados en América Latina",
      title: "Desarrollamos software que impulsa el crecimiento de tu empresa",
      subtitle:
        "En Nexora Technologies creamos soluciones tecnológicas personalizadas para empresas que buscan escalar, automatizar procesos y mejorar su presencia digital.",
      ctaPrimary: "Solicitar asesoría gratuita",
      ctaSecondary: "Ver nuestros servicios",
      techsLabel: "Construido con tecnología de vanguardia",
    },
    about: {
      badge: "Quiénes somos",
      title: "Tecnología con propósito, resultados con impacto",
      description:
        "Nexora Technologies es una empresa especializada en el desarrollo de soluciones de software a medida para empresas en crecimiento. Nuestro equipo está compuesto por ingenieros, diseñadores y arquitectos de software enfocados en crear productos escalables, seguros y eficientes.",
      location: "Bogotá, Colombia",
      coverage: "Latinoamérica y proyectos remotos internacionales",
      differentiators: [
        "Metodología ágil con entregas semanales",
        "Código limpio, documentado y escalable",
        "Soporte post-lanzamiento incluido",
        "Equipo 100% latinoamericano",
      ],
      missionTitle: "Nuestra Misión",
      mission:
        "Impulsar la transformación digital de las empresas mediante soluciones tecnológicas innovadoras, eficientes y adaptadas a las necesidades del mercado actual.",
      visionTitle: "Nuestra Visión",
      vision:
        "Ser una empresa líder en desarrollo de software en Latinoamérica, reconocida por la calidad de nuestras soluciones y el impacto tecnológico que generamos en nuestros clientes.",
      stats: [
        { value: "10+", label: "Proyectos entregados" },
        { value: "5+", label: "Años de experiencia" },
        { value: "100%", label: "Clientes satisfechos" },
        { value: "Latam", label: "Cobertura regional" },
      ],
    },
    contact: {
      title: "¿Tienes un proyecto en mente?",
      subtitle:
        "Estamos listos para ayudarte a convertir tu idea en una solución tecnológica.",
      name: "Nombre",
      company: "Empresa",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar mensaje",
    },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
      cta: "Request consultation",
    },
    hero: {
      badge: "+10 projects delivered in Latin America",
      title: "We build software that drives your company's growth",
      subtitle:
        "At Nexora Technologies we create custom technology solutions for companies looking to scale, automate processes and enhance their digital presence.",
      ctaPrimary: "Request free consultation",
      ctaSecondary: "View our services",
      techsLabel: "Built with cutting-edge technology",
    },
    about: {
      badge: "Who we are",
      title: "Technology with purpose, results with impact",
      description:
        "Nexora Technologies specializes in developing custom software solutions for growing businesses. Our team is composed of engineers, designers and software architects focused on building scalable, secure and efficient products.",
      location: "Bogotá, Colombia",
      coverage: "Latin America and international remote projects",
      differentiators: [
        "Agile methodology with weekly deliveries",
        "Clean, documented and scalable code",
        "Post-launch support included",
        "100% Latin American team",
      ],
      missionTitle: "Our Mission",
      mission:
        "To drive the digital transformation of businesses through innovative, efficient technology solutions adapted to the needs of today's market.",
      visionTitle: "Our Vision",
      vision:
        "To be a leading software development company in Latin America, recognized for the quality of our solutions and the technological impact we generate for our clients.",
      stats: [
        { value: "10+", label: "Projects delivered" },
        { value: "5+", label: "Years of experience" },
        { value: "100%", label: "Satisfied clients" },
        { value: "Latam", label: "Regional coverage" },
      ],
    },
    contact: {
      title: "Have a project in mind?",
      subtitle: "We are ready to help you turn your idea into a technology solution.",
      name: "Name",
      company: "Company",
      email: "Email address",
      phone: "Phone",
      message: "Message",
      send: "Send message",
    },
  },
} as const;

// Tipos utilitarios para autocompletado en TypeScript
export type Lang = keyof typeof translations;
export type Translations = typeof translations;
