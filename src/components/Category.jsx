import React from "react";

const Category = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center mt-32 xl:w-[1110px] mb-24  md:w-[768px]">
        {/* Headphones */}
        <div className=" w-[350px] overflow-hidden rounded-lg relative text-center">
          <div className=" pt-8">
            {" "}
            <img
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt=""
            />
          </div>

          <div className=" mb-3">
            <h1 className=" uppercase text-lg font-bold tracking-[1.5px]">
              Headphones
            </h1>
          </div>
          <div className="flex justify-center">
            <p>Shop</p>
            <span className=" p-2">
              <img
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt=""
              />
            </span>
          </div>
        </div>
        {/*Speakers */}
        <div className=" w-[350px] overflow-hidden rounded-lg relative text-center">
          <div className=" pt-8">
            {" "}
            <img
              className="mb-2"
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt=""
            />
          </div>
          <div className=" mb-3">
            <h1 className=" uppercase text-lg font-bold tracking-[1.5px]">
              Speakers
            </h1>
          </div>
          <div className="flex justify-center">
            <p>Shop</p>
            <span className=" p-2">
              <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
            </span>
          </div>
        </div>
        {/*  Earphones */}
        <div className=" w-[350px] overflow-hidden rounded-lg relative text-center">
          <div className=" pt-8">
            {" "}
            <img
              className=" mb-9"
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt=""
            />
          </div>
          <div className=" mb-3">
            <h1 className=" uppercase text-lg font-bold tracking-[1.5px]">
              Earphones
            </h1>
          </div>
          <div className="flex justify-center">
            <p>Shop</p>
            <span className=" p-2">
              <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
