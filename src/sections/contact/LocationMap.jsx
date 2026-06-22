import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent } from "@/data/contact";

export const LocationMap = () => {
  const { location } = contactContent;

  return (
    <Section id="location" className="scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow={location.eyebrow}
          title={location.title}
          subtitle={location.description}
        />

        <div className="mt-10 aspect-video w-full overflow-hidden rounded-card border border-border bg-cream shadow-card">
          {/* TODO: replace with exact business address when finalized */}
          <iframe
            src="https://www.google.com/maps?q=Calgary%2C%20Alberta&output=embed"
            title="Map showing Calgary, Alberta"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  );
};
