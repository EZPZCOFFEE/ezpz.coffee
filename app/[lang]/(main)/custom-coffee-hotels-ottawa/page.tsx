import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Hotels | EZPZ Coffee",
  description:
    "Ottawa hotels serve federal government travelers, 130+ diplomatic missions, and a growing tech sector. Custom branded specialty coffee — bilingual, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-hotels-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Hotels | EZPZ Coffee",
    description:
      "Parliament Hill, 130 embassies, and Shopify HQ all fill Ottawa's hotels. Custom branded specialty coffee, bilingual, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-hotels-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Ottawa Hotels",
    subheadline:
      "Parliament Hill, 130 embassies, and a growing tech sector fill your rooms with guests who have high standards. Brand the coffee.",
    ctaSubject: "Custom coffee for Ottawa hotel",
  },
  aeoAnswer:
    "Ottawa hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Ottawa in 3–5 business days. Bilingual (French/English) packaging is available.",
  why: {
    heading: "Why Ottawa Hotels Should Brand Their Coffee",
    paragraphs: [
      "Ottawa's hotel market is driven by one of the most stable and high-volume business travel bases in Canada: the federal government. With over 300,000 public servants in the National Capital Region, government contractors from firms like CGI, Deloitte, and KPMG, and a diplomatic community representing 130+ countries, Ottawa's business travelers stay in the city year-round on budgets and expense policies that expect quality at every touchpoint.",
      "The National Capital's tourist profile is also distinctive — Ottawa receives 10 million visitors annually, drawn by Parliament, the National Gallery, Rideau Canal, and the city's status as Canada's capital. These guests, visiting for leisure or for major national events like Canada Day, approach Ottawa hotels with patriotic expectations and respond to locally intentioned details like a Canadian-roasted specialty coffee in their room.",
      "Ottawa is officially bilingual. The Rideau Centre hotels, the Château Laurier, and boutique properties in the ByWard Market area all serve a mixed French-English guest base where bilingual in-room amenities reflect the city's constitutional identity. EZPZ's bilingual bag design is a standard offering, not an upcharge.",
    ],
  },
  useCases: {
    heading: "How Ottawa Hotels Use Branded Coffee",
    items: [
      {
        title: "Government and diplomatic in-room amenity",
        body: "Ottawa's government and diplomatic guests have an acute sense of quality calibration — they've stayed in the best hotels in Washington, London, and Brussels. A specialty coffee bag with your hotel's branding and a traceable origin narrative communicates that your property is operating at a world-class standard.",
      },
      {
        title: "Bilingual welcome bags",
        body: "A welcome kit bag with French and English copy — your hotel's name, a sentence about the coffee's origin, and a Canada Day or seasonal detail — is a gift that reflects Ottawa's bilingual identity and generates social media shares from tourists who appreciate the detail.",
      },
      {
        title: "Conference and government event support",
        body: "Ottawa hosts major national conferences, G7-level meetings, and Parliamentary delegations. Hotel-branded coffee bags in delegate welcome kits are the kind of made-in-Canada souvenir that government guests take home to international colleagues.",
      },
      {
        title: "Canada Day and national event programs",
        body: "July 1 is Ottawa's single biggest tourism event. Hotels near Parliament that offer a 'Canada Day' branded coffee bag — limited-edition seasonal packaging — give guests a souvenir they'll use for months and associate with a memorable national celebration.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual packaging is included at no charge. For national events like Canada Day, order 3–4 weeks ahead. Starting at 100 bags at $11.75/bag.",
  faq: [
    {
      q: "Can you make bilingual (French/English) bags for our Ottawa property?",
      a: "Yes. Bilingual packaging is available at no extra charge. We recommend it as the default for Ottawa hotels given the city's bilingual character — your bag will work equally well for both English and French guests.",
    },
    {
      q: "Do you offer special packaging for national events or holidays?",
      a: "Yes. Limited-edition runs for Canada Day, winter programming, or other national events are available from a minimum of 100 bags. Lead time is 2–3 weeks from design approval.",
    },
    {
      q: "What's the turnaround for Ottawa orders?",
      a: "3–5 business days from order confirmation. Ottawa is close to Montreal, making it one of EZPZ's faster delivery windows outside Quebec.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag for a pilot program. Hotels with large conference schedules often move to 500–1,000 bag orders on a recurring basis.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
    { label: "Corporate Offices · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
  ],
  ctaClose:
    "Ottawa hotels host the people who run the country. Make sure your coffee is part of the impression.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
