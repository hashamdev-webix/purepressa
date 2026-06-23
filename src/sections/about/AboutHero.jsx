import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { aboutContent } from "@/data/about";

const aboutImages = import.meta.glob(
  "@/assets/images/about/about-intro.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const aboutHeroImage =
  aboutImages["/src/assets/images/about/about-intro.jpg"] ||
  aboutImages["/src/assets/images/about/about-intro.jpeg"] ||
  aboutImages["/src/assets/images/about/about-intro.webp"] ||
  aboutImages["/src/assets/images/about/about-intro.png"] ||
  null;

export const AboutHero = () => {
  const { hero } = aboutContent;

  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden bg-linear-to-b from-cream-soft to-surface py-16 md:py-24 lg:py-28"
    >
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
              <p className="leading-relaxed text-body">{hero.supportingText}</p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button as={Link} to="/shop" size="lg">
                Shop Juices
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button as={Link} to="/contact" size="lg" variant="outline">
                <Mail className="h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-cream shadow-card lg:aspect-[5/4]">
              {aboutHeroImage ? (
                <img
                  src={aboutHeroImage}
                  alt="Fresh juice being cold-pressed for PurePressa"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              ) : (
                <MediaPlaceholder iconSize={84} />
              )}
            </div>
            <div className="absolute -bottom-5 left-4 right-4 rounded-card border border-border bg-surface/95 p-4 text-center shadow-soft backdrop-blur-sm sm:left-8 sm:right-8">
              <p className="font-display text-lg font-semibold text-ink">
                {hero.captionTitle}
              </p>
              <p className="mt-1 text-sm text-muted">{hero.captionText}</p>
            </div>
          </motion.div>
        </div>
      </Container>

      <Leaf className="pointer-events-none absolute -right-16 top-8 hidden h-64 w-64 text-primary opacity-5 lg:block" />
    </section>
  );
};
