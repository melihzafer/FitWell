"use client";
import React from "react";

function Profile() {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <div className="container mx-auto flex-col h-96 flex justify-center items-center">
      {localStorage.getItem("email")}
      <button
        className="bg-red-500 text-white px-5 py-3 rounded-lg "
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
}

export default Profile;
