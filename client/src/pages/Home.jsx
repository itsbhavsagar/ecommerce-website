import { useState, useContext, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ShimmerUI from '../components/ShimmerUI';
import { Theme } from '../hooks/ThemeContext';
import useGetAllProducts from '../hooks/useGetAllProducts';
import AddedProductInCart from '../features/cart/AddedProductInCart';
import { useSelector } from 'react-redux';

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [ProductArray, setProductArray] = useState([]);
  const [searchText, setSearchText] = useState('');

  const arr = useGetAllProducts();
  const idsArray = useSelector((state) => state.cart.ids);

  useEffect(() => {
    setAllData(arr);
    setProductArray(arr);
  }, [arr]);

  // Dark and Light Theme
  const { theme } = useContext(Theme);

  const filterTopRated = () => {
    setProductArray(allData.filter((obj) => obj.rating > 4.5));
  };

  const filterProduct = (proCategory) => {
    setProductArray(
      allData.filter(
        (obj) => obj.category.toLowerCase() === proCategory.toLowerCase()
      )
    );
  };

  const searchProduct = () => {
    setProductArray(
      allData.filter((obj) =>
        obj.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchText('');
  };

  if (ProductArray.length === 0) {
    return <ShimmerUI />;
  }

  const lightTheme = 'bg-white text-black duration-500';
  const darkTheme = 'bg-gray-700 text-white duration-500';

  const AddedComponent = AddedProductInCart(ProductCard);

  return (
    <div
      className={`min-h-screen p-4 ${
        theme === 'light' ? darkTheme : lightTheme
      }`}
    >
      {/* SEARCH BAR AND FILTERS */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-4">
          {['Top Rated', 'Beauty', 'Fragrances', 'Furniture', 'Groceries'].map(
            (category, index) => (
              <button
                key={index}
                className={`btn ${
                  theme === 'light'
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-black hover:text-white'
                }`}
                onClick={() =>
                  category === 'Top Rated'
                    ? filterTopRated()
                    : filterProduct(category)
                }
              >
                {category}
              </button>
            )
          )}
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center gap-2">
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            placeholder="Search"
            className={`input input-bordered w-64 ${
              theme === 'light'
                ? 'bg-gray-700 text-white border-gray-500'
                : 'bg-white text-black border-slate-500'
            }`}
          />
          <button
            className={`btn ${
              theme === 'light'
                ? 'bg-yellow-600 text-white'
                : 'bg-yellow-300 text-black hover:text-white'
            }`}
            onClick={searchProduct}
          >
            Search
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {ProductArray.map((obj) =>
          idsArray.includes(obj.id) ? (
            <AddedComponent obj={obj} key={obj.id} />
          ) : (
            <ProductCard obj={obj} key={obj.id} />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
