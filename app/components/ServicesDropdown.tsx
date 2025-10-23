"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./servicesDropdown.module.css";

interface ServiceItem {
  title: string;
  image: string;
  href: string;
}

interface ServicesDropdownProps {
  onClose: () => void;
}

const services: ServiceItem[] = [
  {
    title: "Clipping Path Editing",
    image: "/images/services/clipping.jpg",
    href: "/services/clipping-path",
  },
  {
    title: "E-commerce Photo Editing",
    image: "/images/services/product.jpg",
    href: "/services/product-editing",
  },
  {
    title: "Jewelry Photo Editing",
    image: "/images/services/jewellery.jpg",
    href: "/services/jewellery-editing",
  },
  {
    title: "Portrait Photo Retouching",
    image: "/images/services/portrait.jpg",
    href: "/services/portrait-retouching",
  },
  {
    title: "Body Photo Retouching",
    image: "/images/services/body.jpg",
    href: "/services/body-retouching",
  },
  {
    title: "Newborn Photo Editing",
    image: "/images/services/newborn.jpg",
    href: "/services/newborn-editing",
  },
  {
    title: "High-End Photo Retouching",
    image: "/images/services/highend.jpg",
    href: "/services/high-end-retouching",
  },
  {
    title: "Wedding Photo Editing",
    image: "/images/services/wedding.jpg",
    href: "/services/wedding-editing",
  },
  {
    title: "Creative Photo Manipulation",
    image: "/images/services/manipulation.jpg",
    href: "/services/photo-manipulation",
  },
  {
    title: "Photo Restoration Services",
    image: "/images/services/restoration.jpg",
    href: "/services/photo-restoration",
  },
  {
    title: "Real Estate Photo Editing",
    image: "/images/services/realestate.jpg",
    href: "/services/real-estate-editing",
  },
  {
    title: "Professional Video Editing",
    image: "/images/services/video.jpg",
    href: "/services/video-editing",
  },
];

const ServicesDropdown = ({ onClose }: ServicesDropdownProps) => {
  const pathname = usePathname();

  return (
    <div className={styles.dropdown}>
      {services.map((service) => (
        <Link
          href={service.href}
          className={`${styles.serviceItem} ${
            pathname.startsWith(service.href) ? styles.active : ""
          }`}
          key={service.title}
          onClick={onClose}
          title={`Explore ${service.title} at Renovate Graphics`}
        >
          <div className={styles.imageContainer}>
            <img
              src={service.image}
              alt={`${service.title} example by Renovate Graphics`}
              className={styles.serviceImage}
            />
            <div className={styles.titleOverlay}>
              <span className={styles.serviceTitle}>{service.title}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicesDropdown;