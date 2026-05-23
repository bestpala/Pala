import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";

export function ContactTeaser() {
  return (
    <section className="py-14 pb-20 sm:py-16 sm:pb-28">
      <Container>
        <SectionLabel>联系与合作</SectionLabel>
        <ul className="mt-2 grid gap-6 sm:grid-cols-2">
          {siteConfig.contactScenarios.slice(0, 4).map((scenario) => (
            <li key={scenario.title} className="max-w-sm">
              <h3 className="text-base font-medium text-foreground">
                {scenario.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {scenario.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <TextLink href="/contact">查看全部合作方式 →</TextLink>
        </div>
      </Container>
    </section>
  );
}
