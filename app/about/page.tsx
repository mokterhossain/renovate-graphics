"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 text-center overflow-hidden">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About <span className="text-blue-600">Renovate Graphics</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          We transform ordinary photos into stunning visuals that captivate your audience.
          Our mission is to help brands, photographers, and eCommerce businesses stand out
          through world-class image editing.
        </motion.p>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/about/about-team-2.png"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded with a passion for visual excellence, Renovate Graphics has been
              helping global clients enhance their imagery for years. From humble beginnings,
              we’ve grown into a trusted image editing partner for photographers, studios,
              eCommerce brands, and creative agencies worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our expert editors blend creativity and precision to deliver professional-grade
              results—fast, reliable, and affordable. We believe that every image tells a
              story, and our job is to make that story shine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Our Mission & Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                text: "We deliver top-notch editing that meets the highest industry standards, every single time.",
                icon: "🎨",
              },
              {
                title: "Client Satisfaction",
                text: "We believe in building long-term relationships through trust, communication, and quality service.",
                icon: "🤝",
              },
              {
                title: "Fast Turnaround",
                text: "Our streamlined workflow ensures you get your edited photos quickly—without compromising quality.",
                icon: "⚡",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-white">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Transform Your Photos?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Partner with us for professional image editing services that enhance your brand
          and captivate your audience.
        </motion.p>
        <motion.a
          href="/pricing"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          View Pricing
        </motion.a>
      </section>
    </div>
  );
}
