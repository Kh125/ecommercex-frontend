import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CgShoppingCart, CgLogOut } from "react-icons/cg";
import useCartContext from "../hooks/useCartContext";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { auth, logout } = useAuth();
  const { cartItems, setCartItems } = useCartContext();
  const [itemCount, setItemCount] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    // console.log("Item count", cartItems.length);
    if (cartItems.length > 0) {
      setItemCount(cartItems.length);
    } else {
      setItemCount(0);
    }
  }, [cartItems, setCartItems]);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="text-white cursor-pointer">
                EcommerceX
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {!auth && (
                  <>
                    <Link
                      to="/login"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        currentPath === "/login" ? "bg-gray-700 text-white" : ""
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        currentPath === "/signup"
                          ? "bg-gray-700 text-white"
                          : ""
                      }`}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                {auth && (
                  <>
                    <Link
                      to="/products"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        currentPath === "/products"
                          ? "bg-gray-700 text-white"
                          : ""
                      }`}
                    >
                      Products
                    </Link>
                    <Link
                      to="/cart"
                      className={`relative flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        currentPath === "/cart" ? "bg-gray-700 text-white" : ""
                      }`}
                    >
                      Cart
                      <CgShoppingCart className="ml-1 text-xl" />
                      {itemCount != 0 && (
                        <span className="absolute top-3 right-0 flex items-center justify-center w-[14px] h-[14px] font-semibold text-xs text-white bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2">
                          {/* Replace `itemCount` with your actual item count */}
                          {itemCount}
                        </span>
                      )}
                    </Link>
                    <Link
                      to="/profile"
                      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                        currentPath === "/profile"
                          ? "bg-gray-700 text-white"
                          : ""
                      }`}
                    >
                      Profile
                      <div className="ml-2 w-6 h-6 text-center">
                        <img
                          src={"../images/avatar.jpg"}
                          alt="Profile"
                          className="w-6 h-6 rounded-full object-cover mx-auto"
                        />
                      </div>
                    </Link>
                    <a
                      onClick={logout}
                      className="flex items-center cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Logout <CgLogOut className="ml-1 text-xl" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
