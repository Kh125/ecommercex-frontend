import { Link } from "react-router-dom";
import { AiFillDollarCircle, AiOutlineArrowRight } from "react-icons/ai";

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
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="flex items-center text-gray-600 my-2">
            <AiFillDollarCircle className="mr-1 mt-1 text-xl text-orange-400" />
            {product.price}
          </p>
        </div>
        <Link
          to={`/products/${product._id}`}
          className="flex items-center py-2 text-green-600 underline hover:text-green-400 transition duration-100 text-sm"
        >
          View Details
          <AiOutlineArrowRight className="mt-1 ml-1 text-sm" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
