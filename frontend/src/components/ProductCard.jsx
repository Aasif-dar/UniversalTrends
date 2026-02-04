import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="block bg-white border rounded overflow-hidden hover:shadow-md transition"
    >
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-3">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-gray-600 text-sm">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
