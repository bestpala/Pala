import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { isExternalUrl } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  invert?: boolean;
};

export function TextLink({
  href,
  children,
  className = "",
  external,
  invert,
}: TextLinkProps) {
  const isExternal = external ?? isExternalUrl(href);
  const classes = `group inline-flex items-center gap-1 transition-colors ${
    invert
      ? "text-[#e8e8e4] hover:text-white"
      : "text-accent hover:text-accent-soft"
  } ${className}`;

  const underline = (
    <span
      className={`border-b pb-px transition-colors ${
        invert
          ? "border-white/25 group-hover:border-white/60"
          : "border-accent/30 group-hover:border-accent"
      }`}
    >
      {children}
    </span>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {underline}
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-60 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {underline}
    </Link>
  );
}
