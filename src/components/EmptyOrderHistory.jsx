import { Link } from "react-router-dom";

const EmptyOrderHistory = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Order Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We couldn't find the order you're looking for. It might have been
          removed or never existed.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default EmptyOrderHistory;
