import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Spas | EZPZ Coffee",
  description:
    "Ottawa's Nordic spa movement and government worker wellness culture create strong spa retail demand. Custom branded specialty coffee — bilingual, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-spas-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Spas | EZPZ Coffee",
    description: "Ottawa's Nordic spa scene and government wellness programs create reliable spa retail demand. Custom branded specialty coffee, bilingual, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-spas-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Ottawa Spas & Wellness Studios",
    subheadline:
      "Ottawa's Nordic spa movement, government wellness culture, and year-round wellness market make branded coffee a natural retail fit.",
    ctaSubject: "Custom coffee for Ottawa spa",
  },
  aeoAnswer:
    "Ottawa spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 3–5 business days, bilingual packaging available.",
  why: {
    heading: "Ottawa's Spa Market and the Nordic Coffee Ritual",
    paragraphs: [
      "Ottawa and the National Capital Region have been part of the Nordic spa movement's Canadian expansion — Strøm Nordic Spa's Hull facility (across the river in Gatineau, QC) draws heavily from Ottawa's client base, and several boutique wellness studios in Ottawa proper have adopted Nordic-inspired wellness programming. The thermal circuit concept — hot sauna, cold plunge, relaxation — is exactly the context in which a post-circuit coffee is a natural and welcome ritual.",
      "Ottawa's government workforce creates a steady, reliable spa client base that is distinct from more volatile private sector markets. Federal public servants have defined vacation entitlements, predictable weekends, and the financial stability to invest in wellness routines. Ottawa spas benefit from this pattern: a loyal client who comes every six weeks, refers colleagues, and buys from the retail display when the product is worth buying.",
      "The bilingual character of Ottawa's wellness market is important. A spa in Centretown or the Glebe that serves French and English speakers equally — with bilingual packaging in the retail display — signals cultural inclusivity that is consistent with the city's identity and attractive to the full range of Ottawa's wellness consumers.",
    ],
  },
  useCases: {
    heading: "How Ottawa Spas Use Custom Coffee",
    items: [
      {
        title: "Post-Nordic circuit retail bags",
        body: "After a thermal circuit in Ottawa's growing Nordic-inspired spa market, a branded coffee bag for purchase on the way out is a natural, high-conversion retail product. Spa clients who've just spent $80–$150 for the experience are primed to spend $20 on a take-home that extends the ritual.",
      },
      {
        title: "Bilingual wellness gift sets",
        body: "A French/English branded bag included in an Ottawa spa package covers the full bilingual market with a single product. For government and diplomatic clients who appreciate bilingual materials in all contexts, the detail is noticed.",
      },
      {
        title: "Government employee wellness program gifts",
        body: "Ottawa HR departments and employee wellness programs purchase spa day packages for teams and individual employee recognition. A branded coffee bag add-on — your spa's identity alongside the client organization's — elevates the gift and adds a revenue line.",
      },
      {
        title: "Seasonal winter wellness packages",
        body: "Ottawa's harsh winters are the peak season for indoor wellness experiences. A 'winter warmth' branded wellness package — treatment, robe time, and a specialty coffee bag — is a seasonal gift that resonates deeply with clients looking for warmth and comfort in January and February.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa spa?",
      a: "Yes. Bilingual packaging is available at no extra charge and recommended for Ottawa's bilingual wellness market.",
    },
    {
      q: "What coffee profile fits an Ottawa spa's wellness brand?",
      a: "For a wellness and relaxation context, EZPZ recommends a gentle, aromatic single-origin — an Ethiopian with floral notes or a Brazilian natural with chocolate sweetness — that reinforces the calming atmosphere of the spa experience.",
    },
    {
      q: "Can I serve the coffee in the relaxation lounge?",
      a: "Yes. EZPZ can supply both lounge service coffee and retail bags for the display. Contact us to discuss a combined supply program.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Gyms · Ottawa", href: "/en/custom-coffee-gyms-ottawa" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
  ],
  ctaClose:
    "Ottawa's wellness clients return for the ritual. Make your branded coffee part of the one they take home.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
