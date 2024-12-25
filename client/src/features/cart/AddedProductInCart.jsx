import React from 'react';

const AddedProductInCart = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <p className="text-white bg-green-700 text-xs font-bold shadow-md absolute z-10 mt-2 ml-10 p-2 rounded ">
          Added to cart
        </p>
        <Component {...props}></Component>
      </div>
    );
  };
};

export default AddedProductInCart;
