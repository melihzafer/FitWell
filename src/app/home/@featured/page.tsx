import ProductCard from "@/components/homeCards/homeCard";
import React from "react";

interface Product {
  productImage: string;
  productTitle: string;
  productDescription: string;
  productPrice: number;
}

function FeaturedProducts() {
  //An array of filled objects: DATA
  const featuredProducts: Product[] = [
    {
      productImage: "image1.jpg",
      productTitle: "Product 1",
      productDescription: "Description for Product 1",
      productPrice: 19.99,
    },
    {
      productImage: "image2.jpg",
      productTitle: "Product 2",
      productDescription: "Description for Product 2",
      productPrice: 29.99,
    },
    {
      productImage: "image3.jpg",
      productTitle: "Product 3",
      productDescription: "Description for Product 3",
      productPrice: 39.99,
    },
  ];

  return (
    <section className="featured-products container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={(Math.random() * 0.15).toString()}
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
