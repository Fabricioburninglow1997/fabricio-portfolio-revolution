import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card className="card-hover cursor-pointer" onClick={onClick}>
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
  );
};