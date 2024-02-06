import React from "react";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-9/12 mt-[20px] mx-auto grid grid-cols-3 items-center py-3">
      <h1 className="font-bold text-xl">Toy Store</h1>
      <ul className="flex gap-6 flex-grow justify-center">
        <li>Home</li>
        <li>All product</li>
        <li>Blogs</li>
      </ul>
      <div className="flex gap-6 justify-end items-center">
        <label className="border px-6 py-3 rounded-full" htmlFor="search">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full outline-none"
            id="search"
          />
        </label>
        <div className="w-12 h-12 border rounded-full flex justify-center items-center relative">
          <h1 className="absolute -top-2 w-5 h-5 bg-green-300 rounded-full text-center flex justify-center items-center font-bold right-0">
            1
          </h1>
          <FaCartPlus size={15}></FaCartPlus>
        </div>
        <button className="bg-green-600 px-6 py-3 rounded text-white">
          sign in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
