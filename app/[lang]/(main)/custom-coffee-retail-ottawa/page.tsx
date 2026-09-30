import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Boutiques & Retail | EZPZ Coffee",
  description:
    "ByWard Market, Elgin Street, Westboro — Ottawa's boutiques serve bilingual shoppers with steady government-income foot traffic. Custom branded specialty coffee, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-retail-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Boutiques & Retail | EZPZ Coffee",
    description: "Ottawa's bilingual boutique market and steady government-income foot traffic make branded retail coffee a reliable seller. Zero minimum, $11.75/bag.",
    url: "https://www.ezpz.coffee/en/custom-coffee-retail-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Ottawa Boutiques & Retail Shops",
    subheadline:
      "ByWard Market. Elgin Street. Westboro. Ottawa's boutiques serve a bilingual, civically engaged shopper with real spending power and a preference for local.",
    ctaSubject: "Custom coffee for Ottawa boutique",
  },
  aeoAnswer:
    "Ottawa boutiques can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bilingual packaging available. Delivered in 3–5 business days.",
  why: {
    heading: "Ottawa's Boutique Market and the Bilingual Local-Brand Opportunity",
    paragraphs: [
      "Ottawa's independent retail corridors have distinct identities that speak to different segments of the city's population. The ByWard Market boutiques — surrounded by restaurants, galleries, and the Rideau Centre — serve a tourist flow and a young professional urban core. Elgin Street serves the Centretown and Glebe demographics: government professionals, young families, and the arts community. Westboro is the affluent family neighbourhood with disposable income and a preference for locally sourced, well-designed products.",
      "Ottawa's government workforce creates a uniquely stable retail consumer base. Federal public servants have predictable incomes, defined benefit pensions, and the financial security to shop intentionally at boutiques rather than defaulting to big-box retail. A Westboro boutique on a Saturday serves some of the most reliably loyal retail customers in Canada — and they come back every week.",
      "The bilingual character of Ottawa's retail market is genuinely significant. A boutique in the Glebe or on Bank Street that serves French and English speakers equally — and carries bilingual packaging in its food and lifestyle retail section — signals cultural fluency that matters to Ottawa's franco community and to the many bilingual households in the National Capital Region.",
    ],
  },
  useCases: {
    heading: "How Ottawa Boutiques Use Custom Coffee",
    items: [
      {
        title: "Bilingual lifestyle retail",
        body: "A French/English branded coffee bag on the shelf of an Ottawa boutique serves the full bilingual market with a single product. For the Glebe shopper who switches languages at the coffee counter, a bilingual design signals that the boutique curates with the whole community in mind.",
      },
      {
        title: "ByWard Market tourist gifting",
        body: "ByWard Market is Ottawa's highest-traffic tourist shopping destination. A Canadian-roasted branded coffee bag — with 'Ottawa' visible in the design — is a locally specific, Canada-branded take-home gift that the ByWard tourist market responds to well. It's specific enough to feel like a real souvenir.",
      },
      {
        title: "Westboro holiday gift sets",
        body: "Westboro's boutiques at Christmas sell to the most reliably spending retail customers in the city. A 'local Ottawa morning' gift bundle — a branded coffee bag, an Ottawa-made candle, a ceramic piece from a local studio — at $60–$100 is a premium gift that Westboro shoppers buy without hesitation.",
      },
      {
        title: "Government worker weekday retail",
        body: "The foot traffic on Elgin Street and around Wellington and Bank Streets during lunch hour and after work is almost entirely government and public sector. A branded coffee bag in a boutique that government employees pass on their commute is a conversion product — familiar, affordable, and easily added to a quick lunch-hour browse.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa boutique?",
      a: "Yes. Bilingual (French/English) packaging is available at no extra charge and is recommended for Ottawa's bilingual retail market.",
    },
    {
      q: "What coffee profile works for Ottawa boutique retail?",
      a: "Ottawa's bilingual retail market is broad — a clean, approachable medium roast with clear sweetness (Colombian washed, Brazilian natural) is the safest choice for mainstream boutique retail. For specialty-focused boutiques, a single-origin with detailed tasting notes performs well.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Ottawa?",
      a: "3–5 business days from Montreal. Ottawa is close to the roastery — one of the fastest delivery windows of any city EZPZ serves.",
    },
  ],
  siblings: [
    { label: "Retail · Montreal", href: "/en/custom-coffee-retail-montreal" },
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Cafés · Ottawa", href: "/en/custom-coffee-cafes-ottawa" },
    { label: "Corporate · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
  ],
  ctaClose:
    "Ottawa's boutique shoppers come back every week. Give them a reason to add your coffee to the basket.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
