import { Helmet } from "react-helmet-async";
import { Hero } from "@/sections/home/Hero";
import { QuickValuePoints } from "@/sections/home/QuickValuePoints";
import { AboutIntro } from "@/sections/home/AboutIntro";
import { ShopByCategory } from "@/sections/home/ShopByCategory";
import { FeaturedProducts } from "@/sections/home/FeaturedProducts";
import { BundlesPreview } from "@/sections/home/BundlesPreview";
import { SubscriptionPreview } from "@/sections/home/SubscriptionPreview";
import { WholesalePreview } from "@/sections/home/WholesalePreview";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { WhyChooseUs } from "@/sections/home/WhyChooseUs";
import { DeliveryPickup } from "@/sections/home/DeliveryPickup";
import { FinalCTA } from "@/sections/home/FinalCTA";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>PurePressa | Cold-Pressed Juices & Wellness Beverages</title>
        <meta
          name="description"
          content="Calgary's premium cold-pressed juice bar. Fresh, locally-sourced wellness beverages delivered to your door. Shop juices, bundles, and subscriptions."
        />
      </Helmet>

      <Hero />
      <QuickValuePoints />
      <AboutIntro />
      <ShopByCategory />
      <FeaturedProducts />
      <BundlesPreview />
      <SubscriptionPreview />
      <WholesalePreview />
      <HowItWorks />
      <WhyChooseUs />
      <DeliveryPickup />
      <FinalCTA />
    </>
  );
};
