type SuccessMessageProps = {
	userData: string[];
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({ userData }) => {
	const [firstName, lastName, email] = userData;

	return (
		<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg w-[600px]">
			<div className="flex items-center">
				<svg
					className="fill-current w-6 h-6 mr-4 text-green-700"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M9 12l-2-2 1-1 1 1 4-4 1 1-5 5z" />
				</svg>
				<div>
					<p className="font-bold">Success!</p>
					<p className="text-sm">
						{`${firstName} ${lastName}, you have successfully completed the form!`}
					</p>
					<p className="text-xs text-gray-600">{`Confirmation sent to: ${email}`}</p>
				</div>
			</div>
		</div>
	);
};

export default SuccessMessage;
