import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/app/components/Section";
import { Card } from "@/app/components/Card";
import { projects } from "@/app/data/projects";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Progetto non trovato",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section title={project.title} subtitle={project.description}>
      <Card className="mb-8">
        <div className="relative mb-5 h-80 overflow-hidden rounded-xl">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <div>
            <p className="font-semibold text-[var(--color-primary)] dark:text-slate-100">Categoria</p>
            <p className="text-[var(--color-muted)]">{project.category}</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-primary)] dark:text-slate-100">Località</p>
            <p className="text-[var(--color-muted)]">{project.location}</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-primary)] dark:text-slate-100">Anno</p>
            <p className="text-[var(--color-muted)]">{project.year}</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--color-primary)] dark:text-slate-100">Focus</p>
            <p className="text-[var(--color-muted)]">Qualità & sicurezza</p>
          </div>
        </div>
      </Card>

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {project.images.map((image, index) => (
          <div key={image} className="relative h-52 overflow-hidden rounded-xl">
            <Image src={image} alt={`${project.title} immagine ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-[var(--color-primary)] dark:text-slate-100">Punti di forza del progetto</h3>
        <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
          {project.highlights.map((highlight) => (
            <li key={highlight}>• {highlight}</li>
          ))}
        </ul>
      </Card>
    </Section>
  );
}
