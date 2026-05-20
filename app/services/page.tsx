import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/app/components/Section";
import { Grid } from "@/app/components/Grid";
import { Card } from "@/app/components/Card";
import { services } from "@/app/data/services";

export const metadata: Metadata = {
  title: "Servizi",
  description: "Servizi edili professionali: ristrutturazioni, nuove costruzioni, industriale e riqualificazione.",
};

export default function ServicesPage() {
  return (
    <Section
      title="Servizi"
      subtitle="Dalla progettazione alla consegna: un unico partner per tutto il ciclo edilizio."
    >
      <Grid columns={3}>
        {services.map((service, index) => (
          <Card
            key={service.id}
            className={`animate-fade-in-up ${index % 3 === 1 ? "animation-delay-150" : ""} ${index % 3 === 2 ? "animation-delay-300" : ""}`}
          >
            <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] dark:text-slate-100">{service.title}</h3>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{service.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {service.strengths.map((strength) => (
                <li key={strength}>• {strength}</li>
              ))}
            </ul>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
