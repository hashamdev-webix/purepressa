import { Eye, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, missionVisionItems } from "@/data/about";

const icons = {
  mission: Target,
  vision: Eye,
};

export const MissionVision = () => {
  const { mission } = aboutContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading
          eyebrow={mission.eyebrow}
          title={mission.title}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {missionVisionItems.map((item) => {
            const Icon = icons[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-card border border-border bg-surface p-7 shadow-soft md:p-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-card bg-cream text-primary">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed text-body">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
