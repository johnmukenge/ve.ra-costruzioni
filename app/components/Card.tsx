import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-black/5 bg-[var(--color-surface)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 ${className ?? ""}`}
    >
      {children}
    </article>
  );
}
