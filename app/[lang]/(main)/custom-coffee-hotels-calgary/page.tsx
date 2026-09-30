import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Hotels | EZPZ Coffee",
  description:
    "Calgary Stampede packs 1.2 million visitors into 10 days. Year-round, energy executives and convention travelers expect premium. Custom branded coffee, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-hotels-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Hotels | EZPZ Coffee",
    description:
      "Stampede season, energy sector travel, Banff proximity. Calgary hotels that brand the coffee are the ones guests remember.",
    url: "https://www.ezpz.coffee/en/custom-coffee-hotels-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Calgary Hotels",
    subheadline:
      "Stampede brings 1.2 million visitors in 10 days. The energy sector brings executives year-round. Brand the coffee — they'll remember it.",
    ctaSubject: "Custom coffee for Calgary hotel",
  },
  aeoAnswer:
    "Calgary hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary Hotels and the Differentiation Window",
    paragraphs: [
      "Calgary has two intensely different guest profiles and both expect premium. Energy sector executives — from Suncor, Cenovus, Canadian Natural Resources, and the dozens of international oil companies with Calgary offices — stay in the city year-round on business travel with budgets calibrated to the global oil industry. For this audience, a pod of generic branded coffee in the room communicates that the hotel is operating on a commoditized playbook.",
      "Then there's Calgary Stampede — 10 days in July when the city hosts over 1.2 million visitors, hotel occupancy approaches 100%, and every property has the opportunity to make a lasting impression on guests who may not return for another year. A custom-branded specialty coffee bag in the room during Stampede week is a souvenir with your hotel's name on it that travels back to homes across Canada and the United States.",
      "Beyond Stampede and energy travel, Calgary serves as the gateway to Banff and the Canadian Rockies. Leisure travelers who stage through Calgary on their way to mountain retreats are a growing segment — and they bring Vancouver-level sophistication about food and coffee to their expectations.",
    ],
  },
  useCases: {
    heading: "How Calgary Hotels Use Branded Coffee",
    items: [
      {
        title: "Stampede week branded bags",
        body: "Order a limited-edition Stampede week design — or your standard hotel bag in sufficient volume for peak occupancy. Guests who receive a specialty coffee during the most memorable event of their year are likely to search for your hotel again next July.",
      },
      {
        title: "Energy sector executive amenities",
        body: "Corporate rate guests from the oil and gas sector have strong preferences and low tolerance for generic hotel experiences. A specialty coffee bag with your hotel's branding, a traceable origin, and premium packaging signals that your property is calibrated for that audience.",
      },
      {
        title: "Banff and mountain retreat gateway packages",
        body: "Guests driving or taking the shuttle to Banff often stay one or two nights in Calgary. A branded welcome kit that includes your hotel's coffee bag — 'Take a piece of Calgary with you' — creates a tourism connection that leads to rebooking.",
      },
      {
        title: "TELUS Convention Centre event packages",
        body: "Calgary's convention centre hosts major energy, agricultural, and technology conferences. Hotel-branded coffee bags in delegate packages or conference room setups reach an audience that buys in volume for their own corporate gifting programs.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. For Stampede season, order 3–4 weeks ahead of July. Volume pricing available for 500+ bags — ideal for full-hotel welcome programs.",
  faq: [
    {
      q: "How early should I order for Calgary Stampede?",
      a: "Order by June 1 for a July Stampede program. Design approval typically takes a few days; production and shipping is 2–3 weeks. Getting the order in early ensures you're stocked before demand peaks.",
    },
    {
      q: "Can we brand bags for both the hotel and an energy sector conference?",
      a: "Yes. EZPZ can co-brand bags or produce two separate runs — one for in-room use and one for a specific conference or corporate event hosted at your property.",
    },
    {
      q: "What coffee profile works best for Calgary's guest base?",
      a: "A clean, well-balanced medium roast performs well across both leisure and business travelers. For a premium executive floor, we'd recommend a more refined single-origin that signals coffee knowledge. We'll guide you to the right profile based on your property's positioning.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. For Stampede or convention programs where you need 500–2,000 bags, volume pricing applies — contact us.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Corporate Offices · Calgary", href: "/en/custom-coffee-corporate-offices-calgary" },
  ],
  ctaClose:
    "Calgary's best hotels compete on detail. In a city that runs on energy and ambition, your coffee should match.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
