import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { getProductById } from "../api/productApi";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProductById(id);

      setProduct(data);
      setSelectedImage(data.thumbnail);
    } catch (error) {
      console.error(error);
      setError("Product details load झाले नाहीत");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  if (loading) {
    return (
      <h1 className="py-20 text-center text-2xl font-bold">
        Loading Product...
      </h1>
    );
  }

  if (error || !product) {
    return (
      <h1 className="py-20 text-center text-xl font-bold text-red-600">
        {error || "Product not found"}
      </h1>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-6 inline-block font-semibold text-orange-500"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2">
          <div>
            <div className="rounded-xl bg-slate-100 p-6">
              <img
                src={selectedImage}
                alt={product.title}
                className="h-96 w-full object-contain"
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto">
              {product.images?.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg border p-2 ${
                    selectedImage === image
                      ? "border-orange-500"
                      : "border-slate-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-20 w-20 object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-2 font-semibold capitalize text-orange-500">
              {product.category}
            </p>

            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              {product.title}
            </h1>

            <p className="mb-4 leading-7 text-slate-600">
              {product.description}
            </p>

            <p className="mb-3">
              Rating: ⭐ {product.rating}
            </p>

            <p className="mb-3">
              Stock: <strong>{product.stock}</strong>
            </p>

            <p className="mb-6 text-3xl font-bold text-slate-900">
              ${product.price}
            </p>

            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-orange-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;