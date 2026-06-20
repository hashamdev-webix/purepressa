import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Store, Coffee, Dumbbell, Sparkles } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const partners = [
  { icon: Store, label: "Grocery Stores" },
  { icon: Coffee, label: "Cafés" },
  { icon: Dumbbell, label: "Gyms & Studios" },
  { icon: Sparkles, label: "Wellness Centers" },
];

export const WholesalePreview = () => {
  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Wholesale"
          title="Partner With PurePressa"
          subtitle="Stock fresh, cold-pressed juices at your location. Perfect for cafés, gyms, and wellness studios."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-cream rounded-card p-8 md:p-12 border border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-16 h-16 bg-surface rounded-card flex items-center justify-center">
                    <partner.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-ink">
                    {partner.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <p className="text-body max-w-2xl mx-auto">
                We work with retail partners across Calgary to bring fresh,
                premium cold-pressed juices to your customers. Flexible
                ordering, reliable delivery, and competitive wholesale pricing.
              </p>
              <Button as={Link} to="/wholesale" variant="primary">
                Learn About Wholesale
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
