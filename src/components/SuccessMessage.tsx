import { UseFormWatch } from "react-hook-form";
import { FormData } from "../types/form-types";

type SuccessMessageProps = {
	watch: UseFormWatch<FormData>;
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({ watch }) => {
	const { firstName, lastName } = watch("name");
	const { email } = watch("email");

	return (
		<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg w-11/12">
			<div className="flex items-center gap-2">
				<svg
					className="fill-current w-6 h-6 mr-4 text-green-700"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M9 12l-2-2 1-1 1 1 4-4 1 1-5 5z" />
				</svg>
				<div className="flex gap-2 flex-col">
					<p className="font-bold">Success!</p>
					<p className="text-sm">
						<strong>{`${firstName} ${lastName}`}</strong>, you have successfully
						completed the form!
					</p>
					<p className="text-xs text-gray-600">
						Confirmation sent to: <strong>{email}</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SuccessMessage;
