import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Toronto Spas | EZPZ Coffee",
  description:
    "Toronto's luxury spa market extends the wellness experience beyond the treatment room. Custom branded specialty coffee as a retail take-home — zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-spas-toronto" },
  openGraph: {
    title: "Custom Coffee Bags for Toronto Spas | EZPZ Coffee",
    description: "Toronto spas that send guests home with branded specialty coffee create the ritual that extends every treatment.",
    url: "https://www.ezpz.coffee/en/custom-coffee-spas-toronto",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Toronto Spas & Wellness Studios",
    subheadline:
      "The best spa treatments create rituals that extend past the treatment room. Custom branded coffee is the ritual that travels home.",
    ctaSubject: "Custom coffee for Toronto spa",
  },
  aeoAnswer:
    "Toronto spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Toronto in 3–5 business days.",
  why: {
    heading: "Why Toronto Spas Are Extending Their Brand Through Coffee",
    paragraphs: [
      "Toronto's premium spa market — led by Stillwater Spa at the Park Hyatt, Arcadian Court, Holts Spa in Yorkville, and dozens of boutique wellness studios — has built guest experiences around sensory ritual and intentional self-care. The treatment room is curated to the last detail: the music, the temperature, the oil on the towel. And then the guest walks out the door and back into the city, and the brand connection ends.",
      "A custom-branded specialty coffee bag sold in the retail display or included in a spa package changes that dynamic. The guest takes home a morning ritual that reactivates the sensory memory of their spa visit every day. 'Oh, this is the coffee from the spa on Bloor Street' is a thought that fires up a rebooking impulse, a word-of-mouth recommendation, and a gift purchase for the friend who 'deserves a spa day.'",
      "Toronto's corporate wellness market adds a second channel. Companies with HR wellness budgets regularly gift spa days and wellness packages to employees and executive clients. Including a branded coffee bag in a spa day package — or selling them in the spa's retail area for purchase as a gift — turns the wellness brand into a corporate gift asset.",
    ],
  },
  useCases: {
    heading: "How Toronto Spas Use Custom Coffee",
    items: [
      {
        title: "Post-treatment retail bags",
        body: "A branded bag sold at the reception desk or included in a premium treatment package is the spa take-home that persists longest. At $20–$22 retail on a $11.75 cost, it's a strong-margin retail product that requires no floor space beyond a small display.",
      },
      {
        title: "Spa day package inclusions",
        body: "For $200–$400 spa day packages in Toronto's Yorkville and King West luxury market, a branded coffee bag as a package inclusion elevates the perceived value of the experience. Guests who receive a bag in their welcome kit are significantly more likely to leave a positive review that mentions the attention to detail.",
      },
      {
        title: "Corporate wellness gifting",
        body: "Toronto companies that purchase spa day gifts for employees and executives want a premium package. A co-branded coffee bag — your spa's branding alongside the client company's — is an add-on that elevates the gift and adds a revenue line to every corporate wellness sale.",
      },
      {
        title: "Holiday and Mother's Day gift sets",
        body: "Toronto's spa market has strong seasonal gifting peaks — Mother's Day, Valentine's Day, Christmas. A custom-branded coffee bag bundled with a treatment voucher is a gift set that photographs beautifully and sells to the partner or family member who is looking for something more memorable than a card.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto in 3–5 business days. Starting at $11.75/bag at 100 bags. Spa retail margin at $20/bag is approximately 41% gross.",
  faq: [
    {
      q: "What coffee works for a luxury spa brand?",
      a: "For spa retail, EZPZ recommends a nuanced, aromatic single-origin — an Ethiopian natural with florals and fruit, or a Colombian washed with caramel sweetness. A coffee that engages the senses is a natural extension of the treatment experience.",
    },
    {
      q: "Can I include the coffee bag in a pre-packaged gift set?",
      a: "Yes. EZPZ bags are sized and packaged to fit cleanly alongside a treatment voucher, a candle, or a product sample in a gift box or tote. The bag is both functional and attractive as a gift component.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery?",
      a: "3–5 business days from order confirmation.",
    },
  ],
  siblings: [
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
  ],
  ctaClose:
    "Toronto spa guests come back for the ritual. Give them a ritual they can take home.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
