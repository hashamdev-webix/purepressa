import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { ContactDetails } from "@/sections/contact/ContactDetails";
import { ContactHero } from "@/sections/contact/ContactHero";
import { DeliveryPickupSupport } from "@/sections/contact/DeliveryPickupSupport";
import { FinalContactCTA } from "@/sections/contact/FinalContactCTA";
import { LocationMap } from "@/sections/contact/LocationMap";
import { MainContactForm } from "@/sections/contact/MainContactForm";
import { QuickContactOptions } from "@/sections/contact/QuickContactOptions";
import { WholesaleBusinessInquiries } from "@/sections/contact/WholesaleBusinessInquiries";
import { contactContent } from "@/data/contact";

const scrollToContactForm = () => {
  document
    .getElementById("form")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Contact = () => {
  const handleContact = useCallback(() => {
    scrollToContactForm();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | PurePressa</title>
        <meta name="description" content={contactContent.seoDescription} />
      </Helmet>

      <ContactHero />
      <QuickContactOptions />
      <MainContactForm />
      <ContactDetails />
      <WholesaleBusinessInquiries />
      <DeliveryPickupSupport onContact={handleContact} />
      <LocationMap />
      <FinalContactCTA onContact={handleContact} />
    </>
  );
};
