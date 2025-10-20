"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", dropdown: true },
    { name: "Examples", href: "/examples" },
    { name: "Pricing", href: "/pricing" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
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

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[72px]">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6 sm:gap-30">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/renovate-logo-3.png"
              alt="Renovate Logo"
              width={220}
              height={60}
              priority
              className=" "
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-gray-800">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={link.dropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={link.href}
                  className={`flex items-center hover:text-[#00A0E3] transition-colors ${
                    isActive(link.href) ? "text-[#00A0E3]" : ""
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} className="ml-1" />}
                </Link>
                {link.dropdown && showServices && (
                  <div className="absolute top-full left-0 mt-2">
                    <ServicesDropdown onClose={() => setShowServices(false)} />
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="px-4 sm:px-5 py-2 bg-[#00A0E3] text-white rounded-full text-sm font-semibold hover:bg-[#0086C4] transition-colors">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-3 text-gray-700"
          aria-label="Toggle Menu"
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
        <nav className="flex flex-col items-start px-4 sm:px-6 py-4 space-y-3 text-[15px] font-semibold text-gray-800">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              {link.dropdown ? (
                <div>
                  <button
                    onClick={handleServicesToggle}
                    className={`w-full text-left flex items-center justify-between hover:text-[#00A0E3] transition-colors ${
                      isActive(link.href) ? "text-[#00A0E3]" : ""
                    } py-2`}
                  >
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
                  className={`block w-full hover:text-[#00A0E3] transition-colors py-2 ${
                    isActive(link.href) ? "text-[#00A0E3]" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-full px-4 sm:px-5 py-2 bg-[#00A0E3] text-white rounded-full text-sm font-semibold hover:bg-[#0086C4] transition-colors mt-2"
          >
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}