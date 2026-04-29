import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Breweries | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for breweries. You nailed the craft beer — now nail the morning after. No minimum order, full design included. Breweries across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-breweries" },
    openGraph: {
      title: "Custom Coffee Bags for Breweries | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for breweries. Brand extension beyond beer, taproom retail, craft community crossover. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-breweries",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Breweries" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Breweries | EZPZ Coffee",
      description: "Custom branded coffee bags for breweries. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Breweries",
  eyebrow: "Custom Coffee for Breweries",
  headline: "You nailed the craft beer. Now nail the morning after.",
  subheadline: "Craft beer lovers are often specialty coffee enthusiasts. The same values that built the brewery boom — quality, origin, craft, community — are driving the specialty coffee movement.",
  intro: "The craft beer and specialty coffee movements are siblings. Both emerged as a reaction to industrial commoditization. Both built loyal communities around quality, provenance, and the stories behind production. Both attract the same demographic: urban, educated, experience-seeking consumers who will pay more for something that was made with intention. Brewery regulars who love your brand for the beer are highly predisposed to love a specialty coffee that carries that same brand. It's not a stretch — it's a natural extension of the craft identity you've already built. Breweries that have introduced branded specialty coffee at the taproom report that it sells well from the first weekend, particularly among the Friday morning crowd, the merchandise buyers, and the beer club members who want to take more of the brand home. The positioning is also playful: your coffee for the morning after your beer. That joke is on the bag and it works. Tap room merch is a significant revenue stream for most craft breweries — hats, shirts, growlers. Branded coffee fits naturally into that merch ecosystem and gives you a consumable product that drives repeat purchase at a cadence much faster than apparel. No minimum means testing the concept at a single taproom event before committing to ongoing inventory.",
  whoOrders: [
    { title: "Craft breweries with taprooms", body: "Taproom breweries add branded coffee to their merch display and find that it sells steadily — particularly on weekend mornings when regulars are buying for the week ahead." },
    { title: "Brewery taproom and event venues", body: "Breweries that host events, markets, and community gatherings use branded coffee as an event gift bag item, a vendor market product, and a premium giveaway for launch parties." },
    { title: "Beer subscription and club programs", body: "Brewery beer club programs include branded specialty coffee as a seasonal add-on or surprise bonus item that delights subscribers and strengthens their identification with the brand." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your brewery logo and brand. Bold, graphic design aesthetics — the visual language of craft beer labels — translate perfectly to a specialty coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select an origin with character that fits your brewery's personality. Bold Ethiopian natural process with fruit-forward notes mirrors the complexity your beer drinkers already appreciate." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Test with a taproom batch — sell out in a weekend, then decide on your ongoing volume." },
    { n: "04", title: "Delivered to your brewery", body: "Shipped directly to your taproom or brewery address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Natural brand extension beyond beer", body: "Craft beer regulars are predisposed to love specialty coffee — the values are identical. Your brewery's coffee product is a brand extension that requires zero explanation to your existing audience." },
    { n: "02", title: "Taproom retail with no minimum risk", body: "Test with a small taproom display. Merch buyers who already own your hat and your t-shirt are the natural first buyers of your coffee. Zero minimum means zero inventory risk on the test." },
    { n: "03", title: "Beer club and subscription gifting", body: "Beer club subscribers who receive a branded coffee bag as a seasonal bonus feel like insiders. It strengthens their identification with the brand and their loyalty to the club subscription." },
    { n: "04", title: "Craft community crossover appeal", body: "The craft coffee community and the craft beer community overlap substantially. A specialty coffee product from a brewery creates genuine conversation and cross-community discovery — both audiences win." },
  ],
  testimonial: {
    quote: "Craft coffee, craft beer — our regulars don't see a difference in the philosophy. It sold out the first weekend we put it on the merch shelf.",
    author: "Brendan F.",
    role: "Taproom Owner, craft brewery, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-breweries",
};

const BreweriesPage = () => <IndustryPage data={data} />;
export default BreweriesPage;
