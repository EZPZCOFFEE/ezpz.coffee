import type { Metadata } from "next";

import PricingPage from "./PricingPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bag Pricing | Zero Minimum | EZPZ Coffee",
  description: "Transparent pricing for custom coffee bags in Canada. EZPZ label bags start with zero minimum. See per-bag pricing, dropshipping rates, and fully custom options.",
  alternates: { canonical: "/en/pricing" },
  openGraph: {
    title: "Custom Coffee Bag Pricing | Zero Minimum | EZPZ Coffee",
    description: "Transparent pricing for custom coffee bags in Canada. EZPZ label bags start with zero minimum. See per-bag pricing, dropshipping rates, and fully custom options.",
    type: "website",
    url: "https://www.ezpz.coffee/en/pricing",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ Coffee Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Bag Pricing | Zero Minimum | EZPZ Coffee",
    description: "Transparent pricing for custom coffee bags in Canada. Zero minimum, design always included.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <PricingPage />;

export default Page;
