import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Calgary Cafés | EZPZ Coffee",
  description:
    "Calgary's specialty café scene is growing fast. Define your house blend before the chains catch up — custom branded bags, zero minimum, from $11.75/bag, delivered in 4–6 days.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-cafes-calgary" },
  openGraph: {
    title: "Custom Coffee Bags for Calgary Cafés | EZPZ Coffee",
    description: "Calgary's specialty café market is maturing fast. Claim your house blend identity now — custom branded, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-cafes-calgary",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Calgary Cafés",
    subheadline:
      "Calgary's specialty coffee scene is growing faster than any other Canadian city. Claim your house blend identity before the market matures around you.",
    ctaSubject: "Custom coffee bags for my Calgary café",
  },
  aeoAnswer:
    "Calgary cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted to order in Montreal, delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary's Café Market: The Window Before It Closes",
    paragraphs: [
      "Calgary's specialty coffee scene is in the early stages of the same transformation that reshaped Toronto and Vancouver over the last decade. Analog Coffee, Phil & Sebastian, Monogram Coffee, Rosso Coffee Roasters — the city's independent café leaders have established a quality baseline that has trained Calgary consumers to expect more than a chain coffee experience. That audience is growing, and it's looking for cafés with a defined identity.",
      "The opportunity for Calgary cafés right now is the same one that existed in Toronto's Kensington Market five years ago: the market is sophisticated enough to appreciate a branded house blend, but not yet so saturated that every café already has one. The first cafés in Calgary to claim a distinctive coffee identity — with a bag behind the bar that tells the story — are the ones that become reference points for the next generation of Calgary coffee culture.",
      "Calgary's young, educated professional class — energy sector engineers, tech workers at the growing tech corridor in Beltline and Inglewood, creative industry workers — have money and taste, and they respond to authenticity. A house blend that's been curated, described, and packaged by your café is authenticity you can sell at the counter.",
    ],
  },
  useCases: {
    heading: "How Calgary Cafés Build Their Brand with EZPZ",
    items: [
      {
        title: "Beltline and Inglewood counter retail",
        body: "Calgary's most design-conscious café neighbourhoods — Beltline, Inglewood, Kensington — have foot traffic that buys locally branded products. A bag at $20 that says 'house blend, roasted for [Café Name]' converts curious walk-ins into repeat buyers who take your brand home.",
      },
      {
        title: "Energy sector corporate sales",
        body: "Calgary cafés adjacent to the downtown corporate core have access to one of the highest-disposable-income business customer bases in Canada. A branded bag sold at the counter is regularly purchased as a desk gift or team gift by oil and gas professionals who come in every morning.",
      },
      {
        title: "Stampede season branded runs",
        body: "Calgary Stampede brings 1.2 million visitors through the city in 10 days. For cafés that gain new visitors during Stampede, a branded bag is the high-margin souvenir that turns a first-time Stampede tourist into a mail-order customer when they get back to Edmonton or Regina.",
      },
      {
        title: "Shopify online store",
        body: "EZPZ integrates with Shopify. Your Calgary café's house blend can be sold online and fulfilled by EZPZ from Montreal — reaching customers across Alberta and beyond with your brand, your story, and zero inventory overhead on your end.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Order with 2 weeks minimum lead time; 3 weeks recommended for Stampede season programs. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Is Calgary ready for a house blend concept?",
      a: "Yes — and the timing is ideal. Calgary's specialty coffee consumers are now educated enough to appreciate and buy a café's branded house blend. The cafés that define their identity now will own that positioning for years.",
    },
    {
      q: "Can I start small before committing to a design?",
      a: "Yes. Order 100 bags as a pilot with a simple design, test counter sales velocity, and refine the design for the next run. There's no commitment required between orders.",
    },
    {
      q: "How does the Shopify integration work?",
      a: "Connect your Shopify store to EZPZ's platform. Orders for your house blend are roasted and shipped directly to your online customers by EZPZ, with your branding. You receive the margin; we handle fulfillment.",
    },
    {
      q: "What coffee profile works well for Calgary's audience?",
      a: "Calgary's coffee audience skews toward clean, well-balanced medium roasts that work for both espresso and filter — versatile profiles that appeal to a wide customer base. We can also develop a more distinctive single-origin for a café that wants to be known for a specific flavor direction.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Cafés · Vancouver", href: "/en/custom-coffee-cafes-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's café scene is defining itself right now. Your house blend should be part of the definition.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
