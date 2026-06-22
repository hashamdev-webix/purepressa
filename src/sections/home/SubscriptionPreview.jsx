import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RefreshCw, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import subPromo from "@/assets/images/subscriptions/subscription-promo.jpg";

const benefits = [
  "Never run out of your favorite juices",
  "Flexible delivery schedules",
  "Customize your box each delivery",
  "Priority access to new flavors",
  "Free delivery on subscriptions",
];

export const SubscriptionPreview = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionHeading
              eyebrow="Subscribe & Save"
              title="Weekly Juice Delivery"
              subtitle="Get fresh cold-pressed juices delivered on your schedule"
              align="left"
            />

            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button as={Link} to="/subscriptions" variant="secondary">
              <RefreshCw className="w-5 h-5" />
              View Subscription Plans
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-card overflow-hidden shadow-card">
              <img
                src={subPromo}
                alt="Weekly PurePressa juice subscription bottles"
                className="h-full w-full rounded-card object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
