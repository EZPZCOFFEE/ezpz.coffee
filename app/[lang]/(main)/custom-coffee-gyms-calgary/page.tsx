import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Gyms | EZPZ Coffee",
  description:
    "Calgary's active outdoor culture and energy sector corporate wellness programs make gyms a natural coffee retail channel. Custom branded bags, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-gyms-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Gyms | EZPZ Coffee",
    description: "Calgary gym members ski, hike, and work hard. Custom branded specialty coffee is the retail product they'll actually use.",
    url: "https://www.ezpz.coffee/en/custom-coffee-gyms-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Calgary Gyms & Fitness Studios",
    subheadline:
      "Calgary gym members ski on weekends, hike in summer, and train year-round. Brand the energy that fuels all of it.",
    ctaSubject: "Custom coffee for Calgary gym",
  },
  aeoAnswer:
    "Calgary gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary's Active Lifestyle and the Gym Coffee Opportunity",
    paragraphs: [
      "Calgary has one of Canada's most active populations — the proximity of Banff, Kananaskis, and the Rocky Mountain foothills means gym members are often serious athletes who ski, trail run, cycle, and train for outdoor performance as well as general fitness. This is a consumer who is already invested in recovery and performance nutrition, and who is receptive to a gym that takes the same care with its coffee as it does with its programming.",
      "Calgary's energy sector corporate culture also means a significant percentage of gym members are executives and professionals who exercise on tight schedules and appreciate premium products that don't require them to think. A branded coffee bag from their gym — one they can buy at the front desk on the way out the door — removes friction and generates revenue.",
      "The growing tech sector in Calgary's Beltline and East Village has brought a younger, brand-conscious professional population to the city's boutique fitness market. These members respond to the same brand signals as their counterparts in Toronto and Vancouver: specialty coffee, traceable sourcing, and a gym that thinks beyond the equipment.",
    ],
  },
  useCases: {
    heading: "How Calgary Gyms Use Custom Coffee",
    items: [
      {
        title: "Front desk retail for energy sector members",
        body: "Calgary gym members with energy sector jobs have disposable income and quality expectations. A branded specialty coffee bag at $20 sells itself to anyone who already buys from a third-wave café — which, in Calgary's growing specialty coffee market, is an expanding majority.",
      },
      {
        title: "Corporate wellness partner program",
        body: "Calgary energy companies with corporate wellness programs often subsidize gym memberships for employees. A co-branded coffee bag — your gym's identity alongside the corporate partner's — is a wellness gift that makes the company look thoughtful and the gym look premium.",
      },
      {
        title: "Stampede season workout programs",
        body: "Calgary Stampede generates a 'Stampede season body' fitness push every spring among Calgarians preparing for the summer event. A branded coffee bag as a reward for a spring challenge or 6-week program completion is a gift that lands at exactly the right cultural moment.",
      },
      {
        title: "Banff and mountain retreat packages",
        body: "Calgary gyms with members who regularly ski or hike in the Rockies can bundle branded coffee bags into mountain weekend packages — 'trail coffee' branded for your gym. It's a product that travels and gets used in exactly the context that defines your members' identities.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. No minimum, no commitment between orders.",
  faq: [
    {
      q: "What coffee works for Calgary's active outdoor audience?",
      a: "A medium-dark roast that works for pre-workout black coffee, French press after a trail run, or a thermos on the ski hill. Calgary members need a coffee that performs in multiple contexts — EZPZ will recommend a versatile profile.",
    },
    {
      q: "Can I co-brand with an energy sector corporate wellness partner?",
      a: "Yes. EZPZ can design co-branded bags with both your gym's identity and a corporate partner's logo. Minimum is 100 bags per co-branded run.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Calgary?",
      a: "4–6 business days from Montreal. Plan for 2 weeks lead time when ordering ahead of a specific program or event.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Vancouver", href: "/en/custom-coffee-gyms-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Spas · Calgary", href: "/en/custom-coffee-spas-calgary" },
  ],
  ctaClose:
    "Calgary's gym members train hard and reward themselves well. Make sure your coffee is the reward they choose.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
