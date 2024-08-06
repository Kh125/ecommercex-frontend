import React from "react";
import CartProductCard from "../components/CartProductCard";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
  const { cartItems, setCartItems } = useCartContext();

  const handleStockChange = (productId, newStock) => {
    setCartItems((items) => {
      const updatedItems = items.map((item) =>
        item._id === productId ? { ...item, buyCount: newStock } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      return updatedItems;
    });
  };

  const handleProductOrder = (e) => {
    e.preventDefault();
    console.log("Product Ordered", cartItems);
  };

  console.log("C", cartItems);

  return (
    <form
      onSubmit={handleProductOrder}
      className="p-6 bg-grp-6 bg-gray-50 min-h-screen"
    >
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 pb-2">
          Cart Items
        </h1>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              className="w-24 h-24 mb-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h18M3 7h18M3 11h18M3 15h18M3 19h18"
              />
            </svg>
            <h2 className="text-lg font-semibold text-gray-600">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Add items to your cart to see them here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartProductCard
                key={item._id}
                product={item}
                onItemCountChange={handleStockChange}
              />
            ))}
          </div>
        )}
        <div className="mt-10 flex items-center justify-end">
          <button
            type="submit"
            className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
          >
            <svg
              className="w-5 h-5 mr-2 -ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Cart;
