import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Cafés | EZPZ Coffee",
  description:
    "Ottawa's 300,000+ government workers and growing tech scene fuel a loyal café culture. Custom branded house blend bags — bilingual, zero minimum, from $11.75/bag, delivered in 3–5 days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-cafes-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Cafés | EZPZ Coffee",
    description: "Ottawa's government and tech workers are loyal café regulars. Brand your house blend for the audience that comes back every day.",
    url: "https://www.ezpz.coffee/en/custom-coffee-cafes-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Ottawa Cafés",
    subheadline:
      "Ottawa's government workers, tech employees, and university students are among the most loyal café regulars in Canada. Give them a house blend worth being loyal to.",
    ctaSubject: "Custom coffee bags for my Ottawa café",
  },
  aeoAnswer:
    "Ottawa cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted to order in Montreal, delivered to Ottawa in 3–5 business days. Bilingual (French/English) design available.",
  why: {
    heading: "Ottawa Cafés and the Government Worker Loyalty Economy",
    paragraphs: [
      "Ottawa is one of the most café-loyal cities in Canada. Public servants working long hours in government buildings along Sparks Street, Wellington Street, and in the Centretown and Westboro neighbourhoods make the same café stops every morning and every afternoon. That frequency — daily, year-round, in a city without significant seasonal shutdowns — creates an unusually stable customer base for Ottawa independent cafés.",
      "Westboro, the Glebe, and Centretown have developed distinct café identities that attract both the government worker crowd and the growing tech sector — Shopify's HQ at 150 Elgin Street alone employs thousands of people who walk past or pop into nearby cafés multiple times a day. Those customers follow cafés that have a defined brand identity, and they buy bags when a café's coffee is good enough to want at home on Saturday.",
      "Ottawa's bilingual character makes a bilingual house blend a natural conversation starter. A bag with French and English copy — describing the origin and your café's character in both languages — is a product that resonates with the full spectrum of Ottawa's customer base, from the francophone public servant to the anglophone tech worker.",
    ],
  },
  useCases: {
    heading: "How Ottawa Cafés Use EZPZ",
    items: [
      {
        title: "Westboro and Glebe counter retail",
        body: "Ottawa's most café-dense neighbourhoods have loyal, repeat customers who are willing to spend on a branded house blend from a café they trust. A bag at $20 that says 'house blend, roasted for [Café Name]' captures the conversion from 'daily customer' to 'weekly bag buyer'.",
      },
      {
        title: "Bilingual house blend design",
        body: "Ottawa's cafés serve a genuinely bilingual customer base. EZPZ's bilingual packaging option means your bag works for the anglophone Shopify employee and the francophone public servant equally — one product, both communities.",
      },
      {
        title: "Government and university wholesale",
        body: "Ottawa is home to four universities, multiple colleges, and the headquarters of dozens of federal departments. Branded coffee bags for campus offices, government department kitchens, or university faculty lounges is a B2B wholesale channel available to cafés with established reputations.",
      },
      {
        title: "Shopify and online selling",
        body: "EZPZ integrates with Shopify so your café can sell its house blend to customers across Canada online — fulfilled directly from Montreal. Government workers who move between Ottawa and other cities stay loyal to your brand by buying online.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual packaging at no extra charge. Counter retail margin at 100 bags ($11.75/bag) selling at $20 is roughly 41% gross margin per bag.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa café?",
      a: "Yes. Bilingual (French/English) design is available at no extra charge and is recommended for Ottawa's bilingual customer base.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Ottawa cafés with loyal government and tech regulars typically find the bags sell through within 2–3 weeks of putting them behind the counter.",
    },
    {
      q: "Can I wholesale to government offices or university departments?",
      a: "Yes. Your branded EZPZ bags are shelf-stable and suitable for wholesale. EZPZ can supply larger quantities for office programs — contact us to discuss pricing for 500+ bag wholesale orders.",
    },
    {
      q: "How fresh is the coffee on arrival?",
      a: "EZPZ roasts to order. Ottawa orders arrive in 3–5 business days from dispatch — typically within 5–7 days of roast date. The one-way degas valve preserves freshness for months.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
  ],
  ctaClose:
    "Ottawa's café regulars come back every day. Give them a reason to take your brand home every week.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
