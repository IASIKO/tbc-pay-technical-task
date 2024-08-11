import Input from "../../UI/Input";
import { FormState, UseFormRegister, UseFormTrigger } from "react-hook-form";
import { FormData } from "../../../types/form-types";
import { useFormHook } from "../hook";
import FieldActions from "./FieldActions";

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
	const { onNextButtonHandler, onBackButtonHandler } = useFormHook(trigger);

	return (
		<>
			<Input
				type="text"
				placeholder="First Name"
				name="name.firstName"
				register={register}
				error={errors.name?.firstName}
			/>
			<Input
				type="text"
				placeholder="Last Name"
				name="name.lastName"
				register={register}
				error={errors.name?.lastName}
			/>
			<FieldActions
				onNextButtonHandler={onNextButtonHandler}
				onBackButtonHandler={onBackButtonHandler}
			/>
		</>
	);
};

export default NameField;
