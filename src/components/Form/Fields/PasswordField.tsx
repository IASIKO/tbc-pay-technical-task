import Input from "../../UI/Input";
import { FormState, UseFormRegister, UseFormTrigger } from "react-hook-form";
import { FormData } from "../../../types/form-types";
import { useFormHook } from "../hook";
import FieldActions from "./FieldActions";

type PasswordFieldProps = {
	register: UseFormRegister<FormData>;
	trigger: UseFormTrigger<FormData>;
	formState: FormState<FormData>;
};

const PasswordField: React.FC<PasswordFieldProps> = ({
	register,
	trigger,
	formState: { errors },
}) => {
	const { onNextButtonHandler, onBackButtonHandler } = useFormHook(trigger);

	return (
		<>
			<Input
				type="password"
				placeholder="Password"
				name="password.password"
				register={register}
				error={errors.password?.password}
			/>
			<Input
				type="password"
				placeholder="Confirm Password"
				name="password.confirmPassword"
				register={register}
				error={errors.password?.confirmPassword}
			/>
			<FieldActions
				onNextButtonHandler={onNextButtonHandler}
				onBackButtonHandler={onBackButtonHandler}
			/>
		</>
	);
};

export default PasswordField;
