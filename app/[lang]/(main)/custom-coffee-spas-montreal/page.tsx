import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Spas | EZPZ Coffee",
  description:
    "Montreal's Nordic spa culture is North America's richest. Custom branded specialty coffee as a post-treatment take-home — bilingual, locally roasted, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-spas-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Spas | EZPZ Coffee",
    description: "Montreal's Nordic spa culture is uniquely Quebec. Custom branded specialty coffee is the take-home ritual that extends every treatment.",
    url: "https://www.ezpz.coffee/en/custom-coffee-spas-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Montreal Spas & Wellness Studios",
    subheadline:
      "Nordic spas. Balnea. Strøm. Montreal has North America's most distinctive wellness culture — and coffee is part of the ritual.",
    ctaSubject: "Custom coffee for Montreal spa",
  },
  aeoAnswer:
    "Montreal spas can order custom branded specialty coffee bags from EZPZ — roasted locally in Montreal — with no minimum, starting at 100 bags at $11.75/bag. Bilingual design available. Delivered in 2–3 business days.",
  why: {
    heading: "Montreal's Spa Culture and Why Coffee Belongs in the Brand",
    paragraphs: [
      "Montreal's wellness culture is unlike anything else in Canada. The Nordic spa tradition — Balnea Spa in the Eastern Townships, Strøm Spa in Old Montreal and Nun's Island, the thermal baths concept that is deeply embedded in Quebec's seasonal wellness identity — positions Montreal as a wellness destination that draws clients from across eastern North America. These guests are spending $100–$300 for a half-day or full-day experience and expect every element of the visit to reinforce the brand's philosophy.",
      "Coffee is embedded in the Nordic spa experience. Before entering the thermal pools, after a treatment, over a conversation in the relaxation lounge — coffee is part of the ritual at every well-run spa in Montreal. A branded bag that guests can take home extends that ritual into their daily life and creates a morning sensory cue that reactivates the memory of their visit.",
      "Montreal's café culture means spa clients in this city are sophisticated coffee consumers. A generic branded bag with commodity coffee will register as an afterthought. A specialty-grade, locally roasted bag with a beautiful design and tasting notes that speak to the quality and provenance of the beans — that's a product that will be finished and reordered, not forgotten in a gift drawer.",
    ],
  },
  useCases: {
    heading: "How Montreal Spas Use Custom Coffee",
    items: [
      {
        title: "Post-Nordic circuit retail bags",
        body: "Selling a branded bag after the thermal circuit — in the boutique near the exit — is the natural close on a full-day spa experience. Montreal spa clients who've spent $150+ for a day pass are entirely willing to spend $20–$22 on a coffee that carries the brand home.",
      },
      {
        title: "Bilingual spa package inclusions",
        body: "A French/English branded bag in a couples package, a birthday package, or a corporate wellness gift set elevates the perceived value and ensures the gift works for both language communities in Montreal's bilingual wellness market.",
      },
      {
        title: "Relaxation lounge service",
        body: "Serve your branded specialty coffee in the relaxation lounge — and price it as a lounge add-on. Then display the branded bags for purchase beside the service counter. Guests who tasted the coffee during their treatment are primed to buy a bag on the way out.",
      },
      {
        title: "Holiday wellness gift sets",
        body: "Montreal's holiday gifting peak runs October–December. A spa wellness gift set — treatment voucher plus branded coffee bag, bilingual packaging, premium gift wrapping — is a $150–$250 gift that photographs well and sells to the Montrealers who shop local and want to give an experience.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery, locally sourced coffee for a locally owned wellness brand. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "What coffee works best for a Nordic spa setting?",
      a: "For Nordic spa retail, EZPZ recommends an aromatic, floral single-origin — an Ethiopian natural or a Kenyan washed — that engages the senses the same way the thermal experience does. We can develop a 'relaxation blend' profile with copy that resonates with your spa's brand language.",
    },
    {
      q: "Can I get bilingual packaging for my Montreal spa?",
      a: "Yes. Bilingual (French/English) packaging is available at no extra charge and is the default recommendation for Montreal spas.",
    },
    {
      q: "Can I serve the coffee in the lounge and sell it in the boutique?",
      a: "Yes. EZPZ can supply both bulk coffee for your lounge service equipment and retail-packaged bags for the boutique. Contact us to discuss a combined supply program.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
  ],
  ctaClose:
    "Montreal's spa culture is the best in North America. Your branded coffee should be part of the reason guests come back.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
