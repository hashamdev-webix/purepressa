import { InquiryForm } from "@/components/forms/InquiryForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent, contactFormFields } from "@/data/contact";

export const MainContactForm = () => {
  const { form } = contactContent;

  return (
    <Section id="form" className="scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={form.eyebrow}
            title={form.title}
            subtitle={form.description}
          />

          <div className="mt-10 rounded-lg border border-border bg-surface p-6 shadow-card md:p-10">
            <InquiryForm
              fields={contactFormFields}
              submitLabel="Submit Inquiry"
              successMessage="Thanks for reaching out! The PurePressa team will get back to you soon."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
