import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosAPI } from "../middleware/axiosHelper";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await axiosAPI.get(`/products/${id}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Product Data", response.data);
        setProduct(response.data?.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductInfo();
  }, []);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Product Details
        </h1>
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Image Section */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src={
                product.image ||
                "https://i.ibb.co/QMdWfzX/component-image-one.png"
              } // Replace with actual image URL
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          {/* Details Section */}
          <div className="md:w-2/3 md:pl-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600">Name</td>
                  <td className="py-2 px-4 text-gray-800">{product.name}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600">Description</td>
                  <td className="py-2 px-4 text-gray-800">
                    {product.description}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600">Price</td>
                  <td className="py-2 px-4 text-gray-800">${product.price}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600">Stock</td>
                  <td className="py-2 px-4 text-gray-800">{product.stock}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-4 text-gray-600">Colors</td>
                  <td className="py-2 px-4 text-gray-800">{product.color}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 flex space-x-4">
              <Link
                to="/products"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Go Back
              </Link>
              <button
                onClick={() => alert("Add to cart functionality")}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Add to Cart
              </button>
              <Link
                to={`/products/update/${id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Update Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
