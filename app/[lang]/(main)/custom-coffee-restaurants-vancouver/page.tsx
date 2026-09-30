import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Restaurants | EZPZ Coffee",
  description:
    "Vancouver restaurants compete on authenticity and sustainability. Custom branded specialty coffee — origin-specific, traceable, zero minimum, from $11.75/bag, delivered in 4–6 business days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-restaurants-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Restaurants | EZPZ Coffee",
    description:
      "Vancouver's MICHELIN-recognized dining scene demands authenticity. Custom branded, origin-specific specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-restaurants-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Vancouver Restaurants",
    subheadline:
      "Vancouver's dining scene is MICHELIN-recognized and globally watched. Your coffee should be traceable, branded, and worth talking about.",
    ctaSubject: "Custom coffee for Vancouver restaurant",
  },
  aeoAnswer:
    "Vancouver restaurants can order custom branded specialty coffee from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order in Montreal and delivered to Vancouver in 4–6 business days. Single-origin, traceable coffees are available.",
  why: {
    heading: "Vancouver's Restaurant Market and the Coffee Brand Gap",
    paragraphs: [
      "Vancouver joined the MICHELIN Guide in 2022, recognizing what locals already knew: the city's restaurant scene — Gastown to Yaletown, Kitsilano to Commercial Drive — is globally significant. The multicultural dining landscape is unlike anywhere else in Canada, with world-class Japanese, Chinese, Pacific Northwest, and fusion concepts competing for an audience that has eaten in Tokyo, New York, and Copenhagen.",
      "That same audience is deeply sustainability-conscious. Vancouver leads Canada in organic certification adoption, sustainability commitments, and 'know your farmer' storytelling. A single-origin specialty coffee bag with a traceable supply chain — farm name, processing method, roast date — lands authentically in this market in a way no commodity coffee can.",
      "EZPZ sources specialty coffees with the kind of traceability Vancouver restaurants can put on their menu. A Yirgacheffe natural process from a named cooperative, a washed Guatemalan from a specific micro-lot — the kind of coffee story that fits a menu already telling the story of its proteins, its produce, and its cheese.",
    ],
  },
  useCases: {
    heading: "How Vancouver Restaurants Use Custom Coffee",
    items: [
      {
        title: "Farm-to-table coffee narrative",
        body: "Add your coffee's origin, process, and elevation to your menu — the same language you use for your salmon or your beef. A branded bag that carries that story extends the farm-to-table philosophy to the final course.",
      },
      {
        title: "Gastown and Yaletown retail bags",
        body: "Vancouver's tourist-heavy neighbourhoods have guests actively looking to take home local, premium products. A branded coffee bag at $18–$22 is an accessible, TSA-friendly souvenir that carries your restaurant's identity across North America.",
      },
      {
        title: "Collaboration and neighbourhood identity",
        body: "Vancouver has a strong local food identity. EZPZ can help you develop a coffee program that acknowledges the city's culture while making the bag your own — a neighbourhood roast or a house variant that's distinctly yours and connectable to your block.",
      },
      {
        title: "Sustainable close-of-meal service",
        body: "Replace single-serve pods or generic commercial coffee with a specialty bag program. One bag serves multiple guests, generates less packaging waste per cup, and gives diners something to take home. It's the sustainable closing ritual for a restaurant that already composts, sources locally, and eliminates straws.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. For seasonal menu changes or spring/fall openings, we recommend ordering with 3 weeks lead time. All coffees are roasted to order — no sitting inventory, maximum freshness.",
  faq: [
    {
      q: "Can I get traceable single-origin coffees for my restaurant?",
      a: "Yes. EZPZ sources specialty grade (80+ SCA score) coffees with traceability to the farm, cooperative, or washing station. We can provide the origin story, processing method, and cupping notes to publish on your menu.",
    },
    {
      q: "How does Vancouver delivery timing work?",
      a: "Standard orders arrive in 4–6 business days from order confirmation. We recommend keeping 2–3 weeks of supply on hand to avoid running short — coffee is roasted to order, so there's no 'pull from stock' option.",
    },
    {
      q: "Can you match the coffee to our cuisine's flavor profile?",
      a: "Yes. If your restaurant serves Japanese cuisine, we might recommend a clean washed Ethiopian that complements umami flavors. For a Pacific Northwest seafood menu, a bright Colombian or sweet Brazilian filter roast. We'll work with you on the pairing.",
    },
    {
      q: "Is there a sustainability angle I can communicate to guests?",
      a: "Yes. EZPZ's bags use one-way valve pouches that extend freshness and reduce waste compared to pods. The specialty supply chain is traceable. You can describe your coffee as 'specialty-grade, ethically sourced, roasted to order in Canada.'",
    },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver eats with intention. Make sure your coffee can say the same.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
