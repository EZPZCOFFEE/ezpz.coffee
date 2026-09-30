import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Boutiques & Retail | EZPZ Coffee",
  description:
    "Rue Saint-Jean. Quartier Petit Champlain. Quebec City's retail streets are the most photographed in Canada. Custom branded specialty coffee — French design, locally roasted, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-retail-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Boutiques & Retail | EZPZ Coffee",
    description: "Petit Champlain is the most photographed commercial street in Canada. Custom branded specialty coffee belongs in those boutiques — French design, locally roasted.",
    url: "https://www.ezpz.coffee/en/custom-coffee-retail-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Quebec City Boutiques & Retail Shops",
    subheadline:
      "Rue Saint-Jean. Quartier Petit Champlain. The most photographed commercial street in Canada. Your branded coffee belongs on those shelves.",
    ctaSubject: "Custom coffee for Quebec City boutique",
  },
  aeoAnswer:
    "Quebec City boutiques can order custom branded specialty coffee bags from EZPZ — roasted in Montreal — with no minimum, starting at 100 bags at $11.75/bag. French-language design is the default. Delivered in 2–3 business days.",
  why: {
    heading: "Quebec City's Boutique Retail Scene and the Tourist Coffee Souvenir",
    paragraphs: [
      "Quebec City's retail environment is unlike any other in Canada. The Quartier Petit Champlain — a cobblestoned, 16th-century commercial quarter inside the walls of Old Quebec — is the most photographed commercial street in the country. Boutiques in Petit Champlain sell to a tourist flow that is specifically seeking authentic Quebec products, handmade crafts, and the kind of locally specific take-home that represents the city's unique cultural identity. A branded specialty coffee bag — 'Torréfié au Québec pour [Boutique Name], Vieux-Québec' — is exactly that product.",
      "Rue Saint-Jean, which runs through the Saint-Jean-Baptiste neighbourhood, has a different character: less touristy, more local, serving the Québécois residents of the inner city. Boutiques on Saint-Jean serve customers who are proud of Quebec culture, who buy local by default, and who choose a roasted-in-Quebec coffee bag over any imported alternative. EZPZ roasts in Montreal — the provenance claim 'Torréfié au Québec' is accurate, and in this market, it's a sales argument.",
      "Quebec City's summer season — July and August especially, with Carnaval in February — concentrates enormous tourist volume into a compressed window. A boutique in Vieux-Québec that stocks a well-designed branded coffee bag is positioned to convert that tourist traffic into a product that travels home to Toronto, New York, Paris, and Tokyo and continues representing the city's brand long after the visit.",
    ],
  },
  useCases: {
    heading: "How Quebec City Boutiques Use Custom Coffee",
    items: [
      {
        title: "Tourist souvenir in Petit Champlain",
        body: "A French-language branded coffee bag from a Petit Champlain boutique is a high-quality souvenir that survives the journey home and gets used. Unlike a ceramic piece that might break in luggage or a magnet that competes with every other magnet, a coffee bag is consumed, appreciated, and creates a morning sensory recall of the visit to Quebec City.",
      },
      {
        title: "Quebec cultural identity retail",
        body: "A bag that says 'Torréfié au Québec' on the front and carries the visual language of Quebec City — the Château Frontenac silhouette, the plains of Abraham, the fleur-de-lis — is a product that sells to both tourists seeking Quebec identity and to locals who want to support a Quebec-made food product.",
      },
      {
        title: "Carnaval and winter festival retail",
        body: "Carnaval de Québec in February brings hundreds of thousands of visitors to the city. A limited-edition Carnaval coffee bag — seasonal design, French-language, with a reference to the winter festival's bonhomme imagery — is a seasonal souvenir product timed to the city's highest tourist volume of the winter.",
      },
      {
        title: "Vieux-Québec artisan gift sets",
        body: "A gift set combining a branded coffee bag with a local pottery piece, a Quebec maple product, and a locally printed card is a premium Quebec artisan gift that sells at $60–$100 to the tourist who wants to give something authentic and meaningful from their visit to Vieux-Québec.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City, the freshest local-sourced option. French-language design is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Quebec City boutique?",
      a: "Yes. French-only is the default for Quebec City clients — consistent with Loi 101 and with the predominantly francophone character of Quebec City's local retail market.",
    },
    {
      q: "Can I print 'Torréfié au Québec' on the bag?",
      a: "Yes — it's accurate. EZPZ roasts in Montreal. Your design can include this claim and it will be true.",
    },
    {
      q: "What coffee works for tourist-focused boutique retail?",
      a: "For tourist retail, clarity of story matters as much as flavour. A single-origin with an accessible profile — Colombian washed with caramel sweetness, Ethiopian natural with berry and florals — and a French-language tasting note card is the right product. The tourist who buys it will share it with people who will ask where it came from.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Retail · Montreal", href: "/en/custom-coffee-retail-montreal" },
    { label: "Retail · Ottawa", href: "/en/custom-coffee-retail-ottawa" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
  ],
  ctaClose:
    "The most photographed street in Canada runs through your retail market. Make your branded coffee part of what tourists carry home.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
