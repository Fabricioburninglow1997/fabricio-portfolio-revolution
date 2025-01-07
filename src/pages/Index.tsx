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
              Professional Portfolio
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

      {/* Experience Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Senior Developer</CardTitle>
                <CardDescription>2020 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Leading development teams and architecting solutions.</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Full Stack Developer</CardTitle>
                <CardDescription>2018 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Building web applications and managing databases.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "TypeScript",
              "Python",
              "SQL",
              "AWS",
              "Docker",
              "Git",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-lg p-2">
                {skill}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </section>

      {/* Projects Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="card-hover">
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>
                    A brief description of the project and its impact.
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              I'm always open to new opportunities and collaborations.
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
      </section>
    </div>
  );
};

export default Index;