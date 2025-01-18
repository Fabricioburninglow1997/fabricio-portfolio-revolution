import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { LoginDialog } from "@/components/LoginDialog";
import { Button } from "@/components/ui/button";
import { InstagramGrid } from "@/components/InstagramGrid";
import { CategorizedProjects } from "@/components/CategorizedProjects";
import { StaffMembers } from "@/components/StaffMembers";
import { HeroSection } from "@/components/HeroSection";
import { ContactSection } from "@/components/ContactSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FooterSection } from "@/components/FooterSection";
import emailjs from '@emailjs/browser';

const Index = () => {
  useEffect(() => {
    emailjs.init("0Sh1oDgRj8WerGL-y");
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    console.log('Dark mode toggled');
  };

  const designTriads = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80",
      title: "Branding Corporativo",
      description: "Diseño de identidad visual"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
      title: "Marketing Digital",
      description: "Estrategias de redes sociales"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      title: "Diseño Web",
      description: "Sitios web responsivos"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80",
      title: "SEO",
      description: "Optimización para buscadores"
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80",
      title: "Email Marketing",
      description: "Campañas efectivas"
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80",
      title: "Publicidad Digital",
      description: "Google Ads y Meta Ads"
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80",
      title: "Contenido Digital",
      description: "Creación y estrategia"
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      title: "Analytics",
      description: "Métricas y reportes"
    },
    {
      id: 9,
      imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80",
      title: "Social Media",
      description: "Gestión de redes sociales"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Experiencia Web Interactiva",
      description: "Aplicación web dinámica con animaciones 3D",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Three.js", "React", "GSAP", "WebGL"],
      isTeamProject: false,
      detailedDescription: "Una experiencia web inmersiva que muestra animaciones 3D interactivas y contenido dinámico. Construida con tecnologías web modernas para ofrecer un rendimiento fluido e interacciones atractivas.",
    },
    {
      id: 2,
      title: "Muestra de Gráficos en Movimiento",
      description: "Historias de marca animadas y efectos visuales",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
      ],
      tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Sarah Chen",
          role: "Directora de Arte",
          link: "https://portfolio.sarahchen.com"
        },
        {
          name: "Mike Ross",
          role: "Diseñador de Sonido",
          link: "https://mikeross.audio"
        }
      ],
      detailedDescription: "Una colección de trabajos de gráficos en movimiento para varias marcas, con animaciones personalizadas y efectos visuales. Colaboré con un talentoso equipo para ofrecer narraciones visuales de alto impacto.",
    },
    {
      id: 3,
      title: "Proyecto de Composición VFX",
      description: "Efectos visuales de alta gama para cine",
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Nuke", "Houdini", "Maya"],
      isTeamProject: true,
      collaborators: [
        {
          name: "John Doe",
          role: "Supervisor de VFX",
          link: "https://johndoe.com"
        }
      ],
      detailedDescription: "Trabajé en efectos visuales de alta gama para una película de largometraje, utilizando software estándar de la industria para crear visuales impresionantes.",
    },
    {
      id: 4,
      title: "Branding Creativo",
      description: "Soluciones de branding innovadoras para startups",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Photoshop", "Illustrator"],
      isTeamProject: false,
      detailedDescription: "Desarrollé estrategias de branding e identidades visuales para varias startups, enfocándome en diseños únicos y memorables.",
    },
    {
      id: 5,
      title: "Sitio Web de Comercio Electrónico",
      description: "Experiencia de compra en línea fácil de usar",
      images: [
        "https://images.unsplash.com/photo-1517242022020-1a1e1e1e1e1e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["React", "Node.js", "MongoDB"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Jane Smith",
          role: "Desarrolladora Frontend",
          link: "https://janesmith.dev"
        }
      ],
      detailedDescription: "Creé un sitio web de comercio electrónico completamente funcional con un enfoque en la experiencia del usuario y la navegación fluida.",
    },
    {
      id: 6,
      title: "Diseño de Aplicaciones Móviles",
      description: "Interfaz intuitiva de aplicación móvil",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47c0d8b3c1e0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Figma", "Adobe XD"],
      isTeamProject: false,
      detailedDescription: "Diseñé una interfaz de aplicación móvil que prioriza el compromiso del usuario y la facilidad de uso.",
    },
    {
      id: 7,
      title: "Campaña en Redes Sociales",
      description: "Contenido atractivo para plataformas de redes sociales",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Canva", "Photoshop"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Alice Johnson",
          role: "Estratega de Contenido",
          link: "https://alicejohnson.com"
        }
      ],
      detailedDescription: "Desarrollé una campaña integral en redes sociales que aumentó la conciencia de marca y el compromiso.",
    },
    {
      id: 8,
      title: "Diseño de Página de Aterrizaje",
      description: "Página de aterrizaje de alta conversión para productos",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Webflow", "HTML", "CSS"],
      isTeamProject: false,
      detailedDescription: "Diseñé una página de aterrizaje optimizada para conversiones, utilizando las mejores prácticas en diseño UI/UX.",
    },
    {
      id: 9,
      title: "Identidad Corporativa",
      description: "Paquete completo de branding para empresas",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Illustrator", "InDesign"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Bob Brown",
          role: "Diseñador Gráfico",
          link: "https://bobbrown.com"
        }
      ],
      detailedDescription: "Creé un paquete completo de identidad corporativa, que incluye diseño de logotipos, tarjetas de presentación y papelería.",
    },
    {
      id: 10,
      title: "Promoción de Eventos",
      description: "Materiales promocionales creativos para eventos",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Photoshop", "Illustrator"],
      isTeamProject: false,
      detailedDescription: "Diseñé materiales promocionales para varios eventos, enfocándome en visuales llamativos y mensajes efectivos.",
    },
    {
      id: 11,
      title: "Fotografía de Productos",
      description: "Visuales impresionantes para marketing de productos",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Cámara", "Photoshop"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Chris Green",
          role: "Fotógrafo",
          link: "https://chrisgreen.com"
        }
      ],
      detailedDescription: "Capturé imágenes de productos de alta calidad para campañas de marketing, mejorando la visibilidad de la marca.",
    },
    {
      id: 12,
      title: "Investigación UI/UX",
      description: "Investigación y pruebas de usuarios para un mejor diseño",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["UserTesting", "Figma"],
      isTeamProject: false,
      detailedDescription: "Realicé investigaciones y pruebas de usuarios para informar decisiones de diseño y mejorar la experiencia del usuario.",
    },
    {
      id: 13,
      title: "Desarrollo de Aplicaciones Web",
      description: "Desarrollo full-stack para aplicaciones web",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["React", "Node.js", "Express"],
      isTeamProject: true,
      collaborators: [
        {
          name: "David White",
          role: "Desarrollador Backend",
          link: "https://davidwhite.com"
        }
      ],
      detailedDescription: "Desarrollé una aplicación web full-stack, enfocándome en el rendimiento y la escalabilidad.",
    },
    {
      id: 14,
      title: "Estrategia de Marketing Digital",
      description: "Estrategias de marketing integrales para marcas",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Google Analytics", "SEO"],
      isTeamProject: false,
      detailedDescription: "Creé e implementé estrategias de marketing digital que aumentaron la presencia y el compromiso en línea.",
    },
    {
      id: 15,
      title: "Prototipado Interactivo",
      description: "Creación de prototipos interactivos para pruebas",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Figma", "InVision"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Emily Davis",
          role: "Diseñadora UX",
          link: "https://emilydavis.com"
        }
      ],
      detailedDescription: "Desarrollé prototipos interactivos para probar flujos de usuarios y recopilar comentarios para mejoras de diseño.",
    },
    {
      id: 16,
      title: "Creación de Contenido",
      description: "Contenido de alta calidad para varias plataformas",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["WordPress", "SEO"],
      isTeamProject: false,
      detailedDescription: "Creé contenido atractivo para sitios web y redes sociales, enfocándome en el compromiso de la audiencia y SEO.",
    },
    {
      id: 17,
      title: "Optimización SEO",
      description: "Mejorando la visibilidad del sitio web en motores de búsqueda",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Google Analytics", "SEMrush"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Laura Black",
          role: "Especialista en SEO",
          link: "https://laurablack.com"
        }
      ],
      detailedDescription: "Implementé estrategias de SEO que mejoraron las clasificaciones del sitio web y aumentaron el tráfico orgánico.",
    },
    {
      id: 18,
      title: "Campaña de Email Marketing",
      description: "Estrategias efectivas de email marketing",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Mailchimp", "Campaign Monitor"],
      isTeamProject: false,
      detailedDescription: "Diseñé y ejecuté campañas de email marketing que aumentaron el compromiso y las conversiones.",
    },
    {
      id: 19,
      title: "Producción de Video",
      description: "Servicios de producción de video profesional",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Premiere Pro", "Final Cut Pro"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Mark Lee",
          role: "Videógrafo",
          link: "https://marklee.com"
        }
      ],
      detailedDescription: "Produje videos de alta calidad para varios clientes, enfocándome en la narración y el impacto visual.",
    },
    {
      id: 20,
      title: "Estrategia de Marca",
      description: "Desarrollando estrategias de marca para el crecimiento",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Branding", "Investigación de Mercado"],
      isTeamProject: false,
      detailedDescription: "Desarrollé estrategias de marca que se alinean con los objetivos comerciales y resuenan con las audiencias objetivo.",
    },
    {
      id: 21,
      title: "Pruebas de Usuario",
      description: "Realizando pruebas de usuario para un mejor diseño",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["UserTesting", "SurveyMonkey"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Sophie Turner",
          role: "Investigadora UX",
          link: "https://sophieturner.com"
        }
      ],
      detailedDescription: "Realicé sesiones de pruebas de usuario para recopilar comentarios y mejorar la usabilidad del diseño.",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "María González",
      role: "Directora de Marketing",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      comment: "El trabajo de Puch Line transformó completamente nuestra presencia digital. ¡Resultados increíbles!",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "CEO Startup",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      comment: "Excelente atención y profesionalismo. Superaron todas nuestras expectativas.",
    },
    {
      id: 3,
      name: "Ana Torres",
      role: "Gerente de Marca",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      comment: "Soluciones creativas brillantes y comunicación excepcional durante todo el proyecto.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Toggle 
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
          className="hover:bg-accent"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Toggle>
      </div>

      <HeroSection onContactClick={handleContactClick} />

      <CategorizedProjects projects={projects} />

      {/* Instagram Grid Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <InstagramGrid items={designTriads} />
        </div>
      </section>

      {/* Staff Members Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <StaffMembers />
        </div>
      </section>

      <BrandBadges />

      <ContactSection />

      <ReviewsSection reviews={reviews} />

      {/* Comments Button Section */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <LoginDialog>
            <Button size="lg" className="font-semibold">
              Deja un Comentario
            </Button>
          </LoginDialog>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
