import React from 'react';

const AddedProductInCart = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <p className="text-red-500 bg-gray-800 text-xs absolute z-10 mt-2 ml-10 p-2 rounded ">
          Added to cart
        </p>
        <Component {...props}></Component>
      </div>
    );
  };
};

export default AddedProductInCart;
