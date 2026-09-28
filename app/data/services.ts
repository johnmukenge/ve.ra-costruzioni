export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  strengths: string[];
};

export const services: Service[] = [
  {
    id: "costruzioni",
    title: "Costruzioni",
    description:
      "Realizziamo nuove costruzioni civili, commerciali e industriali, seguendo l'intervento dalle opere iniziali fino al completamento dell'edificio.",
    image: "https://picsum.photos/seed/vera-service-1/1200/800",
    strengths: ["Gestione coordinata delle diverse fasi di lavoro", "Soluzioni tecniche adeguate alla destinazione dell'edificio", "Attenzione a qualità, affidabilità e durata nel tempo"],
  },
  {
    id: "ristrutturazioni",
    title: "Ristrutturazioni",
    description:
      "Eseguiamo ristrutturazioni complete o parziali di edifici e ambienti, intervenendo su opere edili, finiture e impianti con un unico coordinamento.",
    image: "https://picsum.photos/seed/vera-service-2/1200/800",
    strengths: ["Gestione completa dell'intervento", "Integrazione tra opere edili e impiantistiche", "Soluzioni calibrate sulle esigenze e sul budget del cliente"],
  },
  {
    id: "manutenzioni",
    title: "Manutenzioni",
    description:
      "Eseguiamo interventi di manutenzione ordinaria e straordinaria su edifici, impianti e strutture, sia in ambito civile sia industriale.",
    image: "https://picsum.photos/seed/vera-service-3/1200/800",
    strengths: ["Individuazione mirata delle cause del problema", "Interventi finalizzati al ripristino e alla prevenzione", "Possibilità di coordinare più lavorazioni nello stesso intervento"],
  },
  {
    id: "demolizioni",
    title: "Demolizioni",
    description:
      "Eseguiamo demolizioni complete, parziali e controllate, preparando gli ambienti e le strutture alle successive lavorazioni di ricostruzione o trasformazione.",
    image: "https://picsum.photos/seed/vera-service-4/1200/800",
    strengths: ["Pianificazione delle fasi di demolizione", "Coordinamento con le successive opere di ricostruzione", "Gestione ordinata e controllata delle lavorazioni"],
  },
  {
    id: "impermeabilizzazioni",
    title: "Impermeabilizzazioni",
    description:
      "Realizziamo sistemi di impermeabilizzazione per coperture, terrazzi, balconi, fondazioni e superfici soggette a infiltrazioni o presenza d'acqua.",
    image: "https://picsum.photos/seed/vera-service-5/1200/800",
    strengths: ["Utilizzo di sistemi e materiali comprovati", "Attenzione ai dettagli e ai punti critici", "Soluzioni studiate per affidabilità e durata nel tempo"],
  },
  {
    id: "impiantistica",
    title: "Impiantistica",
    description:
      "Realizziamo, adeguiamo e manuteniamo impianti elettrici, idraulici e termotecnici per edifici civili, commerciali e industriali.",
    image: "https://picsum.photos/seed/vera-service-6/1200/800",
    strengths: ["Competenze integrate in più discipline impiantistiche", "Coordinamento diretto con le opere edili", "Soluzioni progettate in funzione dell'utilizzo reale dell'edificio"],
  },
  {
    id: "efficientamento-energetico",
    title: "Efficientamento energetico",
    description:
      "Realizziamo interventi finalizzati alla riduzione dei consumi e al miglioramento delle prestazioni energetiche dell'edificio, integrando involucro e impianti.",
    image: "https://picsum.photos/seed/vera-service-7/1200/800",
    strengths: ["Valutazione dell'edificio nel suo insieme", "Integrazione tra isolamento, impianti e fonti rinnovabili", "Soluzioni orientate a efficienza, comfort e riduzione dei consumi"],
  },
  {
    id: "strutture",
    title: "Strutture",
    description:
      "Realizziamo, modifichiamo e ripristiniamo strutture in legno, acciaio e cemento armato per edifici civili, industriali e opere complementari.",
    image: "https://picsum.photos/seed/vera-service-8/1200/800",
    strengths: ["Utilizzo del sistema strutturale più adatto all'intervento", "Possibilità di integrare materiali e tecniche differenti", "Attenzione alla corretta esecuzione e alla durabilità dell'opera"],
  },
  {
    id: "infrastrutture-opere-esterne",
    title: "Infrastrutture e opere esterne",
    description:
      "Realizziamo opere esterne, urbanizzazioni, sottoservizi e interventi infrastrutturali in ambito privato, industriale e pubblico.",
    image: "https://picsum.photos/seed/vera-service-9/1200/800",
    strengths: ["Capacità di gestire lavorazioni articolate e multidisciplinari", "Coordinamento tra opere edili, impiantistiche e sottoservizi", "Esperienza applicabile a contesti civili, produttivi e infrastrutturali"],
  },
];
