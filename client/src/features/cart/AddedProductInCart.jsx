const AddedProductInCart = (WrappedComponent) => {
  return function WithAddedToCartMessage(props) {
    return (
      <div className="relative">
        <p className="absolute top-2 left-10 z-10 text-xs font-bold text-white bg-green-700 p-2 rounded shadow-md">
          Added to cart
        </p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default AddedProductInCart;
