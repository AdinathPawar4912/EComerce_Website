import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-slate-600">
            Please Products Add to Carts
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow md:flex-row md:items-center"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-32 w-32 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-lg font-semibold text-orange-500">
                    ${item.price}
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                      className="h-9 w-9 rounded bg-slate-200 text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                      className="h-9 w-9 rounded bg-slate-900 text-xl font-bold text-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">
                  <p className="text-xl font-bold text-slate-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                    className="rounded-lg bg-red-100 p-3 text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-5 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mb-4 flex justify-between">
              <span>Total Items</span>

              <span className="font-bold">
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="mb-6 flex justify-between border-t pt-4 text-xl font-bold">
              <span>Total Price</span>

              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full rounded-lg bg-orange-500 px-4 py-3 font-semibold text-white hover:bg-orange-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;