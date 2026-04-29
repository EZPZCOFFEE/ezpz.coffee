import type { Metadata } from "next";

import CoffeePage from "./CoffeePage";

export const metadata: Metadata = {
  title: "Our Coffee | Specialty-Grade Origins | EZPZ Coffee",
  description:
    "We source exclusively from specialty-grade farms scoring 80+ on the SCA scale. Ethiopia, Colombia, Guatemala, Brazil, and more. All roasted in Montreal.",
  alternates: { canonical: "/en/coffee" },
  openGraph: {
    title: "Our Coffee | Specialty-Grade Origins | EZPZ Coffee",
    description:
      "We source exclusively from specialty-grade farms scoring 80+ on the SCA scale. Roasted in Montreal at Canadian Roasting Society.",
    type: "website",
    url: "https://www.ezpz.coffee/en/coffee",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Our Specialty Coffees | EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Coffee | Specialty-Grade Origins | EZPZ Coffee",
    description: "We source exclusively from specialty-grade farms scoring 80+ on the SCA scale. Roasted in Montreal at Canadian Roasting Society.",
    images: ["/assets/banner-01.jpg"],
  },
};

const CoffeeRoutePage = () => <CoffeePage />;

export default CoffeeRoutePage;
