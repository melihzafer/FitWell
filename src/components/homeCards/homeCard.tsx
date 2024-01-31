// components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-purple-500 font-bold">${price.toFixed(2)}</p>
        <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
