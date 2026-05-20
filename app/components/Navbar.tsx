import Link from "next/link";
import { ThemeToggle } from "@/app/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Chi siamo" },
  { href: "/services", label: "Servizi" },
  { href: "/projects", label: "Progetti" },
  { href: "/contact", label: "Contatti" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--color-surface)]/95 backdrop-blur dark:border-white/10">
      <nav className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold text-[var(--color-primary)] dark:text-white">
            Ve.Ra Costruzioni Srl
          </Link>
          <ThemeToggle />
        </div>

        <div className="mt-3 flex items-center gap-4 overflow-x-auto pb-1 md:mt-2 md:justify-end">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 text-sm font-medium text-slate-700 transition-colors hover:text-[var(--color-secondary)] dark:text-slate-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
