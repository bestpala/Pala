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
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { postFormatLabels, postTopicLabels } from "@/lib/types";

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
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [],
    },
    twitter: { images: [] },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = await compilePostContent(post.content);
  const toc = [...post.content.matchAll(/^##\s+(.+)$/gm)].map((match) => ({ title: match[1].trim(), id: match[1].trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "-").replace(/(^-|-$)/g, "") }));
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
      <ReadingProgress />
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
            <Link href={`/topics/${post.topic}`}>{postTopicLabels[post.topic]}</Link>
            <span className="text-border-strong">·</span>
            <span>{postFormatLabels[post.format]}</span>
            <span className="text-border-strong">·</span>
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
          {toc.length > 1 && <nav className="article-toc" aria-label="文章目录"><p className="font-mono">IN THIS PIECE</p><ol>{toc.map((item) => <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>)}</ol></nav>}
          <div className="prose">{content}</div>
          <footer className="article-author"><p className="font-mono">ABOUT THE AUTHOR</p><h2>{siteConfig.author.name} / Pala</h2><p>品牌实践者、内容创作者与社区 Builder，持续写作品牌、技术、内容、社区与商业之间的关系。</p><Link href="/about">Read the full story →</Link></footer>
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
