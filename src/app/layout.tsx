import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | FitWell",
    default: "FitWell",
  },
  description:
    " FitWell – Your Ultimate Destination for Fitness and Wellness. At FitWell, we believe in the power of a healthy and active lifestyle. Discover a curated selection of top-quality fitness equipment, nutritional supplements, and wellness accessories designed to elevate your well-being. Whether you're on a journey to enhance your workout routine, prioritize self-care, or achieve your fitness goals, FitWell offers a diverse range of products to support every aspect of your wellness journey. Explore our collections, embark on a path to a healthier you, and experience the synergy of fitness and well-being. Join the FitWell community today – where health meets happiness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
