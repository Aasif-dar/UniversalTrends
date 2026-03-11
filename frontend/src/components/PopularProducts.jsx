import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products/popular")
      .then((res) => res.json())
      .then((data) => {
        console.log("Popular products:", data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!products.length) {
    return (
      <p className="text-center py-10 text-gray-500">
        No popular products found
      </p>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
            Popular Products
          </h2>

          <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition">
            View More
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;