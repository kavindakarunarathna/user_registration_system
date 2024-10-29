import { Navigate, Outlet } from "react-router-dom";

export default PrivateRoutesWrapper = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };