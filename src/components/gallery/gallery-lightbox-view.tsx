// Componente Hijo "Tonto" - Carrusel en pantalla completa
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft } from "lucide-react";
import { PropertyImage } from "./property-image-gallery";

interface GalleryLightboxViewProps {
  images: PropertyImage[];
  selectedImageIndex: number;
  onBackToGrid: () => void;
}

export default function GalleryLightboxView({
  images,
  selectedImageIndex,
  onBackToGrid,
}: GalleryLightboxViewProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header con botón de volver */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <Button
          variant="ghost"
          onClick={onBackToGrid}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to gallery
        </Button>
        <span className="text-sm text-gray-500">
          {selectedImageIndex + 1} of {images.length}
        </span>
      </div>

      {/* Carousel - área principal con flex-1 */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={img.id}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={img.url}
                    alt={img.description}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={index === selectedImageIndex}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Footer con descripción */}
      <div className="p-4 border-t bg-white">
        <p className="text-center text-gray-600">
          {images[selectedImageIndex]?.description}
        </p>
      </div>
    </div>
  );
}
