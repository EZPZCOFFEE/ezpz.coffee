import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Hotels | EZPZ Coffee",
  description:
    "Vancouver's eco-conscious luxury hotel market demands authentic amenities. Custom branded specialty coffee — sustainable packaging, zero minimum, from $11.75/bag, delivered in 4–6 business days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-hotels-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Hotels | EZPZ Coffee",
    description:
      "Vancouver's luxury hotel guests are among the most discerning in Canada. Custom branded specialty coffee — sustainable packaging, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-hotels-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Vancouver Hotels",
    subheadline:
      "Vancouver guests are among the most traveled, most discerning in Canada. Your in-room coffee should match the mountains outside the window.",
    ctaSubject: "Custom coffee for Vancouver hotel",
  },
  aeoAnswer:
    "Vancouver hotels can order custom branded specialty coffee bags from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order in Montreal and arriving in Vancouver in 4–6 business days. Sustainable packaging options are available.",
  why: {
    heading: "Why Vancouver's Hotel Market Demands Better Coffee",
    paragraphs: [
      "Vancouver welcomes over 11 million tourists annually and serves as the primary Pacific gateway for travelers from Asia, the United States, and Europe. The city's luxury hotel landscape — Rosewood Hotel Georgia, Fairmont Pacific Rim, JW Marriott Parq, Sutton Place — has set a global standard for Pacific Northwest hospitality. Guests arriving from Tokyo, San Francisco, or London are comparing your hotel's coffee against the best in the world.",
      "Vancouver's identity is built around authenticity, sustainability, and natural beauty. That identity should extend to your in-room amenities. Guests willing to pay $400–$1,000 per night notice when the coffee pod in the room feels like it was purchased from a warehouse. A custom specialty coffee bag — describing its origin, roast profile, and the hotel's commitment to quality — tells a coherent brand story.",
      "EZPZ's bags use air-tight sealed pouches with one-way degas valves, preserving the coffee's freshness without the plastic waste of individual pods. For Vancouver properties with sustainability commitments, that's a material difference that belongs on your amenity list.",
    ],
  },
  useCases: {
    heading: "How Vancouver Hotels Use Branded Coffee",
    items: [
      {
        title: "Pacific Northwest welcome amenity",
        body: "A 'taste of Vancouver' in-room coffee bag — a single-origin from a Pacific Rim coffee region with a label featuring your hotel's design language — is the kind of welcome gift guests mention in reviews and photograph on arrival.",
      },
      {
        title: "YVR arrival experience",
        body: "Vancouver's airport is one of the world's best-reviewed. Luxury guests arriving via YVR look for local, premium experiences from the first moment. A branded bag in the welcome kit waiting in the room delivers on that expectation immediately.",
      },
      {
        title: "Eco-certified amenity program",
        body: "Vancouver hotels with LEED or Green Key certification can use EZPZ's packaging to satisfy amenity standards. One-way valve bags generate significantly less waste than individual pods — and the single-bag-per-stay format is inherently lower waste per cup.",
      },
      {
        title: "Mountain retreat and Whistler packages",
        body: "Corporate retreats, ski packages, and North Shore getaways often use a Vancouver hotel as a base. Include branded bags in retreat packages, spa day takeaways, or ski-trip gift kits. A coffee that travels from the hotel to the chalet — with your brand on it — has exceptional staying power.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. We recommend ordering with at least 2 weeks lead time, or 3 weeks for event or seasonal programs. Sustainable packaging (kraft paper exterior, minimal plastic) is available on request.",
  faq: [
    {
      q: "Do you offer sustainable packaging for eco-certified hotels?",
      a: "Yes. EZPZ's standard bags already use minimal-waste packaging with a one-way degas valve. For hotels with specific eco-certification requirements, we can discuss kraft-forward or compostable bag options.",
    },
    {
      q: "Can you do a Pacific Northwest themed coffee for our hotel?",
      a: "Absolutely. We'll work with you to select an origin that fits a Pacific Rim narrative — an Ethiopian natural, a washed Colombian, a Guatemalan Huehuetenango — and design packaging that reflects your hotel's Pacific Northwest aesthetic.",
    },
    {
      q: "What's the lead time for Vancouver?",
      a: "4–6 business days for standard orders. For seasonal programs or opening orders, we recommend placing with 3 weeks lead time to accommodate design approvals and shipping.",
    },
    {
      q: "Is there a minimum for an initial trial order?",
      a: "No. You can start with 100 bags as a pilot — ideal for testing a premium room category before rolling out to all rooms.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose:
    "Vancouver guests see the mountains from their window. The coffee on their desk should match that standard.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
