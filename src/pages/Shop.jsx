import { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { BuildYourPackPromo } from "@/sections/shop/BuildYourPackPromo";
import { CollectionIntro } from "@/sections/shop/CollectionIntro";
import { FinalShopCTA } from "@/sections/shop/FinalShopCTA";
import { ProductExplorer } from "@/sections/shop/ProductExplorer";
import { ShopFAQ } from "@/sections/shop/ShopFAQ";
import { ShopHero } from "@/sections/shop/ShopHero";
import { ShopQuickBenefits } from "@/sections/shop/ShopQuickBenefits";
import { SubscriptionPromo } from "@/sections/shop/SubscriptionPromo";
import { WholesaleCTA } from "@/sections/shop/WholesaleCTA";
import { shopContent } from "@/data/shop";

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const scrollToProducts = useCallback(() => {
    window.requestAnimationFrame(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const handleBestSellers = () => {
    const next = new URLSearchParams(searchParams);
    next.set("filter", "best-sellers");
    next.delete("sort");
    setSearchParams(next);
    scrollToProducts();
  };

  const handleShopAll = () => {
    setSearchParams(new URLSearchParams());
    scrollToProducts();
  };

  return (
    <>
      <Helmet>
        <title>Shop | PurePressa</title>
        <meta name="description" content={shopContent.seoDescription} />
      </Helmet>

      <ShopHero onBestSellers={handleBestSellers} />
      <ShopQuickBenefits />
      <CollectionIntro />
      <ProductExplorer />
      <BuildYourPackPromo />
      <SubscriptionPromo />
      <WholesaleCTA />
      <ShopFAQ />
      <FinalShopCTA onShopAll={handleShopAll} />
    </>
  );
};
