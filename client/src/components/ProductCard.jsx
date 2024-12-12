import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


let ProductCard = ({ obj }) => {

  
  let { images, discountPercentage, title, price, rating, category , id} = obj;
let Navigate = useNavigate();
  let handleClick= ()=> {
    Navigate(`/product/${id}`)
  }
  return (
    <>
      <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-lime-300 bg-white shadow-md" onClick={handleClick}>
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img className="object-cover hover:scale-110 transition duration-300" src={images[0]} alt="product image" />

          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {discountPercentage}% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-lg tracking-tight text-slate-900">{title}</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-sm font-bold text-slate-900">${price}</span>
              <span className="text-xs text-slate-900 line-through">$699</span>
            </p>
            <div className="flex items-center">
              <span className="mr-2 ml-3 rounded bg-yellow-200 text-black px-2.5 py-0.5 text-xs font-semibold">
                {rating}
              </span>
              <span className="mr-2 ml-3 rounded bg-yellow-200 text-black px-2.5 py-0.5 text-xs font-semibold">
                {category}
              </span>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
