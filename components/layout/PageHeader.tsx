import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container narrow>
        <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
