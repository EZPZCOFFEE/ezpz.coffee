import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Boutiques & Retail | EZPZ Coffee",
  description:
    "Gastown, Yaletown, Robson Street — Vancouver's boutique retail is eco-conscious and sustainability-forward. Custom branded specialty coffee with traceable sourcing, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-retail-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Boutiques & Retail | EZPZ Coffee",
    description: "Vancouver boutiques hold their retail coffee to eco and sustainability standards. Custom branded specialty coffee with traceable sourcing, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-retail-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Vancouver Boutiques & Retail Shops",
    subheadline:
      "Gastown. Yaletown. Robson Street. Vancouver's boutiques carry products that reflect Pacific Northwest values — and so should your branded coffee.",
    ctaSubject: "Custom coffee for Vancouver boutique",
  },
  aeoAnswer:
    "Vancouver boutiques can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Traceable, sustainably sourced coffee available. Delivered in 4–6 business days.",
  why: {
    heading: "Vancouver Boutique Retail and the Sustainable Coffee Standard",
    paragraphs: [
      "Vancouver's independent boutique corridors — Gastown's Water Street and Abbott Street, Yaletown's Mainland Street, the South Granville gallery-retail strip — attract the most environmentally conscious retail consumer in Canada. The buyer who shops at a Gastown boutique has already filtered for values alignment before they walk in the door. If the products on the shelf don't meet that standard, they don't sell — or worse, they signal that the buyer isn't paying attention.",
      "Branded coffee at a Vancouver boutique passes or fails on sustainability. A custom bag with traceable single-origin sourcing, a Canadian roastery's seal, and eco-conscious packaging materials is a product that earns its shelf space. EZPZ can provide full traceability documentation — farm, cooperative, processing method, certifications — to support any boutique's transparency claims about the products it carries.",
      "Vancouver's specialty coffee consumption is among the highest per capita in Canada. A customer who picks up a branded coffee bag at a Yaletown boutique is a customer who knows what good coffee costs and why it costs that. Specialty-grade coffee at $20–$22 a bag is not an impulse purchase in the way it might be elsewhere — it's a considered buy from an informed consumer, which means higher conversion and higher repeat purchase rates.",
    ],
  },
  useCases: {
    heading: "How Vancouver Boutiques Use Custom Coffee",
    items: [
      {
        title: "Eco-aligned retail shelf product",
        body: "A specialty coffee bag with traceable sourcing and minimal packaging — one-way valve, resealable, no excess — is a product that belongs on the shelf of a Gastown boutique that has already made commitments about the sustainability of what it carries.",
      },
      {
        title: "Pacific Northwest lifestyle gift bundle",
        body: "A 'Vancouver morning' gift bundle — branded coffee, a locally made mug, an artisan chocolate from a Granville Island maker — is a $60–$100 gift set that sells to tourists, to corporate gifters, and to locals who want to give something that represents the city at its best.",
      },
      {
        title: "Neighbourhood identity retail",
        body: "A bag with 'Custom-roasted for [Shop Name], Gastown, Vancouver' printed below the branding is a product that locals buy for the same reason they wear neighbourhood pride — it's specific, it's theirs, and it supports a place they care about.",
      },
      {
        title: "Seasonal outdoor and adventure retail",
        body: "Vancouver boutiques that carry outdoor lifestyle or adventure gear — Kitsilano, North Shore, or Gastown's crossover outdoor-lifestyle retail — can position branded coffee as a 'trail morning' or 'mountain ritual' product that connects to the city's active identity. A bag designed around a mountain silhouette or Pacific coastline sells consistently in this context.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Traceable, sustainably sourced specialty coffee available. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can you provide documentation of your coffee's traceability for our sustainability reports?",
      a: "Yes. EZPZ sources specialty-grade coffees with full traceability — farm name, processing station, cooperative, certifications. We can provide documentation that supports your boutique's sustainability claims.",
    },
    {
      q: "What coffee profile fits Vancouver's eco-conscious retail buyer?",
      a: "Vancouver's informed coffee buyers respond well to a clean, traceable single-origin with specific provenance — a natural-process Ethiopian from a known cooperative, or a washed Colombian from a single farm. The story matters as much as the taste in this market.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "How long does delivery take?",
      a: "4–6 business days from Montreal to Vancouver. Order a week ahead of any pop-up or seasonal push.",
    },
  ],
  siblings: [
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Retail · Calgary", href: "/en/custom-coffee-retail-calgary" },
    { label: "Cafés · Vancouver", href: "/en/custom-coffee-cafes-vancouver" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
  ],
  ctaClose:
    "Vancouver's boutiques set the sustainability bar for Canadian retail. Your branded coffee should clear it.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
