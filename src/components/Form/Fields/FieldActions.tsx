import { UseFormTrigger } from "react-hook-form";
import Button from "../../UI/Button";
import { useFormHook } from "../hook";
import { FormData } from "../../../types/form-types";

type FieldActionsProps = {
	trigger: UseFormTrigger<FormData>;
};

const FieldActions: React.FC<FieldActionsProps> = ({ trigger }) => {
	const { onNextButtonHandler, onBackButtonHandler } = useFormHook(trigger);

	return (
		<div className="w-full p-4 flex justify-between">
			<Button buttonType="button" onClick={onBackButtonHandler}>
				Back
			</Button>
			<Button buttonType="button" onClick={onNextButtonHandler}>
				Next
			</Button>
		</div>
	);
};

export default FieldActions;
