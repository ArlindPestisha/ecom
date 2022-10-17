import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap w-full mx-auto ">
      <Hero />
      <Category />
    </div>
  );
};

export default Home;
