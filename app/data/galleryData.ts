import { GalleryData } from "../types";

export const galleryData: GalleryData[] = [
  {
    id: 'product',
    name: 'Product Retouching',
    images: [
      {
        id: 1,
        thumbnail: '/images/gallery/high-end-retouch-after.jpg',
        before: '/images/gallery/high-end-retouch-before.jpg',
        after: '/images/gallery/high-end-retouch-after.jpg',
        description: 'E-commerce product enhancement',
      },
      {
        id: 2,
        thumbnail: '/images/gallery/high-end-retouch-after.jpg',
        before: '/images/gallery/high-end-retouch-before.jpg',
        after: '/images/gallery/high-end-retouch-after.jpg',
        description: 'Refined studio lighting correction',
      },
    ],
  },
  {
    id: 'portrait',
    name: 'Portrait Retouching',
    images: [
      {
        id: 3,
        thumbnail: '/images/gallery/high-end-retouch-after.jpg',
        before: '/images/gallery/high-end-retouch-before.jpg',
        after: '/images/gallery/high-end-retouch-after.jpg',
        description: 'High-end beauty and skin retouching',
      },
    ],
  },
  {
    id: 'color-correction',
    name: 'Color Correction',
    images: [
      {
        id: 3,
        thumbnail: '/images/gallery/furniture-color-change-after.jpg',
        before: '/images/gallery/furniture-color-change-before.jpg',
        after: '/images/gallery/furniture-color-change-after.jpg',
        description: 'High-end beauty and skin retouching',
      },
    ],
  },
  // ... (other services)
];