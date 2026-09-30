import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Real Estate Agents | EZPZ Coffee",
  description:
    "Montreal's bilingual real estate market requires a closing gift that works in both languages. Custom branded specialty coffee — French/English, roasted locally, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-real-estate-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Real Estate Agents | EZPZ Coffee",
    description: "Montreal real estate agents close in two languages. Bilingual custom branded specialty coffee is the closing gift that works for both.",
    url: "https://www.ezpz.coffee/en/custom-coffee-real-estate-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Montreal Real Estate Agents",
    subheadline:
      "Montreal's real estate market spans from Plateau triplexes to Outremont duplexes to Griffintown condos. Your closing gift should be as thoughtful as your market knowledge.",
    ctaSubject: "Custom coffee for Montreal real estate agent",
  },
  aeoAnswer:
    "Montreal real estate agents can order bilingual (French/English) custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted locally in Montreal, delivered in 2–3 business days.",
  why: {
    heading: "Montreal Real Estate Agents and the Bilingual Closing Gift",
    paragraphs: [
      "Montreal's real estate market is unlike any other in Canada — it spans French-speaking buyers in Rosemont and Verdun, English-speaking buyers in NDG and the West Island, and a growing bilingual buyer base in Griffintown, Plateau-Mont-Royal, and Mile End who move fluidly between both languages. A real estate agent who serves this market effectively speaks both, and so should their closing gift.",
      "A bilingual custom-branded coffee bag — your name, your photo, your tagline in French and English — is the closing gift that tells your Montreal clients that you understand the city they just bought into. 'Roasted in Montreal' on the bag is genuine local provenance: this coffee is from here, just like you, just like the neighbourhood they chose.",
      "Montreal's real estate is also among Canada's most personal — buyers in this city research the arrondissement, the café culture, the walking score of the block before they make an offer. They are detail-oriented people who notice and appreciate detail in return. A quality closing gift signals that you noticed them too.",
    ],
  },
  useCases: {
    heading: "How Montreal Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Bilingual closing day gift",
        body: "A French/English branded bag — 'Welcome Home / Bienvenue chez vous' — handed over at the notaire appointment covers every Montreal buyer regardless of their first language. One product, one message, zero awkwardness.",
      },
      {
        title: "Neighbourhood-specific open house bags",
        body: "Leave branded bags at Plateau open houses for Mile End buyers, or Griffintown open houses for Centretown buyers. Montreal buyers are neighbourhood-loyal — a bag that shows you know the neighbourhood builds trust before they've even made an offer.",
      },
      {
        title: "Annual referral network gift",
        body: "November and December are Montreal moving season's quiet period and referral season's peak. A holiday branded coffee bag to your past client list — 'Merci / Thank you' — is a bilingual gesture that lands with both language communities and keeps your name on the fridge for January conversations.",
      },
      {
        title: "Condo investor gifts",
        body: "Montreal's condo investor market — particularly Griffintown, Côte-des-Neiges, and Ville-Marie — involves repeat buyers who invest in multiple units. A premium bilingual branded coffee bag as a closing gift for an investor communicates that you treat their business as the relationship it is, not just a transaction.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery, the freshest possible closing gift for a Montreal agent. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual (French/English) bags for my Montreal clients?",
      a: "Yes. Bilingual packaging is available at no extra charge and is the default recommendation for Montreal agents. One bag, both language communities.",
    },
    {
      q: "Can I put my headshot and contact info on the bag?",
      a: "Yes. Your name, headshot, brokerage logo, phone number, and tagline can all be incorporated into the bag design.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. 100 bags at $11.75/bag. A Montreal agent closing 20 transactions a year who gives a coffee gift at every closing spends less than $2,500/year for a closing gift that keeps their name in the client's home for months.",
    },
    {
      q: "Can I order fresh batches as I close new deals?",
      a: "Yes. Reorders use your saved design and are produced and delivered in 2–3 business days. No commitment required between orders.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Vancouver", href: "/en/custom-coffee-real-estate-vancouver" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
  ],
  ctaClose:
    "Montreal buyers chose their neighbourhood as carefully as their home. Your closing gift should match that intention.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
