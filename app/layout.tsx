import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, SemiBold, Bold
  display: "swap",
});

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
    "Enhance your photos with expert photo editing and retouching services. Trusted by photographers, e-commerce brands, and studios worldwide for high-quality, affordable image editing since 2015.",
  keywords: [
    "photo editing services",
    "photo retouching",
    "professional image editing",
    "clipping path services",
    "e-commerce photo editing",
    "portrait retouching",
    "photo restoration services",
    "video editing services",
    "background removal",
    "color correction",
  ],
  authors: [{ name: "Renovate Graphics", url: "https://www.renovategraphics.com" }],
  openGraph: {
    title: "Professional Photo Editing & Retouching | Renovate Graphics",
    description:
      "Expert photo editing and retouching services trusted by photographers and brands worldwide. Fast turnaround and affordable pricing.",
    url: "https://www.renovategraphics.com",
    siteName: "Renovate Graphics",
    images: [
      {
        url: "https://www.renovategraphics.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Photo & Video Editing Services by Renovate Graphics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Photo Editing & Retouching | Renovate Graphics",
    description:
      "Expert photo and video editing services for photographers, studios, and brands worldwide. High-quality results, fast delivery.",
    images: ["https://www.renovategraphics.com/og-image.jpg"],
    creator: "@RenovateGraphics",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add structured data for local business or service
  metadataBase: new URL("https://www.renovategraphics.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.className} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white">
        <SmoothScrollWrapper>
          <header role="banner">
            <Header />
          </header>
          <main role="main">{children}</main>
          <Footer />
          <BackToTopButton />
        </SmoothScrollWrapper>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}