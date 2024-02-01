"use client";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const email = prompt("Enter your email:");
    if (email) {
      try {
        await axios.post("http://localhost:5000/auth/forgot-password", {
          email,
        });
        alert("Password reset email sent");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <button onClick={handleForgotPassword}>Forgot Password</button>
    </div>
  );
};

export default LoginForm;
