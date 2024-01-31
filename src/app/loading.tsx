// components/LoadingScreen.tsx
import React from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
