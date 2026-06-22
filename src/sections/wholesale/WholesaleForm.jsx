import { InquiryForm } from "@/components/forms/InquiryForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  wholesaleContent,
  wholesaleFormFields,
} from "@/data/wholesale";

export const WholesaleForm = () => {
  const { form } = wholesaleContent;

  return (
    <Section id="wholesale-form" className="scroll-mt-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow={form.eyebrow}
            title={form.title}
            subtitle={form.description}
          />

          <div className="mt-10 rounded-lg border border-border bg-surface p-6 shadow-card md:p-10">
            <InquiryForm
              fields={wholesaleFormFields}
              submitLabel="Submit Inquiry"
              successMessage="Thanks! Your wholesale inquiry has been received. The PurePressa team will be in touch soon."
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
