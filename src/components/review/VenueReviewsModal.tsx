// Componente Hijo "Inteligente-Intermedio" - Contenido del modal
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VenueReview } from "./VenueReviews";
import ReviewCard from "./ReviewCard";
import { Star } from "lucide-react";

interface VenueReviewsModalProps {
  reviews: VenueReview[];
  filters: { sortBy: string; stars: string };
  onFilterChange: (type: "sortBy" | "stars", value: string) => void;
  overallRating: string;
  reviewCount: number;
}

export default function VenueReviewsModal({
  reviews,
  filters,
  onFilterChange,
  overallRating,
  reviewCount,
}: VenueReviewsModalProps) {
  return (
    <div className="flex flex-col h-full">
      {/* --- HEADER FIJO --- */}
      <div className="p-6 border-b bg-white">
        <h2 className="text-2xl font-bold mb-2 text-[#1C3658]">
          Opiniones ({reviewCount})
        </h2>
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-6 h-6 fill-[#F8BD36] text-[#F8BD36]" />
          <span className="text-2xl font-bold text-[#1C3658]">
            {overallRating}
          </span>
          <span className="text-lg text-gray-600">Excepcional</span>
        </div>

        {/* --- FILTROS --- */}
        <div className="flex gap-4">
          <Select
            value={filters.sortBy}
            onValueChange={(val) => onFilterChange("sortBy", val)}
          >
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Más recientes</SelectItem>
              <SelectItem value="highest">Mejor calificación</SelectItem>
              <SelectItem value="lowest">Peor calificación</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.stars}
            onValueChange={(val) => onFilterChange("stars", val)}
          >
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Calificación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las estrellas</SelectItem>
              <SelectItem value="5">5 estrellas</SelectItem>
              <SelectItem value="4">4 estrellas</SelectItem>
              <SelectItem value="3">3 estrellas</SelectItem>
              <SelectItem value="2">2 estrellas</SelectItem>
              <SelectItem value="1">1 estrella</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* --- LISTA CON SCROLL --- */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.id}
                className="pb-6 border-b border-gray-200 last:border-0"
              >
                <ReviewCard review={review} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No hay opiniones que coincidan con tus filtros.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
