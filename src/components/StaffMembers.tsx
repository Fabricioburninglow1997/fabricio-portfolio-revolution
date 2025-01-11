import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Director Creativo",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    description: "Líder visionario con más de 10 años de experiencia en dirección creativa y estrategia de marca."
  },
  {
    id: 2,
    name: "María González",
    role: "Diseñadora",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    description: "Especialista en diseño gráfico y UI/UX con un enfoque en experiencias digitales innovadoras."
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    role: "Filmmaker",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    description: "Narrador visual experto en producción audiovisual y storytelling cinematográfico."
  },
  {
    id: 4,
    name: "Laura Pérez",
    role: "Trafficker",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    description: "Estratega digital especializada en optimización de campañas y análisis de datos."
  }
];

export const StaffMembers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {staffMembers.map((member) => (
        <Card 
          key={member.id} 
          className="group hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
        >
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="w-32 h-32 group-hover:scale-105 transition-transform duration-300">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl font-bold mb-1">{member.name}</CardTitle>
            <p className="text-muted-foreground font-medium">{member.role}</p>
          </CardHeader>
          <CardContent>
            <p className="text-center text-sm text-muted-foreground">{member.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};