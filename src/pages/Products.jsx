import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../middleware/usePrivateAxios";

const Products = () => {
  const { auth, setAuth } = useAuth();
  const [products, setProducts] = useState([]);
  const axiosPrivateAPI = useAxiosPrivate();

  // const checkTokenValidity = async () => {
  //   const controller = new AbortController();

  //   try {
  //     const response = await axiosAPI.get("/auth/verifyAccessToken", {
  //       params: {
  //         accessToken: auth?.token,
  //       },
  //       signal: controller.signal,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     return response.data;
  //   } catch (error) {
  //     console.log("Error", error.response?.data);
  //     setAuth(null);
  //     localStorage.removeItem("accessToken");
  //   } finally {
  //     controller.abort("Abort Verifying token.");
  //   }
  // };

  useEffect(() => {
    // const checkValidity = async () => {
    //   try {
    //     const validity = await checkTokenValidity();
    //     console.log("Validity", validity);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    const fetchProductDataList = async () => {
      try {
        const response = await axiosPrivateAPI.get("/products");

        console.log(response.data?.products);

        setProducts(response.data?.products);
      } catch (error) {
        console.log(error);
      }
    };

    // if (auth?.token) {
    //   checkValidity();
    // }

    setTimeout(() => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setAuth(null);
      } else {
        fetchProductDataList();
      }
    }, 10);

    // fetchProductDataList();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>
        <Link
          to="/products/create"
          className="rounded-md px-6 py-2 text-sm font-medium text-white bg-blue-400 hover:bg-blue-600 transition duration-100"
        >
          Add New Product
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
