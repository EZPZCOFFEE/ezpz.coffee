import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Boutiques | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for boutiques. A high-margin retail product your customers love. No minimum order, full design included. Boutiques across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-boutiques" },
    openGraph: {
      title: "Custom Coffee Bags for Boutiques | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for boutiques. High margins, natural product fit, no minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-boutiques",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Boutiques" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Boutiques | EZPZ Coffee",
      description: "Custom branded coffee bags for boutiques. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Boutiques",
  eyebrow: "Custom Coffee for Boutiques",
  headline: "A product your boutique customers will use every morning.",
  subheadline: "Branded specialty coffee fits naturally alongside clothing, home goods, and lifestyle products — and it's one of the highest-margin items you can put on your shelves.",
  intro: "The best boutiques sell a lifestyle, not just a product. Everything on the shelves — from the candles to the ceramics to the clothing — tells a story about who the customer is and wants to be. A branded specialty coffee bag fits perfectly into that story. It is premium, it is beautiful, and it is something the customer will use every single morning. Boutique owners in Montreal's Mile End and Toronto's Queen West are using branded coffee to increase average transaction value and give customers a reason to come back. The product sells itself — customers see it at the register, recognize the brand, and add it to their basket. The margins are strong: a bag that costs $8 to produce can retail for $24 to $28 in a boutique context without any resistance. No minimum means testing the concept with 10 bags before committing to larger quantities. And because the product is perishable, customers come back to reorder. Branded coffee is one of the few retail products that creates genuine repeat purchase behavior without any discounting or marketing spend.",
  whoOrders: [
    { title: "Clothing boutiques", body: "Apparel boutiques use branded coffee to increase basket size and create a lifestyle brand that extends beyond clothing. It sits naturally at the register as an add-on purchase." },
    { title: "Home goods and lifestyle stores", body: "Lifestyle stores in urban neighborhoods add branded coffee alongside candles, ceramics, and books. It rounds out the lifestyle offering and gives customers a consumable reason to return." },
    { title: "Concept stores and multi-brand boutiques", body: "Curated concept stores use EZPZ white-label coffee to create a store-branded product that anchors their own identity separate from the brands they carry." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your boutique logo and brand identity, choose your packaging style, and we'll create a bag that looks like it belongs on your shelves." },
    { n: "02", title: "Choose your coffee", body: "Select from traceable specialty coffees that match your store's aesthetic — light, floral Ethiopian or bold Colombian work well for lifestyle boutiques." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum required — start with 10 bags and reorder when they sell out." },
    { n: "04", title: "Delivered to your store", body: "Shipped directly to your boutique address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "High retail margins with no minimum risk", body: "A bag that costs $8 produces a $24–$28 retail price point your customers accept without hesitation. Start small, sell out, reorder. Zero inventory risk." },
    { n: "02", title: "Natural complement to your existing product mix", body: "Coffee is a lifestyle product that pairs naturally with clothing, home goods, wellness items, and books. It requires no explanation and sells on brand association alone." },
    { n: "03", title: "Drives repeat visits and reorders", body: "Coffee is consumed. When it runs out, customers come back. Branded coffee is one of the only retail products that creates genuine repeat purchase behavior without discounting." },
    { n: "04", title: "Social media shareability", body: "A beautifully designed coffee bag gets photographed and shared. Your boutique branding reaches far beyond your shop floor every time a customer posts their morning ritual." },
  ],
  testimonial: {
    quote: "It pairs perfectly with our candles and home goods. Customers grab one every time they're in — we've had to reorder three times in two months.",
    author: "Stephanie L.",
    role: "Owner, lifestyle boutique, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-boutiques",
};

const BoutiquesPage = () => <IndustryPage data={data} />;
export default BoutiquesPage;
