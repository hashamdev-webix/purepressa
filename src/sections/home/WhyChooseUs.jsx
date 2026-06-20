import { motion } from "framer-motion";
import { Leaf, Award, Users, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Leaf,
    title: "Locally Sourced",
    description:
      "We partner with local Alberta farms and suppliers whenever possible to ensure the freshest ingredients",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every bottle is cold-pressed to preserve maximum nutrients. No HPP, no shortcuts",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Proudly Calgary-based, supporting local wellness and sustainable practices",
  },
  {
    icon: Clock,
    title: "Always Fresh",
    description:
      "Made-to-order and delivered within days, never sitting on shelves",
  },
];

export const WhyChooseUs = () => {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Why PurePressa"
          title="More Than Just Juice"
          subtitle="We're committed to quality, community, and your wellness journey"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-5 p-6 bg-cream rounded-card border border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-surface rounded-md flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-ink">
                  {reason.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
