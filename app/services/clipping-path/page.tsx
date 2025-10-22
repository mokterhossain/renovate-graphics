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
    title: "Portrait Retouching",
    price: "$2.5 per image",
    description: "High-end portrait retouching designed to achieve flawless yet natural-looking results. Every image is refined with precision to meet professional, editorial, and commercial standards — perfect for eCommerce, advertising, and brand campaigns.",
    featuresTitle: "Our portrait retouching services include:",
    features: [
      "Expert skin retouching with natural texture preservation",
      "Blemish, wrinkle, and imperfection removal",
      "Advanced color grading and tone correction",
      "Lighting and exposure enhancement",
      "Eye and teeth enhancement for realistic detail",
      "Background refinement and cleanup",
      "High-resolution, print-ready output",
    ],
    cta: "",
    beforeImage: "/images/retouching-before.jpg",
    afterImage: "/images/retouching-after.jpg",
  },
  {
    id: 2,
    title: "Wedding Photo Editing",
    price: "$0.25 per photo",
    description: "Transform your wedding photos into timeless, romantic memories. Our team carefully enhances each image with professional color correction, subtle retouching, and background improvements — fast and affordably.",
    featuresTitle: "Our wedding photo editing services include:",
    features: [
      "Stylized color correction to create a romantic, cinematic look",
      "Skin retouching and airbrushing for flawless portraits",
      "Gentle wrinkle and clothing smoothing for a polished appearance",
      "Lighting adjustments to enhance mood and atmosphere",
      "Background enhancement for a clean, dreamy finish",
    ],
    cta: "Capture every special moment beautifully with our expert editing services.",
    beforeImage: "/images/background-before.jpg",
    afterImage: "/images/background-after.jpg",
  },
  {
    id: 3,
    title: "Product Photo Editing",
    price: "$2.50 per photo",
    description: "Showcase your products at their best and attract more customers. Our experts skillfully enhance your product and eCommerce photos, making them catalog-ready, Amazon-ready, or perfect for any online store.",
    featuresTitle: "Our product photo editing services include:",
    features: [
      "Background removal or replacement for a clean, professional look",
      "Precise color correction to make your products pop",
      "Shadow removal and adjustment for perfect lighting",
      "Ghost mannequin editing for apparel and wearable products",
      "Noise reduction for crisp, high-quality images",
      "Clipping path creation for accurate product outlines",
    ],
    cta: "Make your products stand out and boost your sales with our professional photo editing services.",
    beforeImage: "/images/color-before.jpg",
    afterImage: "/images/color-after.jpg",
  },
  {
    id: 4,
    title: "Jewelry Photo Editing",
    price: "$6 per photo",
    description: "Make your jewelry photos sparkle and capture every detail beautifully. Our experts enhance gemstones, smooth metal surfaces, adjust colors, and remove unwanted objects to create flawless, high-quality images perfect for catalogs, eCommerce, or advertising.",
    featuresTitle: "Our jewelry photo editing services include:",
    features: [
      "Background removal for a clean and professional look",
      "Gemstone enhancement to make them shine brilliantly",
      "Color correction and enhancement for accurate tones",
      "Reflection and glare removal for polished results",
      "Smoothing metal surfaces for a flawless finish",
    ],
    cta: "Showcase your jewelry in its best light and attract more customers with our professional editing services.",
    beforeImage: "/images/restoration-before.jpg",
    afterImage: "/images/restoration-after.jpg",
  },
  {
    id: 5,
    title: "Creative Photo Manipulation",
    price: "$30 per image",
    description: "Turn ordinary photos into imaginative, eye-catching creations. Our team can transform backgrounds, swap faces, adjust expressions, create artistic renditions, or design fun collages — perfect for personal projects, marketing, or social media.",
    featuresTitle: "Our photo manipulation services include:",
    features: [
      "Photomontage creation for unique compositions",
      "Background replacement and enhancement",
      "Object insertion or removal for creative edits",
      "Face and head swapping for fun or storytelling",
      "Artistic effects and special enhancements",
    ],
    cta: "Bring your ideas to life and make your images stand out with our expert photo manipulation services.",
    beforeImage: "/images/restoration-before.jpg",
    afterImage: "/images/restoration-after.jpg",
  },
  {
    id: 6,
    title: "Real Estate Photo Editing",
    price: "$1.50 per photo",
    description: "Showcase properties in their best light and help clients imagine their dream homes. Our experts enhance real estate and interior photos with professional edits that highlight every detail and keep your listings visually appealing and market-ready.",
    featuresTitle: "Our real estate photo editing services include:",
    features: [
      "Horizon correction for perfectly balanced shots",
      "Sky replacement to create bright and appealing atmospheres",
      "Lawn and outdoor enhancement for polished exteriors",
      "Removal of unwanted objects for cleaner visuals",
      "Window adjustments and cut-outs for crisp interior views",
    ],
    cta: "Make every property stand out and attract buyers with expertly edited, high-quality photos.",
    beforeImage: "/images/real-estate-before.jpg",
    afterImage: "/images/real-estate-after.jpg",
  },
  {
    id: 7,
    title: "AI Image Enhancement",
    price: "$5 per photo",
    description: "Bring your images to the next level with cutting-edge AI-powered enhancements. Our advanced algorithms and expert touch improve clarity, colors, and details, transforming ordinary photos into professional-quality visuals for personal, commercial, or marketing use.",
    featuresTitle: "Our AI image enhancement services include:",
    features: [
      "Automatic detail sharpening for crisp, clear images",
      "Color and contrast optimization for vibrant visuals",
      "Noise reduction and artifact removal for flawless results",
      "Resolution upscaling without quality loss",
      "AI-driven background and texture improvements",
    ],
    cta: "Elevate your images instantly with professional AI enhancements for stunning, high-quality results.",
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
          <p className="paragraph text-left mt-6">
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