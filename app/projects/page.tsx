import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/app/components/Section";
import { Grid } from "@/app/components/Grid";
import { Card } from "@/app/components/Card";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Progetti",
  description: "Esplora i progetti Ve.Ra Costruzioni Srl: ristrutturazioni, nuove costruzioni e industriale.",
};

export default function ProjectsPage() {
  return (
    <Section title="Progetti" subtitle="Una gallery dei nostri interventi più rappresentativi.">
      <Grid columns={3}>
        {projects.map((project) => (
          <Card key={project.slug} className="animate-fade-in-up">
            <div className="relative mb-4 h-52 overflow-hidden rounded-xl">
              <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
            </div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-secondary)]">
              {project.category}
            </p>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">{project.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{project.shortDescription}</p>
            <Link href={`/projects/${project.slug}`} className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] dark:text-slate-100">
              Vai al dettaglio →
            </Link>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
