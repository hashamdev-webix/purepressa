import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Hero = () => {
  return (
    <section className="relative bg-linear-to-b from-cream-soft to-surface py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-pill text-sm font-semibold text-primary">
              <Leaf className="w-4 h-4" />
              Fresh. Local. Cold-Pressed.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink">
              Pure Wellness,
              <br />
              <span className="text-primary">Pressed Fresh Daily</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-body max-w-xl">
              Calgary's premium cold-pressed juice bar. Handcrafted wellness
              beverages made with locally-sourced ingredients, delivered fresh
              to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button as={Link} to="/shop" size="lg">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </Button>
              <Button as={Link} to="/bundles" size="lg" variant="outline">
                View Bundles
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-cream rounded-card flex items-center justify-center">
              <Leaf className="w-32 h-32 text-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted text-sm">Hero image placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Decorative leaf */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Leaf className="w-64 h-64 text-primary" />
      </div>
    </section>
  );
};
