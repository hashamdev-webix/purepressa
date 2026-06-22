import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { BundleExplorer } from "@/sections/bundles/BundleExplorer";
import { BundleIntro } from "@/sections/bundles/BundleIntro";
import { BundleQuickBenefits } from "@/sections/bundles/BundleQuickBenefits";
import { BuildYourPack } from "@/sections/bundles/BuildYourPack";
import { BundlesFAQ } from "@/sections/bundles/BundlesFAQ";
import { BundlesHero } from "@/sections/bundles/BundlesHero";
import { FinalBundlesCTA } from "@/sections/bundles/FinalBundlesCTA";
import { HowBundleOrdering } from "@/sections/bundles/HowBundleOrdering";
import { OfficeBulkBundles } from "@/sections/bundles/OfficeBulkBundles";
import { SubscriptionBundlePromo } from "@/sections/bundles/SubscriptionBundlePromo";
import { WhyBundles } from "@/sections/bundles/WhyBundles";
import { bundlesContent } from "@/data/bundlesPage";

export const Bundles = () => {
  const scrollToSection = useCallback((id) => {
    window.requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const scrollToBundles = useCallback(
    () => scrollToSection("bundle-grid"),
    [scrollToSection],
  );
  const scrollToBuilder = useCallback(
    () => scrollToSection("build-your-pack"),
    [scrollToSection],
  );

  return (
    <>
      <Helmet>
        <title>Bundles | PurePressa</title>
        <meta name="description" content={bundlesContent.seoDescription} />
      </Helmet>

      <BundlesHero
        onShopBundles={scrollToBundles}
        onBuildPack={scrollToBuilder}
      />
      <BundleQuickBenefits />
      <BundleIntro onExplore={scrollToBundles} />
      <BundleExplorer onBuildPack={scrollToBuilder} />
      <BuildYourPack />
      <SubscriptionBundlePromo />
      <OfficeBulkBundles />
      <WhyBundles />
      <HowBundleOrdering />
      <BundlesFAQ />
      <FinalBundlesCTA
        onShopBundles={scrollToBundles}
        onBuildPack={scrollToBuilder}
      />
    </>
  );
};
