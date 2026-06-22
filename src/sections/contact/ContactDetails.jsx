import { Clock3, Mail, MapPin, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialIcons";
import { contactContent } from "@/data/contact";
import { site } from "@/data/site";

export const ContactDetails = () => {
  const { details } = contactContent;

  return (
    <Section className="bg-cream-soft">
      <Container>
        <SectionHeading
          eyebrow={details.eyebrow}
          title={details.title}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-card border border-border bg-surface p-6">
            <Mail className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-ink">Email</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-body transition-colors hover:text-primary"
            >
              {site.email}
            </a>
          </article>

          <article className="rounded-card border border-border bg-surface p-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-ink">Location</h3>
            <p className="mt-2 leading-relaxed text-body">
              {site.address}
              <br />
              {site.city}
            </p>
          </article>

          <article className="rounded-card border border-border bg-surface p-6">
            <Clock3 className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-ink">
              Business Hours
            </h3>
            <p className="mt-2 text-body">Hours will be added soon</p>
          </article>

          <article className="rounded-card border border-border bg-surface p-6">
            <Share2 className="h-8 w-8 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-ink">
              Social Media
            </h3>
            <SocialLinks socials={site.socials} className="mt-4" />
          </article>
        </div>
      </Container>
    </Section>
  );
};
