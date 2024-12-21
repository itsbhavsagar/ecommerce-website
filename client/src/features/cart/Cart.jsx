import { useSelector } from 'react-redux';
import CartRow from './CartRow';

const Cart = () => {
  let cartData = useSelector((state) => state.cart.items);
  console.log(cartData);

  return (
    <>
      <div className="font-sans bg-white">
        <div className="grid lg:grid-cols-3 gap-10 p-4">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartData.map((item) => (
              <CartRow obj={item} key={item.id} />
            ))}
          </div>

          {/* Order Summary - Make this sticky */}
          <div className="shadow-md p-6 lg:sticky lg:top-0 h-max">
            <h3 className="text-lg font-bold text-gray-800 border-b pb-4">
              Order Summary
            </h3>

            <ul className="text-gray-800 divide-y mt-4">
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Subtotal <span className="ml-auto font-bold">$73.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Shipping <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm py-3 font-bold">
                Total <span className="ml-auto">$81.00</span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-4 text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Make Payment
            </button>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Apply promo code
              </h3>

              <div className="flex border border-blue-600 overflow-hidden max-w-md rounded-md">
                <input
                  type="email"
                  placeholder="Promo code"
                  className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5"
                />
                <button
                  type="button"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-5 text-sm text-white"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
