import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="pb-6 pt-8 relative container text-lg text-white  border-b-[1px] mx-auto md:w-[1000px]">
      <div className="flex items-center justify-between">
        <div>
          {" "}
          <img src="/assets/shared/desktop/logo.svg" alt="Logo" />
        </div>

        <ul className="pt-4 hidden space-x-8 text-base text-white md:flex md:justify-between md:pt-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/headphones">Headphones</Link>
          </li>
          <li>
            <Link to="/speakers">Speakers</Link>
          </li>
          <li>
            <Link to="/earphones">Earphones</Link>
          </li>
        </ul>
        <div className="">
          {" "}
          <img src="/assets/shared/desktop/icon-cart.svg" alt="shopping-cart" />
        </div>
      </div>
    </nav>
  );
};
