import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="px-4 py-2 bg-primary rounded-md text-white font-bold cursor-pointer duration-150" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
