import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">

      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BuyKart</a>
      </div>

      <div className="flex m-4">
        <Link to="/contact">Conatct</Link>{" "}
      </div>

      <div className="flex m-4">
        <Link to="/about">About</Link>
      </div>

      <div className="flex m-4">
        <Link to="/cart"> Cart</Link>
      </div>
      
    </div>
  );
};

export default Navbar;
