import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Real Estate Agents | EZPZ Coffee",
  description:
    "Vancouver is the most expensive real estate market in Canada. A custom branded specialty coffee closing gift should match the calibre of the transaction — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-real-estate-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Real Estate Agents | EZPZ Coffee",
    description: "Vancouver homes trade at $2M+. The closing gift should be premium. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-real-estate-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Vancouver Real Estate Agents",
    subheadline:
      "Vancouver homes trade at some of the highest prices in the world. The closing gift should reflect the calibre of the transaction — and the relationship.",
    ctaSubject: "Custom coffee for Vancouver real estate agent",
  },
  aeoAnswer:
    "Vancouver real estate agents can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Vancouver in 4–6 business days.",
  why: {
    heading: "Vancouver Real Estate and the Premium Closing Gift Standard",
    paragraphs: [
      "Vancouver's real estate market is among the most expensive in the world — the average detached home in Greater Vancouver trades above $2 million. The agents who compete at that level are not generic real estate practitioners; they are luxury brand ambassadors who invest heavily in their personal brand, their client relationships, and every touchpoint in the transaction experience. The closing gift is one of the highest-leverage moments in that experience.",
      "Vancouver's buyer base is internationally sophisticated — many buyers are comparing Vancouver to Hong Kong, Tokyo, London, and New York. This is a clientele that has experienced the best closing gifts and the most forgettable ones. A custom branded specialty coffee bag — with a traceable single-origin, premium packaging, and the agent's design identity — communicates a level of intentionality that a wine bottle or a box of chocolates simply doesn't.",
      "Vancouver's wellness and sustainability values add a further dimension. A specialty coffee with a traceable supply chain, minimal-waste packaging, and a Canadian provenance story resonates with buyers whose lifestyle choices already reflect premium, values-aligned consumption. This is a closing gift that fits the home they just bought.",
    ],
  },
  useCases: {
    heading: "How Vancouver Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Luxury closing gift for West Side and Westside properties",
        body: "For Shaughnessy, Kerrisdale, and Point Grey properties trading at $3M–$10M, a custom-branded specialty coffee bag as a closing component — alongside champagne or a luxury gift box — is the consumable element that outlasts everything else. The bag lives on the kitchen counter of the home you sold for months.",
      },
      {
        title: "Eco-conscious client appreciation",
        body: "Vancouver buyers who are buying LEED homes, demanding heat pumps, and choosing electric vehicles are the same buyers who appreciate a closing gift with an environmentally aligned story. A specialty coffee with traceable sourcing and minimal-waste packaging lands authentically with that audience.",
      },
      {
        title: "Pre-sale condo development events",
        body: "Vancouver's pre-sale condo market — Burrard, Yaletown, Olympic Village — draws qualified buyers to registration events. A branded coffee bag as a registration gift for a development project, co-branded with the project name, creates premium brand impression during the consideration window.",
      },
      {
        title: "Annual luxury client maintenance",
        body: "In Vancouver's luxury market, a relationship with a past buyer is worth $100,000–$500,000 in future and referred transaction value. An annual holiday coffee gift — with your name on the design — is an investment of $25 that maintains a relationship worth exponentially more.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Order with 2 weeks lead time for closing gifts planned in advance. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I put my headshot, logo, and contact info on the bag?",
      a: "Yes. Full design customization — headshot, brokerage logo, name, number, tagline, and social handles — is supported. Your bag is your brand.",
    },
    {
      q: "What coffee profile is right for Vancouver luxury buyers?",
      a: "For Vancouver's sophisticated buyer base, EZPZ recommends a traceable single-origin — an Ethiopian natural or a Guatemalan honey process — with clear tasting notes on the bag. The specificity signals quality and care to clients who already know the difference.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Vancouver agents closing 10–15 deals a year find a batch of 100 bags lasts a season.",
    },
    {
      q: "Can I get these in time for a closing that's two weeks away?",
      a: "Yes. Order immediately, and with 4–6 business days to Vancouver, a 10-day turnaround is achievable. Contact us if you have a specific closing date deadline.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Calgary", href: "/en/custom-coffee-real-estate-calgary" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Corporate Offices · Vancouver", href: "/en/custom-coffee-corporate-offices-vancouver" },
  ],
  ctaClose:
    "Vancouver homes are generational decisions. The closing gift should be one worth remembering.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
