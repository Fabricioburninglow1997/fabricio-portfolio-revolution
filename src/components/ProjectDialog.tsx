import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/types/project";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Comments } from "./Comments";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDialog = ({ project, isOpen, onClose }: ProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="space-y-4">
          <p className="text-muted-foreground">{project.detailedDescription}</p>
          
          {project.tools && (
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          )}

          {project.isTeamProject && project.collaborators && (
            <div className="space-y-2">
              <h4 className="font-semibold">Collaborators:</h4>
              <div className="space-y-1">
                {project.collaborators.map((collaborator) => (
                  <div key={collaborator.name} className="flex items-center gap-2">
                    <span className="font-medium">{collaborator.name}</span>
                    <span className="text-sm text-muted-foreground">- {collaborator.role}</span>
                    {collaborator.link && (
                      <a
                        href={collaborator.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Portfolio
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6">
            <h4 className="font-semibold mb-4">Comments</h4>
            <Comments />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};