import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from 'next/font/google'
import "./globals.css";
import Header from "./components/Header";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import SoftScroll from "./components/SoftScroll";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Regular, SemiBold, Bold — matches the site
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Photo Editing & Retouching Services | Renovate Graphics",
  description:
    "Enhance your photos with expert editing and retouching services. Trusted by photographers, eCommerce brands, and studios worldwide for high-quality, affordable image editing since 2015.",
  keywords: [
    "photo editing",
    "photo retouching services",
    "image editing company",
    "professional photo editing",
    "clipping path services",
    "background removal",
    "color correction",
    "product photo editing",
    "portrait retouching",
    "photo restoration",
  ],
  authors: [{ name: "Renovate Graphics" }],
  openGraph: {
    title: "Professional Photo Editing & Retouching | Renovate Graphics",
    description:
      "Professional photo editing and retouching services trusted by photographers and brands worldwide. Fast turnaround and affordable pricing.",
    url: "https://www.renovategraphics.com",
    siteName: "Renovate Graphics",
    images: [
      {
        url: "https://www.renovategraphics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Photo Editing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Photo Editing & Retouching | Renovate Graphics",
    description:
      "Expert photo retouching and editing services for photographers, studios, and brands worldwide.",
    images: ["https://www.renovategraphics.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.renovategraphics.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      
      <body
        className="bg-white"
      >
        <SmoothScrollWrapper>
        <Header />
        {children}
        <Footer />
        <BackToTopButton />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
