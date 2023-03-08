import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export const PrivateRoute = ({ children }) => {
  //Saber en que parte de la aplicacion estamos
  const { pathname, search } = useLocation();
  localStorage.setItem("lastPath", pathname + search);
  const { checking } = useSelector((state) => state.auth);
  return checking ? children : <Navigate to="/login" />;
};
