import React from "react";
import { CiImageOn } from "react-icons/ci";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const productDescription =
      document.getElementById("productDescription").value;
    const franchise = document.getElementById("franchise").value;
    const productType = document.getElementById("productType").value;
    const condition = document.getElementById("condition").value;
    const sizeInCm = document.getElementById("sizeInCm").value;
    const date = document.getElementById("date").value;
    const image1 = document.getElementById("img1").value;
    const image2 = document.getElementById("img2").value;
    const image3 = document.getElementById("img3").value;

    console.log("Product Name:", productName);
    console.log("Product Description:", productDescription);
    console.log("Franchise:", franchise);
    console.log("Product Type:", productType);
    console.log("Condition:", condition);
    console.log("Size in cm:", sizeInCm);
    console.log("Date:", date);
    console.log("Image 1:", image1);
    console.log("Image 2:", image2);
    console.log("Image 3:", image3);
  };

  return (
    <section className="w-9/12 mx-auto grid border grid-cols-2 gap-6 bg-gray-100 p-6">
      <div className="border p-6 flex flex-col gap-6 bg-white">
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
        </form>
        <h1 className="text-2xl capitalize font-semibold">Category</h1>
        <form className="flex flex-col gap-3 border p-3 rounded " action="">
          <label className="flex flex-col gap-3" htmlFor="franchise">
            <h1>Franchise</h1>
            <select
              name="franchise"
              id="franchise"
              className="block px-4  py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
              className="block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            className="border-blue-500 p-3 border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
          >
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <CiImageOn className="text-4xl" />
              <h1>Drop your image or click here to browse</h1>
            </div>
            <input type="file" hidden name="image1" id="img1" />
          </label>
          <label
            htmlFor="img2"
            className="border-blue-500 p-3 border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
          >
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <CiImageOn className="text-4xl" />
              <h1>Drop your image or click here to browse</h1>
            </div>
            <input type="file" hidden name="image2" id="img2" />
          </label>
          <label
            htmlFor="img3"
            className="border-blue-500 p-3 border-dotted border flex items-center align-middle rounded col-span-1 justify-center aspect-square"
          >
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <CiImageOn className="text-4xl" />
              <h1>Drop your image or click here to browse</h1>
            </div>
            <input type="file" hidden name="image3" id="img3" />
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
          className="py-3 bg-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default AddProduct;
