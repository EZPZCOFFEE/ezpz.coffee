import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Wedding Venues | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for wedding venues. A favor every guest uses for weeks. No minimum order, full design included. Wedding venues across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-wedding-venues" },
    openGraph: {
      title: "Custom Coffee Bags for Wedding Venues | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for wedding venues. Venue branded gift, couple favor, memorable guest takeaway. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-wedding-venues",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Wedding Venues" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Wedding Venues | EZPZ Coffee",
      description: "Custom branded coffee bags for wedding venues. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Wedding Venues",
  eyebrow: "Custom Coffee for Wedding Venues",
  headline: "A wedding favor every guest will use for weeks.",
  subheadline: "Wedding venues are both a direct buyer and a trusted referral source. Branded coffee works for the venue's own welcome experience and for the couples who want to offer a memorable favor.",
  intro: "Wedding venues occupy a unique position in the gift and favor ecosystem. They are the brand behind the couple's most important day, and the hospitality details they provide — from the welcome table to the place settings to the guest takeaways — reflect directly on their reputation and on the couple's taste. A custom specialty coffee bag works in two distinct ways for wedding venues. First, as a venue-branded welcome gift for arriving guests or an in-room amenity for overnight wedding guests: it introduces the venue's brand in a warm, thoughtful way before the ceremony begins. Second, as a referral-generating recommendation to couples: venues that recommend EZPZ to their couples for wedding favor bags become a trusted resource in the planning process, creating a referral relationship that generates ongoing value. Couples who receive the recommendation and use EZPZ for their favor bags mention the venue in reviews alongside the coffee — double brand association from a single product suggestion. No minimum means accommodating couples of every size, from intimate 20-person celebrations to large receptions of 200 or more, without inventory risk or per-order minimums.",
  whoOrders: [
    { title: "Boutique wedding venues", body: "Intimate wedding venues use branded coffee as a signature welcome gift that introduces the venue to arriving guests and sets the tone for a premium, detail-oriented experience." },
    { title: "Estate and manor wedding venues", body: "Large estate properties include branded coffee bags in multi-day wedding weekend packages, as morning amenities for overnight guests, and as a curated element of the premium venue experience." },
    { title: "Hotel and resort wedding venues", body: "Hotel wedding venues include branded coffee in the couple's suite, in the bridal party room, and recommend it to couples for favor bags — creating a cohesive branded experience throughout the wedding day." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your venue logo or recommend the design tool to your couples. For venue-branded bags, we create something that reflects the property's aesthetic. For couple favor bags, they design their own." },
    { n: "02", title: "Choose your coffee", body: "Select from crowd-pleasing specialty origins that appeal to diverse wedding guest palates. Colombian medium roast is a reliable favorite for large mixed audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — accommodates intimate weddings of 20 and large receptions of 300+ with the same process and quality." },
    { n: "04", title: "Delivered to the venue", body: "Shipped directly to the venue address for distribution by staff, or to the couple's home for personal favor assembly. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Venue-branded welcome experience", body: "A custom branded coffee bag as a guest welcome gift or in-room amenity introduces the venue brand in a warm, premium way that sets the emotional tone for the entire event." },
    { n: "02", title: "Trusted vendor recommendation for couples", body: "Venues that recommend EZPZ to couples for favor bags become a trusted planning resource. When couples mention the coffee in reviews, the venue earns association with that quality detail." },
    { n: "03", title: "Premium package add-on revenue", body: "Branded coffee bags included in premium venue packages justify higher package pricing. It's a tangible, premium add-on that makes the price difference feel concrete and justified to couples." },
    { n: "04", title: "Memorable guest takeaway that travels home", body: "Unlike flowers and candles, a coffee bag travels home in every guest's bag and sits on their kitchen counter for weeks. The venue's recommended brand earns daily visibility from guests who loved the day." },
  ],
  testimonial: {
    quote: "Couples mention it in every venue inquiry now after seeing it at other weddings. We added it to our premium package and it's become one of our strongest selling points.",
    author: "Claire R.",
    role: "Venue Manager, estate wedding venue, Quebec",
  },
  canonicalPath: "/custom-coffee-bags-wedding-venues",
};

const WeddingVenuesPage = () => <IndustryPage data={data} />;
export default WeddingVenuesPage;
