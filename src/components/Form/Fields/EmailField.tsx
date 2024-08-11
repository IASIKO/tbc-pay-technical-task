import Input from "../../UI/Input";
import { FormData } from "../../../types/form-types";
import { FormState, UseFormRegister } from "react-hook-form";
import Button from "../../UI/Button";
import { useFormHook } from "../hook";

type EmailFieldProps = {
	register: UseFormRegister<FormData>;
	formState: FormState<FormData>;
};

const EmailField: React.FC<EmailFieldProps> = ({
	register,
	formState: { errors },
}) => {
	const { onBackButtonHandler } = useFormHook();

	return (
		<>
			<Input
				type="email"
				placeholder="Email"
				name="email.email"
				register={register}
				error={errors.email?.email}
			/>
			<div className="flex justify-between">
				<Button buttonType="button" onClick={onBackButtonHandler}>
					Back
				</Button>
				<Button buttonType="submit">Submit</Button>
			</div>
		</>
	);
};

export default EmailField;
