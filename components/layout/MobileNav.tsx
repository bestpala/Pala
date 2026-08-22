"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/site.config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }

      if (event.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [open]);

  return (
    <div className="mobile-nav md:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="mobile-nav__trigger"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {open && (
        <div ref={panelRef} id="mobile-site-menu" className="mobile-nav__panel" role="dialog" aria-modal="true" aria-label="网站导航">
          <div className="mobile-nav__top">
            <span className="font-serif">PALA</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="关闭导航"><X aria-hidden="true" /></button>
          </div>
          <nav aria-label="移动端主导航">
            {siteConfig.nav.map((item, index) => (
              <Link key={item.href} href={item.href} ref={index === 0 ? firstLinkRef : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-nav__foot">
            <a href={`mailto:${siteConfig.links.email}`}>Email</a>
            <span>Brands · Technology · People</span>
          </div>
        </div>
      )}
    </div>
  );
}
