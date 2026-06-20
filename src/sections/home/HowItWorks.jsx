import { motion } from "framer-motion";
import { ShoppingCart, Package, Truck, Heart } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose Your Juices",
    description:
      "Browse our collection of cold-pressed juices, bundles, and subscriptions",
  },
  {
    icon: Package,
    title: "We Press Fresh",
    description: "Your order is cold-pressed using fresh, local ingredients",
  },
  {
    icon: Truck,
    title: "Delivered or Pickup",
    description: "Choose home delivery or pickup from our Calgary location",
  },
  {
    icon: Heart,
    title: "Enjoy & Repeat",
    description: "Feel the difference and reorder when you're ready for more",
  },
];

export const HowItWorks = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works"
          subtitle="From order to delivery, we make getting fresh juice easy"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center space-y-4"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-ink">
                {idx + 1}
              </div>

              <div className="pt-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-card shadow-soft">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-sm text-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
