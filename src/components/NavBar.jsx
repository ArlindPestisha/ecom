import React from "react";

export const NavBar = () => {
  return (
    <nav className="pb-6 relative container text-lg text-white  border-b-[1px] mx-auto w-[1000px]">
      <div className="flex items-center justify-between">
        <div>
          {" "}
          <img src="../../public/assets/shared/desktop/logo.svg" alt="Logo" />
        </div>

        <ul className="pt-4 hidden space-x-8 text-base text-white md:flex md:justify-between md:pt-0">
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <div className="sm:block sh">
          {" "}
          <img
            src="../../public/assets/shared/desktop/icon-cart.svg"
            alt="shopping-cart"
          />
        </div>
      </div>
    </nav>
  );
};
