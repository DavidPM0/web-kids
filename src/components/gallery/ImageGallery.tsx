// Componente Padre

interface PropertyImage {
  id: string;
  url: string;
  category: "room" | "bathroom" | "exterior" | "all";
  description: string;
}

const images: PropertyImage[] = [
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

interface ImageGalleryProps {
  isModalOpen: boolean;
  currentView: "grid" | "lightbox";
  currentFilter: "room" | "bathroom" | "exterior" | "all";
  selectedImageIndex: number | null;
}
