import { FormFieldProps } from "../../types/form-types";

const Input: React.FC<FormFieldProps> = ({
	type,
	placeholder,
	name,
	register,
	error,
}) => (
	<>
		<input
			className="rounded-lg px-4 py-2 border-2"
			type={type}
			placeholder={placeholder}
			{...register(name)}
		/>
		{error && <span className="text-red-600 text-[18px]">{error.message}</span>}
	</>
);
export default Input;
