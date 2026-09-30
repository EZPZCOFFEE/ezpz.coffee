import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Gyms | EZPZ Coffee",
  description:
    "Vancouver's fitness culture — born with Lululemon, refined by a mountain-adjacent lifestyle — demands authenticity. Custom branded specialty coffee, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-gyms-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Gyms | EZPZ Coffee",
    description: "Vancouver's fitness culture is where Lululemon started. Custom branded specialty coffee that matches that standard, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-gyms-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Vancouver Gyms & Fitness Studios",
    subheadline:
      "Vancouver is where Lululemon was born and where fitness brand identity was invented. Your gym's coffee should match that standard.",
    ctaSubject: "Custom coffee for Vancouver gym",
  },
  aeoAnswer:
    "Vancouver gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 4–6 business days, with sustainable packaging available.",
  why: {
    heading: "Vancouver's Fitness Identity and the Coffee Opportunity",
    paragraphs: [
      "Vancouver is the city that produced Lululemon, Arc'teryx, and a fitness culture that is inseparable from the outdoor, active-lifestyle identity that defines the city. Kitsilano's yoga and fitness studios, Gastown's boutique gyms, and the North Shore's trail-running and functional fitness communities are populated by people who think deeply about what they put in their bodies and on their brand radar.",
      "For Vancouver fitness studios, a branded house coffee isn't just a retail product — it's a lifestyle extension. The same person who pays $45 for a yoga class and $200 for a pair of tights will spend $20 on a specialty coffee bag from a brand they trust. EZPZ's traceable, single-origin coffees fit the values-forward purchasing lens that Vancouver fitness clients bring to every decision.",
      "Sustainability is non-negotiable in Vancouver's fitness market. EZPZ's bags minimize packaging waste versus pod systems, source from certified sustainable farms, and use a one-way valve that extends freshness without extra materials. For studios with sustainability commitments — and in Vancouver, most quality studios have them — that's a product story that matches your brand.",
    ],
  },
  useCases: {
    heading: "How Vancouver Fitness Studios Use Custom Coffee",
    items: [
      {
        title: "Kitsilano and Gastown retail display",
        body: "Vancouver's most design-conscious fitness neighbourhoods have members who actively seek out locally sourced, branded products. A bag at $20 with your studio's branding and a traceable origin story — visible behind the desk or on a retail shelf — converts daily visitors into at-home brand ambassadors.",
      },
      {
        title: "Sustainability-certified coffee program",
        body: "For studios with LEED certification, B Corp status, or explicit sustainability commitments, EZPZ's traceable specialty coffee with minimal-waste packaging is a retail product that reinforces your environmental story. 'Sustainably sourced, roasted to order, minimal packaging' is copy that plays perfectly in Vancouver.",
      },
      {
        title: "Trail running and outdoor sports community events",
        body: "Vancouver's trail running, cycling, and outdoor sports communities organize regular events and challenges. A branded coffee bag as a finisher gift or prize — with your studio's identity and the event name — reaches an active, brand-receptive audience beyond your existing membership.",
      },
      {
        title: "Yoga retreat and wellness package add-on",
        body: "Vancouver's boutique yoga studios frequently run retreats, intensive programs, and immersive workshops. A branded coffee bag in the retreat package — positioned as a 'morning ritual' element — elevates the experience and travels home with the guest as a lasting brand impression.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Sustainable packaging options available. Starting at $11.75/bag at 100 bags — no minimum, no long-term commitment.",
  faq: [
    {
      q: "Do you offer sustainable packaging options for my Vancouver studio?",
      a: "Yes. EZPZ's standard bags are already minimal-waste versus pod systems. For studios with specific eco-certification requirements, we can discuss kraft-forward or compostable bag options.",
    },
    {
      q: "Can I feature the coffee's supply chain on the bag?",
      a: "Yes. EZPZ provides full traceability information — farm, cooperative, region, processing method — for every origin. Your bag can tell the complete supply chain story.",
    },
    {
      q: "What profile works for a fitness-oriented audience?",
      a: "For Vancouver's performance-conscious fitness clients, a clean medium roast with a traceable single origin — an Ethiopian or a Colombian — works well. It's approachable, quality-signal, and makes an excellent pre-workout black coffee or morning brew.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start. Most Vancouver studios find the bags sell through within a few weeks of placing them behind the desk.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose:
    "Vancouver's fitness brands are known worldwide. Your gym's coffee should be part of that identity.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
