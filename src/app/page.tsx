import { Metadata } from "next";
import Link from "next/link";
import HomePage from "./home/page";

// export const metadata: Metadata = {
//   title: "Home",
// };

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
