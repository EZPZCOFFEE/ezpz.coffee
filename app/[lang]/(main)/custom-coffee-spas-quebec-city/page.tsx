import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Spas | EZPZ Coffee",
  description:
    "Quebec City's Nordic spa tradition and UNESCO heritage tourism create a premium wellness take-home market. Custom branded specialty coffee — French design, locally roasted, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-spas-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Spas | EZPZ Coffee",
    description: "Quebec City has North America's most authentic Nordic spa culture. Custom branded specialty coffee is the ritual guests take home from Strøm and beyond.",
    url: "https://www.ezpz.coffee/en/custom-coffee-spas-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Quebec City Spas & Wellness Studios",
    subheadline:
      "Nordic spa culture was born in Quebec. Your spa's branded coffee should be as rooted in this province as the tradition it serves.",
    ctaSubject: "Custom coffee for Quebec City spa",
  },
  aeoAnswer:
    "Quebec City spas can order custom branded specialty coffee bags from EZPZ — roasted in Montreal — with no minimum, starting at 100 bags at $11.75/bag. French-language design is the default. Delivered in 2–3 business days.",
  why: {
    heading: "Quebec City's Spa Culture and the Post-Treatment Coffee Ritual",
    paragraphs: [
      "Quebec City is at the centre of North America's Nordic spa tradition. Strøm Nordic Spa — with its Quebec City location offering thermal circuit experiences that draw visitors from across the province and beyond — represents a spa culture that is deeply embedded in Quebec's seasonal identity. The thermal experience in a snow-covered outdoor circuit, the post-plunge warmth-up by the fire, the coffee that follows — these moments are part of the cultural memory of anyone who has experienced a Quebec Nordic spa.",
      "Quebec City's status as a UNESCO World Heritage tourist destination means its spas serve a constant stream of visitors who are specifically seeking authentic Quebec experiences. A branded French-language coffee bag that a tourist takes home from a Vieux-Québec spa boutique is a souvenir that represents both the spa brand and the city's cultural identity. It's the kind of product that generates unboxing posts, word-of-mouth recommendations, and return visits.",
      "EZPZ roasts in Montreal — the most locally sourced roasting option available for any Quebec City spa. A bag that says 'Torréfié au Québec pour [Spa Name]' is an authentic, accurate, and compelling provenance claim that fits the local-first values of Quebec City's wellness market.",
    ],
  },
  useCases: {
    heading: "How Quebec City Spas Use Custom Coffee",
    items: [
      {
        title: "Post-Nordic circuit boutique retail",
        body: "A French-language branded bag in the boutique at the exit of the Nordic circuit is the ritual take-home that every guest who experienced the treatment sequence will consider. The circuit ends with warmth and relaxation — the coffee that closes that warmth is the product they want to recreate at home.",
      },
      {
        title: "Château Frontenac and Old Quebec luxury packages",
        body: "Quebec City's luxury spa guests — staying at the Château Frontenac or a boutique Old Quebec property — are spending $300–$600 per night for a heritage experience. A branded coffee bag as a spa package inclusion is a locally sourced detail that fits the calibre of the experience and travels home as a tangible memory.",
      },
      {
        title: "Carnaval and winter festival wellness kits",
        body: "Carnaval de Québec brings visitors in February — the peak Nordic spa season. A 'Carnaval wellness kit' with a thermal circuit entry and a branded coffee bag is a seasonal package that sells to the hundreds of thousands of visitors who want to experience Quebec at its most seasonal.",
      },
      {
        title: "French-language holiday wellness gift sets",
        body: "Quebec City's holiday gifting market runs November–January. A spa gift set — treatment voucher and French-language specialty coffee bag, beautifully packaged — is the locally produced, premium Quebec gift that resonates with both locals and visitors buying gifts to bring back from the province.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City, the freshest possible local-sourced coffee. French-language design is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Quebec City spa?",
      a: "Yes. French-only is the default for Quebec City clients — consistent with Loi 101 and with the linguistic identity of Quebec City's predominantly francophone clientele.",
    },
    {
      q: "What coffee profile fits a Nordic spa environment?",
      a: "For Nordic spa retail, EZPZ recommends a warming, aromatic single-origin — an Ethiopian natural with floral and berry notes, or a Colombian washed with caramel sweetness — that evokes the warming comfort of the post-circuit relaxation experience.",
    },
    {
      q: "Can I use this coffee in the lounge service as well?",
      a: "Yes. EZPZ can supply both lounge service bulk coffee and retail bags. A branded cup served in the lounge that guests can then buy in the boutique is a perfect conversion sequence.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Spas · Ottawa", href: "/en/custom-coffee-spas-ottawa" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose:
    "Quebec City's Nordic spa culture is unlike anywhere else in North America. Your branded coffee should be part of the tradition.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
