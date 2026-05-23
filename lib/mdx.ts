import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog/MDXComponents";

export async function compilePostContent(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });

  return content;
}
