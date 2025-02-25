import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Theme } from '../hooks/ThemeContext';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../features/cart/CartSlice';
import Reviews from '../components/Reviews';

const SingleProduct = () => {
  const { theme } = useContext(Theme);
  const { id } = useParams();
  const dispatch = useDispatch();
  const obj = useGetSingleProduct(id);
  const idsArray = useSelector((state) => state.cart.ids);
  const [showIndex, setShowIndex] = useState(null);

  const handleAddToCart = () => {
    dispatch(addCart({ id, obj }));
  };

  if (!obj) {
    return <h1 className="text-center text-lg">Loading...</h1>;
  }

  const {
    title,
    description,
    images,
    thumbnail,
    price,
    category,
    brand,
    reviews,
  } = obj;
  const isAddedToCart = idsArray.includes(id);

  const themeClasses =
    theme === 'light' ? 'bg-gray-700 text-white' : 'bg-white text-black';

  return (
    <section className={`py-12 sm:py-16 duration-500 ${themeClasses}`}>
      {isAddedToCart && (
        <p className="text-white bg-green-700 font-bold text-xs absolute z-10 mt-8 p-2 rounded-lg shadow-md">
          Added to cart
        </p>
      )}
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex text-sm mb-4">
          <a href="#" className="hover:underline">
            Home
          </a>{' '}
          /
          <a href="#" className="hover:underline">
            Products
          </a>{' '}
          /<span className="font-bold">{category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="relative max-w-xl mx-auto">
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-[400px] object-contain rounded-lg shadow-md"
              />
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Thumbnail"
                    className="w-14 h-14 object-cover rounded-lg cursor-pointer border hover:border-gray-500 transition"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-sm text-gray-500">{brand}</h2>
            <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
            <p className="text-xl text-green-500 font-bold">${price}</p>

            <button
              className="mt-4 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-md text-lg transition"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <div className="mt-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-sm ">{description}</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <div className="mt-4 space-y-2">
            {reviews.map((review, idx) => (
              <Reviews
                key={idx}
                obj={review}
                showIndex={showIndex}
                setShowIndex={setShowIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
