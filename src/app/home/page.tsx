import Link from "next/link";
import React from "react";
import "./home.css";
export default function HomePage() {
  return (
    <>
      <section className="hero bg-purple-100 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center h-screen text">
          <h1 className="text-5xl font-bold mb-4">
            Elevate Your Fitness Journey with FitWell
          </h1>
          <p className="text-lg mb-8">
            Discover top-quality fitness gear, supplements, and wellness
            products.
          </p>
          <Link
            href="/shop"
            className="bg-purple-900 font-bold text-white py-3 px-5 rounded-full"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </>
  );
}
