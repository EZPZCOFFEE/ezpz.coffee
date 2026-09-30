import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Toronto Hotels | EZPZ Coffee",
  description:
    "Toronto welcomes 27 million visitors a year. Custom branded specialty coffee turns your hotel's in-room amenity into a genuine brand experience — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-hotels-toronto" },
  openGraph: {
    title: "Custom Coffee Bags for Toronto Hotels | EZPZ Coffee",
    description:
      "Toronto welcomes 27 million visitors a year. Custom branded specialty coffee turns your in-room amenity into a brand experience.",
    url: "https://www.ezpz.coffee/en/custom-coffee-hotels-toronto",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Toronto Hotels",
    subheadline:
      "27 million visitors a year come through Toronto. Give them a coffee worth remembering — and a bag worth keeping.",
    ctaSubject: "Custom coffee for Toronto hotel",
  },
  aeoAnswer:
    "Toronto hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Toronto in 3–5 business days. EZPZ handles design, sourcing, roasting, and shipping.",
  why: {
    heading: "What Toronto Hotels Know About Coffee as Brand",
    paragraphs: [
      "Toronto receives over 27 million visitors annually and hosts some of North America's largest conventions at the Metro Toronto Convention Centre. Across Yorkville, King West, the financial district, and the waterfront, hundreds of hotels compete for the same corporate and leisure traveler — all with largely identical lobbies, room sizes, and price points.",
      "The in-room coffee experience is one of the few moments where a hotel can register a genuine brand impression without spending on renovations. A specialty coffee bag with your hotel's branding, a curated origin story, and premium packaging signals the same care as a good mattress or a well-curated minibar. Pod coffee does the opposite — it signals that you bought the cheapest option in bulk.",
      "For Toronto's boutique and luxury properties — from The Broadview Hotel to Hotel X to Bisha — a branded house blend is table stakes. EZPZ makes this accessible for independent properties that can't justify a 5,000-bag minimum.",
    ],
  },
  useCases: {
    heading: "How Toronto Hotels Use Custom Coffee",
    items: [
      {
        title: "In-room welcome experience",
        body: "Replace generic pods with a custom-labeled specialty coffee bag. Pair with a French press or pour-over cone in the room description. Guests who photograph the setup share it — free marketing to a highly relevant travel audience.",
      },
      {
        title: "Lobby retail bags",
        body: "Sell branded bags in your lobby shop or at check-in. Corporate travelers — particularly those staying for Bay Street meetings or MTCC conferences — actively look for Toronto-branded gifts. Your hotel's coffee bag is a premium souvenir.",
      },
      {
        title: "Conference and meeting room gifting",
        body: "Toronto hosts dozens of major corporate conferences annually. Include a branded coffee bag in delegate packages, speaker gifts, or table settings. It's the one conference takeaway that doesn't go in the recycling bin.",
      },
      {
        title: "Corporate rate amenity packages",
        body: "Use branded coffee as a differentiator in your corporate rate proposals. 'Upon arrival, enjoy a bag of our signature house blend' is a meaningful line in a pitch deck for accounts worth tens of thousands of room nights per year.",
      },
    ],
  },
  localNote:
    "EZPZ delivers to Toronto hotels in 3–5 business days. Volume discounts apply for orders of 500+ bags — ideal for hotel welcome packages. We can accommodate recurring monthly orders on a schedule that keeps your rooms consistently stocked.",
  faq: [
    {
      q: "Can hotels set up a recurring order schedule?",
      a: "Yes. Hotels often set up monthly or quarterly recurring orders to keep their supply consistent. Contact us to discuss a schedule that works for your occupancy pattern.",
    },
    {
      q: "Do you offer branded bags for conference events?",
      a: "Yes. We handle event orders for conferences and conventions — typically 500–2,000 bags with a hotel's branding, the event name, or a co-branded design. Lead time is 2–3 weeks.",
    },
    {
      q: "What kind of coffee is appropriate for a hotel room?",
      a: "EZPZ recommends a versatile medium roast that works for guests with a French press, pour-over, or drip setup. We'll suggest an origin profile based on your hotel's positioning — light and fruity for a boutique property, smooth and approachable for a business hotel.",
    },
    {
      q: "What's the minimum order?",
      a: "100 bags at $11.75/bag. Most hotels start with a few hundred bags for a pilot program, then scale to full room stocking once the guest response confirms it.",
    },
  ],
  siblings: [
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
  ],
  ctaClose:
    "Toronto's best hotels compete on the details. Your coffee should be one of them.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
