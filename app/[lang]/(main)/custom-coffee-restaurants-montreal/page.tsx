import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Restaurants | EZPZ Coffee",
  description:
    "Montreal has 6,000+ restaurants and the most discerning diners in Canada. Branded specialty coffee — bilingual design, roasted locally, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-restaurants-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Restaurants | EZPZ Coffee",
    description:
      "Montreal has 6,000+ restaurants and the most discerning diners in Canada. Bilingual, locally roasted, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-restaurants-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Montreal Restaurants",
    subheadline:
      "Where French bistro culture meets Plateau cool. Your coffee should be as intentional as your menu.",
    ctaSubject: "Custom coffee for Montreal restaurant",
  },
  aeoAnswer:
    "Montreal restaurants can order custom branded coffee bags from EZPZ — roasted locally at the Canadian Roasting Society in Montreal — with no minimum. Bags are available from 100 units at $11.75/bag, bilingual (French/English) design is available, and delivery is 2–3 business days.",
  why: {
    heading: "Why Montreal Restaurants Need Branded Coffee",
    paragraphs: [
      "Montreal's restaurant scene is the most personality-driven in Canada. From Old Montreal bistros serving côte de bœuf to Mile End lunch counters with 2-hour waits to Plateau wine bars surviving on word of mouth alone — guests are paying attention to every signal of care. A generic pre-packaged coffee at the end of that experience reads as a missed beat.",
      "Montreal is also arguably the coffee capital of Canada. Café Myriade, Cardinal, Dispatch, Larue & Sons — the city has a genuine specialty coffee culture. Diners in Rosemont, NDG, and the Plateau expect quality. When your restaurant serves specialty coffee under your own label, you're participating in that culture instead of just borrowing from it.",
      "Because EZPZ roasts in Montreal, delivery is faster and fresher than with any out-of-city supplier. And because we offer bilingual packaging, your bag can speak to both French and English guests at your tables — a detail that matters in a truly bilingual dining city.",
    ],
  },
  useCases: {
    heading: "How Montreal Restaurants Use Branded Coffee",
    items: [
      {
        title: "Après-repas retail bags",
        body: "A beautifully branded bag left at the table with the dessert menu or receipt is one of the highest-conversion retail opportunities in the food business. Montreal diners — who think hard about where their money goes — respond to the 'local roaster' story.",
      },
      {
        title: "Bilingual house blend",
        body: "EZPZ can design your bag in French and English — describing your coffee's origin, tasting notes, and your restaurant's ethos in both languages. It's a small detail that signals genuine Montréal identity.",
      },
      {
        title: "BYOB night coffee service",
        body: "Montreal's BYOB culture is unlike anywhere else in Canada. Guests bring their own wine but rely on you for coffee. A custom bag on the table turns that moment into a conversation starter — and a takeaway.",
      },
      {
        title: "Catering and private events",
        body: "Montreal has one of Canada's most active private event and corporate catering markets. Custom branded coffee bags in the takeaway kit for corporate dinners, product launches, and wedding receptions extend your restaurant's brand into boardrooms and living rooms across the island.",
      },
    ],
  },
  localNote:
    "EZPZ roasts at the Canadian Roasting Society in Montreal — your coffee is as local as it gets. Standard delivery to Montreal addresses takes 2–3 business days. Bilingual (French/English) bag design is available at no extra charge.",
  faq: [
    {
      q: "Est-ce que vous faites des designs bilingues?",
      a: "Oui — EZPZ can design your bag in French and English, or French only if you prefer. Bilingual packaging is included at no extra charge.",
    },
    {
      q: "Do you roast in Montreal?",
      a: "Yes. All EZPZ coffee is roasted at the Canadian Roasting Society facility in Montreal. Your bags are roasted to order and ship fresh — typically arriving at a Montreal address within 2–3 business days.",
    },
    {
      q: "What's the minimum order?",
      a: "There is no enforced minimum. Most restaurants start with 100–200 bags to test the concept, then reorder once guests start asking to buy bags.",
    },
    {
      q: "Can I describe my own tasting notes on the bag?",
      a: "Yes. Your bag design is completely customizable. EZPZ will recommend tasting notes for your chosen origin or blend, or you can work with our team to craft the language that fits your restaurant's voice.",
    },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
  ],
  ctaClose:
    "Your restaurant is already feeding Montreal. Let your coffee brand travel home with every guest.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
