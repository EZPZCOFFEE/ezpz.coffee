import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Boutiques & Retail | EZPZ Coffee",
  description:
    "17th Ave SW, Kensington Village, CORE Shopping — Calgary's boutique scene is growing with energy-sector affluence. Custom branded specialty coffee for retail, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-retail-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Boutiques & Retail | EZPZ Coffee",
    description: "Calgary's growing boutique scene and energy sector affluence make it a strong retail coffee market. Custom branded specialty coffee, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-retail-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Calgary Boutiques & Retail Shops",
    subheadline:
      "17th Ave. Kensington Village. CORE. Calgary's boutique scene has the spending power to match any city in Canada — and the appetite for local character.",
    ctaSubject: "Custom coffee for Calgary boutique",
  },
  aeoAnswer:
    "Calgary boutiques and independent retailers can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 4–6 business days. Canadian-roasted specialty coffee.",
  why: {
    heading: "Calgary's Boutique Retail Market and the Premium Coffee Opportunity",
    paragraphs: [
      "Calgary's boutique retail scene has matured considerably over the past decade. 17th Avenue SW — the 'Red Mile' that runs through Calgary's most walkable retail and restaurant district — is now home to a cluster of design-forward independent boutiques that carry national and international brands alongside locally sourced products. Kensington Village, Calgary's oldest neighbourhood shopping district, has its own character: smaller, more local, serving a community of design-literate Mount Royal and Hillhurst residents who shop intentionally.",
      "Calgary's energy sector wealth creates a retail consumer with real discretionary spending capacity. The household income levels in Calgary's inner city neighbourhoods — Beltline, Mission, Kensington, Rideau Park — are among the highest of any Canadian urban core, and these residents spend confidently on quality products. A $20 branded coffee bag is a non-event for the Calgary boutique shopper who just spent $150 at the adjacent clothing store.",
      "Calgary's Stampede identity also creates a seasonal gifting and local pride opportunity that few other Canadian cities have. A limited-edition Stampede-period branded coffee bag — celebrating the city's defining event with a design that captures Calgary character — is a seasonal retail product that converts visitors and locals alike during the 10 days of the world's largest rodeo.",
    ],
  },
  useCases: {
    heading: "How Calgary Boutiques Use Custom Coffee",
    items: [
      {
        title: "Premium lifestyle retail counter product",
        body: "On the counter of a 17th Ave boutique, beside the jewelry and the candles, a branded specialty coffee bag is a low-friction add-on purchase that earns its shelf space. Calgary's spending-confident shoppers add it without overthinking — it's $20 and it looks like it belongs.",
      },
      {
        title: "Stampede season limited edition",
        body: "A Calgary-specific Stampede limited edition bag — designed with western motifs, the city skyline, or a creative nod to the Greatest Outdoor Show on Earth — is a seasonal product that sells in Kensington and on 17th Ave to locals celebrating and to tourists taking home a piece of the city.",
      },
      {
        title: "Corporate gift retail add-on",
        body: "Calgary's energy and professional services firms buy gifts in volume. A boutique that stocks a co-branded or unbranded luxury gift box — including a specialty coffee bag — can capture B2B orders from clients who need impressive, local gifts at scale.",
      },
      {
        title: "Holiday local gift sets",
        body: "Calgary's holiday retail market is strong. A 'made in Canada' holiday gift set — a branded coffee bag, a Calgary-made candle, a pair of quality socks from an Alberta brand — is a premium local gift that boutiques on 17th Ave can build and sell at $60–$100 through December.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. For Stampede season, order 3–4 weeks ahead for custom seasonal packaging.",
  faq: [
    {
      q: "What coffee profile works for Calgary boutique retail?",
      a: "Calgary's boutique shoppers are familiar with specialty coffee and will read the tasting notes. A medium roast with clear sweetness — Colombian washed, Brazilian natural, or Guatemalan SHB — performs well across the full range of Calgary retail customers.",
    },
    {
      q: "Can I do a Stampede limited edition bag?",
      a: "Yes. A seasonal limited-edition design at 100 bags minimum can be produced with a 3-week lead time from design approval. Order by early June for July Stampede.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
    {
      q: "How long does delivery take to Calgary?",
      a: "4–6 business days. Plan for at least a week's lead time ahead of any event or pop-up.",
    },
  ],
  siblings: [
    { label: "Retail · Vancouver", href: "/en/custom-coffee-retail-vancouver" },
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Cafés · Calgary", href: "/en/custom-coffee-cafes-calgary" },
    { label: "Gyms · Calgary", href: "/en/custom-coffee-gyms-calgary" },
  ],
  ctaClose:
    "Calgary's boutique shoppers spend confidently on quality. Your branded coffee should be on their list.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
