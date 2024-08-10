import { UseFormTrigger } from "react-hook-form";
import { FormData } from "../../types/form-types";
import { useRouteStore } from "../../context/store";

export const useFormHook = (trigger: UseFormTrigger<FormData>) => {
    const { route, actions } = useRouteStore();

	const onNextButtonHandler = async () => {
		let result;

		if (route === "name") {
			result = await trigger(["name.firstName", "name.lastName"], {
				shouldFocus: true,
			});
			if (result) {
				actions.changeRoute("password");
			}
		}
		if (route === "password") {
			result = await trigger(
				["password.password", "password.confirmPassword"],
				{
					shouldFocus: true,
				}
			);
			if (result) {
				actions.changeRoute("email");
			}
		}
	};

	return onNextButtonHandler;
};
