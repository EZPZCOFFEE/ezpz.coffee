import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Cafés | EZPZ Coffee",
  description:
    "Montreal has 400+ independent cafés and the most educated coffee consumers in Canada. Define your house blend identity — bilingual, roasted locally, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-cafes-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Cafés | EZPZ Coffee",
    description:
      "Define your Montreal café's house blend identity. Bilingual, locally roasted, zero minimum, from $11.75/bag.",
    url: "https://www.ezpz.coffee/en/custom-coffee-cafes-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Cafés",
    parentHref: "/en/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Custom Coffee Bags for Montreal Cafés",
    subheadline:
      "Your café's identity deserves a coffee that's unmistakably yours — not a bag from a supplier your neighbours are also serving.",
    ctaSubject: "Custom coffee bags for my Montreal café",
  },
  aeoAnswer:
    "Montreal cafés can order custom branded house blend bags from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order at the Canadian Roasting Society in Montreal, delivered in 2–3 business days. EZPZ handles design, roasting, and shipping — including Shopify integration for online sales.",
  why: {
    heading: "Montreal Cafés and the House Blend Identity Problem",
    paragraphs: [
      "Montreal has one of the densest café cultures in North America. The Plateau, Mile End, Rosemont, Verdun, Griffintown — virtually every neighbourhood has multiple specialty cafés competing for the same local clientele. When two cafés on the same block serve coffee from the same well-known roaster, they're reducing their product to atmosphere and service. That's a race no one wins permanently.",
      "The cafés that build lasting brand identity — the ones guests describe as 'their café' — are the ones with a house blend that belongs to them. Not a 'café blend' from a shared wholesale catalog, but a coffee described on the menu by origin, process, and tasting notes, with a bag behind the bar that reinforces the story visually.",
      "EZPZ makes this accessible without a minimum order. You can start with 100 bags of your house blend, sell them at the counter for $18–$22, and reinvest that margin into the next order. There's no warehouse commitment and no design fee. It's the coffee identity investment that pays for itself.",
    ],
  },
  useCases: {
    heading: "How Montreal Cafés Build Their Brand with EZPZ",
    items: [
      {
        title: "Counter retail bags",
        body: "A branded bag behind the espresso machine — visible to every customer — is a constant, silent pitch. Montreal café clients are predisposed to buy local. A bag that says 'roasted in Montreal' and carries your café's design language sells itself.",
      },
      {
        title: "House espresso blend",
        body: "Define your café's signature espresso profile. A classic Brazil/Colombia blend for sweetness and body, or an Ethiopian natural for a fruit-forward identity. EZPZ will work with you on the cupping profile and translate it into copy your baristas can describe with confidence.",
      },
      {
        title: "Wholesale to Montreal restaurants",
        body: "Your branded coffee isn't just for your café. Montreal restaurants, wine bars, and food venues that respect quality often prefer to source from an independent café brand over a corporate supplier. Your EZPZ bags open a B2B revenue channel alongside your retail.",
      },
      {
        title: "Online store via Shopify dropshipping",
        body: "EZPZ integrates with Shopify. Your café's house blend can be available online, shipped directly to customers across Canada with your branding, from our Montreal facility. You never touch the inventory.",
      },
    ],
  },
  localNote:
    "EZPZ roasts at the Canadian Roasting Society in Montreal — the same city as your café. Delivery takes 2–3 business days. Counter retail bags typically sell for $18–$22, giving roughly 40%+ gross margin on a 100-bag order at $11.75/bag.",
  faq: [
    {
      q: "Will my café's coffee be unique to me?",
      a: "Your roast profile and bag design are yours. EZPZ sources from a curated library of origins; the specific profile we develop for your café is designed around your preferences and approved by you before production. We won't sell the same profile under the same name to anyone else.",
    },
    {
      q: "Can I sell the bags on my website?",
      a: "Yes. EZPZ integrates with Shopify — your café can sell branded bags online, with orders fulfilled and shipped directly by EZPZ. You carry no inventory and no shipping overhead.",
    },
    {
      q: "What margin can I expect selling bags at the counter?",
      a: "At 100 bags at $11.75/bag cost, selling at $20 retail gives you roughly $8.25 gross margin per bag — about 41%. Most Montreal cafés price between $18 and $24 depending on the format (250g vs 340g).",
    },
    {
      q: "Do you offer bilingual bag designs?",
      a: "Yes. Bilingual (French/English) bag copy is available at no additional charge — and it's the default recommendation for a Montreal market where both languages are present every day.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
  ],
  ctaClose:
    "Montreal's café scene is the best in Canada. Make sure your coffee bag says so.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
