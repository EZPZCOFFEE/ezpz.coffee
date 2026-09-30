import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Real Estate Agents | EZPZ Coffee",
  description:
    "Calgary's fast-growing real estate market rewards agents who build lasting referral networks. Custom branded specialty coffee closing gifts — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-real-estate-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Real Estate Agents | EZPZ Coffee",
    description: "Calgary real estate is growing faster than any other Canadian market. Stand out with custom branded specialty coffee closing gifts.",
    url: "https://www.ezpz.coffee/en/custom-coffee-real-estate-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Calgary Real Estate Agents",
    subheadline:
      "Calgary is growing faster than any other major Canadian city. The agents building referral networks now are the ones who thrive in the next cycle.",
    ctaSubject: "Custom coffee for Calgary real estate agent",
  },
  aeoAnswer:
    "Calgary real estate agents can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary Real Estate and the Referral Network Investment",
    paragraphs: [
      "Calgary's real estate market has been one of Canada's fastest-growing in recent years, fueled by interprovincial migration from BC and Ontario and a resurgent energy sector. Agents who positioned themselves in growing communities — Panorama Hills, Seton, Legacy, Springbank Hill — are handling a wave of first-time buyers and upsizing families who are building deep roots in their new neighbourhoods. These buyers become the referral networks of the next five to ten years.",
      "Calgary buyers are practical but quality-conscious. They've moved here from other major Canadian cities and brought their quality expectations with them. An energy sector buyer who relocated from Vancouver or Toronto and just closed on a $700K home in Signal Hill or Aspen Landing is accustomed to premium closing gifts from their previous market. A generic basket signals that the Calgary market doesn't play at that level. A custom branded specialty coffee bag says otherwise.",
      "Calgary also has a robust luxury acreage market — Bearspaw, Springbank, and the Rocky View County properties that attract buyers spending $1M–$5M on estate properties. These buyers are the strongest referral source in any market, and they remember the agent who treated their closing with the same gravity as their home purchase.",
    ],
  },
  useCases: {
    heading: "How Calgary Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "New community closing gifts",
        body: "Calgary's newest communities — Seton, Cornerstone, Hotchkiss — have buyers who are starting fresh in a new neighbourhood. A branded coffee bag at closing is a daily brand impression in a brand new kitchen, reaching a buyer who is about to meet their neighbours and talk about their agent.",
      },
      {
        title: "Energy sector professional client gifts",
        body: "Calgary's oil and gas executives and engineers are closing on $800K–$2M+ homes in SW Calgary and the luxury acreage market. For this buyer, a quality specialty coffee closing gift communicates that you understand the level of transaction they're used to conducting.",
      },
      {
        title: "Annual client appreciation mailing",
        body: "Calgary's referral real estate runs on annual touch points. A November or December branded coffee mailing to your past client database — 200 to 2,000 bags depending on your database size — is a relationship maintenance investment that keeps your name warm through the slow winter season.",
      },
      {
        title: "Open house bags for competitive listings",
        body: "In Calgary's competitive listing environment, an agent whose open houses include branded take-home bags for qualified buyers is the agent whose name stays on the kitchen counter. EZPZ makes it affordable to do this for every open house.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. For agents running annual client touch programs, volume pricing is available at 500+ bags.",
  faq: [
    {
      q: "Can my headshot and brokerage logo go on the bag?",
      a: "Yes. Full design customization — headshot, logo, name, phone, tagline — is supported.",
    },
    {
      q: "Can I order batches for a specific community launch event?",
      a: "Yes. For community launch events or development pre-sales, EZPZ can produce a co-branded design with your agency and the project name. Minimum is 100 bags per design.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Calgary agents doing 30 closings a year typically order 200–400 bags per quarter.",
    },
    {
      q: "How fast is delivery to Calgary?",
      a: "4–6 business days. Order with 10 days lead time to ensure delivery before a planned closing.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Vancouver", href: "/en/custom-coffee-real-estate-vancouver" },
    { label: "Corporate Offices · Calgary", href: "/en/custom-coffee-corporate-offices-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's market is growing. Build the referral network now with the closing gift that stays on the counter.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
