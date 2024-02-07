// Import necessary modules
"use client"
import fetchSupplementById from '@/server/api/SupplementsApi/supplementById';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from "react";

function SupplementById() {
  const params = useParams();
  const supId = params.supId;
  const [supplement, setSupplement] = useState<any>({});
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the supplement is already in the cart
    const existingCartItemIndex = cartItems.findIndex((item) => item.supplement._id === supplement._id);

    if (existingCartItemIndex !== -1) {
      // If the supplement is already in the cart, update the quantity
      cartItems[existingCartItemIndex].quantity += quantity;
    } else {
      // If the supplement is not in the cart, add it with the selected quantity
      cartItems.push({ supplement, quantity });
    }

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    console.log(`Added ${quantity} ${supplement.name} to the cart.`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSupplementById(supId);
      setSupplement(data);
    };

    fetchData();
  }, [supId]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative h-40 w-full md:w-48 md:mr-4 mb-4 md:mb-0">
          <img
            src={supplement.image_url}
            alt={supplement.name}
            className="rounded-md"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{supplement.name}</h1>
          <p className="text-gray-600 mb-4">{supplement.description}</p>
          <div className="flex flex-wrap gap-4">
            <div>
              <strong>Type:</strong> {supplement.type}
            </div>
            <div>
              <strong>Brand:</strong> {supplement.brand}
            </div>
            <div>
              <strong>Price:</strong> {supplement.price?.amount} {supplement.price?.currency}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Supplement Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>Ingredients:</strong>
            <ul>
              {supplement.ingredients?.map((ingredient: any, index: any) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Dosage:</strong> {supplement.dosage?.amount} {supplement.dosage?.unit}
          </div>
          <div>
            <strong>Packaging:</strong> {supplement.packaging?.quantity} {supplement.packaging?.unit}
          </div>
          <div>
            <strong>Usage Instructions:</strong> {supplement.usage_instructions}
          </div>
          <div className="col-span-2">
            <strong>Warnings:</strong>
            <ul>
              {supplement.warnings?.map((warning: any, index: any) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center">
          <label className="mr-4">Quantity:</label>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity === 1}
              className="bg-gray-300 px-3 py-1 rounded-l-md"
            >
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="bg-gray-300 px-3 py-1 rounded-r-md"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SupplementById;
