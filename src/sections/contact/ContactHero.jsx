import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { contactContent } from "@/data/contact";

export const ContactHero = () => {
  const { hero } = contactContent;

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-cream-soft to-surface py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
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

            <h1 className="text-4xl font-bold text-ink md:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <div className="mx-auto max-w-2xl space-y-3 lg:mx-0">
              <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                {hero.subheading}
              </p>
              <p className="leading-relaxed text-body">{hero.supportingText}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border bg-cream shadow-card">
              <MediaPlaceholder iconSize={84} />
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
