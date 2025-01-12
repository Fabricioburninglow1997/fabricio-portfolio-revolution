export const FooterSection = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p>Email: fabricioburning22@gmail.com</p>
              <p>Ubicación: San Francisco, CA</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Redes Sociales</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary">LinkedIn</a>
              <a href="#" className="block hover:text-primary">Instagram</a>
              <a href="#" className="block hover:text-primary">Behance</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Servicios</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary">Marketing Digital</a>
              <a href="#" className="block hover:text-primary">Diseño Gráfico</a>
              <a href="#" className="block hover:text-primary">Desarrollo Web</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 Puch Line. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};