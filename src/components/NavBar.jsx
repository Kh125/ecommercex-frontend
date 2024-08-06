import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { CgShoppingCart, CgLogOut } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
  const { auth, logout } = useAuth();

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
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
                {auth && (
                  <>
                    <Link
                      to="/products"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Products
                    </Link>
                    <Link
                      to="/cart"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <CgShoppingCart className="mr-1 text-xl" /> Cart
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Profile <AiOutlineUser className="ml-1 text-xl" />
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
