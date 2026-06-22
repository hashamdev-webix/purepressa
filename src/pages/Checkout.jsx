import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FormField } from "@/components/ui/FormField";
import { Section } from "@/components/ui/Section";
import {
  checkoutContent,
  checkoutInitialValues,
} from "@/data/checkout";
import { useCart } from "@/hooks/useCart";
import { isValidEmail, isValidPhone } from "@/lib/validation";
import { cn } from "@/lib/cn";

const contactFields = [
  { name: "fullName", label: "Full Name" },
  { name: "email", label: "Email Address" },
  { name: "phone", label: "Phone Number" },
];

const deliveryFields = [
  { name: "streetAddress", label: "Street Address" },
  { name: "city", label: "City" },
  { name: "postalCode", label: "Postal Code" },
];

export const Checkout = () => {
  const { items, subtotal, updateQty, removeItem, clearCart } = useCart();
  const [fulfillmentMethod, setFulfillmentMethod] = useState("delivery");
  const [values, setValues] = useState(checkoutInitialValues);
  const [errors, setErrors] = useState({});
  const [orderReference, setOrderReference] = useState("");
  const fieldRefs = useRef({});
  const confirmationRef = useRef(null);

  const deliveryFee =
    fulfillmentMethod === "delivery" ? checkoutContent.deliveryFee : 0;

  useEffect(() => {
    if (orderReference) {
      confirmationRef.current?.focus();
    }
  }, [orderReference]);

  const validate = () => {
    const nextErrors = {};
    const requiredFields =
      fulfillmentMethod === "delivery"
        ? [...contactFields, ...deliveryFields]
        : contactFields;

    requiredFields.forEach((field) => {
      if (!values[field.name].trim()) {
        nextErrors[field.name] = `${field.label} is required.`;
      }
    });

    if (values.email.trim() && !isValidEmail(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (values.phone.trim() && !isValidPhone(values.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

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

  const handleFulfillmentChange = (method) => {
    setFulfillmentMethod(method);

    if (method === "pickup") {
      setErrors((current) => {
        const nextErrors = { ...current };
        deliveryFields.forEach((field) => delete nextErrors[field.name]);
        return nextErrors;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const validationOrder =
        fulfillmentMethod === "delivery"
          ? [...contactFields, ...deliveryFields]
          : contactFields;
      const firstErroredField = validationOrder.find(
        (field) => nextErrors[field.name],
      );
      fieldRefs.current[firstErroredField?.name]?.focus();
      return;
    }

    // TODO: connect backend (orders + payment)
    setOrderReference(`PP-${Date.now()}`);
    setValues(checkoutInitialValues);
    setErrors({});
    clearCart();
  };

  const { hero } = checkoutContent;

  return (
    <>
      <Helmet>
        <title>Checkout | PurePressa</title>
        <meta
          name="description"
          content={checkoutContent.seoDescription}
        />
      </Helmet>

      <section className="bg-linear-to-b from-cream-soft to-surface py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {hero.eyebrow}
            </p>
            <h1 className="text-4xl font-bold text-ink md:text-5xl">
              {hero.title}
            </h1>
            <p className="text-base leading-relaxed text-body md:text-lg">
              {hero.description}
            </p>
          </div>
        </Container>
      </section>

      {orderReference ? (
        <Section>
          <Container>
            <div
              ref={confirmationRef}
              tabIndex="-1"
              className="mx-auto max-w-3xl rounded-lg border border-primary/30 bg-cream-soft p-8 text-center shadow-card focus:outline-none md:p-12"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
              <h2 className="mt-6 text-3xl font-semibold text-ink">
                Thank you! Your PurePressa order has been received.
              </h2>
              <p className="mt-4 text-body">
                Your order reference is{" "}
                <strong className="text-ink">{orderReference}</strong>.
              </p>
              <p className="mt-2 text-sm text-muted">
                This is a frontend confirmation. Payment and fulfillment
                processing will be connected later.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button as={Link} to="/shop">
                  Browse More Juices
                </Button>
                <Button as={Link} to="/" variant="outline">
                  Back to Home
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      ) : items.length === 0 ? (
        <Section>
          <Container>
            <div className="mx-auto max-w-2xl rounded-lg border border-border bg-cream p-8 text-center md:p-12">
              <ShoppingBag className="mx-auto h-16 w-16 text-primary" />
              <h2 className="mt-6 text-3xl font-semibold text-ink">
                Your cart is empty
              </h2>
              <p className="mt-3 leading-relaxed text-body">
                Add bottled juices, bundles, or a subscription before
                continuing to checkout.
              </p>
              <Button as={Link} to="/shop" size="lg" className="mt-7">
                Browse Juices
              </Button>
            </div>
          </Container>
        </Section>
      ) : (
        <Section className="bg-cream-soft">
          <Container>
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_430px]">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-lg border border-border bg-surface p-6 shadow-card md:p-9"
              >
                <h2 className="text-2xl font-semibold text-ink">
                  Delivery and Contact Details
                </h2>

                <fieldset className="mt-7">
                  <legend className="text-sm font-semibold text-ink">
                    Fulfillment method
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        value: "delivery",
                        label: "Delivery",
                        Icon: Truck,
                      },
                      {
                        value: "pickup",
                        label: "Pickup",
                        Icon: PackageCheck,
                      },
                    ].map(({ value, label, Icon }) => {
                      const isSelected = fulfillmentMethod === value;

                      return (
                        <label
                          key={value}
                          className={cn(
                            "flex cursor-pointer items-center gap-3 rounded-card border p-4 transition-colors",
                            isSelected
                              ? "border-primary bg-cream-soft"
                              : "border-border hover:border-primary",
                          )}
                        >
                          <input
                            type="radio"
                            name="fulfillmentMethod"
                            value={value}
                            checked={isSelected}
                            onChange={() => handleFulfillmentChange(value)}
                            className="h-4 w-4 accent-primary"
                          />
                          <Icon className="h-5 w-5 text-primary" />
                          <span className="font-semibold text-ink">{label}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <FormField
                    ref={(element) => {
                      fieldRefs.current.fullName = element;
                    }}
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="md:col-span-2"
                  />
                  <FormField
                    ref={(element) => {
                      fieldRefs.current.email = element;
                    }}
                    name="email"
                    label="Email Address"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                  <FormField
                    ref={(element) => {
                      fieldRefs.current.phone = element;
                    }}
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                    autoComplete="tel"
                    placeholder="Your phone number"
                  />

                  {fulfillmentMethod === "delivery" ? (
                    <>
                      <FormField
                        ref={(element) => {
                          fieldRefs.current.streetAddress = element;
                        }}
                        name="streetAddress"
                        label="Street Address"
                        value={values.streetAddress}
                        onChange={handleChange}
                        error={errors.streetAddress}
                        required
                        autoComplete="street-address"
                        placeholder="Street address"
                        className="md:col-span-2"
                      />
                      <FormField
                        ref={(element) => {
                          fieldRefs.current.city = element;
                        }}
                        name="city"
                        label="City"
                        value={values.city}
                        onChange={handleChange}
                        error={errors.city}
                        required
                        autoComplete="address-level2"
                      />
                      <FormField
                        ref={(element) => {
                          fieldRefs.current.postalCode = element;
                        }}
                        name="postalCode"
                        label="Postal Code"
                        value={values.postalCode}
                        onChange={handleChange}
                        error={errors.postalCode}
                        required
                        autoComplete="postal-code"
                        placeholder="A1A 1A1"
                      />
                    </>
                  ) : (
                    <div className="flex items-start gap-3 rounded-card border border-primary/20 bg-cream-soft p-5 md:col-span-2">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold text-ink">
                          {checkoutContent.pickupNote}
                        </p>
                        <p className="mt-1 text-sm text-body">
                          Pickup timing and final instructions will be confirmed
                          by the PurePressa team.
                        </p>
                      </div>
                    </div>
                  )}

                  <FormField
                    name="orderNotes"
                    label="Order Notes"
                    as="textarea"
                    rows={4}
                    value={values.orderNotes}
                    onChange={handleChange}
                    placeholder="Optional delivery, pickup, or order notes"
                    className="md:col-span-2"
                  />
                </div>

                <Button type="submit" size="lg" className="mt-8 w-full">
                  Place Order
                </Button>
              </form>

              <OrderSummary
                items={items}
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                updateQty={updateQty}
                removeItem={removeItem}
              />
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
