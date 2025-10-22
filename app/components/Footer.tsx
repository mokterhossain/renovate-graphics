"use server";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

async function getCurrentYear() {
  'use cache'
  return new Date().getFullYear()
}

export default async function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* 1️⃣ Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/renovate-logo-3.png"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold text-white">Renovate Graphics</h2>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Delivering world-class photo editing and retouching services to photographers, eCommerce
            brands, and studios worldwide since 2015.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#00A0E3] transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-[#00A0E3] transition">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#00A0E3] transition">Portfolio</Link></li>
            <li><Link href="/pricing" className="hover:text-[#00A0E3] transition">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-[#00A0E3] transition">Contact</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/photo-retouching" className="hover:text-[#00A0E3] transition">Photo Retouching</Link></li>
            <li><Link href="/background-removal" className="hover:text-[#00A0E3] transition">Background Removal</Link></li>
            <li><Link href="/color-correction" className="hover:text-[#00A0E3] transition">Color Correction</Link></li>
            <li><Link href="/image-restoration" className="hover:text-[#00A0E3] transition">Image Restoration</Link></li>
            <li><Link href="/product-editing" className="hover:text-[#00A0E3] transition">Product Photo Editing</Link></li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#00A0E3]" /> 
              <a href="mailto:info@yourdomain.com" className="hover:text-[#00A0E3]">info@renovategraphics.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#00A0E3]" /> 
              <a href="tel:+8801717328462" className="hover:text-[#00A0E3]">+88 01717328462</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link href="#" className="p-2 bg-gray-800 hover:bg-[#00A0E3] rounded-full transition">
              <Facebook size={16} />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 hover:bg-[#00A0E3] rounded-full transition">
              <Instagram size={16} />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 hover:bg-[#00A0E3] rounded-full transition">
              <Twitter size={16} />
            </Link>
            <Link href="#" className="p-2 bg-gray-800 hover:bg-[#00A0E3] rounded-full transition">
              <Linkedin size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mt-6">
        <p>© {await getCurrentYear()} Renovate Graphics. All rights reserved.</p>
        <p>Designed with ❤️ by Renovate Graphics</p>
      </div>
    </footer>
  );
}
