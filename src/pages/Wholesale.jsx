import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { FinalWholesaleCTA } from "@/sections/wholesale/FinalWholesaleCTA";
import { WholesaleForm } from "@/sections/wholesale/WholesaleForm";
import { WholesaleHero } from "@/sections/wholesale/WholesaleHero";
import { WholesaleProcess } from "@/sections/wholesale/WholesaleProcess";
import { WholesaleProducts } from "@/sections/wholesale/WholesaleProducts";
import { WholesaleQuickBenefits } from "@/sections/wholesale/WholesaleQuickBenefits";
import { WhoWeSupply } from "@/sections/wholesale/WhoWeSupply";
import { WhyPartner } from "@/sections/wholesale/WhyPartner";
import { wholesaleContent } from "@/data/wholesale";

const scrollToWholesaleForm = () => {
  document
    .getElementById("wholesale-form")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Wholesale = () => {
  const handleContact = useCallback(() => {
    scrollToWholesaleForm();
  }, []);

  return (
    <>
      <Helmet>
        <title>Wholesale | PurePressa</title>
        <meta
          name="description"
          content={wholesaleContent.seoDescription}
        />
      </Helmet>

      <WholesaleHero onContact={handleContact} />
      <WholesaleQuickBenefits />
      <WhoWeSupply onContact={handleContact} />
      <WholesaleProducts onContact={handleContact} />
      <WhyPartner />
      <WholesaleProcess />
      <WholesaleForm />
      <FinalWholesaleCTA onContact={handleContact} />
    </>
  );
};
