import { useRouteStore } from "../context/store";
import Card from "./UI/Card";

const Home = () => {
	const { actions } = useRouteStore();
	return (
		<Card>
			<button
				onClick={() => actions.changeRoute("name")}
				className="uppercase bg-primary p-4 rounded-md text-white font-bold text-[40px] cursor-pointer"
			>
				Get started
			</button>
		</Card>
	);
};

export default Home;
