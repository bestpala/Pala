import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Divider } from "@/components/ui/Divider";

export function IdentityIntro() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <Divider />
        <div className="pt-14">
          <SectionLabel>关于我</SectionLabel>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {siteConfig.hero.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
