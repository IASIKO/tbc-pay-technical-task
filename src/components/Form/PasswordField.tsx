import Input from "../UI/Input";
import Button from "../UI/Button";
import { FormState, UseFormRegister, UseFormTrigger } from "react-hook-form";
import { useRouteStore } from "../../context/store";
import { FormData } from "../../types/form-types";

type PasswordFieldProps = {
	register: UseFormRegister<FormData>;
	trigger: UseFormTrigger<FormData>;
	formState: FormState<FormData>;
};

const PasswordField = ({
	register,
	trigger,
	formState: { errors },
}: PasswordFieldProps) => {
	const { actions } = useRouteStore();

	const onNextButtonHandler = async () => {
		const result = await trigger(["password", "confirmPassword"]);
		if (result) {
			actions.changeRoute("email");
		}
	};

	return (
		<>
			<Input
				type="text"
				placeholder="Password"
				name="password"
				register={register}
				error={errors.password}
			/>
			<Input
				type="text"
				placeholder="Confirm Password"
				name="confirmPassword"
				register={register}
				error={errors.confirmPassword}
			/>
			<div className="flex justify-between">
				<Button buttonType="button" onClick={() => actions.changeRoute("name")}>
					Back
				</Button>
				<Button buttonType="button" onClick={onNextButtonHandler}>
					Next
				</Button>
			</div>
		</>
	);
};

export default PasswordField;
