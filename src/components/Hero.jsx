import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex px-4 items-center bg-[url('/assets/home/mobile/image-header.jpg')] md:bg-[url('/assets/home/tablet/image-header.jpg')] xl:bg-[url('/assets/home/desktop/image-hero.jpg')]  w-full h-[730px] mx-auto bg-contain bg-no-repeat bg-[#1a1a1a]">
      <div className=" text-white w-[328px] h-[290px] ml-10 text-center xl:text-left  md:w-[400px] md:h-[350px] xl:ml-[210px] md:ml-[180px] md:text-center md:mt-6">
        <h2 className=" font-normal text-sm text-white opacity-50 tracking-[10px] leading-5">
          NEW PRODUCT
        </h2>
        <h1 className=" font-bold text-4xl md:text-6xl xl:text-6xl leading-[58px] pt-3">
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
    </div>
  );
};

export default Hero;
