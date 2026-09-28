"use client";

import { FormEvent, useState } from "react";
import { buildLeadSummary, type LeadForm } from "@/utils";

type ContactFormProps = {
  recipientEmail: string;
};

export function ContactForm({ recipientEmail }: ContactFormProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const lead: LeadForm = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const subject = encodeURIComponent(`Richiesta preventivo - ${lead.name || "Nuovo contatto"}`);
    const body = encodeURIComponent(
      [
        "Buongiorno,",
        "",
        "vi contatto dal sito per richiedere un preventivo.",
        "",
        `Nome: ${lead.name}`,
        `Email: ${lead.email}`,
        `Telefono: ${lead.phone}`,
        "",
        "Messaggio:",
        lead.message,
        "",
        `Riepilogo: ${buildLeadSummary(lead)}`,
      ].join("\n"),
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setStatusMessage("Si aprirà il tuo client email con la richiesta già compilata.");
    event.currentTarget.reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
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
          name="email"
          type="email"
          required
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
          name="phone"
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
          name="message"
          rows={5}
          required
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
      <p className="text-sm text-[var(--color-muted)]">
        Le richieste vengono preparate per l&apos;invio a {recipientEmail} tramite il tuo client email.
      </p>
      {statusMessage ? <p className="text-sm text-[var(--color-primary)] dark:text-slate-100">{statusMessage}</p> : null}
    </form>
  );
}