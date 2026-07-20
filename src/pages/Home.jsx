import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getAllProducts } from "../api/productApi";
import {
  getCategories,
  getProductsByCategory,
} from "../api/categoryApi";

import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError("");

      const [productData, categoryData] = await Promise.all([
        getAllProducts(),
        getCategories(),
      ]);

      setProducts(productData.products);
      setCategories(categoryData);
    } catch (error) {
      console.error(error);
      setError("do not this category products ");
      toast.error("Not Data Load");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (categoryName) => {
    try {
      setLoading(true);
      setError("");
      setSelectedCategory(categoryName);

      if (categoryName === "all") {
        const data = await getAllProducts();
        setProducts(data.products);
      } else {
        const data = await getProductsByCategory(categoryName);
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);
      setError("Do not load this category products");
      toast.error("Do not load this category products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-orange-500">
            Explore Products
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            Shop By Category
          </h1>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold capitalize text-slate-900">
            {selectedCategory === "all"
              ? "All Products"
              : selectedCategory}
          </h2>

          <p className="text-slate-600">
            {products.length} Products
          </p>
        </div>

        {loading && (
          <p className="py-20 text-center text-2xl font-bold">
            Loading Products...
          </p>
        )}

        {error && !loading && (
          <p className="py-20 text-center text-xl font-semibold text-red-600">
            {error}
          </p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;