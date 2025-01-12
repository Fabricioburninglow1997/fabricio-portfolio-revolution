import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonios de Clientes</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-muted via-transparent to-muted pointer-events-none z-10 md:block hidden" />
          <ScrollArea className="w-full rounded-lg pb-6">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 px-4">
              {reviews.map((review) => (
                <Card 
                  key={review.id} 
                  className="w-full md:w-[350px] md:shrink-0 group hover:shadow-xl transition-all duration-500 ease-out hover:scale-105 hover:rotate-1"
                >
                  <CardContent className="p-6">
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-30">"</div>
                      <p className="text-muted-foreground mb-6 pt-4 italic">
                        {review.comment}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 border-t pt-4">
                      <Avatar className="w-12 h-12 border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};