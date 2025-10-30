// Componente Hijo "Tonto" - Tarjeta individual de reseña
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VenueReview } from "./VenueReviews";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: VenueReview;
  isSnippet?: boolean; // Para controlar si mostramos el texto completo
}

// Componente para mostrar las estrellas
const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ))}
  </div>
);

export default function ReviewCard({
  review,
  isSnippet = false,
}: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar>
          {/* Usamos la imagen por defecto */}
          <AvatarImage
            src={review.avatarUrl || "/usuario/imagen-defecto.jpg"}
          />
          <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{review.author}</p>
          <p className="text-sm text-muted-foreground">{review.date}</p>
        </div>
        <div className="ml-auto">
          <RatingStars rating={review.rating} />
        </div>
      </div>
      <p className={`text-sm ${isSnippet ? "line-clamp-3" : ""}`}>
        {review.text}
      </p>
    </div>
  );
}
