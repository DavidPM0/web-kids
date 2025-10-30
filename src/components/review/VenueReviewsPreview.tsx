// Componente Hijo "Tonto" - Preview en la página principal
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "./ReviewCard";
import { VenueReview } from "./VenueReviews";
import { Star } from "lucide-react";

interface VenueReviewsPreviewProps {
  rating: string;
  count: number;
  reviews: VenueReview[];
  onOpenModal: () => void;
}

export default function VenueReviewsPreview({
  rating,
  count,
  reviews,
  onOpenModal,
}: VenueReviewsPreviewProps) {
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader>
        <div className="flex items-center gap-4">
          <CardTitle className="text-3xl font-bold text-[#1C3658]">
            Reviews
          </CardTitle>
          <div className="flex items-center gap-2">
            {/* <Star className="w-6 h-6 fill-[#F8BD36] text-[#F8BD36]" />
            <span className="text-2xl font-bold text-[#1C3658]">{rating}</span> */}
            <span className="text-lg text-gray-600">({count} opiniones)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Carousel con todas las reseñas */}
        <div className="mb-6">
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="p-4 border border-gray-200 h-[200px] flex flex-col">
                    <ReviewCard review={review} isSnippet={true} />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        <Button
          variant="outline"
          onClick={onOpenModal}
          className="border-2 border-[#1C3658] text-[#1C3658] hover:bg-[#1C3658] hover:text-white transition-colors"
        >
          Ver todas las {count} opiniones
        </Button>
      </CardContent>
    </Card>
  );
}
