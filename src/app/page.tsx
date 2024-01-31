"use client";
import { Metadata } from "next";
import Link from "next/link";
import HomePage from "./home/page";
import React from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "./loading";

// export const metadata: Metadata = {
//   title: "Home",
// };

export default function Home() {
  const router = useRouter();

  // Redirect to "/home" when accessing the root "/"
  React.useEffect(() => {
    router.replace("/home");
  }, [router]);
  return <LoadingScreen />;
}
