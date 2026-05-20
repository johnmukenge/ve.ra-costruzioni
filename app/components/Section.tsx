import { ReactNode } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 ${className ?? ""}`}>
      <div className="mb-8 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] dark:text-slate-100">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-3xl text-[var(--color-muted)]">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
