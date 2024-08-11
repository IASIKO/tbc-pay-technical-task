import Input from "../../UI/Input";
import { FormData } from "../../../types/form-types";
import { FormState, UseFormRegister, UseFormTrigger } from "react-hook-form";
import Button from "../../UI/Button";
import { useFormHook } from "../hook";

type EmailFieldProps = {
	register: UseFormRegister<FormData>;
	trigger: UseFormTrigger<FormData>;
	formState: FormState<FormData>;
};

const EmailField: React.FC<EmailFieldProps> = ({
	register,
	trigger,
	formState: { errors },
}) => {
	const { onBackButtonHandler } = useFormHook(trigger);

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
