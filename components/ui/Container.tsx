import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-12 ${
        narrow ? "max-w-3xl" : "max-w-5xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
