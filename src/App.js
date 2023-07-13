import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Home from "./component/Home";
import OAuth2RedirectHandler from "./component/OAuth2RedirectHandler";
import Profile from "./component/Profile";

const App = () => {
	const isAuthenticated = true; // Replace with your authentication logic

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/oauth2/redirect"  element={<OAuth2RedirectHandler/>}></Route> 
				{/* <Route
					path="/dashboard"
					element={isAuthenticated ? <Dashboard /> : null}
				/> */}
			</Routes>
		</Router>
	);
};

export default App;
