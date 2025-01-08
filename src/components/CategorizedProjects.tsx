import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsSection } from "./ProjectsSection";
import { Project } from "@/types/project";

interface CategorizedProjectsProps {
  projects: Project[];
}

export const CategorizedProjects = ({ projects }: CategorizedProjectsProps) => {
  const designProjects = projects.filter(p => 
    p.tools?.some(tool => 
      ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign'].includes(tool)
    )
  );

  const motionProjects = projects.filter(p => 
    p.tools?.some(tool => 
      ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Animation'].includes(tool)
    )
  );

  const vfxProjects = projects.filter(p => 
    p.tools?.some(tool => 
      ['Nuke', 'Houdini', 'Maya', 'VFX'].includes(tool)
    )
  );

  const devProjects = projects.filter(p => 
    p.tools?.some(tool => 
      ['React', 'TypeScript', 'Node.js', 'Three.js', 'WebGL'].includes(tool)
    )
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <Tabs defaultValue="design" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="motion">Motion</TabsTrigger>
          <TabsTrigger value="vfx">VFX</TabsTrigger>
          <TabsTrigger value="dev">Dev</TabsTrigger>
        </TabsList>
        <TabsContent value="design">
          <ProjectsSection projects={designProjects} />
        </TabsContent>
        <TabsContent value="motion">
          <ProjectsSection projects={motionProjects} />
        </TabsContent>
        <TabsContent value="vfx">
          <ProjectsSection projects={vfxProjects} />
        </TabsContent>
        <TabsContent value="dev">
          <ProjectsSection projects={devProjects} />
        </TabsContent>
      </Tabs>
    </section>
  );
};