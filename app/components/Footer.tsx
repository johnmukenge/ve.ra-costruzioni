import Link from "next/link";
import { company } from "@/app/data/company";

export function Footer() {
  return (
    <footer className="mt-16 bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold">{company.name}</h3>
          <p className="mt-3 text-sm text-white/75">{company.description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Contatti</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>{company.contacts.address}</li>
            <li>{company.contacts.phone}</li>
            <li>{company.contacts.email}</li>
            <li>P.IVA {company.contacts.vat}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Link rapidi</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/services" className="hover:text-[var(--color-secondary)]">
              Servizi
            </Link>
            <Link href="/projects" className="hover:text-[var(--color-secondary)]">
              Progetti
            </Link>
            <Link href="/contact" className="hover:text-[var(--color-secondary)]">
              Richiedi preventivo
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Ve.Ra Costruzioni Srl Construction. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
