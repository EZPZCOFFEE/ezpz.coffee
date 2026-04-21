import type { Metadata } from "next";

import PricingPage from "./PricingPage";

export const metadata: Metadata = {
  title: "Pricing | Simple, Transparent Coffee Branding | EZPZ Coffee",
  description: "No minimums, no hidden fees. See EZPZ Coffee's simple pricing for custom coffee bags, white label, and branded coffee programs.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Simple, Transparent Pricing | EZPZ Coffee",
    description: "No minimums. No hidden fees. No surprises. Straightforward pricing for your custom coffee brand.",
    type: "website",
    url: "https://www.ezpz.coffee/en/pricing",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Simple, Transparent Pricing | EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple, Transparent Pricing | EZPZ Coffee",
    description: "No minimums. No hidden fees. No surprises. Straightforward pricing for your custom coffee brand.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <PricingPage />;

export default Page;
