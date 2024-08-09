import Input from "../UI/Input";
import Button from "../UI/Button";
import { useRouteStore } from "../../context/store";
import { FormData } from "../../types/form-types";
import { FormState, UseFormRegister } from "react-hook-form";

type EmailFieldProps = {
	register: UseFormRegister<FormData>;
	formState: FormState<FormData>;
};

const EmailField = ({ register, formState: { errors } }: EmailFieldProps) => {
	const { actions } = useRouteStore();

	return (
		<>
			<Input
				type="email"
				placeholder="Email"
				name="email"
				register={register}
				error={errors.email}
			/>
			<div className="flex justify-between">
				<Button
					buttonType="button"
					onClick={() => actions.changeRoute("password")}
				>
					Back
				</Button>
				<Button buttonType="submit">Submit</Button>
			</div>
		</>
	);
};

export default EmailField;
