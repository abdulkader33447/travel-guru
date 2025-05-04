import React from "react";
import Navbar from "./Navbar";
import bgImg from "../assets/Rectangle 1.png";

const HomePage = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0" />

      <div className="relative z-10">
        <Navbar />

        <div className="flex items-center justify-center h-[calc(100vh-64px)]">
          <h1 className="babes-font text-white text-4xl font-bold">
            Welcome with Gradient!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
