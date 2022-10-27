import React from "react";
import Button from "./Button";

const ShowCaseCTA = () => {
  return (
    <div className=" flex flex-wrap justify-center container">
      <div className="flex flex-col justify-around items-center  lg:flex-row w-[327px] h-[600px]  lg:w-[1110px] lg:h-[560px] md:w-[690px] md:h-[720px] md bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat rounded-lg bg-[#D87D4A]">
        <div className=" lg:mt-[140px] lg:pl-[118px]  ">
          <div className=" w-[180px] h-[220px] bg-[url('/assets/home/desktop/image-speaker-zx9.svg')] lg:w-[380px] lg:h-[420px] bg-no-repeat bg-contain "></div>
        </div>

        <div className=" lg:flex lg:flex-col lg:justify-evenly lg:items-start items-center md:w-[349px]  h-[303px]">
          <div className=" text-center lg:text-left mb-11">
            <h1 className=" sm:break-before-all font-bold text-white text-4xl tracking-[2px] leading-[40px] mb-11">
              ZX9 <br /> SPEAKER
            </h1>
            <p className=" font-medium text-base text-white opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
          </div>
          <div className=" text-center">
            <Button className=" text-white w-[160px] h-[50px] bg-black text-center hover:text-white hover:bg-[#4c4c4c] items-center">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>

      <div className="flex mt-6 bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-no-repeat lg:w-[1110px]  md:w-[689px]  bg-contain w-[327px] h-[320px] rounded-lg">
        <div className=" flex flex-col items-center mt-28 mr-32 text-left">
          <div className=" mb-5">
            <h1 className=" text-2xl ml-[18px] font-bold tracking-[2px]">
              ZX7 SPEAKER
            </h1>
          </div>
          <div className="btn">
            <Button className=" text-black w-[160px] h-[50px] bg-transparent  border-solid border border-black  text-center hover:text-white hover:bg-[#000000] items-center">
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row w-[327px] h-[424px] mt-5  md:w-[690px] md:h-[320px] md:space-x-2  lg:space-x-8 lg:w-[1110px] lg:h-[320px]">
        <div className="bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] md:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] lg:bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')] h-[200px] w-[327px] bg-no-repeat rounded-lg bg-contain md:w-[339px] md:h-[320px] lg:w-[540px] lg:h-[320px]"></div>

        <div className=" flex flex-col justify-around items-center h-[200px] w-[327px] bg-[#f1f1f1] rounded-lg md:w-[339px] md:h-[320px] lg:w-[540px] lg:h-[320px] md:mt-0 mt-3">
          <div className=" ">
            <h1 className="text-2xl font-bold tracking-[2px] ml-[18px] mt-5 ">
              YX1 EARPHONES
            </h1>
          </div>
          <div className="btn">
            <Button className=" text-black w-[160px] h-[50px] bg-transparent  border-solid border border-black  text-center hover:text-white hover:bg-[#000000] items-center">
              {" "}
              SEE PRODUCT
            </Button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ShowCaseCTA;
