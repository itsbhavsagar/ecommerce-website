import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ShimmerUI from "../ShimmerUI";

const Home = () => {
  let [allData, setAllData] = useState([]);
  let [ProductArray, setProductArray] = useState([]);
  let [searchText, setSearchText] = useState("");

  {
    /* FETCHING DATA THROUGH API*/
  }

  let getData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let obj = await data.json();

    setProductArray(obj.products);
    setAllData(obj.products);
  };

  useEffect(() => {
    getData();
    console.log("useEffect called");
  }, []);

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

  console.log("Component called");

  if (ProductArray.length == 0) {
    return <ShimmerUI />;
  }

  return (
    <>
     

      {/* FILTER BUTTONS */ console.log("rendering")}

      <div className="flex flex-wrap justify-center overflow-auto">
        <div className="btn-box flex-wrap sm:gap-8 space-x-4">
          <button
            className="btn btn-outline m-1 btn-error text-xs sm:text-sm md:text-base"
            onClick={filterTopRated}
          >
            Top Rated
          </button>
          <button
            className="btn btn-outline btn-info text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("beauty")}
          >
            Beauty
          </button>

          <button
            className="btn btn-outline btn-secondary text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("fragrances")}
          >
            Fragrances
          </button>
          <button
            className="btn btn-outline btn-success text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("furniture")}
          >
            Furniture
          </button>

          <button
            className="btn btn-outline btn-warning text-xs sm:text-sm md:text-base"
            onClick={() => filterProduct("groceries")}
          >
            Groceries
          </button>
        </div>
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
          className="input input-bordered w-3/5"
        />
        <button className="btn flex btn-warning m-2" onClick={searchProduct}>
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-around">
        {ProductArray.map((obj) => (
          <ProductCard obj={obj} key={obj.id} />
        ))}
      </div>

      
    </>
  );
};

export default Home;
