import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Boutiques & Retail | EZPZ Coffee",
  description:
    "Rue Laurier, Rue Mont-Royal, Mile End — Montreal boutiques are Quebec-brand curators. Custom branded specialty coffee, French-language design, locally roasted, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-retail-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Boutiques & Retail | EZPZ Coffee",
    description: "Montreal's boutique culture is Quebec-first. Custom branded specialty coffee bags for boutiques — locally roasted, French design, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-retail-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Montreal Boutiques & Retail Shops",
    subheadline:
      "Rue Laurier. Rue Mont-Royal. Mile End. Montreal's boutiques curate Quebec identity — and a locally roasted branded coffee belongs in that curation.",
    ctaSubject: "Custom coffee for Montreal boutique",
  },
  aeoAnswer:
    "Montreal boutiques can order custom branded specialty coffee bags from EZPZ — roasted locally in Montreal — with no minimum, starting at 100 bags at $11.75/bag. French-language design is the default. Delivered in 2–3 business days.",
  why: {
    heading: "Montreal's Boutique Culture and the Local-Brand Coffee Opportunity",
    paragraphs: [
      "Montreal's retail corridors are among the most design-conscious in North America. Rue Laurier in Outremont, Rue Mont-Royal in the Plateau, and the Mile End's cluster of independent boutiques all share a buyer ethos that prioritizes Quebec-made, locally sourced, and design-forward products. The independent boutique on Rue Laurier that carries local ceramics, Quebec-designed clothing, and artisan food products is exactly the retail context in which a beautifully designed, locally roasted branded coffee bag performs at its peak.",
      "EZPZ roasts in Montreal — which means any Montreal boutique can accurately say 'Torréfié à Montréal' on their branded bag. That provenance claim is not marketing language; it's a fact. In a retail environment where local authenticity is the primary value proposition, a locally roasted coffee is a category win from the first line of copy.",
      "Montreal's café culture has produced one of North America's most coffee-literate retail consumer bases. A bag of commodity coffee labeled with a boutique's logo will not move. A specialty-grade, single-origin bag with a beautiful bilingual design, tasting notes, and a 'Torréfié à Montréal' header will sell. The quality of the coffee is not optional — it's what makes the retail program work.",
    ],
  },
  useCases: {
    heading: "How Montreal Boutiques Use Custom Coffee",
    items: [
      {
        title: "Quebec-brand retail curation",
        body: "A branded coffee bag on the counter of a Rue Mont-Royal boutique that sells Quebec-made goods is a product that belongs. Local shoppers buy it for the same reason they buy the Quebec-designed tote or the Plateau ceramicist's mugs — it's made here, it's good, it represents where they live.",
      },
      {
        title: "French-language lifestyle gifting",
        body: "Montreal gift buyers who shop at boutiques on Rue Laurier are looking for gifts that feel local and considered. A French-language branded coffee bag — beautifully designed, with tasting notes in French and the shop's address printed below the EZPZ seal — is a $20 gift that feels like it was curated, not grabbed.",
      },
      {
        title: "Holiday and seasonal pop-up retail",
        body: "Montreal's holiday market circuit — Marché de Noël, boutique holiday pop-ups in Outremont and the Plateau — runs October through December. A co-branded seasonal bag with a limited winter design is a year-end sales driver that converts foot traffic into repeat customers.",
      },
      {
        title: "Lifestyle bundles with Montreal-made products",
        body: "Bundling a branded coffee bag with other Quebec-made products — a candle from a Plateau atelier, a print from a Mile End illustrator — creates a $60–$120 'Montreal morning' gift set that photographs well, sells to tourists, and satisfies the local gift-giver who wants to shop local without compromise.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — the most locally sourced option for any Montreal boutique. 2–3 business day delivery. French-language design is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Montreal boutique?",
      a: "Yes. French-only is available and is recommended for boutiques on predominantly francophone retail streets like Rue Laurier, Rue Mont-Royal, and Rue Bernard.",
    },
    {
      q: "Can I print 'Torréfié à Montréal' on the bag?",
      a: "Yes — it's accurate. EZPZ roasts in Montreal. Your design can include this claim and it will be true.",
    },
    {
      q: "What coffee works for boutique retail in Montreal?",
      a: "For Montreal's sophisticated retail buyer, a single-origin with clear provenance — an Ethiopian natural, a Colombian washed, a Kenyan AA — with tasting notes in French is the right product. Generic blends underperform in this market.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Retail · Quebec City", href: "/en/custom-coffee-retail-quebec-city" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
  ],
  ctaClose:
    "Montreal boutiques curate Quebec identity. Your branded coffee should be part of what they carry.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
