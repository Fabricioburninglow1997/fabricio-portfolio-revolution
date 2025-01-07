import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Project } from "@/types/project";

const Index = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Thanks for reaching out!",
      description: "I'll get back to you soon.",
    });
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Interactive Web Experience",
      description: "Dynamic web application with 3D animations",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Three.js", "React", "GSAP", "WebGL"],
      isTeamProject: false,
      detailedDescription: "An immersive web experience showcasing interactive 3D animations and dynamic content. Built with modern web technologies to deliver smooth performance and engaging user interactions.",
    },
    {
      id: 2,
      title: "Motion Graphics Showcase",
      description: "Animated brand stories and visual effects",
      images: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
      ],
      tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Sarah Chen",
          role: "Art Director",
          link: "https://portfolio.sarahchen.com"
        },
        {
          name: "Mike Ross",
          role: "Sound Designer",
          link: "https://mikeross.audio"
        }
      ],
      detailedDescription: "A collection of motion graphics work for various brands, featuring custom animations and visual effects. Collaborated with a talented team to deliver high-impact visual storytelling.",
    },
    {
      id: 3,
      title: "VFX Compositing Project",
      description: "High-end visual effects for film",
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Nuke", "Houdini", "Maya"],
      isTeamProject: true,
      collaborators: [
        {
          name: "John Doe",
          role: "VFX Supervisor",
          link: "https://johndoe.com"
        }
      ],
      detailedDescription: "Worked on high-end visual effects for a feature film, utilizing industry-standard software to create stunning visuals.",
    },
    {
      id: 4,
      title: "Creative Branding",
      description: "Innovative branding solutions for startups",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Photoshop", "Illustrator"],
      isTeamProject: false,
      detailedDescription: "Developed branding strategies and visual identities for various startups, focusing on unique and memorable designs.",
    },
    {
      id: 5,
      title: "E-commerce Website",
      description: "User-friendly online shopping experience",
      images: [
        "https://images.unsplash.com/photo-1517242022020-1a1e1e1e1e1e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["React", "Node.js", "MongoDB"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Jane Smith",
          role: "Frontend Developer",
          link: "https://janesmith.dev"
        }
      ],
      detailedDescription: "Created a fully functional e-commerce website with a focus on user experience and seamless navigation.",
    },
    {
      id: 6,
      title: "Mobile App Design",
      description: "Intuitive mobile application interface",
      images: [
        "https://images.unsplash.com/photo-1519389950473-47c0d8b3c1e0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Figma", "Adobe XD"],
      isTeamProject: false,
      detailedDescription: "Designed a mobile application interface that prioritizes user engagement and ease of use.",
    },
    {
      id: 7,
      title: "Social Media Campaign",
      description: "Engaging content for social media platforms",
      images: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Canva", "Photoshop"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Alice Johnson",
          role: "Content Strategist",
          link: "https://alicejohnson.com"
        }
      ],
      detailedDescription: "Developed a comprehensive social media campaign that increased brand awareness and engagement.",
    },
    {
      id: 8,
      title: "Landing Page Design",
      description: "High-converting landing page for products",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Webflow", "HTML", "CSS"],
      isTeamProject: false,
      detailedDescription: "Designed a landing page optimized for conversions, utilizing best practices in UI/UX design.",
    },
    {
      id: 9,
      title: "Corporate Identity",
      description: "Complete branding package for businesses",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Illustrator", "InDesign"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Bob Brown",
          role: "Graphic Designer",
          link: "https://bobbrown.com"
        }
      ],
      detailedDescription: "Created a comprehensive corporate identity package, including logo design, business cards, and stationery.",
    },
    {
      id: 10,
      title: "Event Promotion",
      description: "Creative promotional materials for events",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Photoshop", "Illustrator"],
      isTeamProject: false,
      detailedDescription: "Designed promotional materials for various events, focusing on eye-catching visuals and effective messaging.",
    },
    {
      id: 11,
      title: "Product Photography",
      description: "Stunning visuals for product marketing",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Camera", "Photoshop"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Chris Green",
          role: "Photographer",
          link: "https://chrisgreen.com"
        }
      ],
      detailedDescription: "Captured high-quality product images for marketing campaigns, enhancing brand visibility.",
    },
    {
      id: 12,
      title: "UI/UX Research",
      description: "User research and testing for better design",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["UserTesting", "Figma"],
      isTeamProject: false,
      detailedDescription: "Conducted user research and testing to inform design decisions and improve user experience.",
    },
    {
      id: 13,
      title: "Web Application Development",
      description: "Full-stack development for web applications",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["React", "Node.js", "Express"],
      isTeamProject: true,
      collaborators: [
        {
          name: "David White",
          role: "Backend Developer",
          link: "https://davidwhite.com"
        }
      ],
      detailedDescription: "Developed a full-stack web application, focusing on performance and scalability.",
    },
    {
      id: 14,
      title: "Digital Marketing Strategy",
      description: "Comprehensive marketing strategies for brands",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Google Analytics", "SEO"],
      isTeamProject: false,
      detailedDescription: "Created and implemented digital marketing strategies that increased online presence and engagement.",
    },
    {
      id: 15,
      title: "Interactive Prototyping",
      description: "Creating interactive prototypes for testing",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Figma", "InVision"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Emily Davis",
          role: "UX Designer",
          link: "https://emilydavis.com"
        }
      ],
      detailedDescription: "Developed interactive prototypes to test user flows and gather feedback for design improvements.",
    },
    {
      id: 16,
      title: "Content Creation",
      description: "High-quality content for various platforms",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["WordPress", "SEO"],
      isTeamProject: false,
      detailedDescription: "Created engaging content for websites and social media, focusing on audience engagement and SEO.",
    },
    {
      id: 17,
      title: "SEO Optimization",
      description: "Improving website visibility on search engines",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Google Analytics", "SEMrush"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Laura Black",
          role: "SEO Specialist",
          link: "https://laurablack.com"
        }
      ],
      detailedDescription: "Implemented SEO strategies that improved website rankings and increased organic traffic.",
    },
    {
      id: 18,
      title: "Email Marketing Campaign",
      description: "Effective email marketing strategies",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Mailchimp", "Campaign Monitor"],
      isTeamProject: false,
      detailedDescription: "Designed and executed email marketing campaigns that increased engagement and conversions.",
    },
    {
      id: 19,
      title: "Video Production",
      description: "Professional video production services",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Premiere Pro", "Final Cut Pro"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Mark Lee",
          role: "Videographer",
          link: "https://marklee.com"
        }
      ],
      detailedDescription: "Produced high-quality videos for various clients, focusing on storytelling and visual impact.",
    },
    {
      id: 20,
      title: "Brand Strategy",
      description: "Developing brand strategies for growth",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["Branding", "Market Research"],
      isTeamProject: false,
      detailedDescription: "Developed brand strategies that align with business goals and resonate with target audiences.",
    },
    {
      id: 21,
      title: "User Testing",
      description: "Conducting user tests for better design",
      images: [
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
      ],
      tools: ["UserTesting", "SurveyMonkey"],
      isTeamProject: true,
      collaborators: [
        {
          name: "Sophie Turner",
          role: "UX Researcher",
          link: "https://sophieturner.com"
        }
      ],
      detailedDescription: "Conducted user testing sessions to gather feedback and improve design usability.",
    },
  ];

  const skills = {
    design: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Figma",
      "UI/UX Design",
    ],
    motion: [
      "After Effects",
      "Premiere Pro",
      "Motion Graphics",
      "Animation",
      "Video Editing",
    ],
    vfx: [
      "Nuke",
      "Houdini",
      "Maya",
      "Blender",
      "Compositing",
    ],
    development: [
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Three.js",
    ]
  };

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      comment: "Fabricio's motion design work transformed our brand identity. Exceptional talent!",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Production Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      comment: "Outstanding attention to detail in VFX work. Highly recommended!",
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Art Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      comment: "Brilliant creative solutions and excellent communication throughout the project.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fabricio Kevin
            </h1>
            <p className="text-xl text-muted-foreground">
              Creative Developer & Motion Designer
            </p>
            <div className="flex gap-4">
              <Button onClick={handleContact}>Contact Me</Button>
              <Button variant="outline">Download CV</Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="w-48 h-48">
              <AvatarImage src="/src/assets/images/Perfil Fabricio.jpg" alt="Profile" />
              <AvatarFallback>FK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="card-hover">
                <CardHeader>
                  <CardTitle className="capitalize">{category}</CardTitle>
                  <CardDescription>
                    {category === 'design' ? 'Visual Design Tools' :
                     category === 'motion' ? 'Motion & Animation' :
                     category === 'vfx' ? 'Visual Effects' : 'Development'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="mr-2 mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Reviews Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Client Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Let's collaborate on your next creative project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleContact();
              }} className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-2 rounded-md border"
                />
                <textarea
                  placeholder="Your message"
                  className="w-full p-2 rounded-md border h-32"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p>Email: contact@fabriciokevin.com</p>
                <p>Location: San Francisco, CA</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Social</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-primary">LinkedIn</a>
                <a href="#" className="block hover:text-primary">Twitter</a>
                <a href="#" className="block hover:text-primary">Behance</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Latest Work</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-primary">Motion Reel 2024</a>
                <a href="#" className="block hover:text-primary">VFX Breakdown</a>
                <a href="#" className="block hover:text-primary">Design Portfolio</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 Fabricio Kevin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
