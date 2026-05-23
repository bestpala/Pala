type SectionLabelProps = {
  children: React.ReactNode;
  invert?: boolean;
  className?: string;
};

export function SectionLabel({
  children,
  invert,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`mb-8 flex items-center gap-3 ${className}`}>
      <span
        className={`h-px w-8 ${invert ? "bg-accent-soft" : "bg-accent"}`}
        aria-hidden
      />
      <p
        className={`font-inter text-[11px] font-medium uppercase tracking-[0.22em] ${
          invert ? "text-invert-muted" : "text-muted-light"
        }`}
      >
        {children}
      </p>
    </div>
  );
}
