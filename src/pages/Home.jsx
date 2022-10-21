import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import ShowCaseCTA from "../components/ShowCaseCTA";

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap w-full mx-auto just">
      <Hero />
      <Category />
      <ShowCaseCTA />
      
    </div>
  );
};

export default Home;
