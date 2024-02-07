"use client";
import { useEffect, useState } from "react";
import fetchSupplements from "@/server/api/SupplementsApi/supplements";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import SupplementsCard from "@/components/supplamentCard/supplementCard";

const categories: string[] = [
  "Full Body",
  "Cardio",
  "Strength",
  "Yoga",
  "Flexibility",
];
const itemsPerPage: number = 6;

const Supplements = () => {
  const wrk = [
    {
      title: "Burpees",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Start in a standing position, jump into a plank, perform a push-up, jump back to squat position, and explosively jump up.",
    },
    {
      title: "Jumping Jacks",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Stand with feet together, arms at sides. Jump feet apart and raise arms overhead, then return to starting position.",
    },
    {
      title: "Mountain Climbers",
      category: "Full Body",
      duration: "45 seconds",
      description:
        "Start in a plank position, bring one knee to your chest, then switch legs quickly as if you're running in place.",
    },
    {
      title: "Plank with Shoulder Taps",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Maintain a plank position and alternate tapping each shoulder with the opposite hand.",
    },
    {
      title: "Squat Jumps",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Perform a squat and explosively jump up, reaching for the sky, and land back into a squat position.",
    },
    {
      title: "Russian Twists",
      category: "Full Body",
      duration: "45 seconds",
      description:
        "Sit on the floor, lean back slightly, and twist your torso from side to side while holding a weight or keeping hands clasped.",
    },
    {
      title: "Kettlebell Swings",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Hold a kettlebell with both hands, hinge at the hips, and swing the kettlebell up to shoulder height using the power from your hips.",
    },
    {
      title: "Deadlifts",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Stand with feet hip-width apart, hinge at the hips, and lower the barbell down to the ground while keeping your back straight.",
    },
    {
      title: "Lunges with Bicep Curls",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Perform lunges while holding dumbbells and incorporate bicep curls during the lunge movement.",
    },
    {
      title: "Medicine Ball Slams",
      category: "Full Body",
      duration: "1 minute",
      description:
        "Hold a medicine ball overhead and slam it to the ground with force, then pick it up and repeat.",
    },

    {
      title: "Running Intervals (sprint/jog)",
      category: "Cardio",
      duration: "15 minutes",
      description:
        "Alternate between sprinting and jogging for short intervals to elevate your heart rate.",
    },
    {
      title: "Jump Rope",
      category: "Cardio",
      duration: "10 minutes",
      description:
        "Jump rope continuously, focusing on speed and coordination.",
    },
    {
      title: "High Knees",
      category: "Cardio",
      duration: "5 minutes",
      description:
        "March in place, lifting your knees as high as possible with each step.",
    },
    {
      title: "Cycling",
      category: "Cardio",
      duration: "20 minutes",
      description:
        "Either on a stationary bike or outdoors, cycle at a moderate to high intensity.",
    },
    {
      title: "Rowing",
      category: "Cardio",
      duration: "15 minutes",
      description:
        "Use a rowing machine or row outdoors, engaging both your upper and lower body.",
    },
    {
      title: "Dancing",
      category: "Cardio",
      duration: "30 minutes",
      description:
        "Put on your favorite music and dance with various movements to keep your heart rate up.",
    },
    {
      title: "Stair Climbing",
      category: "Cardio",
      duration: "15 minutes",
      description:
        "Climb up and down stairs continuously, engaging your leg muscles and cardiovascular system.",
    },
    {
      title: "Kickboxing",
      category: "Cardio",
      duration: "20 minutes",
      description:
        "Perform a combination of punches, kicks, and knee strikes to elevate your heart rate.",
    },
    {
      title: "Jumping Lunges",
      category: "Cardio",
      duration: "10 minutes",
      description: "Perform alternating lunges with a jump between each lunge.",
    },
    {
      title: "Box Jumps",
      category: "Cardio",
      duration: "15 minutes",
      description:
        "Jump onto a sturdy box or platform, then step back down and repeat.",
    },

    {
      title: "Bench Press",
      category: "Strength",
      duration: "1 minute",
      description:
        "Lie on a flat bench, grip the barbell, and lower it to your chest before pushing it back up.",
    },
    {
      title: "Pull-Ups",
      category: "Strength",
      duration: "3 sets of 12 reps",
      description:
        "Hang from a bar with palms facing away and pull your body up until your chin clears the bar.",
    },
    {
      title: "Overhead Press",
      category: "Strength",
      duration: "1 minute",
      description:
        "Press a barbell or dumbbells overhead while standing, then lower them back to shoulder height.",
    },
    {
      title: "Barbell Rows",
      category: "Strength",
      duration: "1 minute",
      description:
        "Bend at the hips, grip a barbell, and row it towards your chest while keeping your back straight.",
    },
    {
      title: "Leg Press",
      category: "Strength",
      duration: "1 minute",
      description:
        "Sit in a leg press machine and press the platform away from you using your leg muscles.",
    },
    {
      title: "Tricep Dips",
      category: "Strength",
      duration: "1 minute",
      description:
        "Use parallel bars, lower your body by bending your elbows, then push yourself back up.",
    },
    {
      title: "Push-Ups",
      category: "Strength",
      duration: "3 sets of 15 reps",
      description:
        "Assume a plank position and lower your body to the ground, then push back up.",
    },
    {
      title: "Dumbbell Rows",
      category: "Strength",
      duration: "1 minute",
      description:
        "With a dumbbell in each hand, bend at the hips and row the dumbbells towards your hips.",
    },
    {
      title: "Romanian Deadlifts",
      category: "Strength",
      duration: "1 minute",
      description:
        "Hold a barbell or dumbbells, hinge at the hips, and lower the weight down while keeping your back straight.",
    },
    {
      title: "Plank Variations (side plank, reverse plank)",
      category: "Strength",
      duration: "2 minutes",
      description:
        "Hold various plank positions, including side planks and reverse planks, to engage your core muscles.",
    },

    {
      title: "Sun Salutations",
      category: "Yoga",
      duration: "15 minutes",
      description:
        "Flow through a series of yoga poses, including downward dog, plank, chaturanga, upward dog, and child's pose.",
    },
  ];

  // for (let i = 0; i < wrk.length; i++) {
  //   try {
     
  //       axios.post("http://localhost:5000/supplement/post", wrk[i]);
  //       console.log("success");
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(wrk[i]);
  // }

  const router = useRouter();
  const pageSearch = useSearchParams();
  const page = pageSearch.get("page");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSupplements(page);
      setsupplementsArray(data);
    };

    fetchData();
  }, [page]);
  console.log(page);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [supplementsArray, setsupplementsArray] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    page ? parseInt(page, 10) : 1
  );



  const filteredsupplements = selectedCategory
    ? supplementsArray.filter((supplement) => supplement.category === selectedCategory)
    : supplementsArray;

  // Calculate the total number of pages
  const totalPages: number = Math.ceil(supplementsArray.length / itemsPerPage);

  // Calculate the starting and ending indexes for the current page
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;

  // Get the supplements to display on the current page
  const supplementsToDisplay = filteredsupplements.slice(startIndex, endIndex);

  return (
    <div className="flex container mx-auto">
      <div className="w-1/6 py-4 px-6 border-r-4 border-purple-600 bg-purple-500">
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
                router.push("/supplements?page=1");
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
            All supplements
          </h1>
          <span className="text-sm text-purple-600">
            Showing {itemsPerPage} of {supplementsArray.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10">
          {supplementsToDisplay.map((supplement, index) => (
            <SupplementsCard key={index} Supplement={supplement} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4">
          {currentPage > 1 && (
            <Link href={`/supplements/?page=${currentPage - 1}`}>
              <span className="mx-1 p-2 cursor-pointer text-purple-600">
                Previous
              </span>
            </Link>
          )}

          <Link href={`/supplements/?page=1`}>
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
            <Link href={`/supplements/?page=2`}>
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
            <Link href={`/supplements/?page=${currentPage + 1}`}>
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

export default Supplements;
