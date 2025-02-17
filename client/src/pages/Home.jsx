import { useState, useContext, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ShimmerUI from '../components/ShimmerUI';
import { Theme } from '../hooks/ThemeContext';
import useGetAllProducts from '../hooks/useGetAllProducts';
import AddedProductInCart from '../features/cart/AddedProductInCart';
import { useSelector } from 'react-redux';

const Home = () => {
  let [allData, setAllData] = useState([]);
  let [ProductArray, setProductArray] = useState([]);
  let [searchText, setSearchText] = useState('');

  let arr = useGetAllProducts();

  let idsArray = useSelector((state) => state.cart.ids);

  useEffect(() => {
    setAllData(arr);
    setProductArray(arr);
  }, [arr]);

  // Dark and Light Theme
  let { theme } = useContext(Theme);

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
    setSearchText('');
  };

  if (ProductArray.length == 0) {
    return <ShimmerUI />;
  }

  // Dynamic Themes
  let lightTheme = 'bg-slate-200 text-black duration-500';
  let darkTheme = 'bg-gray-600 text-white duration-500';

  // Product Added Notification
  let AddedComponent = AddedProductInCart(ProductCard); // Its a HOC

  return (
    <div
      className={`min-h-screen p-4 ${
        theme === 'dark' ? darkTheme : lightTheme
      }`}
    >
      {/* SEARCH BAR AND FILTERS */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <button
            className={`btn ${
              theme === 'dark'
                ? 'bg-gray-700 text-white '
                : 'bg-slate-200 text-black hover:text-white'
            }`}
            onClick={filterTopRated}
          >
            Top Rated
          </button>
          <button
            className={`btn ${
              theme === 'dark'
                ? 'bg-gray-700 text-white '
                : 'bg-slate-200 text-black hover:text-white'
            }`}
            onClick={() => filterProduct('beauty')}
          >
            Beauty
          </button>
          <button
            className={`btn ${
              theme === 'dark'
                ? 'bg-gray-700 text-white '
                : 'bg-slate-200 text-black hover:text-white'
            }`}
            onClick={() => filterProduct('fragrances')}
          >
            Fragrances
          </button>
          <button
            className={`btn ${
              theme === 'dark'
                ? 'bg-gray-700 text-white '
                : 'bg-slate-200 text-black hover:text-white'
            }`}
            onClick={() => filterProduct('furniture')}
          >
            Furniture
          </button>
          <button
            className={`btn ${
              theme === 'dark'
                ? 'bg-gray-700 text-white '
                : 'bg-slate-200 text-black hover:text-white'
            }`}
            onClick={() => filterProduct('groceries')}
          >
            Groceries
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-2">
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            type="text"
            placeholder="Search"
            className={`input input-bordered w-64 ${
              theme === 'dark'
                ? 'bg-gray-700 text-white border-gray-500 '
                : 'bg-slate-200 text-black border-slate-500'
            }`}
          />
          <button
            className={`btn ${
              theme === 'light'
                ? 'bg-yellow-600 text-white '
                : 'bg-yellow-300 text-black hover:text-white'
            }`}
            onClick={searchProduct}
          >
            Search
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProductArray.map((obj) =>
          idsArray.find((id) => obj.id == id) !== undefined ? (
            <AddedComponent obj={obj} key={obj.id}></AddedComponent>
          ) : (
            <ProductCard obj={obj} key={obj.id} />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
