import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { About } from "@/pages/About";
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

const Wholesale = lazy(() =>
  import("@/pages/Wholesale").then((module) => ({
    default: module.Wholesale,
  })),
);

const Contact = lazy(() =>
  import("@/pages/Contact").then((module) => ({
    default: module.Contact,
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

const WholesaleRoute = () => (
  <Suspense
    fallback={
      <div
        className="flex min-h-[50vh] items-center justify-center bg-cream-soft text-primary"
        role="status"
      >
        Loading wholesale…
      </div>
    }
  >
    <Wholesale />
  </Suspense>
);

const ContactRoute = () => (
  <Suspense
    fallback={
      <div
        className="flex min-h-[50vh] items-center justify-center bg-cream-soft text-primary"
        role="status"
      >
        Loading contact…
      </div>
    }
  >
    <Contact />
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
        <Route path="wholesale" element={<WholesaleRoute />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactRoute />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
