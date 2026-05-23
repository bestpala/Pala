type SectionLabelProps = {
  children: React.ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-light">
      {children}
    </p>
  );
}
