import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Toronto Cafés | EZPZ Coffee",
  description:
    "Toronto's café scene is the most competitive in Canada. Custom branded house blend bags — zero minimum, specialty grade, Shopify integration — from $11.75/bag, delivered in 3–5 days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-cafes-toronto" },
  openGraph: {
    title: "Custom Coffee Bags for Toronto Cafés | EZPZ Coffee",
    description:
      "Toronto has more cafés than any city in Canada. The ones with lasting identity are the ones with a house blend that's unmistakably theirs.",
    url: "https://www.ezpz.coffee/en/custom-coffee-cafes-toronto",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Cafés",
    parentHref: "/en/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Custom Coffee Bags for Toronto Cafés",
    subheadline:
      "Toronto has more cafés than any other city in Canada. The ones that build lasting identity are the ones with a house blend that's unmistakably theirs.",
    ctaSubject: "Custom coffee bags for my Toronto café",
  },
  aeoAnswer:
    "Toronto cafés can order custom branded house blend bags from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order in Montreal and arriving in 3–5 business days. EZPZ integrates with Shopify for online sales with no inventory required.",
  why: {
    heading: "Toronto Cafés and the House Blend Advantage",
    paragraphs: [
      "Toronto's café scene has matured faster than almost any other city in North America. Pilot Coffee Roasters, Sam James Coffee Bar, Fahrenheit Coffee, Te Aro, De Mello, Café Tamps — the city has world-class independent cafés in Kensington Market, the Distillery District, Liberty Village, Leslieville, and beyond. That maturity has made the market more competitive, not less, and the differentiation battlefield has shifted from equipment and technique to identity and story.",
      "A café with a house blend that its baristas can describe with enthusiasm — 'our Ethiopia is a natural process from a cooperative in Sidama, it's chocolate and stone fruit, it pulls beautifully as espresso and makes a stunning pour-over' — is a café that gets talked about. That story lives on a bag. The bag sells at the counter, ships online, and shows up on kitchen shelves across the city long after the customer's last visit.",
      "EZPZ started in Montreal but serves Toronto cafés across the city because the need is the same: specialty coffee, custom branding, zero minimum, with a business model that pays for itself. Counter retail at $18–$22/bag on a $11.75 cost is a margin most café operators can't ignore.",
    ],
  },
  useCases: {
    heading: "How Toronto Cafés Use EZPZ",
    items: [
      {
        title: "Signature house blend",
        body: "Define your espresso or filter identity with a curated origin blend. EZPZ will curate options from their specialty library, taste with you, and produce a profile that's yours — from tasting notes to bag copy to the origin story behind the bar.",
      },
      {
        title: "Counter retail across Toronto neighbourhoods",
        body: "Neighbourhoods like Kensington Market, Roncesvalles, and Leslieville have foot traffic with high willingness to buy local coffee brands. Branded bags at $20 sell consistently in cafés with strong community identity — EZPZ's margin structure makes this a viable revenue line from day one.",
      },
      {
        title: "Shopify store and dropshipping",
        body: "EZPZ integrates with Shopify. Your Toronto café's house blend can be sold online — shipped directly from Montreal to customers across Canada without you handling inventory, packing tape, or courier accounts. Passive revenue, your brand, no fulfillment overhead.",
      },
      {
        title: "Wholesale to restaurants and offices",
        body: "Your branded coffee isn't just for your counter. King West restaurants, Liberty Village offices, and Corktown co-working spaces are all active buyers of independently branded coffee for their programs. Your EZPZ bag is a wholesale product with credibility.",
      },
    ],
  },
  localNote:
    "EZPZ delivers to Toronto café addresses in 3–5 business days from Montreal. Counter retail economics: at 100 bags at $11.75, selling at $20 retail yields roughly $8.25 gross margin per bag (~41%). Shopify integration is available for online sales with zero inventory required.",
  faq: [
    {
      q: "How do I know the coffee profile will be right for espresso service?",
      a: "EZPZ curates every profile for the intended brew method. For espresso, we'll work toward a balanced blend — typically Brazil-forward for sweetness and body — and send you a sample roast before production. You approve before any bags are printed.",
    },
    {
      q: "Can I start with a small test run before committing to a design?",
      a: "Yes. You can order 100 bags as a pilot with a simple design, test sales velocity at the counter, then refine the design for the next run. There's no long-term commitment — each order is independent.",
    },
    {
      q: "How does the Shopify integration work?",
      a: "Connect your Shopify store to EZPZ's platform. When a customer orders your house blend, EZPZ roasts and ships directly to them with your branding. You receive the margin, EZPZ handles fulfillment. You never touch the coffee or the box.",
    },
    {
      q: "Are there cafés in Toronto already doing this?",
      a: "Yes. EZPZ works with cafés across the GTA. The platform started in Montreal but serves Toronto clients from Etobicoke to Scarborough. We can share case studies upon request.",
    },
  ],
  siblings: [
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
  ],
  ctaClose:
    "Toronto's best cafés are defined by their coffee, not just their vibe. Start building yours.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
