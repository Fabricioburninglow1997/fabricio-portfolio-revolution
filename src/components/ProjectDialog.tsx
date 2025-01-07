import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDialog = ({ project, isOpen, onClose }: ProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            {project.detailedDescription && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">About this project</h3>
                <p className="text-muted-foreground">{project.detailedDescription}</p>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {project.collaborators && project.collaborators.length > 0 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Collaborators</h3>
                <div className="space-y-2">
                  {project.collaborators.map((collaborator) => (
                    <div key={collaborator.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{collaborator.name}</p>
                        <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                      </div>
                      {collaborator.link && (
                        <a
                          href={collaborator.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};