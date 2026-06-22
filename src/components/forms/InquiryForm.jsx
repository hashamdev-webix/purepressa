import { useRef, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { isValidEmail, isValidPhone } from "@/lib/validation";

const getInitialValues = (fields) =>
  Object.fromEntries(fields.map((field) => [field.name, ""]));

export const InquiryForm = ({
  fields,
  submitLabel = "Submit Inquiry",
  successMessage,
}) => {
  const initialValues = getInitialValues(fields);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = useRef({});

  const validate = () => {
    const nextErrors = {};

    fields.forEach((field) => {
      const value = values[field.name].trim();

      if (field.required && !value) {
        nextErrors[field.name] = `${field.label} is required.`;
        return;
      }

      if (value && field.type === "email" && !isValidEmail(value)) {
        nextErrors[field.name] = "Enter a valid email address.";
      }

      if (value && field.type === "tel" && !isValidPhone(value)) {
        nextErrors[field.name] = "Enter a valid phone number.";
      }
    });

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const nextErrors = { ...current };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstErroredField = fields.find(
        (field) => nextErrors[field.name],
      );
      fieldRefs.current[firstErroredField?.name]?.focus();
      return;
    }

    // TODO: connect backend (e.g. Resend/EmailJS)
    setValues(getInitialValues(fields));
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="rounded-card border border-primary/30 bg-cream-soft p-8 text-center md:p-10"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
        <h3 className="mt-5 text-2xl font-semibold text-ink">
          Inquiry received
        </h3>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-body">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => {
          const { fullWidth, ...fieldProps } = field;

          return (
            <FormField
              key={field.name}
              ref={(element) => {
                fieldRefs.current[field.name] = element;
              }}
              {...fieldProps}
              value={values[field.name]}
              onChange={handleChange}
              error={errors[field.name]}
              className={fullWidth ? "md:col-span-2" : undefined}
            />
          );
        })}
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        <Send className="h-5 w-5" />
        {submitLabel}
      </Button>
    </form>
  );
};
