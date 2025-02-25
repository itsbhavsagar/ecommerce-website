import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from '../hooks/ThemeContext';
import { useDispatch } from 'react-redux';
import { addCart } from '../features/cart/CartSlice';

const ProductCard = ({ obj }) => {
  const { images, title, price, brand, id } = obj;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(Theme);

  const handleClick = () => navigate(`/product/${id}`);
  const handleAddCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addCart(obj));
    console.log('Added to cart');
  };

  return (
    <div
      className={`relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 ${
        theme === 'light' ? 'bg-gray-700 text-white' : 'bg-white text-black'
      }`}
      onClick={handleClick}
    >
      <div className="relative mx-3 mt-3 flex h-36 overflow-hidden rounded-xl">
        <img
          className="object-contain w-full h-full"
          src={images[0]}
          alt={title}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-sm font-medium text-white">
          39% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-base font-semibold tracking-tight">{title}</h5>
        <p className="text-gray-500 text-sm">{brand}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xs font-bold">${price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">
              $999
            </span>
          </p>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <button
          className="w-full rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-600"
          onClick={handleAddCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
