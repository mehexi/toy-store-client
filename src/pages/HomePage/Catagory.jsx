import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

const Catagory = ({ fetchData }) => {
  const [franchise, setFranchise] = useState(true);
  const [productType, setProductType] = useState(true);
  const [condition, setCondition] = useState(true);
    const [price, setPrice] = useState(true);
    const[product,productData] = useState()

  const handleClick = (category) => {
    switch (category) {
      case "franchise":
        setFranchise(!franchise);
        break;
      case "productType":
        setProductType(!productType);
        break;
      case "condition":
        setCondition(!condition);
        break;
      case "price":
        setPrice(!price);
        break;
      default:
        break;
    }
  };

  const [selectedFilters, setSelectedFilters] = useState({
    franchise: [],
    productType: [],
    condition: [],
    priceRange: [],
  });

  useEffect(() => {
    fetchData(selectedFilters);
  }, [selectedFilters]);

  const handleCheckboxChange = (e) => {
    console.log(e);
    const seleted = e.target.checked;
    const category = e.target.name;
    const value = e.target.id;

    console.log(category, value, seleted);
    if (seleted) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [category]: value,
      }));
    }
  };

  return (
    <>
      <div>
        <div
          onClick={() => handleClick("franchise")}
          className="flex justify-between items-center align-middle px-3 py-3 border rounded"
        >
          <h1 className="text-xl font-semibold">Franchise</h1>
          <FaChevronDown className={franchise ? "rotate-0" : "rotate-180"} />
        </div>
        <div
          className={`flex flex-col gap-3 py-3 px-3 border transition-all duration-300 ease-in origin-top ${
            franchise ? "scale-y-0 h-0 opacity-0" : "scale-y-full  opacity-100"
          }`}
        >
          <label htmlFor="marvel" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="franchise"
                id="marvel"
              />
              <label htmlFor="marvel">Marvel</label>
            </div>
            <h1>22</h1>
          </label>
          <label htmlFor="avengers" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                onChange={handleCheckboxChange}
                type="radio"
                name="franchise"
                id="avengers"
              />
              <label htmlFor="avengers">Avengers</label>
            </div>
            <h1>22</h1>
          </label>
          <label htmlFor="star-wars" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="franchise"
                id="star-wars"
              />
              <label htmlFor="starWars">Star Wars</label>
            </div>
            <h1>22</h1>
          </label>
          <label
            htmlFor="transformers"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                onChange={handleCheckboxChange}
                type="radio"
                name="franchise"
                id="transformers"
              />
              <label htmlFor="transformers">Transformers</label>
            </div>
            <h1>22</h1>
          </label>
        </div>
      </div>
      <div>
        <div
          onClick={() => handleClick("productType")}
          className="flex justify-between items-center align-middle px-3 py-3 border rounded mt-1"
        >
          <h1 className="text-xl font-semibold">Product Type</h1>
          <FaChevronDown className={productType ? "rotate-0" : "rotate-180"} />
        </div>
        <div
          className={`flex flex-col gap-3 py-3 px-3 border transition-all duration-300 ease-in origin-top ${
            productType
              ? "scale-y-0 h-0 opacity-0"
              : "scale-y-full  opacity-100"
          }`}
        >
          <label
            htmlFor="actionFigures"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="productType"
                id="action-figures"
              />
              <label htmlFor="actionFigures">Action Figures</label>
            </div>
            <h1>22</h1>
          </label>
          <label htmlFor="plushToy" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="productType"
                id="plush-toy"
              />
              <label htmlFor="plushToy">Plush toy</label>
            </div>
            <h1>22</h1>
          </label>
          <label
            htmlFor="buildingSets"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="productType"
                id="building-sets"
              />
              <label htmlFor="buildingSets">Building Sets</label>
            </div>
            <h1>22</h1>
          </label>
          <label htmlFor="vehicles" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="productType"
                id="vehicles"
              />
              <label htmlFor="vehicles">Vehicles</label>
            </div>
            <h1>22</h1>
          </label>
        </div>
      </div>
      <div>
        <div
          onClick={() => handleClick("condition")}
          className="flex justify-between items-center align-middle px-3 py-3 border rounded mt-1"
        >
          <h1 className="text-xl font-semibold">Condition</h1>
          <FaChevronDown className={condition ? "rotate-0" : "rotate-180"} />
        </div>
        <div
          className={`flex flex-col gap-3 py-3 px-3 border transition-all duration-300 ease-in origin-top ${
            condition ? "scale-y-0 h-0 opacity-0" : "scale-y-full  opacity-100"
          }`}
        >
          <label htmlFor="new" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="condition"
                id="new"
              />
              <label htmlFor="new">New</label>
            </div>
            <h1>22</h1>
          </label>
          <label htmlFor="used" className="flex justify-between text-lg">
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="condition"
                id="used"
              />
              <label htmlFor="used">Used</label>
            </div>
            <h1>22</h1>
          </label>
        </div>
      </div>
      <div>
        <div
          onClick={() => handleClick("price")}
          className="flex justify-between items-center align-middle px-3 py-3 border rounded mt-1"
        >
          <h1 className="text-xl font-semibold">Price</h1>
          <FaChevronDown className={price ? "rotate-0" : "rotate-180"} />
        </div>
        <div
          className={`flex flex-col gap-3 py-3 px-3 border transition-all duration-300 ease-in origin-top ${
            price ? "scale-y-0 h-0 opacity-0" : "scale-y-full  opacity-100"
          }`}
        >
          <label
            htmlFor="range100to200"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="price"
                id="range100to200"
              />
              <label htmlFor="range100to200">100-200</label>
            </div>
            <h1>22</h1>
          </label>
          <label
            htmlFor="range200to300"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="price"
                id="range200to300"
              />
              <label htmlFor="range200to300">200-300</label>
            </div>
            <h1>22</h1>
          </label>
          <label
            htmlFor="range300to400"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="price"
                id="range300to400"
              />
              <label htmlFor="range300to400">300-400</label>
            </div>
            <h1>22</h1>
          </label>
          <label
            htmlFor="range500to1000000"
            className="flex justify-between text-lg"
          >
            <div className="flex gap-3">
              <input
                type="radio"
                onChange={handleCheckboxChange}
                name="price"
                id="range500to1000000"
              />
              <label htmlFor="range500to1000000">500+</label>
            </div>
            <h1>22</h1>
          </label>
        </div>
      </div>
    </>
  );
};

export default Catagory;
