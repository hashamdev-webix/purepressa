import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, RefreshCw, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { shopContent } from "@/data/shop";
import shopHero from "@/assets/images/hero/shop-hero.jpg";

export const ShopHero = ({ onBestSellers }) => {
  const { hero } = shopContent;

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-cream-soft to-surface py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-pill bg-accent/20 px-4 py-2 text-sm font-semibold text-primary">
              <Leaf className="h-4 w-4" />
              {hero.eyebrow}
            </div>

            <h1 className="text-4xl font-bold text-ink md:text-5xl lg:text-6xl 2xl:text-7xl">
              {hero.title}
            </h1>

            <div className="mx-auto max-w-2xl space-y-3 lg:mx-0">
              <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                {hero.subheading}
              </p>
              <p className="text-base leading-relaxed text-body">
                {hero.supportingText}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <Button onClick={onBestSellers} size="lg">
                <ShoppingBag className="h-5 w-5" />
                Shop Best Sellers
              </Button>
              <Button as={Link} to="/bundles" size="lg" variant="outline">
                Build Your Pack
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button as={Link} to="/subscriptions" size="lg" variant="ghost">
                <RefreshCw className="h-5 w-5" />
                View Subscriptions
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border shadow-card lg:aspect-[5/4]">
              <img
                src={shopHero}
                alt="Assorted PurePressa cold-pressed juice bottles"
                className="h-full w-full rounded-lg object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-card border border-border bg-surface/95 p-4 text-center shadow-soft backdrop-blur-sm sm:left-8 sm:right-8">
              <p className="font-display text-lg font-semibold text-ink">
                Fresh bottles. Flexible packs.
              </p>
              <p className="mt-1 text-sm text-muted">
                Made for Calgary routines.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      <Leaf className="pointer-events-none absolute -right-16 top-8 hidden h-64 w-64 text-primary opacity-5 lg:block" />
    </section>
  );
};
