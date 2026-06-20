import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Shop } from "@/pages/Shop";
import { Bundles } from "@/pages/Bundles";
import { Subscriptions } from "@/pages/Subscriptions";
import { Wholesale } from "@/pages/Wholesale";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Checkout } from "@/pages/Checkout";
import { NotFound } from "@/pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="bundles" element={<Bundles />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="wholesale" element={<Wholesale />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
