"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Clipping Path Editing",
    price: "From $0.29 / image",
    description: "Accurate background removal with clean edges for product photos.",
    features: [
      "Manual hand-drawn paths",
      "Multiple clipping versions",
      "Fast turnaround time",
      "Perfect for eCommerce",
    ],
    image: "/images/services/clipping.jpg",
    href: "/services/clipping-path",
    color: "from-gray-900 to-gray-800",
  },
  {
    title: "E-commerce Photo Editing",
    price: "From $0.39 / image",
    description: "High-quality product retouching to boost online sales.",
    features: [
      "Shadow & reflection adjustments",
      "Color correction",
      "Background enhancements",
      "Optimized for web stores",
    ],
    image: "/images/services/product.jpg",
    href: "/services/product-editing",
    color: "from-blue-600 to-blue-500",
  },
  {
    title: "Jewelry Photo Editing",
    price: "From $0.59 / image",
    description: "Highlight brilliance and shine for jewelry photography.",
    features: [
      "Dust and spot removal",
      "Shine enhancement",
      "Metal and gemstone balancing",
      "Natural reflections",
    ],
    image: "/images/services/jewellery.jpg",
    href: "/services/jewellery-editing",
    color: "from-amber-600 to-yellow-500",
  },
  {
    title: "Portrait Photo Retouching",
    price: "From $0.49 / image",
    description: "Enhance skin tones and remove imperfections naturally.",
    features: [
      "Skin smoothing",
      "Blemish removal",
      "Color correction",
      "Natural look guaranteed",
    ],
    image: "/images/services/portrait.jpg",
    href: "/services/portrait-retouching",
    color: "from-pink-600 to-rose-500",
  },
  {
    title: "Body Photo Retouching",
    price: "From $0.69 / image",
    description: "Professional retouching for beauty and fashion imagery.",
    features: [
      "Skin tone balancing",
      "Body shape enhancement",
      "Lighting corrections",
      "High-resolution output",
    ],
    image: "/images/services/body.jpg",
    href: "/services/body-retouching",
    color: "from-fuchsia-600 to-purple-500",
  },
  {
    title: "Newborn Photo Editing",
    price: "From $0.79 / image",
    description: "Soft and natural retouching for baby and family portraits.",
    features: [
      "Skin tone correction",
      "Background softening",
      "Color balance",
      "Warm, emotional tones",
    ],
    image: "/images/services/newborn.jpg",
    href: "/services/newborn-editing",
    color: "from-rose-500 to-pink-400",
  },
  {
    title: "High-End Photo Retouching",
    price: "From $0.99 / image",
    description: "Luxury-grade retouching for print, beauty, and fashion.",
    features: [
      "Pixel-level detailing",
      "Magazine-quality output",
      "Advanced color grading",
      "Non-destructive workflow",
    ],
    image: "/images/services/highend.jpg",
    href: "/services/high-end-retouching",
    color: "from-indigo-700 to-indigo-500",
  },
  {
    title: "Wedding Photo Editing",
    price: "From $0.49 / image",
    description: "Elegant tone and color adjustments for wedding memories.",
    features: [
      "Lighting balance",
      "Skin tone correction",
      "Natural retouching",
      "Batch processing",
    ],
    image: "/images/services/wedding.jpg",
    href: "/services/wedding-editing",
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Creative Photo Manipulation",
    price: "From $1.49 / image",
    description: "Transform images into artistic masterpieces.",
    features: [
      "Composite photo creation",
      "Digital effects & textures",
      "Concept development",
      "Professional-grade output",
    ],
    image: "/images/services/manipulation.jpg",
    href: "/services/photo-manipulation",
    color: "from-violet-600 to-purple-500",
  },
  {
    title: "Photo Restoration Services",
    price: "From $1.99 / image",
    description: "Restore old or damaged photos to their original beauty.",
    features: [
      "Scratch & tear removal",
      "Color correction",
      "Reconstruction of missing areas",
      "Preserve memories digitally",
    ],
    image: "/images/services/restoration.jpg",
    href: "/services/photo-restoration",
    color: "from-amber-700 to-orange-500",
  },
  {
    title: "Real Estate Photo Editing",
    price: "From $0.59 / image",
    description: "Make property photos look bright and inviting.",
    features: [
      "Sky replacement",
      "Lighting & exposure balance",
      "Perspective correction",
      "HDR blending",
    ],
    image: "/images/services/realestate.jpg",
    href: "/services/real-estate-editing",
    color: "from-green-600 to-emerald-500",
  },
];

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 py-20 px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Transparent & Affordable Pricing
        </motion.h1>
        <p className="text-gray-600 text-lg">
          Choose from our professional photo editing services. High quality,
          fast delivery, and competitive rates.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`h-2 bg-gradient-to-r ${service.color} w-full`}
            ></div>

            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-4 text-sm">
                  {service.description}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {service.price}
                </p>

                <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={service.href}
                className="block text-center bg-gray-900 text-white rounded-full py-2 font-semibold hover:bg-gray-800 transition-all"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-20"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Need Bulk Orders or a Custom Package?
        </h2>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-all"
        >
          Get a Free Quote
        </Link>
      </motion.div>
    </section>
  );
}
