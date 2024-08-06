import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const useAuthHelpers = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isTokenExpired = (status) => {
    if (status === 400) {
      logout();
      navigate("/login");
    }
  };

  return { isTokenExpired };
};

export default useAuthHelpers;
