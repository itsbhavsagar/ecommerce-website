import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BuyKart</a>
      </div>

      <div className="flex m-4">Conatct</div>

      <div className="flex m-4">About</div>
      <div className="flex m-4">Cart</div>
      <div className="flex-none"></div>
    </div>
  );
};

export default Navbar;
