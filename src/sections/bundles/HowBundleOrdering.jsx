import { motion } from "framer-motion";
import { Heart, Package, ShoppingCart, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bundleOrderSteps, bundlesContent } from "@/data/bundlesPage";

const icons = {
  package: Package,
  cart: ShoppingCart,
  truck: Truck,
  heart: Heart,
};

export const HowBundleOrdering = () => {
  const { how } = bundlesContent;

  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading eyebrow={how.eyebrow} title={how.title} />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bundleOrderSteps.map((step, index) => {
            const Icon = icons[step.icon];

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative space-y-4 text-center"
              >
                <span className="absolute -top-3 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
                  {index + 1}
                </span>
                <div className="pt-6">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-card bg-surface shadow-soft">
                    <Icon className="h-10 w-10 text-primary" />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-body">
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
