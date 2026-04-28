import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Restaurants | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for restaurants. Turn a meal into a lasting morning ritual. No minimum order, full design included. Restaurants across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-restaurants" },
    openGraph: {
      title: "Custom Coffee Bags for Restaurants | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for restaurants. High retail margins, daily brand visibility, no minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-restaurants",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Restaurants" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Restaurants | EZPZ Coffee",
      description: "Custom branded coffee bags for restaurants. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Restaurants",
  eyebrow: "Custom Coffee for Restaurants",
  headline: "Put your restaurant's name on the coffee your guests take home.",
  subheadline: "A bag of specialty coffee with your restaurant's branding sits on your guest's kitchen counter for weeks — a daily reminder of the experience you created for them.",
  intro: "Branded coffee turns a meal into a lasting memory. When a restaurant guest takes a bag home, they brew it every morning and think of your space, your food, your hospitality. That kind of brand recall is impossible to buy with advertising. Montreal and Toronto restaurants are waking up to branded coffee as a retail product, a corporate gift, and a genuine differentiator on the dining experience. The economics are compelling: a 250g bag of specialty coffee that costs $8 to produce can retail for $24 to $28 at a restaurant counter with no effort and no inventory risk — because EZPZ has no minimum order. You never over-order. You never get stuck with unsold stock. Whether you run a James Beard-caliber fine dining room or a beloved neighborhood bistro, the product works the same way: beautifully designed packaging with your logo, your name, and your story, filled with traceable 80+ SCA specialty coffee roasted fresh in Montreal. It ships directly to your restaurant in 3 to 10 business days across Canada, 7 to 14 business days to the USA.",
  whoOrders: [
    { title: "Fine dining restaurants", body: "High-end restaurants add custom branded coffee as a premium take-home product and a corporate event gift for private dining clients. It matches the quality positioning of the menu." },
    { title: "Casual bistros & neighbourhood spots", body: "Neighbourhood bistros sell branded coffee at the counter as merchandise. It's a natural extension of the community identity that their regulars love to take home and gift to friends." },
    { title: "Brunch restaurants", body: "Brunch restaurants are a natural fit — their guests are already coffee-obsessed. A branded bag sold at the register turns every Sunday breakfast into a week of at-home brand visibility." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your restaurant name, and choose your packaging style. Our online tool takes under 10 minutes and requires no designer." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast. We'll suggest origins that match your restaurant's flavor profile and story." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to your restaurant", body: "We ship directly to your restaurant address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "High retail margins with zero inventory risk", body: "A bag that costs $8 to produce retails for $24–$28 at your counter. No minimum means you never over-order. Test with 10 bags. Scale when they sell out." },
    { n: "02", title: "Daily brand visibility at home", body: "Every morning your guest brews your coffee, they see your name and remember your restaurant. No advertising achieves that kind of organic daily recall." },
    { n: "03", title: "A unique menu add-on and gift option", body: "List it on your menu as a take-home product. Offer it as a corporate event gift for private dining clients. It's a conversation piece that enhances your brand story." },
    { n: "04", title: "Corporate event and private dining gifting", body: "Restaurants that host private events can include branded coffee as a premium take-home for corporate clients — a gift they'll actually use and remember." },
  ],
  testimonial: {
    quote: "We sell them at the counter for $24 a bag and they fly out the door every Sunday morning after brunch. Our regulars buy one every few weeks.",
    author: "Marisol T.",
    role: "Owner, neighbourhood brunch restaurant, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-restaurants",
};

const RestaurantsPage = () => <IndustryPage data={data} />;
export default RestaurantsPage;
