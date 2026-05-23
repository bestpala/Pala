import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionVariant = "default" | "alt" | "invert";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
  narrow?: boolean;
  id?: string;
};

const variantClass: Record<SectionVariant, string> = {
  default: "",
  alt: "section-alt",
  invert: "section-invert",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  variant = "default",
  narrow,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${variantClass[variant]} ${className}`}>
      <Container narrow={narrow} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
