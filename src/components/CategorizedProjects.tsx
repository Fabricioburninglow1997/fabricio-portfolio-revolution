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

  const marketingProjects = projects.filter(p => 
    p.tools?.some(tool => 
      ['Google Analytics', 'SEO', 'Social Media', 'Email Marketing', 'PPC'].includes(tool)
    )
  );

  return (
    <section className="container mx-auto px-4 py-16 dark:bg-slate-900/50 rounded-lg backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-8 dark:text-white">Featured Projects</h2>
      <Tabs defaultValue="design" className="w-full">
        <TabsList className="grid w-full grid-cols-5 dark:bg-slate-800/70">
          <TabsTrigger value="design" className="dark:data-[state=active]:bg-slate-700">Design</TabsTrigger>
          <TabsTrigger value="motion" className="dark:data-[state=active]:bg-slate-700">Motion</TabsTrigger>
          <TabsTrigger value="vfx" className="dark:data-[state=active]:bg-slate-700">VFX</TabsTrigger>
          <TabsTrigger value="dev" className="dark:data-[state=active]:bg-slate-700">Dev</TabsTrigger>
          <TabsTrigger value="marketing" className="dark:data-[state=active]:bg-slate-700">Marketing</TabsTrigger>
        </TabsList>
        <TabsContent value="design" className="dark:bg-slate-800/30 p-4 rounded-lg mt-4">
          <ProjectsSection projects={designProjects} />
        </TabsContent>
        <TabsContent value="motion" className="dark:bg-slate-800/30 p-4 rounded-lg mt-4">
          <ProjectsSection projects={motionProjects} />
        </TabsContent>
        <TabsContent value="vfx" className="dark:bg-slate-800/30 p-4 rounded-lg mt-4">
          <ProjectsSection projects={vfxProjects} />
        </TabsContent>
        <TabsContent value="dev" className="dark:bg-slate-800/30 p-4 rounded-lg mt-4">
          <ProjectsSection projects={devProjects} />
        </TabsContent>
        <TabsContent value="marketing" className="dark:bg-slate-800/30 p-4 rounded-lg mt-4">
          <ProjectsSection projects={marketingProjects} />
        </TabsContent>
      </Tabs>
    </section>
  );
};