// Componente Hijo "Tonto" - Solo muestra el grid 1+4
import Image from "next/image";
import { PropertyImage } from "./property-image-gallery";

interface GalleryPreviewGridProps {
  images: PropertyImage[];
  totalImages: number;
  onImageClick: (index: number) => void;
}

export default function GalleryPreviewGrid({
  images,
  totalImages,
  onImageClick,
}: GalleryPreviewGridProps) {
  const remainingCount = Math.max(0, totalImages - 5);

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px] w-full">
      {/* Imagen principal (ocupa 2x2) */}
      <div
        className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden "
        onClick={() => onImageClick(0)}
      >
        <Image
          src={images[0]?.url || "/placeholder.jpg"}
          alt={images[0]?.description || "Main image"}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Imágenes pequeñas */}
      {images.slice(1, 5).map((img, index) => (
        <div
          key={img.id}
          className="relative cursor-pointer overflow-hidden "
          onClick={() => onImageClick(index + 1)}
        >
          <Image
            src={img.url}
            alt={img.description}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay en la última imagen con el contador */}
          {index === 3 && remainingCount > 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
              <span className="text-white text-xl font-bold">
                +{remainingCount}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
