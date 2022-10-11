import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex items-center flex-col-reverse md:flex-row px-6 mx-auto mt-10 space-y-0 md:space-y-0">
      <div className=" text-white w-[400px] h-[350px] pt">
        <h2 className=" font-normal text-sm text-white opacity-50 tracking-[10px] leading-5">
          NEW PRODUCT
        </h2>
        <h1 className=" font-bold text-6xl leading-[58px] pt-3">
          XX99 Mark II Headphones
        </h1>
        <p className=" font-medium text-base opacity-75 leading-6 pt-5">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className=" pt-9">
          <Button className=" w-[160px] h-[50px] bg-[#D87D4A] text-center hover:text-white hover:bg-[#fbaf85] items-center">
            SEE PRODUCT
          </Button>
        </div>
      </div>

      <img
        src="../../public/assets/home/desktop/heroHeadphones.svg"
        alt="headphones-black"
      />
    </div>
  );
};

export default Hero;
