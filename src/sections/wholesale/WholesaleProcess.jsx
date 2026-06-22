import { motion } from "framer-motion";
import { ClipboardList, FileText, MessageSquare, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { wholesaleContent, wholesaleSteps } from "@/data/wholesale";

const icons = {
  contact: MessageSquare,
  needs: ClipboardList,
  information: FileText,
  supply: Truck,
};

export const WholesaleProcess = () => {
  const { process } = wholesaleContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {wholesaleSteps.map((step, index) => {
            const Icon = icons[step.icon];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-card border border-border bg-surface p-6 text-center"
              >
                <span className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
                  {index + 1}
                </span>
                <span className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-card bg-cream text-primary">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
