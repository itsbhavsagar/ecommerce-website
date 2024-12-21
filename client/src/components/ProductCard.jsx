import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from '../hooks/ThemeContext';
import { useDispatch } from 'react-redux';
import { addCart } from '../features/cart/CartSlice';

let ProductCard = ({ obj }) => {
  let { images, title, price, brand, id } = obj;

  let dispatch = useDispatch();

  let Navigate = useNavigate();
  let handleClick = () => {
    Navigate(`/product/${id}`);
  };

  let handleAddCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addCart(obj));
    console.log('Buy now clicked');
  };

  let { theme } = useContext(Theme);

  let lightTheme =
    'w-72 bg-slate-200 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl items-center ml-8 text-black';

  let darkTheme =
    'w-72 bg-gray-700 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl items-center ml-8 text-white';

  return (
    <>
      <div
        className={theme == 'light' ? lightTheme : darkTheme}
        onClick={handleClick}
      >
        <Link to="#">
          <img
            src={images[0]}
            alt="Product"
            className="h-52 w-72 object-scale-down rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">
              {brand}
            </span>
            <p className="text-lg font-bold truncate block capitalize">
              {title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold  cursor-auto my-3">
                ${price}
              </p>
              <del>
                <p className="text-sm  cursor-auto ml-2">$999</p>
              </del>
              <div className="ml-auto bg-red-400 rounded-md ">
                <button className="m-2" onClick={handleAddCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
