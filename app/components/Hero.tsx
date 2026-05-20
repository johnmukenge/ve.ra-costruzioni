import { company } from "@/app/data/company";
import { Button } from "@/app/components/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
            Impresa Edile Professionale
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{company.slogan}</h1>
          <p className="mt-5 max-w-xl text-white/80">{company.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Richiedi un preventivo</Button>
            <Button href="/projects" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]">
              Scopri i progetti
            </Button>
          </div>
        </div>
        <div className="animate-fade-in-up animation-delay-150 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Numeri in evidenza</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm text-white/75">Anni di esperienza</p>
            </div>
            <div>
              <p className="text-3xl font-bold">180+</p>
              <p className="text-sm text-white/75">Progetti completati</p>
            </div>
            <div>
              <p className="text-3xl font-bold">35</p>
              <p className="text-sm text-white/75">Professionisti coinvolti</p>
            </div>
            <div>
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm text-white/75">Clienti soddisfatti</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
