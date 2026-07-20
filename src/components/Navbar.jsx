
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";

const Navbar = () => {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-950 text-white shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold"
        >
          <span className="rounded-lg bg-orange-500 p-2">
            <FaShoppingBag />
          </span>

          <span>
            Shop
            <span className="text-orange-500">Easy</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-semibold transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="relative text-2xl transition hover:text-orange-500"
          >
            <FaShoppingCart />

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-6 min-w-6 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

