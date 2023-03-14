import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const PublicRoute = ({ children }) => {
  //Ultimo path en cual quedo despues de refrescar la pagina
  const lastPath = localStorage.getItem("lastPath") || '/';
  const { checking } = useSelector((state) => state.auth);
  return checking ? <Navigate to={lastPath} /> : children;
};
