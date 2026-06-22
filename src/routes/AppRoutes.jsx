import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { Wholesale } from "@/pages/Wholesale";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Checkout } from "@/pages/Checkout";
import { NotFound } from "@/pages/NotFound";

const Bundles = lazy(() =>
  import("@/pages/Bundles").then((module) => ({ default: module.Bundles })),
);

const Subscriptions = lazy(() =>
  import("@/pages/Subscriptions").then((module) => ({
    default: module.Subscriptions,
  })),
);

const BundlesRoute = () => (
  <Suspense
    fallback={
      <div
        className="flex min-h-[50vh] items-center justify-center bg-cream-soft text-primary"
        role="status"
      >
        Loading bundles…
      </div>
    }
  >
    <Bundles />
  </Suspense>
);

const SubscriptionsRoute = () => (
  <Suspense
    fallback={
      <div
        className="flex min-h-[50vh] items-center justify-center bg-cream-soft text-primary"
        role="status"
      >
        Loading subscriptions…
      </div>
    }
  >
    <Subscriptions />
  </Suspense>
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="bundles" element={<BundlesRoute />} />
        <Route path="subscriptions" element={<SubscriptionsRoute />} />
        <Route path="wholesale" element={<Wholesale />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
