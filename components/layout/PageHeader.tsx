import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  serif?: boolean;
};

export function PageHeader({
  title,
  description,
  children,
  serif = true,
}: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-background-alt/50">
      <Container narrow className="py-16 sm:py-24">
        <h1
          className={`text-3xl tracking-tight text-foreground sm:text-4xl ${
            serif ? "font-serif font-medium" : "font-medium"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
