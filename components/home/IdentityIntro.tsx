import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function IdentityIntro() {
  return (
    <Section variant="alt" className="editorial-intro" containerClassName="max-w-6xl">
      <div className="editorial-intro__top">
        <p className="editorial-eyebrow font-mono">NOTES / ARCHIVE</p>
        <div><p className="editorial-intro__copy">文章保存较完整的判断，Notes 留下仍在生长的想法，Archive 让这些思考能在多年后重新被找到。</p><div className="mt-8 flex gap-6 text-sm"><Link href="/blog?format=note" className="text-accent">Browse notes →</Link><Link href="/archive" className="text-accent">Open archive →</Link></div></div>
      </div>
    </Section>
  );
}
