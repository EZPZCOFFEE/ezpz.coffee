import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Corporate Offices | EZPZ Coffee",
  description:
    "Calgary's energy sector and growing tech corridor make it Canada's most active corporate gifting market outside Toronto. Custom branded specialty coffee, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Corporate Offices | EZPZ Coffee",
    description: "Suncor, Cenovus, and Calgary's growing tech sector demand premium. Custom branded specialty coffee for corporate gifts, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Calgary Corporate Offices",
    subheadline:
      "The energy sector runs on relationships. The tech corridor runs on retention. Both run on coffee — make yours branded.",
    ctaSubject: "Corporate coffee gifting Calgary",
  },
  aeoAnswer:
    "Calgary corporate offices can order custom branded specialty coffee bags from EZPZ for client gifts, employee programs, and energy sector entertaining. No minimum order, starting at 100 bags at $11.75/bag, delivered in 4–6 business days.",
  why: {
    heading: "Calgary's Corporate Gifting Market and Why Coffee Wins",
    paragraphs: [
      "Calgary's corporate sector is shaped by two dominant forces: the energy industry — Suncor Energy, Cenovus Energy, Canadian Natural Resources, Enbridge, TC Energy — whose Q4 close-out and deal celebration culture drives intense gifting activity, and a rapidly growing technology corridor in the Beltline and East Village that is producing a new class of Calgary employers competing for talent with Toronto and Vancouver.",
      "Energy sector professionals in Calgary are accustomed to premium. Client relationships in oil and gas are maintained over decades, and the gifts that sustain those relationships need to be quality-signal items, not generic promotional merchandise. A custom-branded specialty coffee bag — with a traceable origin, premium packaging, and your firm's name on the design — is a gift that a Suncor VP puts on their desk at home rather than in the donation bin.",
      "The Q4 gifting calendar is particularly intense in Calgary because energy sector fiscal years are closely tied to oil price cycles, and Q4 often coincides with deal announcements, year-end bonuses, and the kind of relationship investment that precedes a strong Q1. Getting your branded coffee in a client's hands in November or December pays dividends in January.",
    ],
  },
  useCases: {
    heading: "How Calgary Companies Use Branded Coffee",
    items: [
      {
        title: "Energy sector Q4 client gifts",
        body: "A custom-branded specialty coffee bag sent with a handwritten note to a client at Suncor, Cenovus, or TC Energy is a gift that gets remembered. In a sector where relationships last decades, a quality-signal gift matters more than a generic one — and coffee gets used every morning.",
      },
      {
        title: "Deal announcement celebration bags",
        body: "Major energy deals in Calgary are celebrated internally with team gifts. A batch of custom-branded bags — with the deal name, the company logo, and the close date — is a collectible gift that commemorates a major professional milestone.",
      },
      {
        title: "Tech corridor onboarding and retention",
        body: "Calgary's Beltline tech companies compete with Toronto and Vancouver for engineering and product talent. A branded coffee bag in the Day 1 kit — alongside the standard MacBook Pro welcome — signals that this company is thoughtful in a way that a basic Amazon gift card never does.",
      },
      {
        title: "TELUS Convention Centre conference bags",
        body: "Calgary hosts major energy industry conferences including Global Petroleum Show and the International Petroleum Technology Conference. Company-branded coffee bags as delegate gifts reach an international audience of industry decision-makers.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. For Q4 energy sector programs, order by November 1 to ensure delivery before December 20. Volume pricing available at 500+ bags.",
  faq: [
    {
      q: "When should I order for Q4 Calgary corporate gifting?",
      a: "Order by November 1 for December delivery. Energy sector Q4 gifting in Calgary runs November–December, and lead time from design approval to delivery is 2–3 weeks.",
    },
    {
      q: "Can you produce coffee bags for a specific deal or project celebration?",
      a: "Yes. EZPZ can design a custom bag for a specific deal announcement, project milestone, or team achievement. Minimum is 100 bags with a 2-week lead time from design approval.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Energy sector programs often scale to 500–2,000 bags for client lists — volume pricing applies.",
    },
    {
      q: "How does the coffee hold up in a corporate gift package?",
      a: "Very well. EZPZ bags are sealed with a one-way degas valve and are shelf-stable for 12+ months after roast date. They travel well, look premium in a gift box, and arrive fresh.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Corporate Offices · Vancouver", href: "/en/custom-coffee-corporate-offices-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's corporate culture is built on long-term relationships. Make sure your coffee is in the hands of the people you're investing in.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
