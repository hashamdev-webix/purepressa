import { motion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  MapPin,
  RefreshCw,
  Settings,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  subscriptionsContent,
  whySubscribeItems,
} from "@/data/subscriptionsPage";

const icons = [Clock, RefreshCw, CalendarCheck, Users, Settings, MapPin];

export const WhySubscribe = () => {
  const { why } = subscriptionsContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading eyebrow={why.eyebrow} title={why.title} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whySubscribeItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-4 rounded-card border border-border bg-surface p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cream">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <p className="font-semibold leading-relaxed text-ink">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
