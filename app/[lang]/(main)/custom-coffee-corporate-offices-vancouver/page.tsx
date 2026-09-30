import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Corporate Offices | EZPZ Coffee",
  description:
    "Amazon, Microsoft, Apple, and a thriving tech sector fill Vancouver's offices. Custom branded specialty coffee for corporate gifts and onboarding — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Corporate Offices | EZPZ Coffee",
    description: "Amazon, Microsoft, and Vancouver's tech sector expect premium corporate gifts. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Vancouver Corporate Offices",
    subheadline:
      "Amazon. Microsoft. Apple. EA. Vancouver's corporate sector has Silicon Valley taste with Pacific Northwest values. Your gifts should reflect that.",
    ctaSubject: "Corporate coffee gifting Vancouver",
  },
  aeoAnswer:
    "Vancouver corporate offices can order custom branded specialty coffee bags from EZPZ for client gifts, onboarding kits, and boardroom programs. No minimum order, starting at 100 bags at $11.75/bag, delivered in 4–6 business days.",
  why: {
    heading: "Why Vancouver's Corporate Market Chooses Specialty Coffee",
    paragraphs: [
      "Vancouver has one of the most sophisticated corporate tech sectors in Canada, anchored by Amazon's second-largest international office, major Microsoft and Apple presences, Electronic Arts, SAP, and a thriving local tech ecosystem that includes Hootsuite, Lark Technologies, and dozens of venture-backed companies. These organizations hire globally competitive talent with globally competitive expectations — including expectations for how they're welcomed, recognized, and gifted.",
      "Vancouver's corporate culture is also deeply sustainability-conscious. Companies with LEED-certified offices, carbon offset programs, and local-sourcing commitments look for gifts that reflect those values. A specialty coffee bag — with traceable supply chain, minimal packaging waste, and a Canadian provenance story — aligns with the sustainability narrative that Vancouver's most progressive employers are already communicating to staff and clients.",
      "The film industry — Vancouver is one of the world's busiest production hubs, earning it the nickname 'Hollywood North' — adds another dimension to the corporate gifting market. Production companies, talent agencies, and studio offices operate on relationship-driven cultures where a premium, personalized gift goes further than a standard corporate giveaway.",
    ],
  },
  useCases: {
    heading: "How Vancouver Offices Use Branded Coffee",
    items: [
      {
        title: "Tech sector onboarding kits",
        body: "Vancouver's tech companies compete aggressively for talent. A Day 1 onboarding kit that includes a branded specialty coffee bag — alongside the laptop and the welcome letter — signals a culture of detail that top candidates notice and mention to their networks.",
      },
      {
        title: "Sustainability-aligned client gifts",
        body: "A custom coffee bag with traceable single-origin sourcing, one-way valve packaging (less waste than pods), and a Canadian provenance story is a gift that lands with Vancouver clients who have strong environmental values. It's premium without the greenwashing.",
      },
      {
        title: "Film and production industry gifts",
        body: "Vancouver's film and TV production culture runs on relationships. A custom-branded coffee bag sent to a director, a DP, or a key production partner is a premium, consumable gift that communicates appreciation at a level that a standard promo item never could.",
      },
      {
        title: "Remote team gifting across Canada",
        body: "Vancouver's tech companies have distributed teams from Vancouver Island to Halifax. EZPZ can ship branded coffee bags directly to remote employees' home addresses across Canada — a brand touchpoint that reaches every member of a distributed team with the same quality and message.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. For large corporate programs, volume pricing is available. Multi-address direct-to-employee shipping is supported — contact us for bulk program details.",
  faq: [
    {
      q: "Can you ship corporate gifts to Amazon or Microsoft employees across Canada?",
      a: "Yes. EZPZ can fulfill orders to individual addresses across Canada — ideal for distributed team gifting. Provide a shipping manifest and we'll handle fulfillment to each address.",
    },
    {
      q: "What coffee profile fits Vancouver's corporate culture?",
      a: "Clean, nuanced specialty coffees with traceable origins perform well with Vancouver's educated corporate audience. We recommend single-origins with documented supply chains — an Ethiopian natural or a washed Colombian — that come with the origin story your sustainability-conscious clients will appreciate.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Corporate programs of 1,000+ bags qualify for volume pricing and dedicated account support.",
    },
    {
      q: "What's the lead time for Vancouver?",
      a: "4–6 business days for standard orders. For Q4 client gifting campaigns, we recommend starting in October to ensure delivery before December.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver's corporate sector has global standards. Your coffee gift should meet them.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
