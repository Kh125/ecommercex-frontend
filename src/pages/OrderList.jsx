import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAuthHelpers from "../utils/Validator";
import useAxiosPrivate from "../middleware/usePrivateAxios";
import OrderCard from "../components/OrderCard";
import EmptyOrderList from "../components/EmptyOrderList";

const OrderList = () => {
  const { auth } = useAuth();
  const { isTokenExpired } = useAuthHelpers();
  const axiosPrivateAPI = useAxiosPrivate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const response = await axiosPrivateAPI.get(`/orders/${auth?.user}`);
        setOrders(response?.data.orders);
        console.log("Order History", response?.data);
      } catch (error) {
        console.log("order error", error?.response);
        isTokenExpired(error?.response?.status);
      }
    };

    fetchOrderList();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Your Order History
        </h1>
        {orders.length === 0 ? (
          <EmptyOrderList />
        ) : (
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderList;
