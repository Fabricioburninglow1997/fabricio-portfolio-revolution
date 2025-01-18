import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const brands = [
  {
    name: "Brand 1",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "Brand 2",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "Brand 3",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "Brand 4",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "Brand 5",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
];

export const BrandBadges = () => {
  return (
    <section className="py-16 bg-muted/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Marcas que Confían en Nosotros
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {brands.map((brand) => (
            <Avatar
              key={brand.name}
              className="w-24 h-24 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              <AvatarImage src={brand.logo} alt={brand.name} />
              <AvatarFallback>{brand.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </section>
  );
};