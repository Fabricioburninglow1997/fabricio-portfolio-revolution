export const FooterSection = () => {
  return (
    <footer className="bg-background border-t dark:bg-slate-900/50 dark:border-slate-800 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 dark:text-white">Contacto</h3>
            <div className="space-y-2 dark:text-slate-300">
              <p>Email: fabricioburning22@gmail.com</p>
              <p>Ubicación: San Francisco, CA</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 dark:text-white">Redes Sociales</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="block hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="block hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Behance</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 dark:text-white">Servicios</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Marketing Digital</a>
              <a href="#" className="block hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Diseño Gráfico</a>
              <a href="#" className="block hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors">Desarrollo Web</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t dark:border-slate-800 text-center text-muted-foreground dark:text-slate-400">
          <p>&copy; 2024 Puch Line. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};