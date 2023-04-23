import "./css/style.scss";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Homepage } from "./pages/Homepage";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { AuthContext } from "./utlis/AuthContext";
import { useContext } from "react";

function App() {
	const { currentUser } = useContext(AuthContext);
	console.log(`current user - ${currentUser}`);

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		return children;
	};

	// const router = createBrowserRouter(
	// 	createRoutesFromElements(
	// 		<Route path="/">
	// 			<Route
	// 				index
	// 				element={
	// 					<ProtectedRoute>
	// 						<Homepage />
	// 					</ProtectedRoute>
	// 				}
	// 			/>
	// 			<Route path="login" element={<Login />} />
	// 			<Route path="signup" element={<Signup />} />
	// 		</Route>
	// 	)
	// );

	return (
		// <RouterProvider router={router} />
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route
						index
						element={
							<ProtectedRoute>
								<Homepage />
							</ProtectedRoute>
						}
					/>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
