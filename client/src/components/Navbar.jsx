import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Theme } from '../hooks/ThemeContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);
  const cartItem = useSelector((state) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('Theme', newTheme);
  };

  const darkTheme = 'bg-gray-700 text-white duration-500';
  const lightTheme = 'bg-slate-200 text-black duration-500';

  return (
    <nav
      className={`navbar ${
        theme === 'dark' ? lightTheme : darkTheme
      } px-4 py-2 shadow-md relative`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            ShopEase
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link to="/cart" className="hover:text-blue-500">
            Cart <sup className="text-red-600 font-bold">{cartItem.length}</sup>
          </Link>
          <Link
            to="/food"
            className="text-red-600 font-bold hover:text-red-800"
          >
            Food
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="relative hidden lg:flex ">
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cartItem.length}
              </span>
            )}
          </Link>
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden lg:block">
          <input
            onClick={handleThemeChange}
            type="checkbox"
            className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Fixed and Styled) */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-300 shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-[300px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center p-4 space-y-2">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Cart <sup className="text-red-600 font-bold">{cartItem.length}</sup>
          </Link>
          <Link
            to="/food"
            className="text-red-600 font-bold hover:text-red-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Food
          </Link>

          {/* Mobile Theme Toggle */}
          <div className="mt-2">
            <input
              onClick={handleThemeChange}
              type="checkbox"
              className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
