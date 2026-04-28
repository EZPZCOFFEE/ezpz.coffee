import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Food Trucks | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for food trucks. Branded merchandise your superfans buy at the window. No minimum order, full design included. Food trucks across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-food-trucks" },
    openGraph: {
      title: "Custom Coffee Bags for Food Trucks | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for food trucks. Superfan merchandise, event sales, no minimum to test.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-food-trucks",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Food Trucks" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Food Trucks | EZPZ Coffee",
      description: "Custom branded coffee bags for food trucks. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Food Trucks",
  eyebrow: "Custom Coffee for Food Trucks",
  headline: "Your food truck's brand. In their kitchen cabinet.",
  subheadline: "Food trucks build intensely loyal followings, and branded merchandise is a significant revenue driver for the best operators. Your branded coffee is the product superfans buy without hesitation.",
  intro: "Food truck culture is built on loyalty. The regulars who find your truck every week, who follow your location updates, who tell everyone they know — these are superfans, and superfans buy branded merchandise. A food truck's custom specialty coffee bag sold at the service window or at weekend markets is the kind of product that superfans purchase immediately, without considering the price. It carries the brand they love into the most intimate part of their daily routine — the morning kitchen. The food truck merch ecosystem typically includes hats and shirts. These work, but they have high production costs, complex sizing inventory, and a slow consumption cycle. A branded coffee bag has none of those problems. It is easy to produce in any quantity (including quantities as small as one bag), it is consumed within weeks, creating repeat purchase opportunities, and it requires zero inventory management beyond a simple reorder. The no-minimum model is particularly powerful for food trucks: test the concept at your next market with 20 bags. If they sell out — and they will — reorder. The investment to test is minimal. The upside is a recurring merchandise revenue stream that your most loyal customers drive for you without any marketing.",
  whoOrders: [
    { title: "Street food and specialty food trucks", body: "Signature food trucks with strong identities and loyal social media followings add branded coffee as a premium merchandise item that superfans buy eagerly and gift to friends who follow the truck." },
    { title: "Coffee and beverage trucks", body: "Mobile coffee and beverage operators use branded bags to extend the in-truck experience into take-home products — a natural extension of what they're already selling by the cup." },
    { title: "Brunch and morning market trucks", body: "Brunch trucks and morning market operators sell branded coffee bags alongside their hot service, giving customers who love the experience a way to recreate it at home on their days off." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your truck logo and artwork. Bold, graphic, personality-driven design — the visual language of great food truck branding — looks exceptional on a specialty coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select a specialty origin that matches your truck's energy. Bold and characterful origins work best for food truck audiences who appreciate things with personality." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society. Start with 20 bags. Sell out at your next market. Reorder with 2 weeks lead time and never run out again." },
    { n: "04", title: "Delivered to your home base", body: "Ship to your commissary kitchen, home address, or storage unit — wherever your operation runs from. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Merchandise revenue from your superfan base", body: "Food truck superfans buy branded merchandise without needing to be sold to. A coffee bag at the window is an impulse purchase for anyone who loves the truck and drinks coffee — which is most of them." },
    { n: "02", title: "A product your most loyal customers want", body: "Regulars who love your truck want to take more of it home. A branded specialty coffee bag lets them bring the brand into their daily morning ritual — the most powerful retention mechanism available." },
    { n: "03", title: "Event and market sales with no minimum risk", body: "Test with 20 bags at a weekend market. If they sell, reorder. If for some reason they don't, you've spent almost nothing on the test. Zero minimum = zero risk on the concept validation." },
    { n: "04", title: "Repeat purchase cycle faster than apparel", body: "A coffee bag is consumed in 2–3 weeks. A hat lasts years. Branded coffee creates a repeat purchase cycle that drives revenue at a frequency that no other food truck merchandise category comes close to." },
  ],
  testimonial: {
    quote: "I put them on the counter at my next market and they sold out before noon. My regulars were buying two at a time — one for themselves, one to give as a gift.",
    author: "Alex R.",
    role: "Food truck owner, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-food-trucks",
};

const FoodTrucksPage = () => <IndustryPage data={data} />;
export default FoodTrucksPage;
