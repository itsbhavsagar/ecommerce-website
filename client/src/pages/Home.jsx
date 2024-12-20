import React, { useState, useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ShimmerUI from "../ShimmerUI";
import { Theme } from "../hooks/ThemeContext";
import useGetAllProducts from "../hooks/useGetAllProducts";

const Home = () => {
  let [allData, setAllData] = useState([]);
  let [ProductArray, setProductArray] = useState([]);
  let [searchText, setSearchText] = useState("");

  let arr = useGetAllProducts();

  useEffect(() => {
    setAllData(arr);
    setProductArray(arr);
  }, [arr]);

  // Dark and Light Theme
  let { theme, setTheme } = useContext(Theme);

  let filterTopRated = () => {
    let data = ProductArray.filter((obj) => obj.rating > 4.5);
    setProductArray(data);
  };

  let filterProduct = (proCategory) => {
    let data = allData.filter((obj) => {
      return proCategory.toLowerCase() == obj.category.toLowerCase();
    });
    setProductArray(data);
  };

  let searchProduct = () => {
    let data = allData.filter((obj) =>
      obj.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setProductArray(data);
    setSearchText("");
  };

  if (ProductArray.length == 0) {
    return <ShimmerUI />;
  }
  let darkTheme =
    "bg-gray-600 flex flex-wrap justify-center overflow-auto text-white duration-500";
  let lightTheme =
    "bg-slate-200 flex flex-wrap justify-center overflow-auto text-black duration-500";

  return (
    <>
      {/* FILTER BUTTONS */}

      <div className={theme == "light" ? lightTheme : darkTheme}>
        <div className="btn-box flex-wrap sm:gap-8 space-x-4">
          <button
            className="btn  m-1  text-xs sm:text-sm md:text-base"
            onClick={filterTopRated}
          >
            Top Rated
          </button>
          <button
            className="btn   text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("beauty")}
          >
            Beauty
          </button>

          <button
            className="btn   text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="btn   text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("furniture")}
          >
            Furniture
          </button>

          <button
            className="btn  text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("groceries")}
          >
            Groceries
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="items-center flex flex-1 place-content-center">
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            type="text"
            placeholder="Search"
            className="input input-bordered border-red-700 w-3/5 text-white"
          />
          <button className="btn flex btn-warning m-2" onClick={searchProduct}>
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-8 border border-rose-500  ">
          {ProductArray.map((obj) => (
            <ProductCard obj={obj} key={obj.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
