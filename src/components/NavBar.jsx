import React from "react";

export const NavBar = () => {
  return (
    <div className=" flex justify-around">
      <h1>audiophile</h1>
      <ul>
        <div className=" flex space-x-24">
          <li>Home</li>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </div>
      </ul>
      <h1>Cart</h1>
    </div>
  );
};
