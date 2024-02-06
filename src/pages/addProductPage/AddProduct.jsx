import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const AddProduct = () => {
  const [img, setImg] = useState([]);

  const handleImgSubmit = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      reader.onload = () => {
        setImg([...img, reader.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    console.log(img);

    const sellerName = document.getElementById("sellerName").value;
    const sellerEmail = document.getElementById("sellerEmail").value;
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productDescription =
      document.getElementById("productDescription").value;
    const franchise = document.getElementById("franchise").value;
    const productType = document.getElementById("productType").value;
    const condition = document.getElementById("condition").value;
    const sizeInCm = document.getElementById("sizeInCm").value;
    const date = document.getElementById("date").value;

    const productData = {
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      productName: productName,
      price: parseFloat(productPrice),
      description: productDescription,
      image: img,
      isFranchise: franchise,
      type: productType,
      condition: condition,
      dimensions: sizeInCm,
      date: date,
    };

    console.log(productData);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="w-9/12 mx-auto grid border grid-cols-2 gap-6 bg-gray-100 p-6 mt-10">
      <div className="border p-6 flex flex-col gap-6 bg-white">
        <h1 className="text-2xl capitalize font-semibold">
          Seller Information
        </h1>
        <form className="flex flex-col gap-3 border p-3 rounded" action="">
          <label className="flex flex-col gap-3" htmlFor="sellerName">
            <h1>Seller Name</h1>
            <input
              className="px-6 py-3 border rounded-lg"
              type="text"
              id="sellerName"
            />
          </label>
          <label
            className="flex flex-col gap-3 capitalize"
            htmlFor="sellerEmail"
          >
            <h1>seller email</h1>
            <input
              className="px-6 py-3 border rounded-lg resize-y w-full"
              rows={4}
              type="email"
              id="sellerEmail"
            />
          </label>
        </form>
        <h1 className="text-2xl capitalize font-semibold">Description</h1>
        <form className="flex flex-col gap-3 border p-3 rounded" action="">
          <label className="flex flex-col gap-3" htmlFor="productName">
            <h1>Product Name</h1>
            <input
              className="px-6 py-3 border rounded-lg"
              type="text"
              id="productName"
            />
          </label>
          <label className="flex flex-col gap-3" htmlFor="productDescription">
            <h1>Product Description</h1>
            <textarea
              className="px-6 py-3 border rounded-lg resize-y w-full"
              rows={4}
              type="text"
              id="productDescription"
            />
          </label>
          <label className="flex flex-col gap-3" htmlFor="productPrice">
            <h1>Product Price</h1>
            <input
              className="px-6 py-3 border rounded-lg"
              type="number"
              id="productPrice"
            />
          </label>
        </form>
        <h1 className="text-2xl capitalize font-semibold">Category</h1>
        <form className="flex flex-col gap-3 border p-3 rounded " action="">
          <label className="flex flex-col gap-3" htmlFor="franchise">
            <h1>Franchise</h1>
            <select
              name="franchise"
              id="franchise"
              className="block px-4  py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-primary"
            >
              <option value="marvel" className="py-2">
                Marvel
              </option>
              <option value="avengers" className="py-2">
                Avengers
              </option>
              <option value="star-wars" className="py-2">
                Star Wars
              </option>
              <option value="transformers" className="py-2 ">
                Transformers
              </option>
            </select>
          </label>
          <label className="flex flex-col gap-3" htmlFor="productType">
            <h1>Product Type</h1>
            <select
              name="productType"
              id="productType"
              className="block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-primary"
            >
              <option value="" className="py-2">
                Select Product Type
              </option>
              <option value="action-figures" className="py-2">
                Action Figures
              </option>
              <option value="plush-toys" className="py-2">
                Plush Toys  
              </option>
              <option value="building-sets" className="py-2">
                Building Sets
              </option>
              <option value="vehicles" className="py-2">
                Vehicles
              </option>
            </select>
          </label>
        </form>
        <h1 className="text-2xl font-semibold capitalize">Quality</h1>
        <form className="flex flex-col gap-3 border p-3 rounded " action="">
          <label className="flex flex-col gap-3" htmlFor="condition">
            <h1>New or Used</h1>
            <select
              className="block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-primary"
              name="condition"
              id="condition"
            >
              <option value="new" className="py-2">
                New
              </option>
              <option value="used" className="py-2">
                Used
              </option>
            </select>
          </label>
        </form>
      </div>
      <div className="border p-6 flex flex-col gap-6 bg-white">
        <h1 className="text-2xl capitalize font-semibold">Product Image</h1>

        <form className="gap-3 border p-3 rounded grid grid-cols-3" action="">
          <label
            htmlFor="img1"
            className="border-blue-500  border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
          >
            <div className="flex flex-col h-full w-full gap-3 justify-center items-center text-center">
              {img.length > 0 ? (
                <img
                  className="h-full w-full object-cover"
                  src={img[0]}
                  alt="Uploaded"
                />
              ) : (
                <>
                  <CiImageOn className="text-4xl" />
                  <h1 className="text-sm w-9/12 text-gray-500">
                    Drop your image or click here to browse
                  </h1>
                </>
              )}
            </div>
            <input
              type="file"
              hidden
              name="image1"
              id="img1"
              onChange={handleImgSubmit}
              accept="image/png/webp"
            />
          </label>
          <label
            htmlFor="img2"
            className="border-blue-500  border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
          >
            <div className="flex flex-col gap-3 w-full h-full justify-center items-center text-center">
              {img.length > 1 ? (
                <img
                  className="h-full w-full object-cover"
                  src={img[1]}
                  alt="Uploaded"
                />
              ) : (
                <>
                  <CiImageOn className="text-4xl" />
                  <h1 className="text-sm w-9/12 text-gray-500">
                    Drop your image or click here to browse
                  </h1>
                </>
              )}
            </div>
            <input
              type="file"
              hidden
              name="image2"
              id="img2"
              onChange={handleImgSubmit}
              accept="image/png/webp"
            />
          </label>
          <label
            htmlFor="img3"
            className="border-blue-500  border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
          >
            <div className="flex flex-col w-full h-full gap-3 justify-center items-center text-center">
              {img.length > 2 ? (
                <img
                  className="w-full h-full object-cover"
                  src={img[2]}
                  alt="Uploaded"
                />
              ) : (
                <>
                  <CiImageOn className="text-4xl" />
                  <h1 className="text-sm w-9/12 text-gray-500">
                    Drop your image or click here to browse
                  </h1>
                </>
              )}
            </div>
            <input
              type="file"
              hidden
              name="image3"
              id="img3"
              onChange={handleImgSubmit}
              accept="image/png/webp"
            />
          </label>
        </form>
        <h1 className="text-2xl font-semibold capitalize">Select Size</h1>
        <form className="gap-3  p-3 rounded grid grid-cols-2" action="">
          <label className="col-span-1" htmlFor="sizeInCm">
            <input
              className="px-6 py-3 border rounded-lg w-full"
              type="text"
              placeholder="Size in cm"
              id="sizeInCm"
            />
          </label>
          <label className="col-span-1" htmlFor="date">
            <input
              className="px-6 py-3 border rounded-lg w-full"
              type="date"
              placeholder=""
              id="date"
            />
          </label>
        </form>
        <button
          onClick={handleSubmit}
          className="py-4 bg-primary "
          type="submit"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default AddProduct;
