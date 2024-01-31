import ProductCard from "@/components/homeCards/homeCard";
import React from "react";
import img1 from "../../../../public/img1.jpeg";
import img2 from "../../../../public/img2.jpeg";
import img3 from "../../../../public/img3.jpeg";
import { StaticImage, StaticImageData } from "next/image";

interface Product {
  productImage: StaticImageData;
  productTitle: string;
  productDescription: string;
  productPrice: number;
}

function FeaturedProducts() {
  // An array of filled objects: DATA
  const featuredProducts: Product[] = [
    {
      productImage: img1,
      productTitle: "Product 1",
      productDescription: "Description for Product 1",
      productPrice: 19.99,
    },
    {
      productImage: img2,
      productTitle: "Product 2",
      productDescription: "Description for Product 2",
      productPrice: 29.99,
    },
    {
      productImage: img3,
      productTitle: "Product 3",
      productDescription: "Description for Product 3",
      productPrice: 39.99,
    },
  ];

  return (
    <section className="featured-products container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.productImage}
            title={product.productTitle}
            description={product.productDescription}
            price={product.productPrice}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
