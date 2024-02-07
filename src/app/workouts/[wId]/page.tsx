"use client";
import { useParams, usePathname } from "next/navigation";
import fetchWorkoutById from "@/server/api/WorkoutsApi/workoutsById";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pix from "../../../../public/fitwell.jpeg";

function WorkoutPage() {
  const params = useParams();
  const wId = params.wId;
  const [workout, setWorkout] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkoutById(wId);
      setWorkout(data);
    };

    fetchData();
  }, [wId]);

  return (
    <div className="bg-purple-800 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Image src={pix} alt="" className="rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{workout.title}</h1>
          <h2 className="text-xl mb-4">{workout.category}</h2>
          <h3 className="text-lg">{workout.duration}</h3>
          <p>{workout.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPage;
