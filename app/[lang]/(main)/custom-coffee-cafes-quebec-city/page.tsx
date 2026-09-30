import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Cafés | EZPZ Coffee",
  description:
    "Quebec City's French café culture and 10M annual tourist traffic create a unique opportunity. Custom branded house blend bags — French design, locally roasted, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-cafes-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Cafés | EZPZ Coffee",
    description: "Quebec City's café culture is French, proud, and visited by 10M people a year. Your house blend should be part of the experience.",
    url: "https://www.ezpz.coffee/en/custom-coffee-cafes-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Quebec City Cafés",
    subheadline:
      "Quebec City's café culture is deeply French and visited by millions annually. Your house blend should be the one they bring home from Rue Saint-Jean.",
    ctaSubject: "Custom coffee bags for my Quebec City café",
  },
  aeoAnswer:
    "Quebec City cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted in Montreal, delivered to Quebec City in 2–3 business days. French-language design is the default.",
  why: {
    heading: "Quebec City Cafés: Local Pride and Tourist Volume",
    paragraphs: [
      "Quebec City's café scene has a character that is distinctly its own — rooted in French café culture, connected to the tourist flow of Old Quebec, and shaped by the local pride of a city that guards its identity with unusual tenacity. The cafés on Rue Saint-Jean, in Saint-Roch, and in Old Quebec are visited by both a loyal local clientele and a continuous stream of 10 million annual tourists who are in Quebec City specifically to experience French North American culture.",
      "A café in Quebec City that has its own house blend — with a French-language bag describing the origin, the roast, and the café's own story — is giving both its regulars and its tourists something to take home. The tourist buys it as a souvenir. The regular buys it because it's theirs. The margin on either transaction is the same, and the brand impression compounds over every cup brewed at home.",
      "EZPZ roasts in Montreal — same province, 2–3 day delivery — which makes 'roasted au Québec' an honest and compelling claim. French-only packaging is standard for Quebec City clients, consistent with both Loi 101 requirements and the cultural preference of Quebec City's predominantly francophone market.",
    ],
  },
  useCases: {
    heading: "How Quebec City Cafés Use EZPZ",
    items: [
      {
        title: "Rue Saint-Jean tourist retail",
        body: "Quebec City's most café-dense street sees constant tourist foot traffic. A branded house blend bag at $20–$22, with French copy and your café's visual identity, is one of the few souvenirs that tourists use every morning after they return home — and associate with the city they fell in love with.",
      },
      {
        title: "French-language house blend identity",
        body: "Define your café's espresso or filter profile in French — tasting notes, origin, story — and put it on a bag that is yours. A named house blend differentiates your café from every other spot on Rue Saint-Jean that is also buying from a shared roaster.",
      },
      {
        title: "Carnaval and FEQ seasonal editions",
        body: "For Quebec's two biggest festivals — Carnaval de Québec (February) and Festival d'été (July) — a limited-edition seasonal bag is a collectible souvenir. Cafés near the Plains of Abraham and Old Quebec are positioned to sell to a captive festival audience for whom the bag is a physical memory of the event.",
      },
      {
        title: "Wholesale to Old Quebec restaurants and hotels",
        body: "The hotels and restaurants in Old Quebec are actively looking for Quebec-made products to feature. A café with a well-designed branded house blend can supply those establishments with a product they can sell or serve under their own brand — or under a co-branded label that references your café.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — delivery to Quebec City is 2–3 business days. French-language design is the default. Counter margin at 100 bags ($11.75/bag cost, $20 retail) is approximately 41% gross per bag.",
  faq: [
    {
      q: "Can I get French-only packaging?",
      a: "Yes. French-only is the default for Quebec City clients. All copy — tasting notes, origin story, bag branding — can be entirely in French, consistent with the city's cultural and legal context.",
    },
    {
      q: "Can I sell the bags to tourists who don't have local delivery?",
      a: "Yes. EZPZ integrates with Shopify, allowing tourists who visit your café and scan a QR code to reorder your house blend online after they return home. We ship across Canada and the US.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Quebec City's tourist-heavy foot traffic typically converts to strong counter sales, especially during festival seasons.",
    },
    {
      q: "How fresh is the coffee when it arrives?",
      a: "EZPZ roasts to order. Quebec City orders arrive in 2–3 business days — among the freshest possible delivery windows in Canada given Montreal's proximity.",
    },
  ],
  siblings: [
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
  ],
  ctaClose:
    "Quebec City's cafés are part of the world's most-visited French city outside France. Your house blend should hold that standard.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
