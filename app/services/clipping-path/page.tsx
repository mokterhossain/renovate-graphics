import ImageSlider from "@/app/components/ImageSlider";
import { Service } from "@/app/types";
import ServicePageCard from "../components/ServicePageCard";

const slides = [
  { id: 1, image: "/images/slider/web/slide1.jpg", mobileImage: "/images/slider/mobile/slide1.jpg" },
  { id: 2, image: "/images/slider/web/slide2.jpg", mobileImage: "/images/slider/mobile/slide2.jpg" },
  { id: 3, image: "/images/slider/web/slide3.jpg", mobileImage: "/images/slider/mobile/slide3.jpg" },
  { id: 4, image: "/images/slider/web/slide4.jpg", mobileImage: "/images/slider/mobile/slide4.jpg" },
  { id: 5, image: "/images/slider/web/slide5.jpg", mobileImage: "/images/slider/mobile/slide5.jpg" },
  { id: 6, image: "/images/slider/web/slide6.jpg", mobileImage: "/images/slider/mobile/slide6.jpg" },
  { id: 7, image: "/images/slider/web/slide7.jpg", mobileImage: "/images/slider/mobile/slide7.jpg" },
  { id: 8, image: "/images/slider/web/slide8.jpg", mobileImage: "/images/slider/mobile/slide8.jpg" },
  { id: 9, image: "/images/slider/web/slide9.jpg", mobileImage: "/images/slider/mobile/slide9.jpg" },
  { id: 10, image: "/images/slider/web/slide10.jpg", mobileImage: "/images/slider/mobile/slide10.jpg" },
  { id: 11, image: "/images/slider/web/slide11.jpg", mobileImage: "/images/slider/mobile/slide11.jpg" },
];

const services: Service[] = [
  {
    id: 1,
    title: "Clipping path - from $0.25 per photo",
    price: "$0.25 per image",
    description: "Professional clipping path service from just $0.25 per image. Fast turnaround, flawless edges, and perfect for eCommerce product photos.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/retouching-before.jpg",
    afterImage: "/images/retouching-after.jpg",
  },
  {
    id: 2,
    title: "Image Masking Services Starting at $0.50 per Photo",
    price: "$0.50 per photo",
    description: "Get flawless, high-resolution image masking at an affordable rate. Our experts carefully isolate complex subjects like hair, fur, and transparent objects to ensure clean, professional results every time.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/background-before.jpg",
    afterImage: "/images/background-after.jpg",
  },
  {
    id: 3,
    title: "Shadow and Reflection Effects Starting at $0.50 per Photo",
    price: "$0.50 per photo",
    description: "Add natural-looking shadows and reflections to your images for a realistic, professional finish. Enhance depth and dimension with expert photo retouching — starting at just $0.50 per image.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/color-before.jpg",
    afterImage: "/images/color-after.jpg",
  },
  {
    id: 4,
    title: "Ghost Mannequin Services Starting at $1.00 per Photo",
    price: "$1.00 per photo",
    description: "Create a clean, invisible mannequin effect for your apparel photos. Our ghost mannequin service gives your clothing images a natural, 3D look — perfect for eCommerce and fashion catalogs.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/restoration-before.jpg",
    afterImage: "/images/restoration-after.jpg",
  },
  {
    id: 5,
    title: "Background Removal Services Starting at $0.25 per Photo",
    price: "$0.25 per image",
    description: "Remove unwanted backgrounds quickly and accurately. Our professional background removal service ensures clean, crisp, and high-quality images — perfect for eCommerce, product photos, and marketing.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/restoration-before.jpg",
    afterImage: "/images/restoration-after.jpg",
  },
  {
    id: 6,
    title: "Color Matching Services Starting at $1.50 per Photo",
    price: "$1.50 per photo",
    description: "Achieve consistent and accurate colors across all your product images. Our expert color matching service ensures your photos look natural, balanced, and brand-perfect every time.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/real-estate-before.jpg",
    afterImage: "/images/real-estate-after.jpg",
  },
  {
    id: 7,
    title: "Color Correction Services Starting at $1.50 per Photo",
    price: "$1.50 per photo",
    description: "Restore natural tones and perfect lighting with expert color correction. Our professionals adjust brightness, contrast, and color balance to make every photo look vibrant and true to life.",
    featuresTitle: "",
    features: [],
    cta: "",
    beforeImage: "/images/ai-image-enhance-before.jpg",
    afterImage: "/images/ai-image-enhance-after.jpg",
  },
];

export default function ClippingPathServicePage() {
  return (
    <>
      <ImageSlider slides={slides} />
      <section className="section">
        <div className="container">
          <h2 className="text-2xl text-center text-gray-900">
            Clipping Path Services - Precision in Every Pixel
          </h2>
          <p className="paragraph text-left mt-6 sm:text-lg text-gray-700">
            At Renovate Graphics, we specialize in delivering top-notch clipping path services that ensure your images stand out with impeccable precision. Our expert team utilizes advanced techniques to create clean and accurate paths, allowing for seamless background removal and image isolation. Whether you're a photographer, eCommerce brand, or studio, our clipping path solutions are tailored to meet your specific needs, enhancing the visual appeal of your products and photographs. Trust us to provide high-quality results that elevate your imagery to the next level.
          </p>
        </div>
      </section>
      <section id="services" className="bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl text-center text-gray-900 mb-10">
            Clipping Path Service Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <ServicePageCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}