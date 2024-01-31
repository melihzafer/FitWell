// components/ReviewsCard.tsx
import React from "react";

export interface ReviewsCardProps {
  author: string;
  content: string;
  date: string;
  rating: number;
}

const ReviewsCard: React.FC<ReviewsCardProps> = ({
  author,
  content,
  date,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-purple-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
          {rating}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold">{author}</h3>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{content}</p>
      {/* <div className="flex items-center justify-between">
        <button className="text-blue-500 hover:underline">Reply</button>
        <button className="text-gray-500 hover:underline">Helpful</button>
      </div> */}
    </div>
  );
};

export default ReviewsCard;
