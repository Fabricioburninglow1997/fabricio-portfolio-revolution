import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/cv/FabricioKevin_CV.pdf';
    link.download = 'FabricioKevin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Puch Line
          </h1>
          <p className="text-xl text-muted-foreground">
            Agencia de Marketing Digital & Diseño Creativo
          </p>
          <p className="text-lg text-muted-foreground">
            Transformamos tu visión en resultados digitales extraordinarios
          </p>
          <div className="flex gap-4">
            <Button onClick={onContactClick}>Contáctanos</Button>
            <Button variant="outline" onClick={handleDownloadCV}>
              Descargar Brochure
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/src/assets/images/Perfil Fabricio.jpg" alt="Puch Line Logo" />
            <AvatarFallback>PL</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};