"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
    //logic
  };

  return (
    <nav className="bg-purple-900 shadow-md">
      <div className="container mx-auto px-6 py-3 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link href="/home">FitWell</Link>
          </div>

          <div className="hidden md:flex gap-8 items-center space-x-4">
            {/* <Link href="/shop">
              <span className="text-white hover:text-gray-300 cursor-pointer">
                Shop
              </span>
            </Link> */}
            <Link
              href="/workouts"
              className={`text-white hover:text-gray-300 cursor-pointer ${
                pathname === "/workouts" ? "font-bold" : ""
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/supplements"
              className={`text-white hover:text-gray-300 cursor-pointer ${
                pathname === "/supplements" ? "font-bold" : ""
              }`}
            >
              Supplements
            </Link>
            <Link
              href="/blog"
              className={`text-white hover:text-gray-300 cursor-pointer ${
                pathname === "/blog" ? "font-bold" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`text-white hover:text-gray-300 cursor-pointer ${
                pathname === "/about" ? "font-bold" : ""
              }`}
            >
              About us
            </Link>
            <Link
              href="/contact"
              className={`text-white hover:text-gray-300 cursor-pointer ${
                pathname === "/contact" ? "font-bold" : ""
              }`}
            >
              Contact us
            </Link>
          </div>

          <div className="flex items-center gap-10 space-x-4">
            <form onSubmit={handleSearchSubmit} className="hidden md:flex">
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e)}
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
                placeholder="Search..."
              />
            </form>
            <div className="flex items-center gap-5 space-x-4">
              <Link href="/cart">
                <span className="text-white hover:text-gray-300 cursor-pointer">
                  Cart
                </span>
              </Link>
              <Link
                className="px-5 py-3 bg-white rounded-md hover:bg-purple-100 cursor-pointer"
                href="/signin"
              >
                <span className="text-purple-950 font-bold">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
