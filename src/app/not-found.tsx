// pages/404.tsx
import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className=" text-purple-950 text-4xl font-bold mb-4">
        Oops! This page doesn't exist.
      </h1>
      <p className="text-purple-700  mb-8">
        It seems you've taken a wrong turn. Let's get you back on track!
      </p>

      <Link
        className="px-5 py-2 border-x-purple-950 border-2 rounded-full text-purple-950 font-bold hover:underline"
        href="/home"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
