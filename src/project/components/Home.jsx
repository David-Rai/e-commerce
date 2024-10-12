import React from "react";
import Nav from "./Nav";
import Slider from "./Slider";
import Products from "./Products";

const Home = () => {
  return (
    <main className="h-screen w-full">
      <Nav />
      <Slider />
      <Products />
    </main>
  );
};

export default Home;
