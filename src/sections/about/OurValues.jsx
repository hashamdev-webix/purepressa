import {
  Eye,
  Leaf,
  MapPin,
  ShoppingBag,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent, aboutValues } from "@/data/about";

const icons = {
  freshness: Leaf,
  convenience: ShoppingBag,
  clarity: Eye,
  growth: MapPin,
  accessibility: Users,
};

export const OurValues = () => {
  const { values } = aboutContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading eyebrow={values.eyebrow} title={values.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutValues.map((value) => {
            const Icon = icons[value.icon];

            return (
              <article
                key={value.title}
                className="rounded-card border border-border bg-surface p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-cream text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
