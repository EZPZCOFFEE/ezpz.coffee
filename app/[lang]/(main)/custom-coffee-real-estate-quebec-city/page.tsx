import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Real Estate Agents | EZPZ Coffee",
  description:
    "Quebec City's French-language real estate market and Old City premium properties reward agents who close with intention. Custom branded specialty coffee, French design, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-real-estate-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Real Estate Agents | EZPZ Coffee",
    description: "Quebec City real estate: French first, locally rooted, closing gift that lasts. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-real-estate-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Quebec City Real Estate Agents",
    subheadline:
      "Quebec City buyers are buying history, neighbourhood character, and a quality of life. Your closing gift should honour that choice.",
    ctaSubject: "Custom coffee for Quebec City real estate agent",
  },
  aeoAnswer:
    "Quebec City real estate agents can order French-language custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted in Montreal, delivered to Quebec City in 2–3 business days.",
  why: {
    heading: "Quebec City Real Estate and the Closing Gift That Fits the Culture",
    paragraphs: [
      "Quebec City's real estate market has a character unlike any other Canadian city — buyers are often purchasing into the UNESCO World Heritage Old City, into the stone-walled Victorian neighborhoods of Saint-Jean-Baptiste, into the Limoilou arts district, or into the growing Lebourgneuf and Ste-Foy suburbs. Each of these buyer profiles is distinct, but they share a common quality: Quebec City buyers care about the city's identity, and they notice when the people they work with do too.",
      "A closing gift in Quebec City needs to be French. A branded coffee bag with French copy — your name in French, a message in French, the coffee's origin described in French — is a gesture that says you understand the cultural context of the transaction, not just the financial one. EZPZ offers French-language design as the default for Quebec City clients, making this the easiest choice for any francophone agent.",
      "The Old City and the heritage neighbourhood premiums in Quebec City attract buyers who are investing significant sums in properties with character and history. For an agent selling a $800K Vieux-Québec stone house or a $500K townhouse in Montcalm, a generic closing gift sends the wrong signal. A specialty coffee bag — locally roasted, premium design, French copy — sends the right one.",
    ],
  },
  useCases: {
    heading: "How Quebec City Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "French-language closing day gift",
        body: "A French-language branded bag — 'Bienvenue chez vous' from your agency — is the closing gift that feels native to Quebec City. Local, quality, thoughtful. The buyer puts it in the kitchen of their new home and brews it every morning with your name in front of them.",
      },
      {
        title: "Old Quebec heritage property prestige",
        body: "For buyers purchasing stone-wall properties in Vieux-Québec or restored heritage homes in Saint-Roch, a specialty coffee bag with premium packaging and a French tasting narrative fits the quality level of the property. It's the closing gift that belongs in a kitchen with original 18th-century stonework.",
      },
      {
        title: "Annual francophone client appreciation",
        body: "Quebec City's real estate network is close-knit and family-driven. A French-language holiday gift mailing to your past client database — 100 to 300 bags — keeps your name in front of families who recommend their agent to siblings, parents, and colleagues who are considering a move.",
      },
      {
        title: "New development open house bags",
        body: "Quebec City's growing suburban market in Lebourgneuf, Beauport, and Charlesbourg has active buyers attending new development events. A branded coffee bag as a take-home from an open house or model home tour is a premium leave-behind that keeps your name in the running during the consideration period.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City. French-language packaging is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only bags with my photo and contact info?",
      a: "Yes. French-only design with your headshot, agency logo, name, phone number, and a French tagline is fully supported.",
    },
    {
      q: "Is the coffee roasted in Quebec?",
      a: "Yes. EZPZ roasts at the Canadian Roasting Society in Montreal, Quebec. Your bag can include 'Torréfié au Québec' as an accurate provenance claim.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — among the fastest delivery windows EZPZ offers. Roasted to order, shipped fresh.",
    },
  ],
  siblings: [
    { label: "Real Estate · Montreal", href: "/en/custom-coffee-real-estate-montreal" },
    { label: "Real Estate · Ottawa", href: "/en/custom-coffee-real-estate-ottawa" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose:
    "Quebec City buyers chose a city with character and culture. Your closing gift should reflect the same.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
