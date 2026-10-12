import { contact, NGO_NAME, NGO_NAME_SHORT } from "@/lib/site-content";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-bold">{NGO_NAME_SHORT}</p>
          <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-relaxed">
            {NGO_NAME} — community welfare, health camps, and youth development in
            North 24 Parganas.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Quick links</p>
          <ul className="text-muted-foreground mt-3 space-y-2">
            <li>
              <Link href="#about" className="hover:text-foreground transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-foreground transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-foreground transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-muted-foreground text-sm">
          <p>{contact.location}</p>
          <p className="mt-2">{contact.registration}</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {year} {NGO_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
