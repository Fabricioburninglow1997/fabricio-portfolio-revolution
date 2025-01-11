import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { CategorizedProjects } from "@/components/CategorizedProjects";
import { InstagramGrid } from "@/components/InstagramGrid";
import { StaffMembers } from "@/components/StaffMembers";
import { Project } from "@/types/project";
import { Comments } from "@/components/Comments";
import { LoginDialog } from "@/components/LoginDialog";

const Index = () => {
  const { toast } = useToast();

  const handleContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/cv/FabricioKevin_CV.pdf';
    link.download = 'FabricioKevin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

  const projects: Project[] = [
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
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Puch Line
            </h1>
            <p className="text-xl text-muted-foreground">
              Agencia de Marketing Digital & Diseño Creativo
            </p>
            <p className="text-lg text-muted-foreground">
              Transformamos tu visión en resultados digitales extraordinarios
            </p>
            <div className="flex gap-4">
              <Button onClick={handleContact}>Contáctanos</Button>
              <Button variant="outline" onClick={handleDownloadCV}>Descargar Brochure</Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="w-48 h-48">
              <AvatarImage src="/src/assets/images/Perfil Fabricio.jpg" alt="Puch Line Logo" />
              <AvatarFallback>PL</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
          <InstagramGrid items={designTriads} />
        </div>
      </section>

      {/* Projects Section */}
      <CategorizedProjects projects={projects} />

      {/* Staff Members Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
          <StaffMembers />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Contáctanos</CardTitle>
              <CardDescription>
                Hagamos crecer tu negocio juntos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleContact();
              }} className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full p-2 rounded-md border"
                />
                <textarea
                  placeholder="Tu mensaje"
                  className="w-full p-2 rounded-md border h-32"
                />
                <Button type="submit">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonios de Clientes</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-transparent to-muted pointer-events-none z-10 md:block hidden" />
            <ScrollArea className="w-full rounded-lg pb-6">
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 px-4">
                {reviews.map((review) => (
                  <Card 
                    key={review.id} 
                    className="w-full md:w-[350px] md:shrink-0 group hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:rotate-1"
                  >
                    <CardContent className="p-6">
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-30">"</div>
                        <p className="text-muted-foreground mb-6 pt-4 italic">
                          {review.comment}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-4 border-t pt-4">
                        <Avatar className="w-12 h-12 border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <div className="space-y-2">
                <p>Email: fabricioburning22@gmail.com</p>
                <p>Ubicación: San Francisco, CA</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Redes Sociales</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-primary">LinkedIn</a>
                <a href="#" className="block hover:text-primary">Instagram</a>
                <a href="#" className="block hover:text-primary">Behance</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Servicios</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-primary">Marketing Digital</a>
                <a href="#" className="block hover:text-primary">Diseño Gráfico</a>
                <a href="#" className="block hover:text-primary">Desarrollo Web</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Puch Line. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
