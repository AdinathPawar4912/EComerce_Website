import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow-md">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-52 w-full object-contain"
        />
      </Link>

      <h2 className="mt-4 text-lg font-bold">
        {product.title}
      </h2>

      <p className="mt-2 text-xl font-semibold text-orange-500">
        ${product.price}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Link
          to={`/product/${product.id}`}
          className="rounded-lg border border-slate-900 px-4 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100"
        >
          View Details
        </Link>

        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-lg bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-orange-500"
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;