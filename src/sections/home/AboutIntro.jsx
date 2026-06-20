import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const AboutIntro = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] bg-surface rounded-card flex items-center justify-center relative overflow-hidden">
              <Leaf className="w-24 h-24 text-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted text-sm">About image placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                About PurePressa
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink">
                Wellness Starts with What You Drink
              </h2>
              <p className="text-base leading-relaxed text-body">
                We're a Calgary-based juice bar passionate about making wellness
                accessible and delicious. Every bottle is cold-pressed to
                preserve maximum nutrients, using fresh, locally-sourced
                ingredients whenever possible.
              </p>
              <p className="text-base leading-relaxed text-body">
                No shortcuts. No preservatives. Just pure, fresh juice designed
                to fuel your body and support your wellness journey.
              </p>
            </div>

            <Button as={Link} to="/about" variant="outline">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
