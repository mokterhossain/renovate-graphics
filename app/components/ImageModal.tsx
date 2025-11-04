// components/ImageModal.tsx
'use client';

import Image from 'next/image';
import { X } from 'lucide-react'; 
import { RetouchImage } from '../types';
import BeforeAfterImageSlider from './BeforeAfterImageSlider';
//import { RetouchImage } from '@/types/types'; // Assumes you have this type

interface ImageModalProps {
  image: RetouchImage | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    // Backdrop: Fixed position, dark transparent background, high z-index
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
      onClick={onClose} // Close when clicking the backdrop
    >
      
      {/* Modal Container: Stops clicks from closing the modal immediately */}
      <div 
        className="relative w-full max-w-4xl bg-white shadow-2xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        
        {/* Close Button: Absolute positioned, clean and visible */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full text-gray-700 bg-white/80 hover:bg-white hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Content Area */}
        <div className="p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-4 border-b pb-2">
            {image.description}
          </h2>

          {/* Clean Before/After Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Before Image */}
            <div>
              <p className="text-lg font-semibold text-center text-red-600 mb-2">Before</p>
                          <div className="w-full rounded-lg overflow-hidden border border-gray-200">
                              <BeforeAfterImageSlider
          beforeImage={image.before}
          afterImage={image.after}
          title={image.description}
        />
                              {/* <Image
                                  src={image.before}
                                  alt="Before Retouching"
                                  fill
                                  style={{ objectFit: 'cover' }} // <--- THE PROBLEM IS LIKELY HERE
                                  priority
                                  className="w-full h-full"
                              /> */}
                          </div>
            </div>

            {/* After Image */}
            {/* <div>
              <p className="text-lg font-semibold text-center text-green-600 mb-2">After</p>
                          <div className="aspect-[4/4] relative rounded-lg overflow-hidden border border-gray-200">
                              <Image
                                  src={image.after}
                                  alt="Before Retouching"
                                  fill
                                  style={{ objectFit: 'cover' }} // <--- THE PROBLEM IS LIKELY HERE
                                  priority
                                  className="w-full h-full"
                              />
                          </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}