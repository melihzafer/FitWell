import React from "react";
import Image from "next/image";
import pix from "../../../public/fitwell.jpeg";
import Link from "next/link";

interface WorkoutsCardProps {
  workout: {
    _id: string;
    title: string;
    category: string;
    duration: string;
  };
}

const WorkoutsCard: React.FC<WorkoutsCardProps> = ({ workout }) => {
  return (
    <div key={workout.id} className="bg-white p-4 rounded-md shadow-md">
      <div className="relative h-44 mb-4 overflow-hidden rounded-md">
        <Image
          className="w-full h-full object-cover"
          src={pix}
          alt={workout.title}
        />
      </div>
      <h3 className="text-lg font-bold mb-2 text-purple-800">{workout.title}</h3>
      <p className="text-gray-600 mb-2">Category: {workout.category}</p>
      <p className="text-gray-600 mb-4">Duration: {workout.duration}</p>
      {/* Add more workout details as needed */}
      <Link href={`/workouts/${workout._id}`} className="text-purple-600 hover:underline focus:outline-none">
        View
      </Link>
    </div>
  );
};

export default WorkoutsCard;
