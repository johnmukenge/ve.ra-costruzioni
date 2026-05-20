export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Ristrutturazioni" | "Nuove costruzioni" | "Industriale" | "Riqualificazione";
  location: string;
  year: string;
  coverImage: string;
  images: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "residenza-le-magnolie",
    title: "Residenza Le Magnolie",
    shortDescription: "Ristrutturazione completa di un complesso residenziale su 3 livelli.",
    description:
      "Intervento di riqualificazione architettonica e impiantistica con miglioramento sismico e ottimizzazione energetica.",
    category: "Ristrutturazioni",
    location: "Bergamo",
    year: "2025",
    coverImage: "https://picsum.photos/seed/vera-project-1/1400/900",
    images: [
      "https://picsum.photos/seed/vera-project-1a/1400/900",
      "https://picsum.photos/seed/vera-project-1b/1400/900",
      "https://picsum.photos/seed/vera-project-1c/1400/900",
    ],
    highlights: ["1200 mq riqualificati", "Classe energetica migliorata", "Consegna in 8 mesi"],
  },
  {
    slug: "polo-artigianale-nord",
    title: "Polo Artigianale Nord",
    shortDescription: "Nuova costruzione di un polo produttivo modulare.",
    description:
      "Realizzazione di struttura prefabbricata in acciaio e cemento con spazi ufficio e area logistica.",
    category: "Industriale",
    location: "Brescia",
    year: "2024",
    coverImage: "https://picsum.photos/seed/vera-project-2/1400/900",
    images: [
      "https://picsum.photos/seed/vera-project-2a/1400/900",
      "https://picsum.photos/seed/vera-project-2b/1400/900",
      "https://picsum.photos/seed/vera-project-2c/1400/900",
    ],
    highlights: ["Area coperta 3.500 mq", "Struttura antisismica", "Cantiere ottimizzato"],
  },
  {
    slug: "villa-aurora",
    title: "Villa Aurora",
    shortDescription: "Nuova costruzione residenziale ad alta efficienza.",
    description:
      "Progetto custom con involucro ad alte prestazioni, impianti ibridi e domotica integrata.",
    category: "Nuove costruzioni",
    location: "Lecco",
    year: "2026",
    coverImage: "https://picsum.photos/seed/vera-project-3/1400/900",
    images: [
      "https://picsum.photos/seed/vera-project-3a/1400/900",
      "https://picsum.photos/seed/vera-project-3b/1400/900",
      "https://picsum.photos/seed/vera-project-3c/1400/900",
    ],
    highlights: ["Classe A4", "Domotica smart", "Finiture premium"],
  },
  {
    slug: "condominio-sant-elena",
    title: "Condominio Sant'Elena",
    shortDescription: "Intervento di efficientamento energetico condominiale.",
    description:
      "Cappotto termico, rifacimento facciate e adeguamento impianti con riduzione significativa dei consumi.",
    category: "Riqualificazione",
    location: "Milano",
    year: "2025",
    coverImage: "https://picsum.photos/seed/vera-project-4/1400/900",
    images: [
      "https://picsum.photos/seed/vera-project-4a/1400/900",
      "https://picsum.photos/seed/vera-project-4b/1400/900",
      "https://picsum.photos/seed/vera-project-4c/1400/900",
    ],
    highlights: ["Riduzione consumi del 42%", "Cantiere abitato gestito", "Certificazioni complete"],
  },
  {
    slug: "hub-logistico-ovest",
    title: "Hub Logistico Ovest",
    shortDescription: "Ampliamento industriale con nuove aree di carico e stoccaggio.",
    description:
      "Adeguamento strutturale e impiantistico con ottimizzazione dei flussi e miglioramento della sicurezza operativa.",
    category: "Industriale",
    location: "Piacenza",
    year: "2024",
    coverImage: "https://picsum.photos/seed/vera-project-5/1400/900",
    images: [
      "https://picsum.photos/seed/vera-project-5a/1400/900",
      "https://picsum.photos/seed/vera-project-5b/1400/900",
      "https://picsum.photos/seed/vera-project-5c/1400/900",
    ],
    highlights: ["Nuove baie di carico", "Tempi ridotti del 20%", "Operatività garantita"],
  },
  {
    slug: "palazzo-centrale",
    title: "Palazzo Centrale",
    shortDescription: "Restauro e ristrutturazione di edificio storico in centro città.",
    description:
      "Lavori conservativi e funzionali con valorizzazione degli elementi architettonici originali.",
    category: "Ristrutturazioni",
    location: "Parma",
    year: "2023",
    coverImage: "https://picsum.photos/seed/vera-project-6/1400/900",
    images: [
      "https://picsum.photos/seed/vera-project-6a/1400/900",
      "https://picsum.photos/seed/vera-project-6b/1400/900",
      "https://picsum.photos/seed/vera-project-6c/1400/900",
    ],
    highlights: ["Vincolo storico rispettato", "Nuovi impianti integrati", "Sicurezza avanzata"],
  },
];
