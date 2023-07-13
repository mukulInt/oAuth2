import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
	if (isAuthenticated) {
		return <Route {...rest} element={<Component />} />;
	} else {
		return <Navigate to="/" replace />;
	}
};
export default PrivateRoute;
