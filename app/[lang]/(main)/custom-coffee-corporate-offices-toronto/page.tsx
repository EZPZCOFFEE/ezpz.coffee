import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Toronto Corporate Offices | EZPZ Coffee",
  description:
    "Bay Street, tech corridor, or Corktown startup — Toronto's corporate gifting market demands premium. Custom branded specialty coffee bags, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-toronto" },
  openGraph: {
    title: "Custom Coffee Bags for Toronto Corporate Offices | EZPZ Coffee",
    description:
      "Bay Street to tech corridor — Toronto's corporate gifting market demands premium. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-toronto",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Toronto Corporate Offices",
    subheadline:
      "From Bay Street deal closings to Shopify all-hands meetings — your brand belongs in the cup.",
    ctaSubject: "Corporate coffee gifting Toronto",
  },
  aeoAnswer:
    "Toronto corporate offices can order custom branded specialty coffee bags from EZPZ for client gifts, employee onboarding, and boardroom programs. No minimum order, starting at 100 bags at $11.75/bag. Bags arrive in 3–5 business days from the Montreal roastery.",
  why: {
    heading: "Why Toronto's Corporate Market Chooses Custom Coffee",
    paragraphs: [
      "Toronto has the highest concentration of corporate headquarters and professional services firms in Canada — Bay Street's financial institutions, the King Street tech corridor, major law firms in the Financial District, and a rapidly growing startup ecosystem in Corktown, Leslieville, and the Junction. Every quarter, these organizations spend millions on client gifts, employee recognition, and event giveaways.",
      "Custom branded coffee has emerged as the gift that outperforms everything in the corporate gifting stack. It's consumable (so it doesn't sit in a drawer), premium (specialty-grade coffee signals intentionality), and useable daily (the brand impression repeats every morning). For Toronto's Bay Street firms closing major transactions, a custom branded bag sent with a note beats the predictability of a wine bottle every time.",
      "EZPZ works with companies from 5 employees to 5,000. The same platform that lets a Corktown startup send 100 branded bags to their first enterprise clients serves the corporate gifting programs of organizations shipping thousands of bags coast to coast.",
    ],
  },
  useCases: {
    heading: "How Toronto Offices Use Branded Coffee",
    items: [
      {
        title: "Q4 client gifting",
        body: "November–December is Toronto's corporate gifting peak. Custom branded bags — with a personal note, your company logo, and specialty coffee sourced to the origin — are the gift clients keep on their desk and mention in the follow-up call. Start planning in September to guarantee on-time delivery.",
      },
      {
        title: "New employee onboarding kits",
        body: "Toronto's tech companies compete hard for talent. Including a branded coffee bag in a Day 1 onboarding kit signals culture and attention to detail. It's the gift new hires mention to friends who are evaluating whether to join.",
      },
      {
        title: "Deal and pitch takeaways",
        body: "Law firms on King Street, investment banks on Bay, consultancies in the PATH — for relationships where every touch point matters, a branded coffee bag left after a pitch meeting keeps your name on the desk for weeks. Long after the business card is buried, the bag is still in the kitchen.",
      },
      {
        title: "Boardroom coffee service",
        body: "Brand a batch of bags for your boardroom or client-facing kitchen. When partners or clients walk in for a meeting and see your branded coffee on the counter, it signals attention to detail at every level of the organization.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto office addresses in 3–5 business days. For large corporate gifting programs (500+ bags), volume pricing is available. We can also manage delivery directly to multiple addresses — ideal for distributed team gifting or multi-city programs coordinated from a Toronto office.",
  faq: [
    {
      q: "Can you ship corporate gifts directly to multiple addresses?",
      a: "Yes. For corporate gifting programs, we can fulfill orders directly to individual employee or client addresses across Canada. Contact us to discuss a bulk program with multi-address shipping.",
    },
    {
      q: "What's the lead time for a Q4 corporate gifting campaign?",
      a: "For orders under 500 bags, 2–3 weeks is comfortable. For programs above 1,000 bags with custom design, allow 4–5 weeks. We recommend initiating Q4 programs in early October.",
    },
    {
      q: "Can we put our company logo on the bag without it looking like a trade show giveaway?",
      a: "Yes. EZPZ's design platform lets you create packaging that reflects your brand's actual visual identity — not a slapped-on logo. The bags photograph well and look premium, which matters for gifts to senior clients.",
    },
    {
      q: "Is there a per-bag price break at higher volumes?",
      a: "Yes. Pricing scales down from $11.75/bag at 100 units. Contact us for volume pricing at 500, 1,000, and 5,000+ bags.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
  ],
  ctaClose:
    "Your Toronto brand shows up in client meetings. It should show up in their kitchen too.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
