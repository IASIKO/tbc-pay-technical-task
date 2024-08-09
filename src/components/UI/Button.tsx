import React, { ReactNode } from "react";

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	buttonType: "submit" | "reset" | "button";
	isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	buttonType,
	isDisabled,
}) => {
	return (
		<button
			disabled={isDisabled}
			type={buttonType}
			className="px-4 py-2 bg-primary rounded-md text-white font-bold cursor-pointer duration-150"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
