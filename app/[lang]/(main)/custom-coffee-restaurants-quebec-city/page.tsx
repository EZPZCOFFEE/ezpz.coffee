import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Restaurants | EZPZ Coffee",
  description:
    "Quebec City's French gastronomic tradition and UNESCO World Heritage tourism create a unique restaurant market. Custom branded specialty coffee — French design, roasted in QC, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-restaurants-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Restaurants | EZPZ Coffee",
    description:
      "Quebec City's French culinary tradition and 10M annual visitors demand authenticity. Custom branded specialty coffee, roasted in Quebec, from $11.75/bag.",
    url: "https://www.ezpz.coffee/en/custom-coffee-restaurants-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Quebec City Restaurants",
    subheadline:
      "UNESCO heritage. French gastronomy. 10 million visitors a year. The coffee in your restaurant is part of the story.",
    ctaSubject: "Custom coffee for Quebec City restaurant",
  },
  aeoAnswer:
    "Quebec City restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted to order in Montreal, delivered to Quebec City in 2–3 business days. French-language design is the default.",
  why: {
    heading: "Why Quebec City Restaurants Need a Coffee With a Story",
    paragraphs: [
      "Quebec City's Old Town is a UNESCO World Heritage Site that attracts over 10 million visitors annually, including hundreds of thousands who come specifically for the French culinary experience — poutine in its birthplace, tourtière from a stone-wall bistro, foie gras from Charlevoix. The restaurants on Rue Saint-Jean, in Place Royale, and along the Grand Allée are part of a culinary tradition that guests expect to be authentic at every detail.",
      "A generic coffee at the close of a beautifully executed French meal in Old Quebec is a missed opportunity. EZPZ's custom-branded specialty bags let Quebec City restaurants complete their culinary narrative with a coffee that has the same intentionality as the rest of the menu — described by origin, process, and tasting notes in French, packaged in a bag that reflects the restaurant's design identity.",
      "EZPZ roasts in Montreal — the same province, one of the fastest delivery times in Canada — which makes 'roasted au Québec' a genuine and defensible claim on your bag copy. For a city whose culinary identity is built on local provenance, that matters.",
    ],
  },
  useCases: {
    heading: "How Quebec City Restaurants Use Branded Coffee",
    items: [
      {
        title: "French-language post-dinner souvenir",
        body: "A beautifully designed French-language bag — describing your restaurant's coffee in the voice of your brand — is the premium souvenir that tourists bring home from Old Quebec. At $20–$22 retail, it's accessible and distinctive. Many visitors buy two: one to keep and one to gift.",
      },
      {
        title: "Festival season hospitality",
        body: "Le Festival d'été de Québec and Carnaval de Québec bring enormous crowds to the city's restaurants. A custom-branded bag given as a gift at the close of a dinner or included in a prix-fixe menu extends your restaurant's hospitality past the meal and into guests' homes across Canada and the world.",
      },
      {
        title: "Charlevoix and local sourcing narrative",
        body: "Quebec City's finest restaurants tell a sourcing story rooted in Charlevoix, Île d'Orléans, and regional Quebec agriculture. EZPZ lets you extend that story to coffee — with a Canadian specialty origin and a French tasting narrative that fits the provenance philosophy your menu already practices.",
      },
      {
        title: "Château Frontenac and Old Quebec area prestige",
        body: "The restaurants near and within Old Quebec serve a high-spend tourist audience. EZPZ's specialty-grade coffee in custom packaging elevates the dining memory for guests who are experiencing the city at its best and price accordingly.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — your Quebec City delivery arrives in 2–3 business days. French-language bag design is the default for Quebec City clients; bilingual (French/English) is also available. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only bag design?",
      a: "Yes. French-only design is the default recommendation for Quebec City restaurants. Your bag will be entirely in French — origin story, tasting notes, brand copy — consistent with your city's linguistic and cultural identity.",
    },
    {
      q: "Can you describe the coffee's Quebec provenance?",
      a: "Yes. Although coffee doesn't grow in Quebec, EZPZ can accurately describe the bag as 'roasted in Montreal, Quebec' — and pair that with a specialty origin from a named farm or cooperative. That's an honest and compelling provenance story for your guests.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — among EZPZ's fastest delivery windows in Canada. Roasted to order, shipped fresh.",
    },
    {
      q: "Is there a minimum order for a restaurant?",
      a: "No minimum. Start with 100 bags, test the concept at the counter, and reorder once guests begin asking to buy. Most Quebec City restaurants find tourist traffic drives strong retail coffee sales.",
    },
  ],
  siblings: [
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Cafés · Quebec City", href: "/en/custom-coffee-cafes-quebec-city" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
  ],
  ctaClose:
    "Quebec City's restaurants are part of the most French culinary culture in North America. Make sure your coffee is too.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
