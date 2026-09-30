import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Real Estate Agents | EZPZ Coffee",
  description:
    "Ottawa's stable government employee market creates loyal, long-term real estate relationships. Bilingual custom branded specialty coffee closing gifts — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-real-estate-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Real Estate Agents | EZPZ Coffee",
    description: "Ottawa's stable real estate market runs on referrals. Bilingual custom branded specialty coffee is the closing gift that starts the next one.",
    url: "https://www.ezpz.coffee/en/custom-coffee-real-estate-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Ottawa Real Estate Agents",
    subheadline:
      "Ottawa's government workforce buys and sells on predictable timelines. The agents who stay in front of that cycle are the ones who brand every closing.",
    ctaSubject: "Custom coffee for Ottawa real estate agent",
  },
  aeoAnswer:
    "Ottawa real estate agents can order bilingual (French/English) custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted in Montreal, delivered to Ottawa in 3–5 business days.",
  why: {
    heading: "Ottawa's Real Estate Market and the Referral-First Opportunity",
    paragraphs: [
      "Ottawa's real estate market has a character unique in Canada: it's driven by a large, stable federal public service workforce whose employment security and pension certainty create reliable, predictable buying and selling cycles. Transfers between departments, promotions to different directorates, retirement moves to Kanata or Orléans — Ottawa's government worker real estate market is one of the most referral-dependent in the country. The agent who delivers the best experience on each transaction collects a lifetime referral network from a community that talks to each other constantly.",
      "Ottawa's bilingual character extends into real estate. The city's francophone communities — Vanier, Orléans, Gatineau across the river — are active buyers and sellers in the National Capital Region's market. An Ottawa agent who serves both language communities with a bilingual branded closing gift signals cultural competence that separates them from agents who only think in one language.",
      "Ottawa's tech sector — Shopify, Kinaxis, L3Harris — has brought a younger, higher-income demographic to markets like Centretown, Westboro, and Hintonburg. These buyers are accustomed to the premium closing gift standard that Toronto and Vancouver agents have set. A specialty coffee bag with your personal brand on it meets that expectation at an investment that easily fits a closing gift budget.",
    ],
  },
  useCases: {
    heading: "How Ottawa Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Bilingual closing day bag",
        body: "A French/English branded bag — 'Welcome Home / Bienvenue chez vous, from [Agent Name]' — covers Ottawa's entire buyer market with a single product. Federal clients, tech buyers, francophone families — the same bag works for everyone, and it lives on their counter for weeks.",
      },
      {
        title: "Annual client database mailing",
        body: "Ottawa's government worker homeowners are almost universally connected to colleagues who are buying, selling, or considering a move. A holiday season mailing to your past client list — 100 to 500 bags depending on database size — keeps your name circulating in the coffee conversations of people who will buy or refer within the next 12 months.",
      },
      {
        title: "Kanata and Orléans tech corridor gifts",
        body: "Ottawa's tech corridor workers in Kanata and the eastern Orléans communities are buying in the $600K–$1M range with the same expectations as Toronto tech buyers. A specialty coffee closing gift signals that Ottawa agents are operating at the same level.",
      },
      {
        title: "Open house leave-behinds for competitive listings",
        body: "Ottawa's competitive spring and fall markets have buyers attending multiple open houses per weekend. A branded coffee bag from the listing agent is a take-home that keeps your name in front of buyers who are actively comparing properties and agents.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual bags for my Ottawa closing gifts?",
      a: "Yes. Bilingual packaging is available at no extra charge and is recommended for Ottawa agents given the city's bilingual buyer market.",
    },
    {
      q: "Can I include my headshot and contact info?",
      a: "Yes. Full design customization — headshot, name, brokerage, phone, and tagline — is supported.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. 100 bags at $11.75/bag. Ottawa agents typically order 100–200 bags per quarter for a consistent closing gift program.",
    },
    {
      q: "How fast is delivery to Ottawa?",
      a: "3–5 business days from Montreal. Order with 7–10 days lead time to ensure arrival before a planned closing.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Montreal", href: "/en/custom-coffee-real-estate-montreal" },
    { label: "Corporate Offices · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
  ],
  ctaClose:
    "Ottawa's government buyers buy and sell on 10-year cycles. Be the agent they call every time.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
