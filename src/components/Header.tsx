import logo from "../assets/images/tbc-pay-logo.svg";
import { useRouteStore } from "../context/store";
import Button from "./UI/Button";

const Header = () => {
	const { actions } = useRouteStore();
	return (
		<header className="bg-white flex justify-center py-6">
			<div className="w-[1100px] flex justify-between items-center">
				<img src={logo} />
				<Button buttonType="button" onClick={() => actions.changeRoute("home")}>
					Home
				</Button>
			</div>
		</header>
	);
};

export default Header;
