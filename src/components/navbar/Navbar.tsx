"use client";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [search, setSearch] = useState("");
  const [logged, setLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
    //logic
  };

  //loggin check
  const checkLoginStatus = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) setLogged(true);
    } catch (error) {
      console.error("User not logged in:", error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <nav className="bg-purple-900 shadow-md">
      <div className="container mx-auto px-6 py-3 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <Link href="/home">FitWell</Link>
          </div>
          <div className="hidden md:flex gap-8 items-center space-x-4">
            {/* Shop Dropdown */}
            <div className="relative group">
              <span className="text-white hover:text-gray-300 cursor-pointer">
                Shop
              </span>
              <ul className="absolute hidden bg-white text-purple-800 mt-2 py-2 px-4 rounded-md group-hover:block">
                <li>
                  <Link href="/shop/supplements">
                    <span className="block px-4 py-2">Supplements</span>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/workout-programs">
                    <span className="block px-4 py-2">Workout Programs</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <Link
              href="/workouts"
              className={`text-white hover:text-gray-300 cursor-pointer ${
                pathname === "/workouts" ? "font-bold" : ""
              }`}
            >
              Workouts
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
                href={`    ${logged ? "/profile" : "/signin"}`}
              >
                <span className="text-purple-950 font-bold">
                  {logged ? localStorage.getItem("email") : "Sign In"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
