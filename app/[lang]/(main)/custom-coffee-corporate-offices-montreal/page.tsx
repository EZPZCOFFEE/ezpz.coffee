import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Corporate Offices | EZPZ Coffee",
  description:
    "Montreal's tech, pharma, and finance sectors demand bilingual, premium corporate gifts. Custom branded specialty coffee — French/English, zero minimum, roasted locally, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Corporate Offices | EZPZ Coffee",
    description:
      "Montreal's bilingual corporate market demands gifts that work in French and English. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Montreal Corporate Offices",
    subheadline:
      "Montreal runs on two languages and one strong cup. Make your corporate gift one that travels home in both.",
    ctaSubject: "Corporate coffee gifting Montreal",
  },
  aeoAnswer:
    "Montreal corporate offices can order bilingual (French/English) custom branded specialty coffee bags from EZPZ. No minimum order, starting at 100 bags at $11.75/bag, roasted in Montreal, delivered in 2–3 business days. Available for client gifts, onboarding kits, and event programs.",
  why: {
    heading: "Montreal's Corporate Market and the Bilingual Gift Problem",
    paragraphs: [
      "Greater Montreal has roughly 550,000 office workers across a remarkably diverse corporate landscape — global pharmaceutical companies like GSK and AstraZeneca with major research facilities in Laval; tech leaders like Lightspeed Commerce, Coveo, Dialogue, and Unity; national financial institutions including National Bank and Desjardins; and creative industries anchored by Ubisoft, CGI, and Moment Factory.",
      "Montreal's corporate gifting challenge is unique in Canada: your gift needs to land well in both French and English. A generic English-only corporate gift can feel tone-deaf to a predominantly francophone team. A gift that's been considered for a bilingual audience — with copy in both languages, a Montreal origin story, and premium packaging — signals that your organization pays attention to where it operates.",
      "Custom branded coffee from EZPZ is roasted locally in Montreal, which gives the gift authentic local provenance. 'Roasted in Montreal for [Company Name]' is copy that plays well with both francophone and anglophone recipients, and positions the gift as a reflection of genuine care rather than a line item on a procurement list.",
    ],
  },
  useCases: {
    heading: "How Montreal Companies Use Branded Coffee",
    items: [
      {
        title: "Bilingual Q4 client gifts",
        body: "Custom bags with French/English copy — your logo, the coffee's origin, a message of appreciation — are the Montreal corporate gift that lands equally well with both language communities. Order in October for December delivery.",
      },
      {
        title: "French-first onboarding kits",
        body: "For organizations hiring into primarily francophone teams in Greater Montreal, EZPZ can produce French-first packaging with your brand identity. A Day 1 gift that respects the language of the workplace signals cultural intelligence.",
      },
      {
        title: "Pharma and biotech conference gifts",
        body: "Montreal hosts major life sciences and pharma events. Custom branded bags as conference delegate gifts are clean, professional, and used. They don't end up in the bin on checkout — unlike most conference swag.",
      },
      {
        title: "Remote employee gifting",
        body: "Montreal-based tech companies with distributed teams use branded coffee to maintain culture across cities. EZPZ can ship directly to your employees' home addresses across Canada, with each bag carrying your brand and a personal note.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to any Greater Montreal office address. Bilingual packaging (French/English) is included at no extra charge. For multi-address programs, contact us to discuss bulk pricing and direct-to-employee shipping.",
  faq: [
    {
      q: "Can you design the bag in French only?",
      a: "Yes. EZPZ can design your bag in French only, English only, or bilingual — your choice. For predominantly francophone organizations in Montreal, French-primary packaging is often the right call.",
    },
    {
      q: "What's the lead time for a Q4 corporate gift program?",
      a: "For orders under 500 bags, 2–3 weeks from design approval. For programs above 1,000 bags, allow 4 weeks. October start is recommended for December delivery.",
    },
    {
      q: "Can you ship directly to employee home addresses?",
      a: "Yes. EZPZ can fulfill orders to individual addresses across Canada — ideal for remote team gifting. Provide us with a shipping manifest and we handle fulfillment per address.",
    },
    {
      q: "Is there volume pricing for large corporate programs?",
      a: "Yes. Pricing scales down from $11.75/bag at 100 units. Contact us for pricing at 500, 1,000, and 5,000+ bags. Large programs also qualify for dedicated account support.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
  ],
  ctaClose:
    "Montreal's best companies take the details seriously. Start with the gift that gets used every morning.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
