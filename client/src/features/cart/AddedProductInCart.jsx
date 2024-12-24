import React from 'react';

const AddedProductInCart = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <p className="text-red-500 bg-gray-800 text-sm absolute z-10 mt-2 ml-12 p-2 rounded font-bold">
          Added to cart
        </p>
        <Component {...props}></Component>
      </div>
    );
  };
};

export default AddedProductInCart;
