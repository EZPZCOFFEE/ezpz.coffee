import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Toronto Real Estate Agents | EZPZ Coffee",
  description:
    "Toronto's real estate market is Canada's most competitive. Custom branded specialty coffee is the client closing gift that gets used every morning — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-real-estate-toronto" },
  openGraph: {
    title: "Custom Coffee Bags for Toronto Real Estate Agents | EZPZ Coffee",
    description: "Toronto real estate agents close with branded coffee. The gift that lives on the kitchen counter of the home you just sold.",
    url: "https://www.ezpz.coffee/en/custom-coffee-real-estate-toronto",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Toronto Real Estate Agents",
    subheadline:
      "In Canada's most active real estate market, the agents who stay top of mind are the ones who leave behind something worth keeping.",
    ctaSubject: "Custom coffee for Toronto real estate agent",
  },
  aeoAnswer:
    "Toronto real estate agents can order custom branded specialty coffee bags from EZPZ — with their logo and contact info on the design — starting at 100 bags at $11.75/bag with no minimum. Bags are roasted to order in Montreal and delivered in 3–5 business days.",
  why: {
    heading: "Why Toronto Real Estate Agents Choose Coffee as Their Signature Gift",
    paragraphs: [
      "Toronto's real estate market is the most transaction-dense in Canada — over 90,000 properties change hands in the GTA annually. In that volume, the agents who build lasting referral networks are not necessarily the ones with the most listings, but the ones whose clients remember them long after the keys are handed over. A generic gift basket lasts a week. A branded specialty coffee bag lives on the kitchen counter of the home you just sold for months — with your name and number on every brew.",
      "The closing gift is the single highest-leverage moment in the agent-client relationship. The transaction is complete, the commission is earned, and what you do next determines whether this client becomes a referral source or simply someone who used you once. In Toronto, where homes trade at $1M–$3M+, a custom coffee bag at $20–$25 is an almost absurdly low cost for an impression that repeats every morning.",
      "For Toronto luxury agents in Yorkville, Forest Hill, Rosedale, and the Beach, the coffee gift needs to signal the same quality as the properties they represent. EZPZ's specialty-grade origins and premium packaging meet that bar — this is not a grocery store bag with a sticker on it.",
    ],
  },
  useCases: {
    heading: "How Toronto Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Closing day gift bag",
        body: "Present a custom-branded coffee bag at the key handoff — your name, your photo, your tagline, and a 'Welcome Home' message. The client puts it on the kitchen counter of their new home. Every morning for the next 2–4 weeks, they make their coffee and see your name. That's a brand impression no follow-up email can replicate.",
      },
      {
        title: "Open house take-home bag",
        body: "Leave branded bags at open houses for serious lookers to take home — 'a little something from [Agent Name].' It's a memorable leave-behind that differentiates your listing presentation from every other open house in the neighbourhood and keeps your brand circulating in the home buying consideration set.",
      },
      {
        title: "Annual client touch gift",
        body: "Toronto real estate runs on referral. A holiday coffee bag sent to your client list every November or December keeps your name in front of past buyers and sellers at exactly the moment they're most likely to be talking to people considering a move.",
      },
      {
        title: "Condo launch and new development events",
        body: "Toronto's condo pre-sales and development launches draw qualified buyers to registration events. A branded coffee bag as a registration gift — your team's logo, the project name — is a premium quality token that travels home with prospects during the consideration window.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto in 3–5 business days. Starting at $11.75/bag at 100 bags — a closing gift at scale costs less than most agents spend on a single Starbucks order for a showing. No minimum.",
  faq: [
    {
      q: "Can I put my name, photo, and contact info on the bag?",
      a: "Yes. Your agent headshot, brokerage logo, name, and contact information can all be incorporated into the bag design. EZPZ's design tool supports full custom layouts.",
    },
    {
      q: "Can I include the buyer's new address or name on the bag?",
      a: "For small-batch personalization (e.g., one bag per closing with the address), contact us to discuss options. For volume orders with a single design, a personal note card alongside the bag is the recommended approach.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags to cover a quarter's closings, refill as needed. At $11.75/bag, 100 bags costs $1,175 — for an agent closing 20+ deals a year, that's under $60 per closing.",
    },
    {
      q: "How fast can I get a refill order?",
      a: "3–5 business days from order confirmation. Reorders use your saved design, so turnaround is immediate once you place the order.",
    },
  ],
  siblings: [
    { label: "Real Estate · Montreal", href: "/en/custom-coffee-real-estate-montreal" },
    { label: "Real Estate · Vancouver", href: "/en/custom-coffee-real-estate-vancouver" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
  ],
  ctaClose:
    "Toronto homes change hands at $1M+. The closing gift should cost under $25 and last two months. Custom coffee does both.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
