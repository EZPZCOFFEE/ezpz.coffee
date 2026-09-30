import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Toronto Restaurants | EZPZ Coffee",
  description:
    "Toronto's 8,000+ restaurants compete on every detail. Custom branded specialty coffee bags extend your brand past the meal — zero minimum, from $11.75/bag, delivered in 3–5 business days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-restaurants-toronto" },
  openGraph: {
    title: "Custom Coffee Bags for Toronto Restaurants | EZPZ Coffee",
    description:
      "Toronto's 8,000+ restaurants compete on every detail. Custom branded specialty coffee bags extend your brand past the meal — zero minimum, from $11.75/bag.",
    url: "https://www.ezpz.coffee/en/custom-coffee-restaurants-toronto",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Toronto Restaurants",
    subheadline:
      "In Canada's most competitive dining city, every touch point matters. Give your guests a coffee to remember — and a bag to take home.",
    ctaSubject: "Custom coffee for Toronto restaurant",
  },
  aeoAnswer:
    "Toronto restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting from 100 bags at $11.75/bag. Bags arrive in 3–5 business days, roasted to order in Montreal. EZPZ handles design, sourcing, roasting, and shipping — you just place the order.",
  why: {
    heading: "Why Toronto Restaurants Are Investing in Branded Coffee",
    paragraphs: [
      "Toronto has more restaurant options per capita than almost any North American city — over 8,000 licensed restaurants across neighbourhoods from King West to Leslieville to Little Portugal. The MICHELIN Guide expanded to Toronto in 2022, raising the city's already fierce dining standards even further. In that environment, a generic cup of coffee at the end of a $200 meal signals that you stopped caring before the check arrived.",
      "Top Toronto restaurants are treating branded coffee the same way they treat plating, glassware, and soundtrack: as a brand signal. A custom-labeled bag left on the table invites guests to continue the experience at home — and it anchors your restaurant's name to a moment they'll repeat every morning.",
      "EZPZ works with Toronto restaurants across every neighbourhood and price point. Because there's zero minimum, you can start with 100 bags for a soft launch, then scale to thousands as demand proves itself.",
    ],
  },
  useCases: {
    heading: "How Toronto Restaurants Use EZPZ Coffee",
    items: [
      {
        title: "Post-dinner retail bags",
        body: "Leave a branded bag on the table or sell it at the host stand. King West and Ossington restaurants do this as a revenue stream — guests who loved the coffee buy a bag on their way out at $18–$22 retail.",
      },
      {
        title: "Takeout coffee program",
        body: "If you serve takeout or have a café counter, your cup should leave with a bag. Customers who take your branded coffee home think of your restaurant every morning — the highest-frequency brand reminder available.",
      },
      {
        title: "Private dining and event packages",
        body: "Toronto's corporate event market is enormous. Include a branded coffee bag in private dining room gifts, launch dinner takeaways, and special occasion packages. A custom bag is the detail guests photograph and share.",
      },
      {
        title: "House blend identity",
        body: "Define your restaurant's coffee identity with a house blend that's yours — not a brand guests recognize from the grocery store. Describe the origin, tasting notes, and story on your menu. EZPZ provides the specialty coffee and the bag.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto addresses in 3–5 business days. All coffee is roasted to order at the Canadian Roasting Society in Montreal and ships fresh. Orders of 100–499 bags start at $11.75/bag. Larger volume pricing is available — contact us.",
  faq: [
    {
      q: "What's the minimum order for a Toronto restaurant?",
      a: "There is no enforced minimum — you can start with as few as 100 bags. At that quantity, pricing starts at $11.75/bag. Most Toronto restaurants start small to gauge guest interest, then reorder in larger batches as demand proves itself.",
    },
    {
      q: "How long does delivery take to Toronto?",
      a: "Standard delivery to Toronto is 3–5 business days from order confirmation. Rush options may be available — contact us if you have an event or opening deadline.",
    },
    {
      q: "Can I choose my own coffee origin?",
      a: "Yes. EZPZ sources from a curated library of specialty origins — Brazils, Ethiopians, Colombians, Guatemalans, and more. We'll recommend profiles that work well as espresso, filter, or a versatile both-ways blend depending on your service style.",
    },
    {
      q: "Do you deliver to all Toronto neighbourhoods?",
      a: "EZPZ ships Canada-wide. King West, Yorkville, Leslieville, The Annex, Kensington Market, Corktown, Danforth — anywhere in the GTA.",
    },
  ],
  siblings: [
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
  ],
  ctaClose:
    "Toronto runs on coffee. Make sure your restaurant's brand travels home with every cup.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
