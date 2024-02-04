import React from "react";

const ProductCard = ({ product }) => {
  const { image, productName, price, condition } = product;

  return (
    <div className=" flex flex-col gap-3 pb-6 font-semibold">
      <label className="w-full h-80 rounded-lg overflow-hidden relative">
        <img className="w-full h-full object-cover " src={image[1]} alt="" />
        <h1 className="text-sm text-center px-3 py-1 bg-white absolute top-3 right-3 border rounded-full text-gray-500">
          {condition}
        </h1>
      </label>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl  uppercase text-start truncate">
          {productName}
        </h1>
        <div className="flex justify-between gap-3 align-middle items-center">
          <div className="flex gap-3">
            <h1 className="text-xl  capitalize text-center">$ {price}</h1>
          </div>
          <button className="border px-6 py-3 rounded-full capitalize">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
