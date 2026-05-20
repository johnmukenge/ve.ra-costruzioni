import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/app/components/Section";
import { Card } from "@/app/components/Card";
import { company } from "@/app/data/company";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta Ve.Ra Costruzioni Srl Construction per un preventivo: form, recapiti aziendali e mappa.",
};

export default function ContactPage() {
  return (
    <Section title="Contatti" subtitle="Parlaci del tuo progetto e richiedi un preventivo personalizzato.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Il tuo nome"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-[var(--color-secondary)] focus:ring-2 dark:border-white/15 dark:bg-slate-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="nome@email.it"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-[var(--color-secondary)] focus:ring-2 dark:border-white/15 dark:bg-slate-900"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                Telefono
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+39"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-[var(--color-secondary)] focus:ring-2 dark:border-white/15 dark:bg-slate-900"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Messaggio
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Descrivi brevemente il tuo progetto"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-[var(--color-secondary)] focus:ring-2 dark:border-white/15 dark:bg-slate-900"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:brightness-95"
            >
              Invia richiesta
            </button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">Dati aziendali</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li>{company.name}</li>
              <li>{company.contacts.address}</li>
              <li>{company.contacts.phone}</li>
              <li>{company.contacts.email}</li>
              <li>P.IVA {company.contacts.vat}</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">Mappa (mock)</h3>
            <div className="relative mt-3 h-56 overflow-hidden rounded-xl">
              <Image
                src="https://picsum.photos/seed/vera-map/1200/800"
                alt="Mappa sede aziendale"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
