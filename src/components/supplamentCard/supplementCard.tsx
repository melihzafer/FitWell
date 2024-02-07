import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SupplementsCardProps {
  Supplement: {
    _id: string;
    name: string;
    type: string;
    brand: string;
    description: string;
    ingredients: string[];
    dosage: {
      amount: string;
      unit: string;
    };
    packaging: {
      quantity: string;
      unit: string;
    };
    price: {
      amount: number;
      currency: string;
    };
    usage_instructions: string;
    warnings: string[];
    image_url: string;
  };
}

const SupplementsCard: React.FC<SupplementsCardProps> = ({ Supplement }) => {
  return (
    <div key={Supplement._id} className="bg-white p-4 rounded-md shadow-md">
      <div className="relative h-40 w-full mb-4">
        <img
          src={Supplement.image_url}
          alt={Supplement.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md w-24"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">{Supplement.name}</h2>
      <p className="text-gray-600 mb-4">{Supplement.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-purple-600 font-bold">
          {Supplement.price.amount} {Supplement.price.currency}
        </span>
        <Link href={`/shop/supplements/${Supplement._id}`} className="text-purple-600 hover:underline focus:outline-none">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SupplementsCard;
