// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { Theme } from '../hooks/ThemeContext';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   let { theme, setTheme } = useContext(Theme);

//   let cartItem = useSelector((state) => state.cart.items);

//   let handleThemeChange = () => {
//     setTheme(theme == 'light' ? 'dark' : 'light');
//     localStorage.setItem('Theme', 'light' ? 'dark' : 'light');
//   };

//   let darkTheme = 'navbar bg-gray-700  text-white duration-500  ';
//   let lightTheme = 'navbar bg-slate-200  text-black duration-500  ';

//   return (
//     <div className={theme == 'dark' ? lightTheme : darkTheme}>
//       <div className="flex-1">
//         <Link to="/" className="btn btn-ghost text-xl">
//           ShopEase 🛍️
//         </Link>
//       </div>

//       <div className="flex m-4">
//         <Link to="/contact">Contact</Link>
//       </div>

//       <div className="flex m-4">
//         <Link to="/about">About</Link>
//       </div>

//       <div className="flex m-4">
//         <Link to="/cart">
//           Cart<sup className="text-red-600 font-bold"> {cartItem.length}</sup>
//         </Link>
//       </div>

//       <div className="flex m-4 text-red-600 font-bold">
//         <Link to="/food">Food</Link>
//       </div>

//       <input
//         onClick={handleThemeChange}
//         type="checkbox"
//         value="synthwave"
//         className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
//       />
//     </div>
//   );
// };

// export default Navbar;

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

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const darkTheme = 'bg-gray-700 text-white duration-500';
  const lightTheme = 'bg-slate-200 text-black duration-500';

  return (
    <nav
      className={`navbar ${
        theme === 'dark' ? darkTheme : lightTheme
      } px-4 py-2 shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold" onClick={handleLinkClick}>
          ShopEase 🛍️
        </Link>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row items-center absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent shadow-md lg:shadow-none z-10 lg:gap-4 p-4 lg:p-0`}
        >
          <Link
            to="/contact"
            className="hover:text-blue-500 lg:mx-2"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 lg:mx-2"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-500 lg:mx-2"
            onClick={handleLinkClick}
          >
            Cart<sup className="text-red-600 font-bold"> {cartItem.length}</sup>
          </Link>
          <Link
            to="/food"
            className="text-red-600 font-bold hover:text-red-800 lg:mx-2"
            onClick={handleLinkClick}
          >
            Food
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="hidden lg:block">
          <input
            onClick={handleThemeChange}
            type="checkbox"
            className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div>
      </div>

      {/* Mobile Theme Toggle */}
      <div className="block lg:hidden text-center mt-2">
        <input
          onClick={handleThemeChange}
          type="checkbox"
          className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
