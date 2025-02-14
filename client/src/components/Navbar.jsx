import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from '../hooks/ThemeContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let { theme, setTheme } = useContext(Theme);

  let cartItem = useSelector((state) => state.cart.items);

  let handleThemeChange = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
    localStorage.setItem('Theme', 'light' ? 'dark' : 'light');
  };

  let darkTheme = 'navbar bg-gray-700  text-white duration-500  ';
  let lightTheme = 'navbar bg-slate-200  text-black duration-500  ';

  return (
    <div className={theme == 'dark' ? lightTheme : darkTheme}>
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
          Cart<sup className="text-red-600 font-bold"> {cartItem.length}</sup>
        </Link>
      </div>

      <div className="flex m-4 text-red-600 font-bold">
        <Link to="/food">Food</Link>
      </div>

      <input
        onClick={handleThemeChange}
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
      />
    </div>
  );
};

export default Navbar;
