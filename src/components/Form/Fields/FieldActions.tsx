import Button from "../../UI/Button";

type FieldActionsProps = {
	onBackButtonHandler: () => void;
	onNextButtonHandler: () => void;
};

const FieldActions: React.FC<FieldActionsProps> = ({
	onBackButtonHandler,
	onNextButtonHandler,
}) => {
	return (
		<div className="flex justify-between">
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
