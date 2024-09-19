import { useAppSelector } from "../redux/Provider";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = useAppSelector((state)=> state.global.isAuthenticated);

  return isAuth ? <Outlet/> : <Navigate to="/signin"/>;
};

export default PrivateRoute;
