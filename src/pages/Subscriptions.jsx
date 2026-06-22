import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { BuildYourSubscription } from "@/sections/subscriptions/BuildYourSubscription";
import { FinalSubscriptionsCTA } from "@/sections/subscriptions/FinalSubscriptionsCTA";
import { HowSubscriptionsWork } from "@/sections/subscriptions/HowSubscriptionsWork";
import { OfficeBusinessSubscription } from "@/sections/subscriptions/OfficeBusinessSubscription";
import { SubscriptionPlans } from "@/sections/subscriptions/SubscriptionPlans";
import { SubscriptionProductPreview } from "@/sections/subscriptions/SubscriptionProductPreview";
import { SubscriptionQuickBenefits } from "@/sections/subscriptions/SubscriptionQuickBenefits";
import { SubscriptionsHero } from "@/sections/subscriptions/SubscriptionsHero";
import { WhySubscribe } from "@/sections/subscriptions/WhySubscribe";
import { subscriptionsContent } from "@/data/subscriptionsPage";

const scrollToSection = (sectionId) => {
  document
    .getElementById(sectionId)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Subscriptions = () => {
  const handleViewPlans = useCallback(() => {
    scrollToSection("subscription-plans");
  }, []);

  const handleBuildSubscription = useCallback(() => {
    scrollToSection("build-subscription");
  }, []);

  return (
    <>
      <Helmet>
        <title>Subscriptions | PurePressa</title>
        <meta
          name="description"
          content={subscriptionsContent.seoDescription}
        />
      </Helmet>

      <SubscriptionsHero
        onViewPlans={handleViewPlans}
        onBuildSubscription={handleBuildSubscription}
      />
      <SubscriptionQuickBenefits />
      <HowSubscriptionsWork />
      <SubscriptionPlans onBuildSubscription={handleBuildSubscription} />
      <BuildYourSubscription />
      <SubscriptionProductPreview />
      <OfficeBusinessSubscription />
      <WhySubscribe />
      <FinalSubscriptionsCTA
        onViewPlans={handleViewPlans}
        onBuildSubscription={handleBuildSubscription}
      />
    </>
  );
};
