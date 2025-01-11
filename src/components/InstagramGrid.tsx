import { Card, CardContent } from "@/components/ui/card";

interface GridItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface InstagramGridProps {
  items: GridItem[];
}

export const InstagramGrid = ({ items }: InstagramGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden card-hover">
          <CardContent className="p-0 relative group">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};