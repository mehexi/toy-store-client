import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Catagory from "./Catagory";

const ShopSection = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = (selectedFilters) => {
    console.log(selectedFilters);
    const queryString = new URLSearchParams(selectedFilters).toString();
    console.log(queryString);
    fetch(`http://localhost:5000/products?${queryString}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductData(data);
      });
  };

  return (
    <section className="w-9/12 flex flex-col mt-[50px] mx-auto">
      <div className="flex justify-between items-center">
        <h1>Showing {productData?.length} products</h1>
        <div className="px-6 py-3 border rounded-full">
          <h1>sort by : recomended</h1>
        </div>
      </div>
      {/* card section */}
      <div className="grid grid-cols-5 gap-7 mt-[20px]">
        <div className="col-span-1">
          <Catagory fetchData={fetchData} />
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-14">
          {productData.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
