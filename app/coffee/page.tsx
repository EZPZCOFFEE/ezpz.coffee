import type { Metadata } from "next";
import { StaticImageData } from "next/image";

import MarketingContent from "@/components/custom/MarketingContent";
import coffeeIllustration from "@/public/arts/our-coffee.svg";

export const metadata: Metadata = {
  title: "Our Coffee | Sourcing, roasting, and brewing the EZPZ way",
  description:
    "See how EZPZ curates microlots, profiles each roast, and recommends brew parameters so your custom bags stay true to origin.",
  alternates: {
    canonical: "/coffee",
  },
  openGraph: {
    title: "Our Coffee",
    description:
      "From selective harvest calendars to deliberately gentle roast curves, here is every lever we pull to keep flavor honest.",
    type: "website",
    url: "/coffee",
  },
  twitter: {
    card: "summary_large_image",
    title: "How EZPZ sources and roasts",
    description: "Producer partnerships, roast profiles, and brew specs—all in one place.",
  },
};

const CoffeePage = () => {
  return (
    <MarketingContent
      eyebrow="Our coffee"
      title="The coffee is theirs. We're just the steward."
      intro="We obsess over agronomy, processing choices, and roast curves so you get a bag that carries a farmer’s signature intact."
      sections={[
        {
          heading: "Sourcing guardrails",
          copy: [
            "We buy small, traceable lots (84+ scores) from partners we can visit twice a year. Payments clear within 48 hours of export, and every custom run lists the farm, cultivar, and processing method. If a coffee loses transparency, it loses shelf space with us.",
          ],
        },
        {
          heading: "Roast profiles built for clarity",
          copy: [
            "Our Loring S15 stays within a ±1.5°C window at first crack to preserve delicate acids. Light and medium roasts are airflow-driven for sparkling cups, while development never exceeds 15% of total roast time. Filter or espresso, you still taste the same fruit the pickers tasted on the tree.",
          ],
        },
        {
          heading: "Brew specs we actually test",
          copy: [
            "Every coffee ships with two water recipes, grind guidance for espresso and filter, and target TDS ranges. We log every cupping and publish brew data so cafes and offices can dial in faster and waste less coffee.",
          ],
        },
      ]}
      illustration={{
        image: coffeeIllustration as StaticImageData,
        alt: "Coffee cup mascot flashing a peace sign",
        caption: "Our coffee mascot, pulled from the EZPZ arts pack.",
      }}
    />
  );
};

export default CoffeePage;
