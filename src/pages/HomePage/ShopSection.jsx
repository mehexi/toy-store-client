import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Catagory from "./Catagory";
import Pagination from "../Shared/Pagination";
import Loading from "../Shared/Loading";

const ShopSection = () => {
  const [productData, setProductData] = useState([]);
  //pegignation
  const [currentPage, setCurrentPage] = useState(0);
  const [prePageItem, setPerPageItem] = useState(5);
  const [productCount, setProductCount] = useState(0);
  const [queryString, setQureystring] = useState();
  const [loading, setLoading] = useState(true);

  const pageShowNumber = [5, 10, 15];

  useEffect(() => {
    fetch("http://localhost:5000/count")
      .then((res) => res.json())
      .then((data) => setProductCount(data.productCount));
  }, []);

  const numberOfPages = Math.ceil(productCount / prePageItem);
  const pages = [...Array(numberOfPages).keys()];
  // console.log(pages);

  const handlePerPageItem = (e) => {
    setPerPageItem(e.target.value);
    // console.log(e.target.value);
  };

  const fetchData = (selectedFilters) => {
    const queryString = new URLSearchParams(selectedFilters).toString();
    setQureystring(queryString);
    // console.log(queryString);
  };

  const paginationParams = new URLSearchParams({
    page: currentPage,
    size: prePageItem,
  }).toString();

  // console.log(paginationParams);

  useEffect(() => {
    console.log("start");
    setLoading(true);
    fetch(`http://localhost:5000/products?${queryString}&${paginationParams}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProductData(data);
        console.log("end");
      });
  }, [currentPage, prePageItem, queryString]);

  return (
    <section className="w-9/12 flex flex-col mt-[50px] mx-auto">
      <div className="flex justify-between items-center">
        <h1>
          Showing {productData?.length} out of {productCount} products
        </h1>
        <div className="px-6 py-3 border rounded-full flex gap-3">
          <h1>number of item</h1>
          <select
            onChange={handlePerPageItem}
            className=""
            name="itemCount"
            id=""
          >
            {pageShowNumber.map((page) => (
              <option className="" key={page}>
                {" "}
                {page}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* card section */}
      <div className="grid grid-cols-5 gap-7 mt-[20px]">
        <div className="col-span-1">
          <Catagory fetchData={fetchData} />
        </div>
        <div className="col-span-4 grid grid-cols-3 gap-14 relative ">
          <div
            className={`col-span-3 flex justify-center absolute top-1/2 right-1/2 -translate-x-1/2 ${
              !loading ? "hidden" : "block"
            }`}
          >
            <Loading />
          </div>
          {productData.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
          <div className="col-span-3">
            <Pagination setCurrentPage={setCurrentPage} pages={pages} />
          </div>
        </div>
      </div>
      {/* pagination section */}
    </section>
  );
};

export default ShopSection;
