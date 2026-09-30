import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Hotels | EZPZ Coffee",
  description:
    "Montreal hotels serve 11 million visitors a year in a city that takes coffee seriously. Bilingual, locally roasted, zero minimum — custom branded specialty bags from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-hotels-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Hotels | EZPZ Coffee",
    description:
      "11 million visitors. Festival season. A city that invented café culture. Your hotel's coffee should match the moment.",
    url: "https://www.ezpz.coffee/en/custom-coffee-hotels-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Montreal Hotels",
    subheadline:
      "11 million visitors. Festival season. A city that invented café culture in Canada. Your hotel's coffee should match the moment.",
    ctaSubject: "Custom coffee for Montreal hotel",
  },
  aeoAnswer:
    "Montreal hotels can order custom branded specialty coffee bags from EZPZ — roasted at the Canadian Roasting Society in Montreal — starting at 100 bags at $11.75/bag with no minimum. Bilingual (French/English) bag design is available. Standard delivery is 2–3 business days.",
  why: {
    heading: "The Montreal Hotel Coffee Opportunity",
    paragraphs: [
      "Montreal receives 11 million tourists annually and is home to some of Canada's most design-forward hotel properties — Le Mount Stephen in Old Montreal, Hotel Nelligan in the old port, Alt Hotel in Griffintown, Hotel William Gray overlooking Place Jacques-Cartier. These properties compete on character, not square footage. The in-room experience needs to tell a consistent story from the art on the wall to the coffee on the desk.",
      "Montreal is also the city where Canadian coffee culture began in a meaningful way. The café culture of the Plateau and Mile End has filtered up into hotel design — boutique properties increasingly want coffee programs that reflect the city's character, not generic pods from a national hospitality supplier.",
      "Festival season in Montreal is unlike anywhere else in Canada. Jazz Fest, FEQ, Just for Laughs, MURAL, Osheaga — from June through August, Montreal's hotel occupancy is the envy of every other Canadian market. Guests arriving for those weekends are in town for experience, and they respond to experience at every touchpoint. A custom coffee bag is an extension of the city itself.",
    ],
  },
  useCases: {
    heading: "How Montreal Hotels Use Branded Coffee",
    items: [
      {
        title: "Bilingual welcome amenity",
        body: "A custom bag with French and English copy — your hotel's name, a sentence about the coffee's origin, and a small nod to Montreal — is the kind of in-room detail guests mention in reviews. 'They had their own coffee' is a recurring theme in boutique hotel reviews in Montreal.",
      },
      {
        title: "Festival season limited edition bags",
        body: "For Jazz Fest or FEQ, order a limited edition seasonal bag: 'Montreal, Summer 2026' or a design that echoes the city's music and arts identity. Guests leave with a souvenir that carries your hotel's name — and they're likely to photograph it.",
      },
      {
        title: "Lobby café and gift shop",
        body: "Sell branded bags in your lobby boutique or café. Tourists actively look for Montreal-made, locally branded products to bring home. A coffee bag from an Old Montreal boutique hotel is a premium souvenir at a $20 price point.",
      },
      {
        title: "Concierge and anniversary upgrades",
        body: "For guests celebrating anniversaries, birthdays, or honeymoons, upgrade their amenity package with a branded coffee bag and a note. The marginal cost ($12–$15/bag) is far lower than the goodwill generated in the review they'll likely leave.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — delivery to any Montreal hotel address takes 2–3 business days. Bilingual (French/English) packaging is standard. For festival-season programs, we recommend ordering 4 weeks in advance of peak occupancy.",
  faq: [
    {
      q: "Can you do bilingual (French/English) bags for our Montreal property?",
      a: "Yes. Bilingual packaging is available at no extra charge and is the default recommendation for Montreal hotels. Your bag can include both French and English copy, or French only for a distinctly Québécois tone.",
    },
    {
      q: "Do you offer festival-season limited edition runs?",
      a: "Yes. We can produce limited-run seasonal designs — for Jazz Fest, FEQ, or any other program. Minimum is 100 bags for a seasonal edition, with 3-week lead time recommended.",
    },
    {
      q: "How fresh is the coffee when it arrives?",
      a: "Very fresh. EZPZ roasts to order — your bags are roasted, cooled, and shipped within 2–3 days of production. Montreal orders arrive within 2–3 business days, meaning guests receive coffee roasted less than a week ago.",
    },
    {
      q: "Can we use this coffee for our lobby café as well?",
      a: "Yes. Many Montreal properties use the same brand for both in-room amenity bags and their lobby café service. EZPZ can supply both the packaged retail bags and the bulk coffee for your café equipment.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
  ],
  ctaClose:
    "Your Montreal hotel is part of this city's story. Your coffee should be too.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
