import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../middleware/usePrivateAxios";
import useAuthHelpers from "../utils/Validator";
import { HashLoader } from "react-spinners";
import { createToastMessage } from "../utils/ToastMessage";

const Products = () => {
  const { setAuth } = useAuth();
  const [productList, setProductList] = useState([]);
  const axiosPrivateAPI = useAxiosPrivate();
  const { isTokenExpired } = useAuthHelpers();
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    const fetchProductDataList = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivateAPI.get("/products");

        // console.log(response.data?.products);

        setProductList(response.data?.products);
        setIsLoading(false);
      } catch (error) {
        // console.log(error?.response?.status);
        createToastMessage("Error fetching products!", 4);
        setErrorLoading(true);
        setIsLoading(false);
        isTokenExpired(error?.response?.status);
      }
    };

    setTimeout(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setAuth(null);
      } else {
        fetchProductDataList();
      }
    }, 10);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex mx-auto min-h-screen text-center items-center justify-center text-3xl">
          <HashLoader size={30} loading={isLoading} />
        </div>
      ) : (
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>
            <Link
              to="/products/create"
              className="rounded-md px-6 py-2 text-sm font-medium text-white bg-green-400 hover:bg-green-600 transition duration-100"
            >
              Add New Product
            </Link>
          </div>
          {errorLoading ? (
            <div className="flex flex-col items-center justify-center text-center p-6 my-24">
              <h1 className="text-4xl font-bold text-red-600 mb-4">
                Something went wrong
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Error fetching product list.
              </p>
              <Link
                to="/"
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-200"
              >
                Go Back Home
              </Link>
            </div>
          ) : productList.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center p-6 my-24">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                No Products Available
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                It looks like there are no products available at the moment.
              </p>
              <Link
                to="/products/create"
                className="px-4 py-2 text-white bg-green-400 rounded-md hover:bg-green-600 transition duration-200"
              >
                Add New Product
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {productList.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
