import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
