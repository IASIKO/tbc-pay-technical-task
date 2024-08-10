import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <section className="flex justify-center mt-8">
      <div className="w-[400px] h-[600px] p-4 items-center bg-white shadow-lg rounded-lg flex justify-center flex-col">
        {children}
      </div>
    </section>
  );
};

export default Card;
