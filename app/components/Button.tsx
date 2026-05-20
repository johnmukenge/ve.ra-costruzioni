import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-[var(--color-secondary)] text-[var(--color-primary)] hover:brightness-95 hover:-translate-y-0.5",
  outline:
    "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-900",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
