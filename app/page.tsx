import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/app/components/Hero";
import { Section } from "@/app/components/Section";
import { Grid } from "@/app/components/Grid";
import { Card } from "@/app/components/Card";
import { Button } from "@/app/components/Button";
import { company } from "@/app/data/company";
import { services } from "@/app/data/services";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Ve.Ra Costruzioni Srl Construction: impresa edile per ristrutturazioni, nuove costruzioni e progetti industriali.",
};

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <Section
        title="I nostri servizi"
        subtitle="Soluzioni complete per edilizia residenziale, commerciale e industriale."
      >
        <Grid columns={3}>
          {featuredServices.map((service) => (
            <Card key={service.id} className="animate-fade-in-up">
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{service.description}</p>
            </Card>
          ))}
        </Grid>
        <div className="mt-8">
          <Button href="/services" variant="outline">
            Vedi tutti i servizi
          </Button>
        </div>
      </Section>

      <Section
        title="Progetti recenti"
        subtitle="Una selezione di interventi realizzati dal nostro team."
        className="bg-black/[0.02] dark:bg-white/[0.02]"
      >
        <Grid columns={3}>
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="animate-fade-in-up">
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
              </div>
              <p className="mb-1 text-xs uppercase tracking-wider text-[var(--color-secondary)]">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{project.shortDescription}</p>
              <Link href={`/projects/${project.slug}`} className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] dark:text-slate-100">
                Scopri il progetto →
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Perché scegliere noi" subtitle="Costruiamo fiducia con metodo, esperienza e qualità.">
        <Grid columns={4}>
          {company.whyChooseUs.map((reason) => (
            <Card key={reason} className="animate-fade-in-up">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{reason}</p>
            </Card>
          ))}
        </Grid>
        <div className="mt-10">
          <Button href="/contact">Richiedi un preventivo</Button>
        </div>
      </Section>
    </>
  );
}
