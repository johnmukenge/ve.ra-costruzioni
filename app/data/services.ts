export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  strengths: string[];
};

export const services: Service[] = [
  {
    id: "ristrutturazioni-complete",
    title: "Ristrutturazioni complete",
    description:
      "Interventi chiavi in mano per appartamenti, ville e uffici con gestione coordinata di tutte le maestranze.",
    image: "https://picsum.photos/seed/vera-service-1/1200/800",
    strengths: ["Progettazione integrata", "Tempi certi", "Finiture di qualità"],
  },
  {
    id: "nuove-costruzioni",
    title: "Nuove costruzioni",
    description:
      "Realizzazione di edifici residenziali e commerciali con standard elevati di sicurezza ed efficienza energetica.",
    image: "https://picsum.photos/seed/vera-service-2/1200/800",
    strengths: ["Gestione cantiere", "Controllo qualità", "Consegna puntuale"],
  },
  {
    id: "edilizia-industriale",
    title: "Edilizia industriale",
    description:
      "Costruzione e adeguamento di capannoni, aree produttive e infrastrutture tecniche per aziende.",
    image: "https://picsum.photos/seed/vera-service-3/1200/800",
    strengths: ["Soluzioni su misura", "Normative aggiornate", "Riduzione fermi"],
  },
  {
    id: "riqualificazione-energetica",
    title: "Riqualificazione energetica",
    description:
      "Miglioramento delle prestazioni energetiche con isolamento, impianti evoluti e interventi certificati.",
    image: "https://picsum.photos/seed/vera-service-4/1200/800",
    strengths: ["Analisi consumi", "Bonus e incentivi", "Comfort abitativo"],
  },
  {
    id: "manutenzioni-straordinarie",
    title: "Manutenzioni straordinarie",
    description:
      "Interventi rapidi e pianificati per condomini, strutture commerciali e immobili ad uso professionale.",
    image: "https://picsum.photos/seed/vera-service-5/1200/800",
    strengths: ["Interventi rapidi", "Assistenza continua", "Documentazione completa"],
  },
  {
    id: "direzione-lavori",
    title: "Direzione lavori",
    description:
      "Coordinamento tecnico-amministrativo con monitoraggio costi, avanzamento lavori e sicurezza in cantiere.",
    image: "https://picsum.photos/seed/vera-service-6/1200/800",
    strengths: ["Unico referente", "Report periodici", "Trasparenza totale"],
  },
];
