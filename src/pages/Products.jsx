import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../middleware/usePrivateAxios";
import useAuthHelpers from "../utils/Validator";

const Products = () => {
  const { setAuth } = useAuth();
  const [productList, setProductList] = useState([]);
  const axiosPrivateAPI = useAxiosPrivate();
  const { isTokenExpired } = useAuthHelpers();

  useEffect(() => {
    const fetchProductDataList = async () => {
      try {
        const response = await axiosPrivateAPI.get("/products");

        // console.log(response.data?.products);

        setProductList(response.data?.products);
      } catch (error) {
        // console.log(error?.response?.status);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productList &&
          productList.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
