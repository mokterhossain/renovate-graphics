// app/gallery/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { galleryData } from '../data/galleryData';
import { GalleryData, RetouchImage } from '../types';
import ImageModal from '../components/ImageModal';
//import ImageModal from '@/components/ImageModal';
//import { galleryData } from '@/lib/galleryData';
//import { RetouchImage, GalleryData } from '@/types/types'; // Import types

export default function GalleryPage() {
  // TypeScript helps ensure activeTab is always one of the service IDs
  const [activeTab, setActiveTab] = useState<string>(galleryData[0].id);

  // selectedImage is either a RetouchImage object or null
  const [selectedImage, setSelectedImage] = useState<RetouchImage | null>(null);

  // Find the active service and cast it to the correct type
  const activeService: GalleryData | undefined = galleryData.find(service => service.id === activeTab);

  const handleImageClick = (image: RetouchImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-15">
      <div className="container mx-auto px-4">
        {/* ... (Heading and Tab Navigation remains the same, but the map uses GalleryData type implicitly) */}
        
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Retouching Gallery
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center border-b border-gray-200 mb-10">
          {galleryData.map((service: GalleryData) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`
                py-3 px-6 text-lg font-medium transition-colors duration-300
                ${activeTab === service.id
                  ? 'border-b-4 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-indigo-600 hover:border-indigo-100 border-b-4 border-transparent'
                }
              `}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Ensure activeService exists before mapping */}
          {activeService?.images.map((image: RetouchImage) => (
            <div
              key={image.id}
              // Pass the typed image object to the click handler
              onClick={() => handleImageClick(image)} 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
            >
                {/* ... (Image rendering code remains the same) */}
                <div className="aspect-square relative">
                    <Image
                        src={image.thumbnail}
                        alt={image.description}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="transition duration-500 group-hover:opacity-75"
                        priority={false}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex items-end">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Detail
                    </p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal Component - SelectedImage is already typed */}
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}