import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Real Estate Agents | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for real estate agents. The closing gift that keeps your brand top of mind for referrals. No minimum order, full design included. Real estate agents across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-real-estate-agents" },
    openGraph: {
      title: "Custom Coffee Bags for Real Estate Agents | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for real estate agents. Unforgettable closing gift, daily brand visibility, referral generation. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-real-estate-agents",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Real Estate Agents" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Real Estate Agents | EZPZ Coffee",
      description: "Custom branded coffee bags for real estate agents. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Real Estate Agents",
  eyebrow: "Custom Coffee for Real Estate",
  headline: "Close the deal. Leave them your brand. Every morning.",
  subheadline: "Real estate agents live and die on referrals and brand recall. A custom branded coffee bag at closing is the most memorable and useful closing gift possible.",
  intro: "The real estate business runs on relationships, referrals, and recall. When a client closes on a home, they enter a network of their friends, family, and colleagues who will eventually buy or sell too. The agent they worked with needs to be the first name that comes to mind years later — not because of a postcard campaign, but because of a genuine relationship. A custom specialty coffee bag left at closing or sent as a housewarming gift is the most effective and memorable tool for creating that recall. Every morning the new homeowner makes coffee, they see the agent's name and face on the bag. That is daily brand reinforcement for weeks. Agents who have made branded coffee their signature closing gift report that clients specifically mention it when they refer friends. Not the deal they got, not the service — the coffee. That is the power of a small, thoughtful, daily-use gift that carries the brand. No minimum means ordering per client — five bags for the five clients closing this month, personalised with each client's name for an extra touch. Ships in 3 to 10 business days across Canada and 7 to 14 days across the USA.",
  whoOrders: [
    { title: "Residential realtors", body: "Residential agents use branded coffee as a standard closing gift for every transaction. It's personal, premium, and generates the referral conversation that makes real estate careers." },
    { title: "Luxury real estate agents", body: "Luxury market agents use EZPZ as part of a curated closing gift package. A bag of traceable specialty coffee from a Montreal roastery fits perfectly alongside a premium housewarming gift set." },
    { title: "Commercial real estate brokers", body: "Commercial brokers use branded coffee as a deal-closing and relationship-nurturing gift for corporate clients — particularly effective in markets where wine or spirits may be inappropriate." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your real estate branding — headshot, logo, or team identity. Many agents include their phone number and website on the bag for easy recall when clients refer friends." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing specialty origin. Colombian medium roast works for most new homeowners. Ethiopian light roast for clients with more adventurous palates." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order. No minimum — order 5 bags for your current clients or 50 for a quarterly batch. Fresh roast every order." },
    { n: "04", title: "Delivered to your office or directly to clients", body: "Ship to your office for in-person delivery, or ship directly to each client's new home address. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "The unforgettable closing gift", body: "Closing gifts that get talked about are rare. A custom branded specialty coffee bag with the client's name on it gets mentioned in text messages, around dinner tables, and in the referral conversation every agent is hoping for." },
    { n: "02", title: "Daily brand visibility for weeks", body: "Every morning the homeowner makes coffee, they see the agent's name. That is daily brand recall for 2–4 weeks without a single follow-up call or marketing dollar spent." },
    { n: "03", title: "Referral generation at the right moment", body: "The post-closing period is when homeowners talk most about their experience. A memorable closing gift keeps the agent top of mind during the exact window when referral conversations happen." },
    { n: "04", title: "No minimum — one bag per client", body: "Order exactly what you need for each closing. Add the client's name to the bag for a fully personalized touch that costs the same as a generic option. Zero minimum, zero waste." },
  ],
  testimonial: {
    quote: "I've had clients refer me specifically because of the coffee I left at closing. Word for word: 'Jennifer gave us this amazing coffee with our names on it, you need to call her.' That's real.",
    author: "Jennifer K.",
    role: "REALTOR®, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-real-estate-agents",
};

const RealEstatePage = () => <IndustryPage data={data} />;
export default RealEstatePage;
