import Input from "../UI/Input";
import { FormState, UseFormRegister, UseFormTrigger } from "react-hook-form";
import Button from "../UI/Button";
import { useRouteStore } from "../../context/store";
import { FormData } from "../../types/form-types";

type NameFieldProps = {
	register: UseFormRegister<FormData>;
	trigger: UseFormTrigger<FormData>;
	formState: FormState<FormData>;
};

const NameField: React.FC<NameFieldProps> = ({
	register,
	trigger,
	formState: { errors },
}) => {
	const { actions } = useRouteStore();

	const onNextButtonHandler = async () => {
		const result = await trigger(["firstName", "lastName"]);
		if (result) {
			actions.changeRoute("password");
		}
	};

	return (
		<>
			<Input
				type="text"
				placeholder="First Name"
				name="firstName"
				register={register}
				error={errors.firstName}
			/>
			<Input
				type="text"
				placeholder="Last Name"
				name="lastName"
				register={register}
				error={errors.lastName}
			/>
			<div className="flex justify-between">
				<Button buttonType="button" onClick={() => actions.changeRoute("home")}>
					Back
				</Button>
				<Button buttonType="button" onClick={onNextButtonHandler}>
					Next
				</Button>
			</div>
		</>
	);
};

export default NameField;
