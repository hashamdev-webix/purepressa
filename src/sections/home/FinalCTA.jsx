import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Leaf } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const FinalCTA = () => {
  return (
    <Section className="bg-linear-to-b from-cream to-cream-soft relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Ready to Start?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
              Fresh Juice, Delivered
              <br />
              <span className="text-primary">Right to Your Door</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-body max-w-2xl mx-auto">
              Join Calgary's wellness community. Order fresh, cold-pressed
              juices today and taste the PurePressa difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} to="/shop" size="lg">
              <ShoppingBag className="w-5 h-5" />
              Start Shopping
            </Button>
            <Button as={Link} to="/subscriptions" size="lg" variant="outline">
              View Subscriptions
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
        <Leaf className="w-40 h-40 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none">
        <Leaf className="w-40 h-40 text-primary rotate-180" />
      </div>
    </Section>
  );
};
