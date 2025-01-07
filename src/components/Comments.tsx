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
      // Send email notification
      await emailjs.send(
        "service_id", // You'll need to replace with your EmailJS service ID
        "template_id", // You'll need to replace with your EmailJS template ID
        {
          to_email: "fabricioburning22@gmail.com",
          from_name: newComment.name,
          from_email: newComment.email,
          message: newComment.comment,
        },
        "your_public_key" // You'll need to replace with your EmailJS public key
      );

      // Add comment to local state
      setComments([...comments, { ...newComment, date: new Date() }]);
      setNewComment({ name: "", email: "", comment: "" });
      
      toast({
        title: "Comment submitted!",
        description: "Thank you for your feedback.",
      });
    } catch (error) {
      console.error("Error sending comment:", error);
      toast({
        title: "Error",
        description: "Failed to submit comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Your name"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          required
        />
        <Input
          type="email"
          placeholder="Your email"
          value={newComment.email}
          onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
          required
        />
        <Textarea
          placeholder="Leave a comment..."
          value={newComment.comment}
          onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
          required
        />
        <Button type="submit">Submit Comment</Button>
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