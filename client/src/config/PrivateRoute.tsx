import { useAppSelector } from "../redux/hooks";
import { Navigate,Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const currentUser = useAppSelector((state)=> state.user);
  const isAuth = currentUser.isAuthenticated;

  return isAuth ? <Outlet/> : <Navigate to="/signin"/>;
};

export default PrivateRoute;
