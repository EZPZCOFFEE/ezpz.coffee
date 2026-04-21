import type { Metadata } from "next";

import CoffeePage from "./CoffeePage";

export const metadata: Metadata = {
  title: "Our Coffee | Specialty-Grade Origins | EZPZ Coffee",
  description:
    "We source exclusively from specialty-grade farms scoring 80+ on the SCA scale. Ethiopia, Colombia, Guatemala, Brazil, and more — all roasted in Montreal.",
  alternates: { canonical: "/coffee" },
  openGraph: {
    title: "Our Coffee | Specialty-Grade Origins | EZPZ Coffee",
    description:
      "We source exclusively from specialty-grade farms scoring 80+ on the SCA scale. Roasted in Montreal at Canadian Roasting Society.",
    type: "website",
    url: "/coffee",
  },
};

const CoffeeRoutePage = () => <CoffeePage />;

export default CoffeeRoutePage;
