import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Home from "./component/Home";

const App = () => {
	const isAuthenticated = true; // Replace with your authentication logic

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/dashboard"
					element={isAuthenticated ? <Dashboard /> : null}
				/>
			</Routes>
		</Router>
	);
};

export default App;
