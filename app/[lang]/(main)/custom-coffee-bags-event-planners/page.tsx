import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Event Planners | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for event planners. The event favor nobody throws away. No minimum order, full design included. Event planners across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-event-planners" },
    openGraph: {
      title: "Custom Coffee Bags for Event Planners | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for event planners. Unique favor, fully customizable, no minimum for exact quantities.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-event-planners",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Event Planners" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Event Planners | EZPZ Coffee",
      description: "Custom branded coffee bags for event planners. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Event Planners",
  eyebrow: "Custom Coffee for Event Planners",
  headline: "The event favor nobody throws away.",
  subheadline: "Event planners are always looking for unique, memorable favors that stand out from generic options. Custom coffee bags are practical, premium, and completely customizable to any event theme or client brand.",
  intro: "Event planners have seen every favor, swag bag item, and take-home gift that exists. The branded pen. The tote bag. The USB drive. The chocolates. Everything gets used once and forgotten, or put directly in the hotel trash can. A custom specialty coffee bag is different because it goes home. When an attendee decides to pack it in their luggage instead of leaving it behind, that is the moment the product has won. And branded specialty coffee consistently makes the cut — because it is useful, beautiful, and heavy enough to feel like a real product rather than promotional filler. For corporate event planners, a custom coffee bag with the client's brand and event name is a professional, premium favor that attendees associate with the quality of the event itself. For wedding planners, it is the favor that guests specifically mention in their thank-you notes. For conference organizers, it is the one item that generates questions at the registration desk. No minimum is particularly important for event planners: you can order exactly the right quantity for any event size without over-ordering and wasting budget on unused inventory.",
  whoOrders: [
    { title: "Corporate event planners", body: "Corporate planners use branded coffee as a conference bag item, an awards ceremony favor, and a client appreciation event take-home that reflects the quality of the event and the client's brand." },
    { title: "Wedding planners", body: "Wedding planners recommend EZPZ to couples as the favor that guests actually take home and use. Planners who become EZPZ advocates earn ongoing referral relationships with their couple network." },
    { title: "Conference and summit organizers", body: "Conference organizers include branded coffee in attendee welcome kits and use it as a sponsor gift item. It's one of the few conference items that regularly receives positive mention in post-event surveys." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your client's brand or the event identity. Our design tool creates event-specific bags in minutes — no designer or print-ready files required from your team." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing specialty origin that works for a diverse event audience. Medium roast Colombian or a well-rounded blend are reliable choices for large mixed groups." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society. Order exactly the right quantity for the event headcount — no minimum means no waste, no over-ordering, no budget pressure." },
    { n: "04", title: "Delivered to the event venue or your office", body: "Ship to the venue, to the client's office, or to your planning studio. Canada: 3–10 days. USA: 7–14 days. Plan for arrival 2 weeks before the event date." },
  ],
  benefits: [
    { n: "01", title: "The favor attendees actually take home", body: "Most event favors stay behind. A custom specialty coffee bag travels home in attendees' bags and sits on their kitchen counter for weeks — a daily reminder of the event and the brand behind it." },
    { n: "02", title: "Fully customizable to any event theme or brand", body: "The bag design is completely tailored to the client's brand, event theme, or occasion. No off-the-shelf products — every bag is made specifically for the event it represents." },
    { n: "03", title: "No minimum for exact event quantities", body: "Order 25 bags for an intimate corporate dinner or 2,000 for a national conference. Zero minimum means ordering exactly the right quantity with zero waste and zero budget pressure." },
    { n: "04", title: "Premium positioning for your event offering", body: "Planners who include branded specialty coffee in their event proposals stand out from competitors. It signals thoughtfulness, quality, and a vendor network that goes beyond the generic." },
  ],
  testimonial: {
    quote: "I've used EZPZ for three corporate events this year. Every single client has asked for them again at their next event — that's the best endorsement I can give.",
    author: "Amanda K.",
    role: "Corporate Event Planner, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-event-planners",
};

const EventPlannersPage = () => <IndustryPage data={data} />;
export default EventPlannersPage;
