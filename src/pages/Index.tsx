import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Thanks for reaching out!",
      description: "I'll get back to you soon.",
    });
  };

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

  const projects = [
    {
      id: 1,
      title: "Interactive Web Experience",
      description: "Dynamic web application with 3D animations",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Motion Graphics Showcase",
      description: "Animated brand stories and visual effects",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "VFX Compositing Project",
      description: "High-end visual effects for film",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      title: "Creative Branding",
      description: "Innovative branding solutions for startups",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "E-commerce Website",
      description: "User-friendly online shopping experience",
      image: "https://images.unsplash.com/photo-1517242022020-1a1e1e1e1e1e?auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Mobile App Design",
      description: "Intuitive mobile application interface",
      image: "https://images.unsplash.com/photo-1519389950473-47c0d8b3c1e0?auto=format&fit=crop&q=80",
    },
    {
      id: 7,
      title: "Social Media Campaign",
      description: "Engaging content for social media platforms",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
    },
    {
      id: 8,
      title: "Landing Page Design",
      description: "High-converting landing page for products",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 9,
      title: "Corporate Identity",
      description: "Complete branding package for businesses",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 10,
      title: "Event Promotion",
      description: "Creative promotional materials for events",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 11,
      title: "Product Photography",
      description: "Stunning visuals for product marketing",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 12,
      title: "UI/UX Research",
      description: "User research and testing for better design",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 13,
      title: "Web Application Development",
      description: "Full-stack development for web applications",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 14,
      title: "Digital Marketing Strategy",
      description: "Comprehensive marketing strategies for brands",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 15,
      title: "Interactive Prototyping",
      description: "Creating interactive prototypes for testing",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 16,
      title: "Content Creation",
      description: "High-quality content for various platforms",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 17,
      title: "SEO Optimization",
      description: "Improving website visibility on search engines",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 18,
      title: "Email Marketing Campaign",
      description: "Effective email marketing strategies",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 19,
      title: "Video Production",
      description: "Professional video production services",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 20,
      title: "Brand Strategy",
      description: "Developing brand strategies for growth",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
    {
      id: 21,
      title: "User Testing",
      description: "Conducting user tests for better design",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    },
  ];

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
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover mx-2">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

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
