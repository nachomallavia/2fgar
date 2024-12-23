export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "El Futuro de la Arquitectura Sostenible",
    excerpt: "Explorando enfoques innovadores para el diseño de edificios ecológicos.",
    content: `La arquitectura sostenible es más que una tendencia; es un cambio fundamental en cómo abordamos el diseño y la construcción de edificios. A medida que enfrentamos crecientes desafíos ambientales, los arquitectos y diseñadores están a la vanguardia del desarrollo de soluciones que minimizan el impacto ambiental mientras maximizan el confort y la funcionalidad.

    La integración de sistemas de energía renovable se ha convertido en una piedra angular de la arquitectura sostenible. Desde paneles solares y turbinas eólicas hasta sistemas de calefacción geotérmica, los edificios se están diseñando no solo como refugios, sino como ecosistemas autosuficientes que generan su propia energía.`,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
    date: "2024-01-15",
    author: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Planificación Urbana en la Era Digital",
    excerpt: "Cómo la tecnología está remodelando nuestras ciudades y comunidades.",
    content: `La revolución digital está transformando la planificación urbana, aportando nuevas herramientas y metodologías que están remodelando cómo diseñamos y gestionamos nuestras ciudades. Desde la inteligencia artificial hasta el análisis de big data, la tecnología está proporcionando perspectivas sin precedentes sobre la dinámica urbana.`,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
    date: "2024-01-10",
    author: "Michael Chen"
  },
  {
    id: 3,
    title: "Diseño Biofílico: Trayendo la Naturaleza al Interior",
    excerpt: "Creando espacios que conectan a las personas con la naturaleza.",
    content: `El diseño biofílico está revolucionando la arquitectura interior al incorporar elementos y patrones naturales en entornos construidos. Este enfoque reconoce nuestra conexión innata con la naturaleza y busca fortalecerla a través de decisiones de diseño reflexivas.`,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80",
    date: "2024-01-05",
    author: "Emma Williams"
  }
];