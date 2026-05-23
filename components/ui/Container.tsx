import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
};

export function Container({
  children,
  className = "",
  narrow,
  wide,
}: ContainerProps) {
  const maxWidth = narrow
    ? "max-w-3xl"
    : wide
      ? "max-w-6xl"
      : "max-w-5xl";

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-14 ${maxWidth} ${className}`}
    >
      {children}
    </div>
  );
}
