import React from 'react'

const TextSection = () => {
  return (
    <div
        className=" flex justify-between mt-40 flex-col-reverse lg:flex-row lg:w-[1110px] lg:h-[588px] w-[327px] h-[698px]
      md:w-[689px] md:h-[633px] mb-36"
      >
        <div className="lg:w-[445px] lg:h-[295px] md:w-[573px] md:[270px]  flex flex-wrap place-content-between lg:mt-20">
          <h1 className=" pb-6 text-2xl md:text-4xl tracking-[1.5px] font-bold uppercase">
            Bringing you the <br />{" "}
            <span className=" text-[#D87D4A]">best </span> audio gear
          </h1>
          <p className="font-medium text-base text-black opacity-75">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className=" bg-[url('/assets/shared/mobile/image-best-gear.jpg')] lg:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] md:bg-[url('/assets/shared/tablet/image-best-gear.jpg')] lg:w-[540px] lg:h-[588px] md:w-[689px] md:h-[300px] bg-no-repeat bg-contain w-[327px] h-[300px] rounded-lg "></div>
      </div>
  )
}

export default TextSection