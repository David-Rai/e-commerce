import React from "react";
import Nav from "./Nav";
import Slider from "./Slider";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-screen w-full">
      <Nav />
      <Slider />
      <Outlet /> {/* This is where nested routes will render */}
    </main>
  );
};

export default Home;
