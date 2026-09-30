import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Hotels | EZPZ Coffee",
  description:
    "Quebec City hotels serve 10 million annual visitors in a UNESCO World Heritage city. Custom branded specialty coffee — French design, locally roasted, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-hotels-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Hotels | EZPZ Coffee",
    description:
      "Quebec City is a UNESCO World Heritage city with 10M annual visitors. Your hotel coffee should reflect the destination.",
    url: "https://www.ezpz.coffee/en/custom-coffee-hotels-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Quebec City Hotels",
    subheadline:
      "Château Frontenac. Old Quebec stone walls. Carnaval in February, FEQ in July. Every guest is here for an experience — your coffee should be part of it.",
    ctaSubject: "Custom coffee for Quebec City hotel",
  },
  aeoAnswer:
    "Quebec City hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted to order in Montreal, delivered in 2–3 business days. French-language design is standard.",
  why: {
    heading: "Quebec City's Hotel Market and the Authenticity Imperative",
    paragraphs: [
      "Quebec City draws over 10 million visitors a year to one of the most historically intact UNESCO World Heritage sites in the Americas. Guests who come to Old Quebec — to walk the ramparts, eat in a stone-wall bistro, and sleep in a 19th-century building converted into a boutique hotel — are specifically seeking an experience that feels authentic to its place. The in-room coffee is part of that experience. A generic pod says generic hotel. A custom-branded specialty bag says 'we thought about every detail.'",
      "The Château Frontenac is the most photographed hotel in the world — a benchmark against which every Quebec City property is implicitly compared. Boutique hotels in the Saint-Jean-Baptiste and Saint-Roch neighbourhoods have carved out their own identities by leaning into local character, Quebec artisan suppliers, and provincial provenance. A coffee bag that says 'roasted au Québec' and carries the hotel's visual identity fits that philosophy exactly.",
      "EZPZ roasts in Montreal — same province, 2–3 day delivery — making 'roasted in Quebec' an accurate and compelling claim. French-language packaging is available as the default, consistent with Quebec's linguistic character and the Loi 101 requirement that product packaging be in French.",
    ],
  },
  useCases: {
    heading: "How Quebec City Hotels Use Branded Coffee",
    items: [
      {
        title: "Old Quebec welcome amenity",
        body: "A custom French-language coffee bag in the welcome amenity — describing your hotel's origin story and the coffee's provenance — is the kind of local detail that earns Trip Advisor mentions and Instagram shares from guests who appreciate the effort.",
      },
      {
        title: "Carnaval and winter festival programs",
        body: "Carnaval de Québec, held every February, is one of the world's largest winter festivals. Hotels at capacity during Carnaval have a captive audience of cold-weather tourists who will remember the hotel that had its own coffee. A limited-edition Carnaval-season bag is a souvenir with longevity.",
      },
      {
        title: "Festival d'été (FEQ) summer season",
        body: "July's Festival d'été draws 350,000+ visitors to the Plains of Abraham over 11 days. The hotels around Old Quebec fill with music travelers who are looking for experiences. A branded coffee bag in the room on arrival sets the right tone for a memory-making stay.",
      },
      {
        title: "Lobby gift shop sales",
        body: "Quebec City tourists are active buyers of Quebec-made, locally-branded products as souvenirs. A specialty coffee bag with your hotel's branding at $20–$22 sells well in lobby boutiques — particularly when the copy is in French and emphasizes local provenance.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal, Quebec — delivery to Quebec City takes 2–3 business days. French-language packaging is the default. For Carnaval (February) and FEQ (July) programs, order 4 weeks ahead of the festival start date.",
  faq: [
    {
      q: "Can you produce French-only packaging compliant with Quebec language law?",
      a: "Yes. EZPZ can produce French-only packaging — the default for Quebec City clients. The design will meet the requirement that commercial packaging available in Quebec be in French.",
    },
    {
      q: "Can we do limited-edition seasonal designs for Carnaval?",
      a: "Yes. Limited-edition seasonal runs are available from 100 bags minimum. We recommend ordering 4 weeks before Carnaval (early January) to receive in time for the February festival.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — among the fastest in Canada. Roasted to order, shipped fresh, with a one-way degas valve that preserves freshness for 8–12 months after roast.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Most Quebec City hotels start with 100–200 bags and find strong sales in the lobby gift shop and consistent positive guest feedback in room reviews.",
    },
  ],
  siblings: [
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
    { label: "Cafés · Quebec City", href: "/en/custom-coffee-cafes-quebec-city" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
  ],
  ctaClose:
    "Quebec City is one of the world's most visited heritage destinations. Your hotel coffee should belong here.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
