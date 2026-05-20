export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Marco Verdi",
    role: "Direttore Tecnico",
    bio: "Coordina i cantieri e supervisiona qualità, sicurezza e rispetto delle tempistiche.",
    image: "https://picsum.photos/seed/vera-team-1/600/600",
  },
  {
    name: "Sara Rinaldi",
    role: "Project Manager",
    bio: "Gestisce planning, budget e comunicazione con clienti e fornitori.",
    image: "https://picsum.photos/seed/vera-team-2/600/600",
  },
  {
    name: "Luca Bianchi",
    role: "Responsabile Cantiere",
    bio: "Guida le squadre operative sul campo garantendo precisione esecutiva.",
    image: "https://picsum.photos/seed/vera-team-3/600/600",
  },
  {
    name: "Giulia Ferri",
    role: "Ingegnere Strutturista",
    bio: "Sviluppa soluzioni strutturali efficienti e conformi alle normative vigenti.",
    image: "https://picsum.photos/seed/vera-team-4/600/600",
  },
];
