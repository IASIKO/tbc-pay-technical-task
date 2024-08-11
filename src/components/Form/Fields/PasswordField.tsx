import Input from "../../UI/Input";
import { FormState, UseFormRegister } from "react-hook-form";
import { FormData } from "../../../types/form-types";

type PasswordFieldProps = {
	register: UseFormRegister<FormData>;
	formState: FormState<FormData>;
};

const PasswordField: React.FC<PasswordFieldProps> = ({
	register,
	formState: { errors },
}) => {
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
		</>
	);
};

export default PasswordField;
