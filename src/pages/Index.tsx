import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

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

      {/* Skills Section - Updated with categories */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="card-hover">
              <CardHeader>
                <CardTitle>Project {project}</CardTitle>
                <CardDescription>
                  Creative development & motion design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={`/src/assets/images/project${project}.jpg`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
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