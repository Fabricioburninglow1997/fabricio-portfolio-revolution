import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        'service_h2zdgr4',
        'template_0rqo64a',
        form as unknown as HTMLFormElement,
        '0Sh1oDgRj8WerGL-y'
      );
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact-section" className="py-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Contáctanos</CardTitle>
            <CardDescription>
              Hagamos crecer tu negocio juntos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input
                type="email"
                name="user_email"
                placeholder="Tu email"
                className="w-full p-2 rounded-md border"
                required
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                className="w-full p-2 rounded-md border h-32"
                required
              />
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};