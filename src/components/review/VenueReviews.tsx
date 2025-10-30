// Componente Padre "Inteligente" - El cerebro de las opiniones
"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import VenueReviewsPreview from "./VenueReviewsPreview";
import VenueReviewsModal from "./VenueReviewsModal";

// Definimos el tipo de una reseña
export interface VenueReview {
  id: string;
  author: string;
  date: string;
  rating: number; // de 1 a 5
  text: string;
  avatarUrl?: string;
}

// Datos de ejemplo
const defaultReviews: VenueReview[] = [
  {
    id: "1",
    author: "Francisco S.",
    date: "Oct 28, 2025",
    rating: 5,
    text: "¡Increíble lugar para la fiesta de mi hijo! Súper recomendado. El personal fue muy atento y los niños se divirtieron muchísimo.",
  },
  {
    id: "2",
    author: "Ana L.",
    date: "Oct 25, 2025",
    rating: 4,
    text: "Muy bueno, aunque un poco ruidoso. Los niños se divirtieron mucho con todas las actividades disponibles.",
  },
  {
    id: "3",
    author: "Carlos G.",
    date: "Oct 22, 2025",
    rating: 5,
    text: "El personal fue muy atento y los paquetes valen la pena. Todo estuvo perfecto para la celebración.",
  },
  {
    id: "4",
    author: "María R.",
    date: "Oct 20, 2025",
    rating: 5,
    text: "Excelente servicio y atención. Los niños quedaron encantados con todas las atracciones.",
  },
  {
    id: "5",
    author: "Jorge M.",
    date: "Oct 18, 2025",
    rating: 4,
    text: "Muy buen lugar, solo mejoraría la limpieza de los baños. De resto todo perfecto.",
  },
  {
    id: "6",
    author: "Laura P.",
    date: "Oct 15, 2025",
    rating: 5,
    text: "Organizamos la fiesta de mi hija aquí y fue todo un éxito. 100% recomendado.",
  },
];

interface VenueReviewsProps {
  reviews?: VenueReview[];
}

export default function VenueReviews({
  reviews = defaultReviews,
}: VenueReviewsProps) {
  // Estados centralizados - El cerebro
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: "recent", // 'recent', 'highest', 'lowest'
    stars: "all", // 'all', 5, 4, 3, 2, 1
  });

  // --- Lógica de Filtrado (aquí en el padre) ---
  const filteredReviews = reviews
    .filter((review) => {
      if (filters.stars === "all") return true;
      return review.rating === Number(filters.stars);
    })
    .sort((a, b) => {
      if (filters.sortBy === "highest") return b.rating - a.rating;
      if (filters.sortBy === "lowest") return a.rating - b.rating;
      // Por defecto, 'recent' (asumimos que ya vienen ordenados por fecha)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  // --- Cálculos Simples ---
  const overallRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);
  const reviewCount = reviews.length;

  // --- Handlers ---
  const handleOpenModal = () => setIsModalOpen(true);
  const handleFilterChange = (type: "sortBy" | "stars", value: string) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <>
      {/* Preview que se muestra en la página */}
      <VenueReviewsPreview
        rating={overallRating}
        count={reviewCount}
        reviews={reviews} // Pasamos TODAS las reseñas para el carousel
        onOpenModal={handleOpenModal}
      />

      {/* Modal con todas las opiniones */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="!h-[80vh] !w-[90vw] !max-w-[1000px] p-0 flex flex-col">
          <DialogTitle className="sr-only">Opiniones de Huéspedes</DialogTitle>
          <div className="flex-1 min-h-0">
            <VenueReviewsModal
              reviews={filteredReviews}
              filters={filters}
              onFilterChange={handleFilterChange}
              overallRating={overallRating}
              reviewCount={reviewCount}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
