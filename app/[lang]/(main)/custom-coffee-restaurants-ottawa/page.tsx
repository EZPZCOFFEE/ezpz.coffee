import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Restaurants | EZPZ Coffee",
  description:
    "Ottawa's government, diplomatic, and tech dining culture demands quality. Custom branded specialty coffee — bilingual, zero minimum, from $11.75/bag, delivered in 3–5 days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-restaurants-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Restaurants | EZPZ Coffee",
    description:
      "Ottawa restaurants serve government, diplomats, and a growing tech scene. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-restaurants-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Ottawa Restaurants",
    subheadline:
      "Ottawa has government expense accounts, 130 embassies, and a rapidly growing tech scene. A branded coffee is a detail they'll notice.",
    ctaSubject: "Custom coffee for Ottawa restaurant",
  },
  aeoAnswer:
    "Ottawa restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Ottawa in 3–5 business days. Bilingual (French/English) design is available.",
  why: {
    heading: "Ottawa's Dining Scene and the Brand Detail That Matters",
    paragraphs: [
      "Ottawa has a dining culture shaped by three distinct forces: the federal government and its 300,000+ public servants who populate Westboro and Glebe restaurants at lunch and dinner; a diplomatic community from 130+ countries whose members entertain regularly at expense; and a rapidly growing tech sector anchored by Shopify HQ, Kinaxis, Nokia, and L3Harris. Each audience has high expectations and a discerning palate.",
      "The ByWard Market has been the city's restaurant hub for over 170 years — but the Glebe, Westboro, and Centretown neighbourhoods have developed strong independent dining identities. Ottawa restaurants in these areas compete not just on menu, but on the details that turn a meal into a reference point. Coffee is that detail. It's the last thing a guest experiences and the first thing they'll mention when recommending the restaurant to a colleague.",
      "Ottawa is officially a bilingual city — roughly 40% of residents are French-speaking, and many more are functionally bilingual federal workers. EZPZ's bilingual packaging option means your coffee bag can speak to both communities without a second SKU or extra cost.",
    ],
  },
  useCases: {
    heading: "How Ottawa Restaurants Use Branded Coffee",
    items: [
      {
        title: "Diplomatic and government entertaining",
        body: "Ottawa's diplomatic and government community dines on budgets and expectations set by embassies and departmental protocols. A custom-branded post-dinner coffee — specialty-grade, with a clear origin narrative — fits the quality expectation of this audience and leaves a branded impression that matters in a relationship-driven city.",
      },
      {
        title: "ByWard Market and Glebe retail bags",
        body: "Ottawa tourists and locals alike shop for locally made, premium products in ByWard Market and the Glebe. A custom coffee bag at $20 is a premium souvenir that carries your restaurant's identity out of the building and onto kitchen shelves across the National Capital Region.",
      },
      {
        title: "Tech company team dinners",
        body: "Shopify, Kinaxis, and other Ottawa tech companies run regular team dinners for large groups. A branded coffee takeaway in the bill presenter or at the host stand converts a group table into a bag that circulates through the entire office the next morning.",
      },
      {
        title: "Bilingual house blend",
        body: "A bag designed with French and English copy — your restaurant's name, the coffee's origin, and a brief tasting note — is a signal that your business takes Ottawa's bilingual character seriously. EZPZ provides bilingual design at no extra charge.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days — one of the fastest turnarounds outside Quebec. Bilingual packaging is available at no extra charge. Orders start at 100 bags at $11.75/bag.",
  faq: [
    {
      q: "Can you do bilingual (French/English) bags for our Ottawa restaurant?",
      a: "Yes. Bilingual packaging is available at no extra charge and is well-suited to Ottawa's bilingual dining audience. We can do French-primary, English-primary, or equal-language layouts.",
    },
    {
      q: "How long does delivery take to Ottawa?",
      a: "3–5 business days from order confirmation. Ottawa is close enough to Montreal that delivery is among the fastest we offer outside Quebec.",
    },
    {
      q: "What's the minimum order?",
      a: "No enforced minimum. Start with 100 bags at $11.75/bag to gauge interest — most Ottawa restaurants find counter sales strong given the mix of locals and visitors who come through the door.",
    },
    {
      q: "Can we feature the coffee's origin on our menu?",
      a: "Yes, and we encourage it. EZPZ provides full traceability information for each coffee — origin country, region, farm or cooperative, processing method, and cupping notes — so your menu or table card can tell the complete story.",
    },
  ],
  siblings: [
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
    { label: "Corporate Offices · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
    { label: "Cafés · Ottawa", href: "/en/custom-coffee-cafes-ottawa" },
  ],
  ctaClose:
    "Ottawa is a city of detail-oriented professionals. Make sure your coffee is one of the details they remember.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
