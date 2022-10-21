import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full  bg-black md:h-[365px] h-[654px]">
      <div className="text-lg uppercase text-white  w-full lg:w-[1110px] lg:h-[25px] md:w-[689px]">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div>
            {" "}
            <img src="/assets/shared/desktop/logo.svg" alt="Logo" />
          </div>

          <ul className="pt-4 md:space-x-8 space-y-6 md:space-y-0 text-center text-base text-white md:flex md:justify-between md:pt-0">
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
        </div>
      </div>
      <div className=" space-y-2">
        <div className="w-[327px] h-[150px] lg:w-[540px] lg:h-[100px]">
          <p className=" text-white md:text-left text-center">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="flex lg:w-[540px]">
          <p className="text-white text-center md:text-left">Copyright 2021. All Rights Reserved</p>
        </div>
          </div>
          <div className=" lg:w-[540px] lg:h-[100px]">
              
          </div> 
    </div>
  );
};

export default Footer;
