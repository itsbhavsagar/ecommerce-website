import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from '../hooks/ThemeContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let { theme, setTheme } = useContext(Theme);

  let cartItem = useSelector((state) => state.cart.items);

  console.log(cartItem);

  let handleThemeChange = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
    localStorage.setItem('Theme', 'light' ? 'dark' : 'light');
  };

  let darkTheme = 'navbar bg-gray-700  text-white duration-500  ';
  let lightTheme = 'navbar bg-slate-200  text-black duration-500  ';

  return (
    <div className={theme == 'light' ? lightTheme : darkTheme}>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          ShopEase 🛍️
        </Link>
      </div>

      <div className="flex m-4">
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex m-4">
        <Link to="/about">About</Link>
      </div>

      <div className="flex m-4">
        <Link to="/cart">
          {' '}
          Cart<sup className="text-red-600 font-bold"> {cartItem.length}</sup>
        </Link>
      </div>

      <div className="flex m-4 text-red-600 font-bold">
        <Link to="/food">Food</Link>
      </div>

      <label className="grid cursor-pointer place-items-center">
        <input
          onClick={handleThemeChange}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <svg
          className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <svg
          className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
