import React from "react";
import pix from "../../../public/fitwell.jpeg";
import Image from "next/image";
interface WorkoutsCardProps {
  workout: {
    id: number;
    title: string;
    category: string;
    duration: string;
  };
}

const WorkoutsCard: React.FC<WorkoutsCardProps> = ({ workout }) => {
  return (
    <div key={workout.id} className="bg-white p-4 rounded-md shadow-md">
      <Image className="w-full h-80 object-cover" src={pix} alt="" />
      <h3 className="text-lg font-bold mb-2">{workout.title}</h3>
      <p className="text-gray-600 mb-2">Category: {workout.category}</p>
      <p className="text-gray-600">Duration: {workout.duration}</p>
      {/*more workout details ] */}
    </div>
  );
};

export default WorkoutsCard;
