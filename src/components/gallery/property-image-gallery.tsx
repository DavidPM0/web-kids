// Componente Padre "Inteligente" - El cerebro de la operación
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import GalleryPreviewGrid from "./gallery-preview-grid";
import GalleryModalContent from "./gallery-modal-content";

export interface PropertyImage {
  id: string;
  url: string;
  category: "room" | "bathroom" | "exterior" | "all";
  description: string;
}

const defaultImages: PropertyImage[] = [
  {
    id: "1",
    url: "/venue-detail-image/image1.png",
    category: "room",
    description: "Spacious living room",
  },
  {
    id: "2",
    url: "/venue-detail-image/image2.png",
    category: "bathroom",
    description: "Modern bathroom",
  },
  {
    id: "3",
    url: "/venue-detail-image/image3.png",
    category: "exterior",
    description: "Beautiful exterior",
  },
  {
    id: "4",
    url: "/venue-detail-image/image4.png",
    category: "room",
    description: "Cozy bedroom",
  },
  {
    id: "5",
    url: "/venue-detail-image/image5.png",
    category: "bathroom",
    description: "Luxurious bathroom",
  },
  {
    id: "6",
    url: "/venue-detail-image/image6.png",
    category: "exterior",
    description: "Stunning exterior",
  },
];

interface PropertyImageGalleryProps {
  images?: PropertyImage[];
}

export default function PropertyImageGallery({
  images = defaultImages,
}: PropertyImageGalleryProps) {
  // Estados centralizados - El cerebro
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"grid" | "lightbox">("grid");
  const [currentFilter, setCurrentFilter] = useState<
    "room" | "bathroom" | "exterior" | "all"
  >("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // Funciones que se pasan a los componentes hijos
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setCurrentView("lightbox");
    setIsModalOpen(true);
  };

  const handleFilterChange = (
    filter: "room" | "bathroom" | "exterior" | "all"
  ) => {
    setCurrentFilter(filter);
    setCurrentView("grid");
  };

  const handleGridImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setCurrentView("lightbox");
  };

  const handleBackToGrid = () => {
    setCurrentView("grid");
  };

  return (
    <div className="w-full">
      {/* Componente que muestra el grid 1+4 en la página */}
      <GalleryPreviewGrid
        images={images.slice(0, 5)}
        totalImages={images.length}
        onImageClick={handleImageClick}
      />

      {/* Modal que contiene toda la lógica interna */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] h-[90vh] p-0">
          <DialogTitle className="sr-only">
            {currentView === "grid" ? "Photo Gallery" : "Photo Viewer"}
          </DialogTitle>
          <GalleryModalContent
            images={images}
            currentView={currentView}
            currentFilter={currentFilter}
            selectedImageIndex={selectedImageIndex}
            onFilterChange={handleFilterChange}
            onGridImageClick={handleGridImageClick}
            onBackToGrid={handleBackToGrid}
            onViewChange={setCurrentView}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
