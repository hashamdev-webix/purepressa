import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import aboutImg from "@/assets/images/about/about-intro.jpg";

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
            <div className="aspect-[4/3] rounded-card overflow-hidden">
              <img
                src={aboutImg}
                alt="Fresh juice being cold-pressed"
                className="h-full w-full rounded-card object-cover"
                loading="lazy"
              />
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
