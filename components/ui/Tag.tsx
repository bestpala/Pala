import Link from "next/link";

type TagProps = {
  label: string;
  href?: string;
};

export function Tag({ label, href }: TagProps) {
  const className =
    "inline-block text-xs text-muted-light transition-colors hover:text-accent";

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
