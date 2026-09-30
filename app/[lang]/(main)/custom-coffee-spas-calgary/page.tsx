import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Spas | EZPZ Coffee",
  description:
    "Calgary's energy sector wealth and growing luxury wellness market create strong spa retail demand. Custom branded specialty coffee take-homes — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-spas-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Spas | EZPZ Coffee",
    description: "Calgary's luxury spa market is growing with the city. Custom branded specialty coffee for spa retail and packages, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-spas-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Calgary Spas & Wellness Studios",
    subheadline:
      "Calgary's energy sector professionals spend well on wellness. Your spa's take-home coffee should match the premium of the experience.",
    ctaSubject: "Custom coffee for Calgary spa",
  },
  aeoAnswer:
    "Calgary spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary's Luxury Wellness Market and the Retail Coffee Opportunity",
    paragraphs: [
      "Calgary's luxury spa market has grown significantly alongside the city's energy sector wealth. The Willow Stream Spa at the Fairmont Palliser, the Vida Spa at Hotel Arts, and a growing number of independent luxury wellness studios serve an affluent clientele — energy executives, their spouses, and the growing professional class — who are accustomed to premium hospitality experiences in Houston, Dubai, and London.",
      "Calgary's active lifestyle culture also intersects with spa culture in a way that creates year-round demand for recovery-oriented wellness experiences. Skiers, trail runners, hockey players, and cyclists use premium spas for physical recovery, not just relaxation. This audience is particularly receptive to a take-home product that bridges the athletic and the mindful — a specialty coffee bag that represents both performance and pleasure.",
      "The Stampede season amplifies Calgary's wellness market. The 10 days of Calgary Stampede drive significant spend on luxury experiences, and spas that position branded coffee bags as a 'post-Stampede recovery ritual' — with limited-edition packaging or a seasonal message — can capture gifting sales from guests who are in a celebratory, experiential spending mindset.",
    ],
  },
  useCases: {
    heading: "How Calgary Spas Use Custom Coffee",
    items: [
      {
        title: "Luxury treatment take-home bags",
        body: "For a $200+ deep tissue or body treatment, a branded specialty coffee bag as a post-treatment take-home is a memorable detail that converts satisfied clients into returning ones. At $11.75/bag, the cost is minimal relative to the retention value.",
      },
      {
        title: "Corporate wellness packages for energy sector clients",
        body: "Calgary's energy companies purchase spa days for executive teams and high-performing employees. A co-branded coffee bag — your spa and the client company — elevates the corporate gift and gives the purchasing HR manager a premium add-on that justifies the budget.",
      },
      {
        title: "Stampede season wellness packages",
        body: "Calgary Stampede drives heavy demand for recovery-focused wellness experiences. A 'post-Stampede' branded package that includes a treatment and a specialty coffee bag — 'recover in style' — is a seasonal offering that can sell out quickly in a city of 1.4 million celebrating the world's largest rodeo.",
      },
      {
        title: "Banff and mountain retreat collaboration",
        body: "Calgary spas that offer packages extending to Banff or Kananaskis retreat programming can include branded coffee bags as a 'mountain morning ritual' take-home. The bag travels to the mountains and back, extending your brand's reach beyond the city.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. For Stampede season programs, order 3–4 weeks ahead.",
  faq: [
    {
      q: "What coffee profile fits Calgary's spa market?",
      a: "For Calgary's active-lifestyle spa clients, a sophisticated medium roast with clean acidity and natural sweetness — a Colombian washed or a Guatemalan SHB — works well. It's approachable for all clients and signals quality.",
    },
    {
      q: "Can I do a seasonal Stampede edition bag?",
      a: "Yes. A limited-edition seasonal design — 100 bags minimum — can be produced with a 3-week lead time from design approval. Order by early June for July Stampede.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Calgary?",
      a: "4–6 business days. Plan for a 2-week lead time ahead of any scheduled program or event.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
    { label: "Gyms · Calgary", href: "/en/custom-coffee-gyms-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's spa clients come for the experience. Give them a ritual they can take home.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
