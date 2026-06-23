import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import homeHero from "@/assets/images/hero/home-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-cream-soft to-surface py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-20">
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

            <h1 className="text-4xl font-bold text-ink md:text-5xl lg:text-6xl 2xl:text-7xl">
              Pure Wellness,
              <br />
              <span className="text-primary">Pressed Fresh Daily</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-body md:text-lg">
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
            <div className="aspect-[4/3] overflow-hidden rounded-card lg:aspect-[5/4]">
              <img
                src={homeHero}
                alt="Fresh PurePressa cold-pressed juices with fruits and greens"
                className="h-full w-full rounded-card object-cover"
                loading="eager"
              />
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
