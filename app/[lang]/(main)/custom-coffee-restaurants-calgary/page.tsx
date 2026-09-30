import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Restaurants | EZPZ Coffee",
  description:
    "Calgary's energy sector dining culture and Stampede season demand premium. Custom branded specialty coffee for restaurants — zero minimum, from $11.75/bag, delivered in 4–6 days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-restaurants-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Restaurants | EZPZ Coffee",
    description:
      "Calgary restaurants serve energy executives and Stampede crowds. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-restaurants-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Calgary Restaurants",
    subheadline:
      "Calgary's dining scene punches above its weight — and in Stampede season, the entire city is a restaurant. Brand every cup.",
    ctaSubject: "Custom coffee for Calgary restaurant",
  },
  aeoAnswer:
    "Calgary restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Why Calgary Restaurants Are Differentiating Through Coffee",
    paragraphs: [
      "Calgary's population surpassed 1.4 million and is growing faster than any other major Canadian city. The restaurant strip on 17th Avenue SW, the Kensington Village, and the Inglewood neighbourhood are increasingly competitive markets where cuisine alone no longer sets you apart. Calgary diners — particularly the energy sector executives on expense accounts who populate downtown steakhouses and upscale cocktail bars — are accustomed to the best and notice the difference between a commodity coffee and a specialty one.",
      "Calgary Stampede is the most intense 10-day hospitality event in Western Canada, bringing over 1.2 million visitors to a city that runs at full capacity. The restaurants that make a memorable impression during Stampede — with a custom-branded bag as a takeaway, a post-dinner coffee that guests ask about, or a retail bag at the host stand — capture guest loyalty that lasts well past July.",
      "Alberta beef culture means Calgary's best restaurants already tell a precise story about provenance and quality. Coffee is the final course in that story. A single-origin specialty bag with your restaurant's branding, describing the farm, the processing method, and the roast date, extends the same rigorous sourcing narrative to the cup.",
    ],
  },
  useCases: {
    heading: "How Calgary Restaurants Use Branded Coffee",
    items: [
      {
        title: "Energy sector client entertaining",
        body: "Calgary's oil and gas executives entertain at steakhouses and upscale dining rooms on budgets that prioritize premium over price. A custom-labeled post-dinner coffee — with your restaurant's name and a specialty origin story — is the kind of elevated closer that keeps the table talking.",
      },
      {
        title: "Stampede season takeaway bags",
        body: "During the 10 days of Calgary Stampede, your restaurant has guests who'll never come back unless you give them a reason to think of you. A branded coffee bag at $18–$22 is a souvenir they use every morning — far more effective than a business card.",
      },
      {
        title: "Alberta beef pairing concept",
        body: "A menu that describes the origin of its beef, the farm of its produce, and the cooperative of its coffee tells a complete story. EZPZ can source a traceable specialty origin and put it on your menu and in a retail bag. Your coffee becomes a product with the same integrity as your proteins.",
      },
      {
        title: "House blend as restaurant identity",
        body: "17th Ave and Inglewood restaurant-goers are loyal to the places that have a defined identity. A named house blend — something your front-of-house team can describe with the same enthusiasm as a wine recommendation — creates a coffee memory that anchors repeat visits.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. For Stampede season, we recommend ordering 4 weeks before July to ensure supply through the full event. Starting at $11.75/bag at 100 bags, with volume pricing available for event-scale orders.",
  faq: [
    {
      q: "Can I order in time for Calgary Stampede?",
      a: "Yes. For Stampede in early July, we recommend ordering by early June. Orders of 100–500 bags have a 2–3 week lead time from design approval to delivery. Place your order by June 1 to be comfortable.",
    },
    {
      q: "Do you have coffees that pair with an Alberta beef-forward menu?",
      a: "Yes. For steakhouses and beef-forward menus, EZPZ recommends a full-bodied, low-acid profile — often a natural-processed Brazil or a Sumatra — that complements rich proteins without competing. We'll work with you on the pairing.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum enforced. Start with 100 bags at $11.75/bag to test the concept. Stampede-scale orders (1,000+) qualify for volume pricing — contact us.",
    },
    {
      q: "How fresh is the coffee by the time it reaches Calgary?",
      a: "Very fresh. EZPZ roasts to order — bags are roasted, rested, and shipped within 48–72 hours of production. Calgary delivery takes 4–6 business days, so guests receive coffee typically roasted 6–8 days ago.",
    },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
    { label: "Corporate Offices · Calgary", href: "/en/custom-coffee-corporate-offices-calgary" },
    { label: "Cafés · Calgary", href: "/en/custom-coffee-cafes-calgary" },
  ],
  ctaClose:
    "Calgary's dining scene is growing fast. Make sure your restaurant's coffee brand is growing with it.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
