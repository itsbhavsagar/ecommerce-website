import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Theme } from "../utility/ThemeContext";

const Navbar = () => {
  let { theme, setTheme } = useContext(Theme);

  let handleThemeChange = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
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
        <Link to="/cart"> Cart</Link>
      </div>
      <ul className="">
        <input
          onClick={handleThemeChange}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        />
      </ul>
    </div>
  );
};

export default Navbar;
