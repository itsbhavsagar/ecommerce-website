import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartRow from "./CartRow";
import { Theme } from "../../hooks/ThemeContext";
import { clearCart } from "./CartSlice";

const Cart = () => {
  let cartData = useSelector((state) => state.cart.items);
  let { theme, setTheme } = useContext(Theme);
  // Calculate the total price
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.obj.price * item.quantity,
    0
  );
  const shipping = 4.0; // Assume fixed shipping cost
  const tax = 4; // Assume fixed tax
  const total = subtotal + shipping + tax;

  let dispatch = useDispatch();

  let handleClearCart = () => {
    dispatch(clearCart(clearCart));
  };

  let lightTheme = "font-sans bg-white text-gray-700";
  let darkTheme = "font-sans bg-slate-800 text-white";

  return (
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="grid lg:grid-cols-3 gap-10 p-4">
        <div className="lg:col-span-2 space-y-4">
          {cartData.map((item) => (
            <CartRow cartObj={item} key={item.obj.id} />
          ))}
          <div className="items-center text-center">
            <button
              className="btn btn-error py-2.5 w-3/6 "
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
          <h3 className="text-lg font-bold  border-b pb-4">Order Summary</h3>
          <ul className=" divide-y mt-4">
            <li className="flex flex-wrap gap-4 text-sm py-3">
              Subtotal{" "}
              <span className="ml-auto font-bold">${subtotal.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm py-3">
              Shipping{" "}
              <span className="ml-auto font-bold">${shipping.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm py-3">
              Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
              Total <span className="ml-auto">${total.toFixed(2)}</span>
            </li>
          </ul>

          <button
            type="button"
            className="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
