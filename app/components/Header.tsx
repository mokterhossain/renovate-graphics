"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Home, Layers, Image as ImageIcon, DollarSign, Info, Mail } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/#", dropdown: true, icon: Layers },
    { name: "Gallery", href: "/examples", icon: ImageIcon },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    //{ name: "Store", href: "/shop", icon: ShoppingCart },
    //{ name: "Blog", href: "/blog", icon: Book },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 150);
  };

  const handleServicesToggle = () => {
    setShowServices((prev) => !prev);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    // Check if the pathname starts with /services/ to mark Services as active
    if (href === "/#" && pathname && pathname.startsWith("/services/")) {
      return true;
    }
    return pathname && pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[72px]">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6 sm:gap-30">
          <Link href="/" className="flex items-center" title="Renovate Graphics - Home">
            <Image
              src="/images/renovate-logo.png"
              alt="Renovate Graphics Logo - Professional Photo Editing Services"
              width={220}
              height={60}
              priority
              className=""
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-base font-semibold text-gray-800" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={link.dropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={link.href}
                  className={`flex items-center relative pb-1 hover:text-[#00A0E3] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#00A0E3] after:transition-all after:duration-300 hover:after:w-full ${
                    isActive(link.href) ? "text-[#00A0E3] after:w-full" : ""
                  }`}
                  aria-label={`Navigate to ${link.name.toLowerCase()}`}
                >
                  {link.icon && <link.icon size={16} className="mr-2" />}
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                </Link>
                {link.dropdown && showServices && (
                  <div className="absolute top-full left-0 mt-2 lg:ml-30 xl:ml-80">
                    <ServicesDropdown onClose={() => setShowServices(false)} />
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="px-4 sm:px-5 py-2 bg-[#00A0E3] text-white rounded-full text-sm font-semibold hover:bg-[#0086C4] transition-colors" aria-label="Get a Quote for Photo Editing Services">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-3 text-gray-700"
          aria-label="Toggle Mobile Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[100vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start px-4 sm:px-6 py-4 space-y-3 text-base font-semibold text-gray-800" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={handleServicesToggle}
                    className={`w-full text-left flex items-center justify-between relative pb-1 hover:text-[#00A0E3] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#00A0E3] after:transition-all after:duration-300 hover:after:w-full ${
                      isActive(link.href) ? "text-[#00A0E3] after:w-full" : ""
                    } py-2`}
                    aria-label={`Toggle ${link.name.toLowerCase()}`}
                  >
                    {link.icon && <link.icon size={16} className="mr-2" />}
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${showServices ? "rotate-180" : ""}`}
                    />
                  </button>
                  {showServices && (
                    <div className="pl-4">
                      <ServicesDropdown onClose={() => setShowServices(false)} />
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`block w-full relative pb-1 hover:text-[#00A0E3] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#00A0E3] after:transition-all after:duration-300 hover:after:w-full ${
                    isActive(link.href) ? "text-[#00A0E3] after:w-full" : ""
                  } py-2`}
                  onClick={() => setMenuOpen(false)}
                  aria-label={`Navigate to ${link.name.toLowerCase()}`}
                >
                  {link.icon && <link.icon size={16} className="mr-2" />}
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full px-4 sm:px-5 py-2 bg-[#00A0E3] text-white rounded-full text-sm font-semibold hover:bg-[#0086C4] transition-colors mt-2"
            aria-label="Get a Quote for Photo Editing Services"
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}