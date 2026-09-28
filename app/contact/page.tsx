import type { Metadata } from "next";
import { Section } from "@/app/components/Section";
import { Card } from "@/app/components/Card";
import { ContactForm } from "@/app/components/ContactForm";
import { company } from "@/app/data/company";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta Ve.Ra Costruzioni Srl per un preventivo: form, recapiti aziendali e mappa.",
};

export default function ContactPage() {
  return (
    <Section title="Contatti" subtitle="Parlaci del tuo progetto e richiedi un preventivo personalizzato.">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <ContactForm recipientEmail={company.contacts.quoteEmail} />
        </Card>

        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">Dati aziendali</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li>{company.name}</li>
              <li>{company.contacts.address}</li>
              <li>{company.contacts.phone}</li>
              <li>{company.contacts.email}</li>
              <li>Preventivi: {company.contacts.quoteEmail}</li>
              <li>PEC: {company.contacts.pec}</li>
              <li>P.IVA {company.contacts.vat}</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">Localizzazione sede</h3>
            <div className="relative mt-3 h-56 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.0482968562676!2d9.108843!3d45.557098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787d8c5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sVia%20Carlo%20Goldoni%206%2C%2020812%20Limbiate%20MB!5e0!3m2!1sit!2sit!4v1623063968"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
