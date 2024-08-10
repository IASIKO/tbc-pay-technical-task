import Input from "../../UI/Input";
import { FormState, UseFormRegister } from "react-hook-form";
import { FormData } from "../../../types/form-types";

type NameFieldProps = {
	register: UseFormRegister<FormData>;
	formState: FormState<FormData>;
};

const NameField: React.FC<NameFieldProps> = ({
	register,
	formState: { errors },
}) => {
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
		</>
	);
};

export default NameField;
