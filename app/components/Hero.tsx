"use client";

import { useState, useEffect } from "react";
import { company } from "@/app/data/company";
import { Button } from "@/app/components/Button";

const sliderItems = [
  {
    id: 1,
    title: "La vostra tranquillità e fiducia nei lavori edili",
    description: "Seguiamo ogni intervento con competenza, materiali comprovati e soluzioni tecnicamente corrette, per realizzare lavori affidabili, duraturi e adatti alle reali esigenze del cliente.",
    highlight: "Soluzioni complete e integrate",
    color: "from-[#1e40af] to-[#1e3a8a]",
  },
  {
    id: 2,
    title: "Costruzioni, ristrutturazioni e manutenzioni",
    description: "Competenza consolidata in edile, impiantistica, climatizzazione e fotovoltaico con un unico referente dal sopralluogo alla consegna",
    highlight: "Gestione coordinata",
    color: "from-[#0891b2] to-[#0e7490]",
  },
  {
    id: 3,
    title: "Materiali e sistemi comprovati nel tempo",
    description: "Selezioniamo soluzioni che abbiamo verificato sul campo, cercando il miglior equilibrio tra qualità, affidabilità e durata",
    highlight: "Affidabilità garantita",
    color: "from-[#059669] to-[#047857]",
  },
  {
    id: 4,
    title: "Attenzione ai dettagli e al risultato",
    description: "Seguiamo ogni fase con cura, nel rispetto delle schede tecniche e delle indicazioni dei produttori, pensando al tempo e alla durabilità",
    highlight: "Qualità costruttiva",
    color: "from-[#7c3aed] to-[#6d28d9]",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const quoteMailto = `mailto:${company.contacts.quoteEmail}?subject=${encodeURIComponent("Richiesta preventivo - Ve.Ra Costruzioni")}`;

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    setIsAutoplay(false);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
    setIsAutoplay(false);
  };

  const slide = sliderItems[currentSlide];

  return (
    <>
      {/* Hero Slider */}
      <section className="relative overflow-hidden text-white">
        {/* Slider Container */}
        <div className="relative h-[600px] w-full">
          {/* Slides */}
          {sliderItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`bg-gradient-to-br ${item.color} h-full w-full`} />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}

          {/* Content Overlay */}
          <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div className="flex flex-col justify-center animate-fade-in-up">
                  <p className="mb-4 inline-flex w-fit rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                    Impresa Edile Professionale
                  </p>

                  <div className="overflow-hidden">
                    <h1 className="text-4xl font-bold leading-tight transition-all duration-500 sm:text-5xl md:text-6xl">
                      {slide.title}
                    </h1>
                  </div>

                  <div className="mt-6 h-24 overflow-hidden">
                    <p className="text-lg text-white/90 transition-all duration-500">
                      {slide.description}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={quoteMailto}>Richiedi un preventivo</Button>
                    <Button
                      href="/projects"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
                    >
                      Scopri i progetti
                    </Button>
                  </div>
                </div>

                {/* Right Stats */}
                <div className="animate-fade-in-up animation-delay-150 hidden rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur lg:flex lg:flex-col lg:justify-center">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                    {slide.highlight}
                  </p>
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
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/40 hover:scale-110 focus:outline-none sm:left-8"
            aria-label="Slide precedente"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white transition-all hover:bg-white/40 hover:scale-110 focus:outline-none sm:right-8"
            aria-label="Slide successiva"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {sliderItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? "h-3 w-8 bg-white"
                    : "h-3 w-3 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Vai alla slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Resume Hint */}
          {!isAutoplay && (
            <button
              onClick={() => setIsAutoplay(true)}
              className="absolute bottom-6 right-6 z-20 text-xs text-white/70 hover:text-white transition-colors"
            >
              Autoplay
            </button>
          )}
        </div>
      </section>
    </>
  );
}
