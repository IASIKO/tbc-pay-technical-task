import Input from "../../UI/Input";
import { FormData } from "../../../types/form-types";
import { FormState, UseFormRegister } from "react-hook-form";

type EmailFieldProps = {
	register: UseFormRegister<FormData>;
	formState: FormState<FormData>;
};

const EmailField = ({ register, formState: { errors } }: EmailFieldProps) => {
	return (
		<>
			<Input
				type="email"
				placeholder="Email"
				name="email.email"
				register={register}
				error={errors.email?.email}
			/>
		</>
	);
};

export default EmailField;
