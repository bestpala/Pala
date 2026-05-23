import type { Project } from "./types";
import { readYamlDirectory } from "./yaml-content";
import { sortByDateDesc } from "./utils";

export function getAllProjects(): Project[] {
  return sortByDateDesc(readYamlDirectory<Project>("content/projects"));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
