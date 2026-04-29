import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Catering Companies | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for catering companies. A premium branded add-on for every morning event you serve. No minimum order, full design included. Catering companies across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-catering-companies" },
    openGraph: {
      title: "Custom Coffee Bags for Catering Companies | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for catering companies. Premium package add-on, client gifting, brand visibility at events.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-catering-companies",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Catering Companies" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Catering Companies | EZPZ Coffee",
      description: "Custom branded coffee bags for catering companies. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Catering Companies",
  eyebrow: "Custom Coffee for Catering Companies",
  headline: "Your catering brand. At every breakfast meeting.",
  subheadline: "Catering companies that serve morning events can include branded specialty coffee bags as part of a premium package — a tangible branded element that clients remember and rebook for.",
  intro: "Catering companies compete on food quality, service reliability, and brand experience. In the morning event category — corporate breakfasts, conference morning sessions, executive team retreats — the coffee is not a side note. It is the first thing attendees reach for and the product most closely associated with their morning experience. A catering company that serves not just coffee but its own branded specialty coffee from a traceable Montreal roastery is delivering something fundamentally different from the competition. It is not just a service — it is a product. Including branded specialty coffee bags as part of a premium breakfast catering package creates a tangible, take-home element that turns the catering transaction into a brand experience. The client who takes a bag home and brews it the next morning is thinking about the catering company that served it, not just the event it was served at. That is the brand recall that drives rebooking and referrals in the catering business. The economics are simple: branded coffee is a premium add-on that justifies a package price increase while creating genuine additional value. No minimum means testing the concept on a single client before making it a standard package offering.",
  whoOrders: [
    { title: "Corporate breakfast caterers", body: "Corporate catering companies that serve morning board meetings, executive breakfasts, and team kickoffs add branded specialty coffee as a premium service element that clients specifically mention when rebooking." },
    { title: "Wedding caterers", body: "Wedding catering companies include branded coffee bags in their premium favor packages, offering couple-branded bags as a sophisticated alternative to standard favor options." },
    { title: "Event catering companies", body: "Full-service event caterers use branded coffee in conference morning sessions, gala event gift bags, and as a premium client appreciation gift sent after major events." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your catering company logo and brand. A clean, professional design that communicates food quality and service excellence works best for catering contexts." },
    { n: "02", title: "Choose your coffee", body: "Select a specialty origin appropriate for the morning events you serve. Medium roast Colombian is consistently well-received in corporate morning environments." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Set up recurring orders for your regular event schedule and we'll have fresh batches ready when you need them." },
    { n: "04", title: "Delivered to your kitchen or event venue", body: "Ship to your production kitchen for event-day distribution, or directly to clients' offices for advance gift delivery. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Premium package add-on that justifies higher pricing", body: "A branded coffee bag included in a premium catering package creates a tangible, take-home element that makes the price difference between packages feel concrete and valuable." },
    { n: "02", title: "Client gifting that drives rebooking", body: "A branded coffee bag sent to a client after a major event turns a satisfied client into a returning client. The daily morning reminder of your catering company's quality is the follow-up that makes the rebooking happen." },
    { n: "03", title: "Brand visibility at every event you serve", body: "Your catering company's name and logo is on the table, in attendees' hands, and in their kitchens for weeks. The brand exposure per event extends far beyond the event itself." },
    { n: "04", title: "Recurring orders aligned with your event schedule", body: "A recurring coffee order synced to your event calendar ensures fresh inventory is always on hand. No minimum means ordering by event, not by season or quarter." },
  ],
  testimonial: {
    quote: "Adding it to our breakfast catering packages justified a price increase and clients love it. We've had three clients specifically mention the coffee when they rebook.",
    author: "Chef Marc B.",
    role: "Owner, corporate catering company, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-catering-companies",
};

const CateringPage = () => <IndustryPage data={data} />;
export default CateringPage;
