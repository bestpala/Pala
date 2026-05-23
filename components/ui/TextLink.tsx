import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { isExternalUrl } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function TextLink({
  href,
  children,
  className = "",
  external,
}: TextLinkProps) {
  const isExternal = external ?? isExternalUrl(href);
  const classes = `inline-flex items-center gap-1 text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
