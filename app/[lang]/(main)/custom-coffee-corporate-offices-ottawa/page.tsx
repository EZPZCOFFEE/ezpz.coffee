import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Corporate Offices | EZPZ Coffee",
  description:
    "Ottawa's federal government, contractors, and Crown corporations make it a year-round corporate gifting market. Bilingual custom branded specialty coffee — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Corporate Offices | EZPZ Coffee",
    description: "Government departments, contractors, and tech companies fill Ottawa offices. Bilingual custom branded coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Ottawa Corporate Offices",
    subheadline:
      "Federal government, Crown corporations, and Shopify HQ all have one thing in common: they all need bilingual corporate gifts that make an impression.",
    ctaSubject: "Corporate coffee gifting Ottawa",
  },
  aeoAnswer:
    "Ottawa corporate offices can order bilingual (French/English) custom branded specialty coffee bags from EZPZ. No minimum order, starting at 100 bags at $11.75/bag, roasted in Montreal, delivered in 3–5 business days.",
  why: {
    heading: "Ottawa's Corporate Market: Stable, Bilingual, and High Volume",
    paragraphs: [
      "Ottawa is Canada's most stable corporate gifting market. Unlike Toronto or Calgary, where corporate activity tracks closely with private sector cycles, Ottawa's gifting demand is anchored by the federal government's year-round procurement activity, the operations of Crown corporations like CBC, Canada Post, and Export Development Canada, and the contract vehicles of consulting and technology firms like CGI Group, Deloitte, KPMG, and Accenture Federal Services.",
      "The federal government is uniquely sensitive to the bilingual dimension of corporate gifts. A gift that's English-only, sent from a contractor to a francophone counterpart at a government department, can register as culturally inattentive. A bilingual custom-branded coffee bag — with French/English copy, a Canadian provenance story, and premium packaging — is a safe and premium choice for any Ottawa corporate relationship regardless of the recipient's first language.",
      "The tech sector's growth in Ottawa — Shopify's headquarters, Kinaxis, Nokia, L3Harris, and dozens of scale-ups — brings a second corporate culture to the city that is more startup-oriented but equally relationship-driven. For these organizations, branded coffee onboarding kits and client gifts play the same role they do in Toronto's tech corridor.",
    ],
  },
  useCases: {
    heading: "How Ottawa Companies Use Branded Coffee",
    items: [
      {
        title: "Government contractor client gifts",
        body: "Ottawa's government contracting ecosystem — firms managing federal IT, consulting, and professional services contracts worth hundreds of millions — maintains relationships with department heads and procurement officers through quality-signal gifts. A bilingual custom coffee bag from a Canadian roaster is a thoughtful, appropriate, and memorable choice.",
      },
      {
        title: "Bilingual onboarding kits for federal hires",
        body: "Federal departments and agencies with bilingual workforces can use EZPZ's French/English packaging for Day 1 welcome kits. A branded coffee bag in both official languages signals that the organization takes its bilingual obligations seriously at every level.",
      },
      {
        title: "Crown corporation executive gifts",
        body: "Crown corporation executives have high standards for corporate gifts — they move in circles that include private sector peers at Bay Street level. A specialty coffee bag with premium design, a named origin story, and bilingual copy is a gift that works at that level without requiring an executive gift budget.",
      },
      {
        title: "Tech company distributed team gifting",
        body: "Shopify and other Ottawa tech companies with distributed teams use branded coffee to maintain culture across cities and time zones. EZPZ can ship directly to employee home addresses across Canada — providing a consistent brand touchpoint for remote workers from Victoria to Halifax.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging is included at no extra charge. For federal procurement programs, EZPZ can issue invoices with appropriate procurement documentation — contact us for details.",
  faq: [
    {
      q: "Can you produce bilingual bags for a government department gift program?",
      a: "Yes. Bilingual packaging is available at no extra charge. EZPZ can design bags in French/English, French-primary, or English-primary. For federal procurement, we can provide standard invoicing and product documentation.",
    },
    {
      q: "Do you support direct-to-employee shipping for a distributed federal team?",
      a: "Yes. Provide EZPZ with a shipping manifest of employee home addresses and we'll fulfill and ship each bag individually. Ideal for distributed government team gifting.",
    },
    {
      q: "What's the lead time for Ottawa orders?",
      a: "3–5 business days from order confirmation — one of EZPZ's faster delivery windows, given Ottawa's proximity to Montreal.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Government contractor programs often scale to 500–2,000 bags per quarter — volume pricing applies.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
  ],
  ctaClose:
    "Ottawa's corporate relationships span decades. Make sure the gift you send in December is the one they remember in June.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
