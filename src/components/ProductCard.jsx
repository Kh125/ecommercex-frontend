import { Link, useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product._id}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <img
        src={product.image || "https://placehold.co/300x200/d1d4ff/352cb5.png"} // Replace with actual image URL
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-1 mb-2">${product.price}</p>
        <Link
          to={`/products/${product._id}`}
          className="py-2 text-blue-600 underline hover:text-blue-400 transition duration-100 text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
