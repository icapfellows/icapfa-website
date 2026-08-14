"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded text-maroon"
      >
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>

      {open
        ? createPortal(
            // Rendered via a portal straight to <body> — the header uses
            // backdrop-blur, which (in Chromium) creates a containing block
            // for fixed-position descendants, collapsing this panel's height
            // if it stays nested inside the header.
            <div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-[61px] bottom-0 z-40 overflow-y-auto bg-white"
            >
              <nav aria-label="Primary" className="flex flex-col px-6 py-6">
                {primaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-maroon/10 py-4 text-base font-semibold text-maroon"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={siteConfig.links.memberLogin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center justify-center rounded bg-maroon px-5 py-3 text-sm font-bold text-white"
                >
                  Member Login
                </a>
              </nav>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
