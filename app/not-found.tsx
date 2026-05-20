import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-4xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-secondary)]">404</p>
      <h1 className="mt-2 text-3xl font-bold text-[var(--color-primary)] dark:text-slate-100">Pagina non trovata</h1>
      <p className="mt-3 text-[var(--color-muted)]">La risorsa richiesta non è disponibile.</p>
      <Link href="/" className="mt-6 rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)]">
        Torna alla Home
      </Link>
    </section>
  );
}
