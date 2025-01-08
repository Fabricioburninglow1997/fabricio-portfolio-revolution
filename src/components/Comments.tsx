import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import emailjs from '@emailjs/browser';

interface Comment {
  name: string;
  email: string;
  comment: string;
  date: Date;
}

export const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", comment: "" });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_email: "fabricioburning22@gmail.com",
          from_name: newComment.name,
          from_email: newComment.email,
          message: newComment.comment,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setComments([...comments, { ...newComment, date: new Date() }]);
      setNewComment({ name: "", email: "", comment: "" });
      
      toast({
        title: "¡Comentario enviado!",
        description: "Gracias por tu feedback.",
      });
    } catch (error) {
      console.error("Error sending comment:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el comentario. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Tu nombre"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Tu email"
          value={newComment.email}
          onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
          required
        />
        <Textarea
          placeholder="Deja un comentario..."
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          required
        />
        <Button type="submit">Enviar Comentario</Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div key={index} className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold">{comment.name}</h4>
              <span className="text-sm text-muted-foreground">
                {comment.date.toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};