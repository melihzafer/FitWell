// pages/workouts.js
"use client";
import WorkoutsCard from "@/components/workoutsCard/wrokoutsCard";
import React, { useEffect, useState } from "react";
import fetchWorkouts from "@/server/api/workouts";
import Link from "next/link";

const categories = ["Full Body", "Cardio", "Strength", "Yoga", "Flexibility"];

const Workouts = ({ page }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [workoutsArray, setWorkoutsArray] = useState<any[]>([]);
  // const [chunkedWorkouts, setChunkedWorkouts] = useState<any[]>([]);

  // Effect for fetching workouts
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkouts();
      setWorkoutsArray(data);
    };

    fetchData();
  }, []); // Run this effect only once when the component mounts

  // Effect for chunking workouts

  const chunkSize = Math.ceil(workoutsArray.length / 2);
  const chunkedWorkouts = [];
  var x = chunkSize * (page - 1);
  for (let i = x; i < x + chunkSize; i++) {
    chunkedWorkouts.push(workoutsArray[i]);
  }

  //Filter workouts based on selected category
  const filteredWorkouts = selectedCategory
    ? chunkedWorkouts.filter((workout) => workout.category === selectedCategory)
    : chunkedWorkouts;

  return (
    <div className="flex">
      {/* Categories Menu */}
      <div className="w-1/6 p-4 border-r-4 border-purple-600">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul>
          <li
            className={`cursor-pointer text-md m-2 ${
              !selectedCategory ? "font-bold" : ""
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer text-md m-2
                ${selectedCategory === category ? "font-bold" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Workouts Section */}
      <div className="w-5/6 p-4">
        {/* Sorting and Filtering Options (to be implemented) */}
        {/* Display filtered workouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWorkouts.map((workout, index) => (
            <WorkoutsCard key={index} workout={workout} />
          ))}
        </div>
      </div>
      <div>
      {page == 1 ? (
        <Link className="bg-pink-500 px-5 py-3 rounded-full text-white" href="/workouts/2">Next</Link>
      ) : (
        <Link  className="bg-pink-500 px-5 py-3 rounded-full text-white" href="/workouts/1">Back</Link>
      )}
      </div>
      
    </div>
  );
};

export default Workouts;
