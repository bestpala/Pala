import fs from "fs";
import path from "path";
import { parse } from "yaml";

export function readYamlFile<T>(relativePath: string): T {
  const filePath = path.join(process.cwd(), relativePath);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return parse(fileContents) as T;
}

export function readYamlDirectory<T extends { slug: string }>(
  directory: string,
): T[] {
  const dirPath = path.join(process.cwd(), directory);
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".yaml") || file.endsWith(".yml"))
    .map((file) => {
      const fileContents = fs.readFileSync(path.join(dirPath, file), "utf8");
      const data = parse(fileContents) as Omit<T, "slug">;
      const slug = file.replace(/\.ya?ml$/, "");
      return { ...data, slug } as T;
    });
}
