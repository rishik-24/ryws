"use client";

import ThemeToggleButton from "@/components/ThemeToggleButton";
import { navLinks, NGO_NAME_SHORT } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header
      className="fixed right-0 left-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl"
      aria-label="Site header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href="/#top"
          className="group flex flex-col"
          onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-tight sm:text-xl">
            {NGO_NAME_SHORT}
          </span>
          <span className="text-muted-foreground hidden text-xs sm:block">
            Rudrapur Youth Welfare Society
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggleButton />
          <button
            type="button"
            className="rounded-lg border border-border p-2"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border/60 bg-background/95 md:hidden",
          open ? "block" : "hidden",
        )}>
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4"
          aria-label="Mobile primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium hover:bg-muted">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
