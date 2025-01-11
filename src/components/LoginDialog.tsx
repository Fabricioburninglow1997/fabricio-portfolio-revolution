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

export const LoginDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Google login - to be implemented");
    // TODO: Implement Google login
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email login - to be implemented");
    // TODO: Implement email login
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
          <DialogDescription>
            Inicia sesión para dejar un comentario
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
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
        </div>
      </DialogContent>
    </Dialog>
  );
};