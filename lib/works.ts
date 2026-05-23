import type { Work } from "./types";
import { readYamlDirectory } from "./yaml-content";
import { sortByDateDesc } from "./utils";

export function getAllWorks(): Work[] {
  return sortByDateDesc(readYamlDirectory<Work>("content/works"));
}

export function getFeaturedWorks(limit = 4): Work[] {
  const featured = getAllWorks().filter((work) => work.featured);
  if (featured.length >= limit) return featured.slice(0, limit);
  return getAllWorks().slice(0, limit);
}

export function getWorkBySlug(slug: string): Work | undefined {
  return getAllWorks().find((work) => work.slug === slug);
}
