import { useRouteStore } from "./context/store";
import Header from "./components/Header";
import Form from "./components/Form/Form";
import Home from "./components/Home";

function App() {
	const { route } = useRouteStore();

	return (
		<>
			<Header />
			{route === "home" ? <Home /> : <Form />}
		</>
	);
}

export default App;
