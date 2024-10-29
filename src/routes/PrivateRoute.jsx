import { Navigate } from "react-router-dom";

export default PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/auth" />;
};