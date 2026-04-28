import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Spas | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for spas. Extend your luxury experience into every morning at home. No minimum order, full design included. Spas across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-spas" },
    openGraph: {
      title: "Custom Coffee Bags for Spas | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for spas. Extends the luxury experience, high-margin retail, brand recall. No minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-spas",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Spas" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Spas | EZPZ Coffee",
      description: "Custom branded coffee bags for spas. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Spas",
  eyebrow: "Custom Coffee for Spas",
  headline: "Your spa's luxury experience. Extended to every morning at home.",
  subheadline: "Spas sell experiences, not just services. A custom branded coffee bag is a physical extension of that experience that clients take home and use every morning.",
  intro: "The experience doesn't end when the client walks out the door. The best spas understand that the feeling they create — the calm, the luxury, the sense of being cared for — can be extended far beyond the appointment. A custom specialty coffee bag with your spa's branding is the product that does exactly that. Every morning the client brews it, they remember how they felt in your space. That emotional recall drives rebooking, referrals, and retail purchases in a way that no follow-up email or loyalty card ever could. Spa retail is already a significant revenue driver for most day spas — clients who trust your brand for their skin and body care are highly receptive to purchasing your branded consumables. Coffee fits naturally alongside skincare products, aromatherapy items, and wellness supplements. It's premium, it's beautiful, and it's something the client will genuinely use every day. The price point is also accessible: a bag that costs $8 to produce retails comfortably at $24 to $28 in a spa retail environment, with no minimum order risk and no complicated inventory management.",
  whoOrders: [
    { title: "Day spas", body: "Day spas with a strong retail area add branded coffee as a high-margin lifestyle product that appeals to clients who already trust the brand for their personal care." },
    { title: "Resort and destination spas", body: "Resort spas include branded coffee bags in treatment packages, VIP gift sets, and as a premium take-home amenity that extends the resort experience into the client's home kitchen." },
    { title: "Medical spas", body: "Medical spas focused on skin health and wellness gifting use branded specialty coffee as a thoughtful client appreciation gift that complements their premium positioning." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your spa logo and brand colors. Soft, luxurious design aesthetics — cream, gold, muted tones — work beautifully for spa brands." },
    { n: "02", title: "Choose your coffee", body: "We'll suggest origins that match your spa's sensibility. Light Ethiopian roasts with floral notes feel spa-appropriate. We can include tasting notes on the bag." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test with a small retail display before committing to larger quantities." },
    { n: "04", title: "Delivered to your spa", body: "Shipped directly to your spa address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Extends the luxury experience beyond the appointment", body: "Every morning your client brews your spa's coffee, they reconnect emotionally with the experience you created. That recall drives rebooking and referrals without any marketing spend." },
    { n: "02", title: "High-margin retail product", body: "A bag that costs $8 retails at $24–$28 in a spa environment. Clients who trust your brand for their personal care don't hesitate to buy your branded food products." },
    { n: "03", title: "Premium gifting and treatment packages", body: "Include branded coffee bags in VIP treatment packages, gift sets, and holiday bundles. It adds a tangible take-home element that elevates the perceived value of any package." },
    { n: "04", title: "Brand recall between appointments", body: "The average spa client visits 4–6 times per year. Between appointments, your branded coffee keeps your name present in their daily routine, reducing the time between bookings." },
  ],
  testimonial: {
    quote: "Clients ask us about it before they've even had their treatment. It sells itself — and when they run out, they call to rebook so they can pick up another bag.",
    author: "Christine D.",
    role: "Spa Director, day spa, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-spas",
};

const SpasPage = () => <IndustryPage data={data} />;
export default SpasPage;
