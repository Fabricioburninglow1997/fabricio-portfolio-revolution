import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "./ui/use-toast";

export const LoginDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleGoogleLogin = () => {
    console.log("Google login - to be implemented");
    toast({
      title: "Próximamente",
      description: "La autenticación con Google estará disponible pronto.",
    });
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email login - to be implemented");
    toast({
      title: "Próximamente",
      description: "El inicio de sesión estará disponible pronto.",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register - to be implemented");
    toast({
      title: "Próximamente",
      description: "El registro estará disponible pronto.",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Acceder</DialogTitle>
          <DialogDescription>
            Inicia sesión o crea una cuenta para dejar un comentario
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Crear Cuenta</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleLogin}
            >
              Continuar con Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O continúa con
                </span>
              </div>
            </div>
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Contraseña" required />
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="register" className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleLogin}
            >
              Registrarse con Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O regístrate con
                </span>
              </div>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <Input type="text" placeholder="Nombre completo" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Contraseña" required />
              <Input type="password" placeholder="Confirmar contraseña" required />
              <Button type="submit" className="w-full">
                Crear Cuenta
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};