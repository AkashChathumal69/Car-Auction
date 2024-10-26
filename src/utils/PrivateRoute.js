import PropTypes from "prop-types"; // Import PropTypes
import { Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext.js";
import { useContext } from "react";

// Private Route that redirects to /login if the user is not authenticated
const PrivateRoute = ({ children }) => {
  const { user, authToken } = useContext(AuthContext);

  // Ensure user and valid token are both available
  return user && authToken ? children : <Navigate to="/login" />;
};

// Define prop types for PrivateRoute
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

// Private Route that redirects to /Dashboard if the user is authenticated (for login page)
const PrivateRouteLogin = ({ children }) => {
  const { user, authToken } = useContext(AuthContext);

  // If the user is authenticated, redirect to dashboard
  return user && authToken ? <Navigate to="/" /> : children;
};

// Define prop types for PrivateRouteLogin
PrivateRouteLogin.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default PrivateRoute;
export { PrivateRouteLogin };
