import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostFormat, PostTopic } from "./types";
import { sortByDateDesc } from "./utils";

const postsDirectory = path.join(process.cwd(), "content/posts");

function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function parsePost(slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const mdPath = path.join(postsDirectory, `${realSlug}.md`);
  const filePath = fs.existsSync(fullPath) ? fullPath : mdPath;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);
  const normalizeDate = (value: unknown) => value instanceof Date ? value.toISOString().slice(0, 10) : String(value);

  return {
    slug: realSlug,
    title: data.title as string,
    description: data.description as string,
    date: normalizeDate(data.date),
    updated: data.updated ? normalizeDate(data.updated) : undefined,
    tags: (data.tags as string[]) ?? [],
    topic: (data.topic as PostTopic | undefined) ?? "technology",
    format: (data.format as PostFormat | undefined) ?? "essay",
    series: data.series as string | undefined,
    featured: data.featured as boolean | undefined,
    draft: data.draft as boolean | undefined,
    content,
    readingTime: stats.text,
  };
}

export function getAllPosts(includeDrafts = false): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => parsePost(slug))
    .filter((post) => includeDrafts || !post.draft);

  return sortByDateDesc(posts);
}

export function getPostBySlug(slug: string): Post | undefined {
  try {
    return parsePost(slug);
  } catch {
    return undefined;
  }
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getPostsByTopic(topic: string): Post[] {
  return getAllPosts().filter((post) => post.topic === topic);
}

export function getPostsByFormat(format: string): Post[] {
  return getAllPosts().filter((post) => post.format === format);
}

export function getFeaturedPosts(limit = 6): Post[] {
  const featured = getAllPosts().filter((post) => post.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return getAllPosts().slice(0, limit);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllPosts().forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
