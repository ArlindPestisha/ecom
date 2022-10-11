import React from "react";

export const NavBar = () => {
  return (
    <div
    >
      <div
        className="pb-6 flex items-center
          justify-between
          w-[1000px]
         
          text-lg text-white
         border-b-[1px]"
      >
        {" "}
        <img src="../../public/assets/shared/desktop/logo.svg" alt="Logo" />
        <ul
          className="pt-4  space-x-24 
              text-base text-white  
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <img src="../../public/assets/shared/desktop/icon-cart.svg" alt="" />
      </div>
    </div>
  );
};
