import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Theme } from '../hooks/ThemeContext';
import useGetSingleProduct from '../hooks/useGetSingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../features/cart/CartSlice';
import Reviews from '../components/Reviews';
const SingleProduct = () => {
  let { theme, setTheme } = useContext(Theme);

  let { id } = useParams();

  let dispatch = useDispatch();

  let obj = useGetSingleProduct(id);

  let idsArray = useSelector((state) => state.cart.ids);

  const handleAddToCart = () => {
    dispatch(addCart({ id, obj }));
  };

  if (obj == null) {
    return <h1>....loading</h1>;
  }

  let {
    title,
    description,
    images,
    thumbnail,
    price,
    rating,
    category,
    tags,
    brand,
    reviews,
  } = obj;

  let lightTheme = 'py-12 sm:py-16 bg-slate-200 text-black duration-500';
  let darkTheme = 'py-12 sm:py-16 bg-gray-600 text-white ';

  return (
    <section className={theme == 'light' ? lightTheme : darkTheme}>
      {idsArray.find((cartId) => cartId == id) != undefined ? (
        <p className="text-white bg-green-700 font-bold text-xs absolute z-10 mt-8 ml-10 p-2 rounded-lg shadow-md ">
          Added to cart
        </p>
      ) : (
        <></>
      )}
      <div className="container mx-auto px-4">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium  focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  Home
                </a>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 0">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium  focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Products
                  </a>
                </div>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 0">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium  focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {category}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={thumbnail}
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={images}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={images}
                      alt=""
                    />
                  </button>
                  <button
                    type="button"
                    className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={images}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h2 className="mt-8 text-base ">{brand}</h2>
            <h1 className="text-2xl font-bold  sm:text-3xl">{title}</h1>

            <div className="mt-5 flex items-center">
              <div className="flex items-center">
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
                <svg
                  className="block h-4 w-4 align-middle text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className=""
                  ></path>
                </svg>
              </div>
              <p className="ml-2 text-sm font-medium ">1,209 Reviews</p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold ">${price}</h1>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent  bg-none px-12 py-3 text-center text-base font-bold  transition-all duration-200 ease-in-out focus:shadow "
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  title=""
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium  hover:border-gray-400 hover:text-gray-800"
                >
                  Description
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium "
                >
                  Reviews
                  <span className="ml-2 block rounded-full  px-2 py-px text-xs font-bold ">
                    1,209
                  </span>
                </a>
              </nav>
            </div>

            <div className="mt-8 flow-root sm:mt-12 ">
              <h1 className="mt-8 text-3xl font-bold">{title}</h1>
              <p className="mt-4">{description}</p>
            </div>
          </div>

          <Reviews reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
