import React from "react";

const NavBar = () => {
  return (
    <nav className="w-9/12 mt-[20px] mx-auto grid grid-cols-3 items-center py-3">
      <h1 className="font-bold text-xl">Toy Store</h1>
      <ul className="flex gap-6 flex-grow justify-center">
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
      <div className="flex gap-6 justify-end items-center">
        <label className="" htmlFor="search">
          <input type="text" name="search" id="search" />
        </label>
        <div></div>
        <button className="bg-green-600 px-6 py-3 rounded text-white">
          sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
