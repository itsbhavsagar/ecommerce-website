// import { Link } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { Theme } from '../hooks/ThemeContext';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const { theme, setTheme } = useContext(Theme);
//   const cartItem = useSelector((state) => state.cart.items);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleThemeChange = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('Theme', newTheme);
//   };

//   const handleLinkClick = () => {
//     setIsMenuOpen(false); // Close the menu when a link is clicked
//   };

//   const darkTheme = 'bg-gray-700 text-white duration-500';
//   const lightTheme = 'bg-slate-200 text-black duration-500';

//   return (
//     <nav
//       className={`navbar ${
//         theme === 'dark' ? darkTheme : lightTheme
//       } px-4 py-2 shadow-md`}
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left: Logo */}
//         <div className="flex-1">
//           <Link to="/" className="text-xl font-bold" onClick={handleLinkClick}>
//             ShopEase 🛍️
//           </Link>
//         </div>

//         {/* Right: Nav Items */}
//         <div
//           className={`${
//             isMenuOpen ? 'flex' : 'hidden'
//           } lg:flex flex-col lg:flex-row items-center justify-end absolute lg:relative top-16 lg:top-0 right-0 lg:right-auto w-full lg:w-auto bg-gray-300 lg:bg-transparent shadow-md lg:shadow-none z-10 lg:gap-4 p-4 lg:p-0`}
//         >
//           <Link
//             to="/contact"
//             className="hover:text-blue-500 lg:mx-2"
//             onClick={handleLinkClick}
//           >
//             Contact
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-blue-500 lg:mx-2"
//             onClick={handleLinkClick}
//           >
//             About
//           </Link>
//           <Link
//             to="/cart"
//             className="hover:text-blue-500 lg:mx-2"
//             onClick={handleLinkClick}
//           >
//             Cart<sup className="text-red-600 font-bold"> {cartItem.length}</sup>
//           </Link>
//           <Link
//             to="/food"
//             className="text-red-600 font-bold hover:text-red-800 lg:mx-2"
//             onClick={handleLinkClick}
//           >
//             Food
//           </Link>
//         </div>

//         {/* Theme Toggle */}
//         <div className="hidden lg:block">
//           <input
//             onClick={handleThemeChange}
//             type="checkbox"
//             className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
//           />
//         </div>

//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="lg:hidden text-2xl"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle Menu"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Theme Toggle */}
//       <div className="block lg:hidden text-center mt-2">
//         <input
//           onClick={handleThemeChange}
//           type="checkbox"
//           className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from '../hooks/ThemeContext';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);
  const cartItem = useSelector((state) => state.cart.items);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('Theme', newTheme);
  };

  const darkTheme = 'bg-gray-700 text-white duration-500';
  const lightTheme = 'bg-slate-200 text-black duration-500';

  return (
    <div
      className={`navbar ${
        theme === 'light' ? darkTheme : lightTheme
      } px-4 py-2 shadow-md`}
    >
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          ShopEase 🛍️
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-4">
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
          Cart<sup className="text-red-600 font-bold"> {cartItem.length}</sup>
        </Link>
        <Link to="/food" className="hover:text-blue-500 text-red-600 font-bold">
          Food
        </Link>
      </div>

      {/* Cart Dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            <span className="badge badge-sm indicator-item">
              {cartItem.length}
            </span>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact  dropdown-content bg-base-100 z-20 mt-3 w-52 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">{cartItem.length} Items</span>

            <div className="card-actions">
              <Link to="/cart" className="btn btn-primary btn-block">
                <button className="btn btn-primary btn-block">View cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="hidden lg:block ml-2">
        <input
          onClick={handleThemeChange}
          type="checkbox"
          className="toggle theme-controller border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
        />
      </div>
    </div>
  );
};

export default Navbar;
