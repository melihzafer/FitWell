// pages/workouts.tsx
"use client";
import WorkoutsCard from "@/components/workoutsCard/wrokoutsCard";
import React, { useState } from "react";

const categories = ["Full Body", "Cardio", "Strength", "Yoga", "Flexibility"];

const workoutsData = [
  {
    id: 1,
    title: "Full Body HIIT",
    category: "Full Body",
    duration: "30 mins",
  },
  { id: 2, title: "Morning Yoga Flow", category: "Yoga", duration: "20 mins" },
  {
    id: 3,
    title: "Strength Training",
    category: "Strength",
    duration: "45 mins",
  },
  // Add more workout data as needed
];

const Workouts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter workouts based on selected category
  const filteredWorkouts = selectedCategory
    ? workoutsData.filter((workout) => workout.category === selectedCategory)
    : workoutsData;

  return (
    <div className="flex">
      {/* Categories Menu */}
      <div className="w-1/6 p-4 border-r-4 border-purple-600">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul>
          <li
            className={` cursor-pointer text-md m-2 ${
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
        {/* display filtered workouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWorkouts.map((workout) => (
            <WorkoutsCard workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
