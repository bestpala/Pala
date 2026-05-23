import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { compilePostContent } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/site.config";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { TextLink } from "@/components/ui/TextLink";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = await compilePostContent(post.content);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-border bg-background-alt/40 py-16 sm:py-24">
        <Container narrow>
          <TextLink href="/blog" className="text-sm">
            ← 返回写作
          </TextLink>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tracking-wide text-muted-light">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="text-border-strong">·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-[2.5rem]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-4">
              {post.tags.map((tag) => (
                <Tag key={tag} label={tag} href={`/blog?tag=${tag}`} />
              ))}
            </div>
          )}
        </Container>
      </header>
      <div className="py-14 sm:py-16">
        <Container narrow>
          <div className="prose">{content}</div>
        </Container>
      </div>
      {related.length > 0 && (
        <aside className="border-t border-border py-14">
          <Container narrow>
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-light">
              相关文章
            </h2>
            <ul className="mt-6 space-y-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-base font-medium text-foreground hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </aside>
      )}
    </article>
  );
}
