"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPassword: React.FC = () => {
  const id = useSearchParams();
  console.log(id);
  const [newPassword, setNewPassword] = useState<string>("");

  const handleResetPassword = async () => {
    try {
      await axios.post("http://localhost:5000/auth/reset-password", {
        resetToken: id,
        newPassword,
      });
      // Display success message or redirect to a login page
    } catch (error) {
      // Handle error (display error message or redirect to an error page)
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <p>Token: {id}</p>
      <input
        type="password"
        placeholder="Enter your new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Submit</button>
    </div>
  );
};

export default ResetPassword;
