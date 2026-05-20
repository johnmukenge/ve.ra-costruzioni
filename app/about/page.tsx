import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/app/components/Section";
import { Grid } from "@/app/components/Grid";
import { Card } from "@/app/components/Card";
import { company } from "@/app/data/company";
import { team } from "@/app/data/team";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: "Scopri storia, mission, vision e team di Ve.Ra Costruzioni Srl.",
};

export default function AboutPage() {
  return (
    <>
      <Section title="Chi siamo" subtitle={company.description}>
        <Grid columns={2}>
          <Card>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">La nostra storia</h3>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{company.history}</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">Mission & Vision</h3>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              <strong>Mission:</strong> {company.mission}
            </p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              <strong>Vision:</strong> {company.vision}
            </p>
          </Card>
        </Grid>
      </Section>

      <Section title="Team" subtitle="Professionisti con competenze tecniche e gestionali complementari.">
        <Grid columns={4}>
          {team.map((member) => (
            <Card key={member.name} className="animate-fade-in-up">
              <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] dark:text-slate-100">{member.name}</h3>
              <p className="text-sm font-medium text-[var(--color-secondary)]">{member.role}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{member.bio}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section title="Valori aziendali">
        <Grid columns={4}>
          {company.values.map((value) => (
            <Card key={value}>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </>
  );
}
