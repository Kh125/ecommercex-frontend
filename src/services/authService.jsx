import useCartContext from "../hooks/useCartContext";
import useAuth from "../hooks/useAuth";

const AuthService = () => {
  const { setCartItems } = useCartContext();
  const { setAuth } = useAuth;
  const authLogout = () => {
    // console.log("SETAUTH", setAuth);
    // console.log("Cart", setCartItems);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("cartItems");
    // setCartItems([]);
  };

  return { authLogout };
};

export default AuthService;
