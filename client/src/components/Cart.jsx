import React, { useContext } from "react";
import { Theme } from "../hooks/ThemeContext";

const Cart = () => {
  let { theme } = useContext(Theme);

  let lightTheme =
    "h-screen bg-gray-100 py-12 sm:py-16 lg:py-20 text-gray-800 duration-500";

  let darkTheme =
    "h-screen bg-gray-700 py-12 sm:py-16 lg:py-20 text-white duration-500";

  return (
    <div class="font-sans bg-white">
    <div class="grid lg:grid-cols-3 gap-10 p-4">
      <div class="lg:col-span-2 bg-white divide-y">

        <div class="flex items-start max-sm:flex-col gap-4 py-4">
          <div class="h-36 shrink-0">
            <img src='https://readymadeui.com/images/product6.webp' class="w-full h-full object-contain rounded-md" />
          </div>

          <div class="flex items-start gap-4 w-full">
            <div>
              <h3 class="text-lg font-bold text-gray-800 mb-1">Black T-Shirt</h3>
              <div class="space-y-1">
                <h6 class="text-sm text-gray-800">Size: <strong class="ml-2">7.5</strong></h6>
                <h6 class="text-sm text-gray-800">Color: <strong class="ml-2">Black</strong></h6>
              </div>

              <div class="mt-4 flex flex-wrap gap-4">
                <button type="button" class="font-semibold text-red-500 text-sm flex items-center gap-2 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current inline" viewBox="0 0 24 24">
                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                  </svg>
                  Remove
                </button>
                <button type="button" class="font-semibold text-pink-500 text-sm flex items-center gap-2 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-current inline" viewBox="0 0 64 64">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                  </svg>
                  Move to wish list
                </button>
              </div>
            </div>

            <div class="ml-auto text-right">
              <div class="flex items-center justify-end gap-3">
                <button type="button"
                  class="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 124 124">
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                  </svg>
                </button>
                <span class="font-bold text-sm leading-[18px]">1</span>
                <button type="button"
                  class="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2 fill-white" viewBox="0 0 42 42">
                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                  </svg>
                </button>
              </div>

              <div class="mt-4">
                <h4 class="text-lg font-bold text-gray-500 mb-1"><strike class="font-medium">$22.5</strike></h4>
                <h4 class="text-lg font-bold text-gray-800">$18.5</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shadow-md p-6 lg:sticky lg:top-0 h-max">
        <h3 class="text-lg font-bold text-gray-800 border-b pb-4">Order Summary</h3>

        <ul class="text-gray-800 divide-y mt-4">
          <li class="flex flex-wrap gap-4 text-sm py-3">Subtotal <span class="ml-auto font-bold">$73.00</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3">Shipping <span class="ml-auto font-bold">$4.00</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3">Tax <span class="ml-auto font-bold">$4.00</span></li>
          <li class="flex flex-wrap gap-4 text-sm py-3 font-bold">Total <span class="ml-auto">$81.00</span></li>
        </ul>

        <button type="button" class="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">Make Payment</button>

        <div class="mt-8">
          <h3 class="text-lg font-bold text-gray-800 mb-4">Apply promo code</h3>

          <div class="flex border border-blue-600 overflow-hidden max-w-md rounded-md">
            <input type="email" placeholder="Promo code"
              class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
            <button type='button' class="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cart;
