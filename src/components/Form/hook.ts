import { UseFormTrigger } from "react-hook-form";
import { FormData } from "../../types/form-types";
import { useRouteStore } from "../../context/store";

export const useFormHook = (trigger: UseFormTrigger<FormData>) => {
	const { route, actions } = useRouteStore();

	const onNextButtonHandler = async () => {
		let result;

		if (route === "name") {
			result = await trigger("name", {
				shouldFocus: true,
			});
			if (result) {
				actions.changeRoute("password");
			}
		}
		if (route === "password") {
			result = await trigger("password", {
				shouldFocus: true,
			});
			if (result) {
				actions.changeRoute("email");
			}
		}
	};

	const onBackButtonHandler = () => {
		if (route === "name") {
			actions.changeRoute("home");
		}
		if (route === "password") {
			actions.changeRoute("name");
		}
		if (route === "email") {
			actions.changeRoute("password");
		}
	};

	return { onNextButtonHandler, onBackButtonHandler };
};
