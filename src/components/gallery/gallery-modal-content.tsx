// Componente Hijo "Inteligente-Intermedio" - Lógica dentro del modal
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PropertyImage } from "./property-image-gallery";
import GalleryLightboxView from "./gallery-lightbox-view";

interface GalleryModalContentProps {
  images: PropertyImage[];
  currentView: "grid" | "lightbox";
  currentFilter: "room" | "bathroom" | "exterior" | "all";
  selectedImageIndex: number;
  onFilterChange: (filter: "room" | "bathroom" | "exterior" | "all") => void;
  onGridImageClick: (index: number) => void;
  onBackToGrid: () => void;
  onViewChange: (view: "grid" | "lightbox") => void;
  onPrevImage: () => void;
  onNextImage: () => void;
}

export default function GalleryModalContent({
  images,
  currentView,
  currentFilter,
  selectedImageIndex,
  onFilterChange,
  onGridImageClick,
  onBackToGrid,
  onViewChange,
  onPrevImage,
  onNextImage,
}: GalleryModalContentProps) {
  // Filtrar imágenes según la categoría seleccionada
  const filteredImages = images.filter(
    (img) => currentFilter === "all" || img.category === currentFilter
  );

  // Vista de grid con filtros
  const GridView = () => {
    const categories = [
      { key: "all" as const, label: "All" },
      { key: "room" as const, label: "Rooms" },
      { key: "bathroom" as const, label: "Bathrooms" },
      { key: "exterior" as const, label: "Exterior" },
    ];

    return (
      <div className="flex flex-col h-full">
        {/* Filtros - Header fijo */}
        <div className="flex gap-2 p-6 pb-4 border-b bg-white">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={currentFilter === category.key ? "default" : "outline"}
              onClick={() => onFilterChange(category.key)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Grid de imágenes - Área con scroll */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <div
                key={img.id}
                className="aspect-square relative cursor-pointer overflow-hidden rounded-lg group bg-gray-100"
                onClick={() => onGridImageClick(index)}
              >
                <Image
                  src={img.url}
                  alt={img.description}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Renderizado condicional según la vista actual
  return (
    <>
      {currentView === "grid" ? (
        <GridView />
      ) : (
        <GalleryLightboxView
          images={filteredImages}
          selectedImageIndex={selectedImageIndex}
          onBackToGrid={onBackToGrid}
          onPrevImage={onPrevImage}
          onNextImage={onNextImage}
        />
      )}
    </>
  );
}
