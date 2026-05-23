import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-lg font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="leading-[1.85]" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline underline-offset-4"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc space-y-2 pl-5" {...props} />,
  ol: (props) => <ol className="list-decimal space-y-2 pl-5" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-border pl-4 text-muted"
      {...props}
    />
  ),
  code: (props) => {
    const isBlock = String(props.children).includes("\n");
    if (isBlock) {
      return <code {...props} />;
    }
    return (
      <code
        className="rounded bg-[#f4f4f2] px-1.5 py-0.5 font-mono text-[0.875em]"
        {...props}
      />
    );
  },
  pre: (props) => (
    <pre
      className="overflow-x-auto rounded border border-border bg-[#f4f4f2] p-4 font-mono text-sm leading-relaxed"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
};
