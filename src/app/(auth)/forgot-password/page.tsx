"use client";
import { useState } from "react";
import axios from "axios";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleForgotPassword = async () => {
    try {
      await axios.post("http://localhost:5000/auth/forgot-password", { email });
      console.log("Email sent to backend");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPasswordForm;
