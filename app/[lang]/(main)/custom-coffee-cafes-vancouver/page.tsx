import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Cafés | EZPZ Coffee",
  description:
    "Vancouver has one of North America's most sophisticated café cultures. Define your house blend identity with custom branded bags — zero minimum, sustainable, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-cafes-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Cafés | EZPZ Coffee",
    description: "Vancouver's café scene is globally recognized. Define your house blend with custom branded bags, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-cafes-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Vancouver Cafés",
    subheadline:
      "49th Parallel, Revolver, Nemesis. Vancouver's café scene is globally referenced. Your café's identity deserves a bag that stands with the best.",
    ctaSubject: "Custom coffee bags for my Vancouver café",
  },
  aeoAnswer:
    "Vancouver cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted to order in Montreal, delivered in 4–6 business days. Sustainable packaging and Shopify integration available.",
  why: {
    heading: "Vancouver Cafés and the Identity Stakes",
    paragraphs: [
      "Vancouver's specialty coffee scene is world-class by any measure. Revolver on Cambie, 49th Parallel on West 4th, Nemesis in the Flatiron Building, Pallet in Gastown — the city has cafés that set global benchmarks for sourcing, technique, and design. The audience they've cultivated is among the most coffee-educated in Canada. To compete in that market, you need a house blend with a story, not just a recipe.",
      "Vancouver's café culture is also deeply sustainability-conscious — rooted in the same environmental values that produced Lululemon's brand identity and made Whole Foods' first Canadian location a Vancouver institution. A coffee bag that describes single-origin sourcing, a named farm, and a one-way valve freshness system resonates authentically with a customer base that already reads ingredient labels and asks about supply chains.",
      "EZPZ integrates with Shopify, which matters specifically in Vancouver's tech-forward market. A café whose house blend is also available online — shipped directly from the roastery to customers across BC and beyond — is building a brand with a channel that Starbucks and the chains can't replicate: an independent, owner-driven story that customers choose to support.",
    ],
  },
  useCases: {
    heading: "How Vancouver Cafés Build Their Brand with EZPZ",
    items: [
      {
        title: "Sustainability-forward house blend",
        body: "A single-origin bag with traceable sourcing, described in the language of Vancouver's environmental values — named farm, processing method, fair trade or direct-trade relationship — is a product your Kitsilano and Commercial Drive customers will choose over a chain's commodity blend on principle.",
      },
      {
        title: "Counter retail in Gastown and Yaletown",
        body: "Vancouver's tourist-dense neighbourhoods have foot traffic willing to spend $20–$22 on a premium local coffee bag as a souvenir or gift. Branded EZPZ bags at Gastown cafés routinely convert one-time visitors into online repeat buyers once they get home.",
      },
      {
        title: "Shopify online store with zero inventory",
        body: "EZPZ's Shopify integration means your café's house blend ships directly from Montreal to customers across Canada and the US when they order online. No inventory, no fulfillment overhead — just passive revenue with your brand on every bag.",
      },
      {
        title: "Wholesale to Vancouver restaurants and hotels",
        body: "Vancouver's Michelin-recognized restaurants and luxury hotels are active buyers of independently branded specialty coffee. Your EZPZ-powered house blend — with the story, design, and quality to match the venue — opens a B2B wholesale channel at a margin that justifies the relationship.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Counter retail economics are strong: at $11.75/bag cost, selling at $20 retail yields ~41% gross margin. Shopify integration available for online sales with no inventory required.",
  faq: [
    {
      q: "Can I feature my coffee's sustainability credentials on the bag?",
      a: "Yes. EZPZ sources specialty coffees with traceable supply chains. We can provide origin documentation — farm name, cooperative, processing method, and certifications — for you to feature on the bag and on your menu.",
    },
    {
      q: "How does the Shopify integration work for a Vancouver café?",
      a: "Connect your Shopify store to EZPZ's platform. When a customer orders your house blend online, EZPZ roasts and ships directly to them with your branding. You earn the margin; EZPZ handles all fulfillment. No warehouse, no labels, no courier accounts.",
    },
    {
      q: "Is there a minimum for a trial run?",
      a: "No minimum. Start with 100 bags as a pilot — most Vancouver cafés find the coffee sells through quickly once it's visible behind the counter.",
    },
    {
      q: "How does Vancouver delivery timing work?",
      a: "4–6 business days from order confirmation. We recommend keeping 2 weeks of supply on hand given the lead time, especially heading into summer when foot traffic peaks.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver set the bar for Canadian café culture. Make sure your bag is part of the standard.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
