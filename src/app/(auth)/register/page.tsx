"use client";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import Link from "next/link";

interface RegisterData {
  email: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: "",
    password: "",
  });

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    alert(registerData.email + " " + registerData.password);
    try {
      await axios.post("http://localhost:5000/auth/register", registerData);
      alert("Registration successful! You can now log in.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-52 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="text-center mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:border-purple-700 focus:ring focus:ring-purple-200"
          >
            Register
          </button>
        </div>
        <div className="text-center">
          <Link href="/signin">
            Already have an account?{" "}
            <span className="text-blue-500 hover:underline">Sign In</span>
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="/forgot-password"
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
