import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => {
	if (!isAuthenticated) {
		return <Route {...rest} element={<Component />} />;
	} else {
		return <Navigate to="/dashboard" replace />;
	}
};
export default PublicRoute;
