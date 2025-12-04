import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-6xl px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
