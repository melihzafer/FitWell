// pages/workouts/[page].tsx
"use client"
import Workouts from '../workouts'; // Import your main Workouts component
import { useParams, usePathname } from 'next/navigation';

const Page = ({ params }) => {
  const { page } = useParams() || { page: '1' }; // Provide a default value if query is undefined
  console.log(params.workoutsPage)

  return <Workouts page={params.workoutsPage} />;
};

export default Page;
