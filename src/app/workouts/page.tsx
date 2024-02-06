"use client";
import { useEffect, useState } from "react";
import fetchWorkouts from "@/server/api/workouts";
import WorkoutsCard from "@/components/workoutsCard/wrokoutsCard";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const categories: string[] = [
  "Full Body",
  "Cardio",
  "Strength",
  "Yoga",
  "Flexibility",
];
const itemsPerPage: number = 6;

const Workouts = () => {
  const router = useRouter();
  const pageSearch = useSearchParams();
  const page = pageSearch.get("page");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWorkouts(page);
      setWorkoutsArray(data);
    };

    fetchData();
  }, [page]);
  console.log(page);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [workoutsArray, setWorkoutsArray] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    page ? parseInt(page, 10) : 1
  );

  const filteredWorkouts = selectedCategory
    ? workoutsArray.filter((workout) => workout.category === selectedCategory)
    : workoutsArray;

  // Calculate the total number of pages
  const totalPages: number = Math.ceil(workoutsArray.length / itemsPerPage);

  // Calculate the starting and ending indexes for the current page
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;

  // Get the workouts to display on the current page
  const workoutsToDisplay = filteredWorkouts.slice(startIndex, endIndex);

  return (
    <div className="flex container mx-auto">
      <div className="w-1/6 p-4 border-r-4 border-purple-600 bg-purple-500">
        <h2 className="text-2xl font-bold mb-4 text-white">Categories</h2>
        <ul>
          <li
            className={`cursor-pointer text-md m-2 text-white ${
              !selectedCategory ? "font-bold" : ""
            }`}
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1);
            }}
          >
            All
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer text-md m-2
          ${
            selectedCategory === category
              ? "font-bold text-white"
              : "text-white"
          }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
                router.push("/workouts?page=1");
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-5/6 p-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2 text-purple-800">
            All Workouts
          </h1>
          <span className="text-sm text-purple-600">
            Showing {itemsPerPage} of {workoutsArray.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workoutsToDisplay.map((workout, index) => (
            <WorkoutsCard key={index} workout={workout} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4">
          {currentPage > 1 && (
            <Link href={`/workouts/?page=${currentPage - 1}`}>
              <span className="mx-1 p-2 cursor-pointer text-purple-600">
                Previous
              </span>
            </Link>
          )}

          <Link href={`/workouts/?page=1`}>
            <span
              className={`mx-1 p-2 cursor-pointer ${
                currentPage === 1
                  ? "font-bold text-purple-600"
                  : "text-purple-500"
              }`}
            >
              1
            </span>
          </Link>

          {totalPages > 1 && (
            <Link href={`/workouts/?page=2`}>
              <span
                className={`mx-1 p-2 cursor-pointer ${
                  currentPage === 2
                    ? "font-bold text-purple-600"
                    : "text-purple-500"
                }`}
              >
                2
              </span>
            </Link>
          )}

          {currentPage < totalPages && (
            <Link href={`/workouts/?page=${currentPage + 1}`}>
              <span className="mx-1 p-2 cursor-pointer text-purple-600">
                Next
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workouts;
