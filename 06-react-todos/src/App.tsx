import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router";
import Navigation from "./pages/partials/Navigation";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TodosPage from "./pages/TodosPage";
import "./assets/scss/App.scss";

function App() {
	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/todos">
						{/* /todos */}
						<Route path="" element={<TodosPage />} />
					</Route>

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App;
