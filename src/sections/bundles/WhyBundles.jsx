import { motion } from "framer-motion";
import {
  CalendarDays,
  ListChecks,
  MapPin,
  Package,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bundlesContent, whyBundleItems } from "@/data/bundlesPage";

const icons = {
  calendar: CalendarDays,
  users: Users,
  options: ListChecks,
  package: Package,
  map: MapPin,
};

export const WhyBundles = () => {
  const { why } = bundlesContent;

  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={why.eyebrow} title={why.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyBundleItems.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-5 rounded-card border border-border bg-cream p-6 transition-colors hover:border-primary"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-surface">
                  <Icon className="h-7 w-7 text-primary" />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
