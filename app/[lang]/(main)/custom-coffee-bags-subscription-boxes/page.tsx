import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Subscription Boxes | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for subscription boxes. A white-label premium product your subscribers love every month. No minimum order, full design included. Subscription boxes across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-subscription-boxes" },
    openGraph: {
      title: "Custom Coffee Bags for Subscription Boxes | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for subscription boxes. White label, monthly orders, premium product subscribers love.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-subscription-boxes",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Subscription Boxes" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Subscription Boxes | EZPZ Coffee",
      description: "Custom branded coffee bags for subscription boxes. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Subscription Boxes",
  eyebrow: "Custom Coffee for Subscription Boxes",
  headline: "Add a premium product your subscribers will love every month.",
  subheadline: "Subscription box curators are always looking for unique, high-quality products that fit their box theme. A custom branded specialty coffee bag is a natural fit for lifestyle, wellness, food, and gift boxes.",
  intro: "Subscription box curators live and die by subscriber satisfaction scores. When subscribers rate the contents of a box, one product can make or break the month — and that product is almost always the one that is both beautiful and genuinely useful. A custom specialty coffee bag consistently ranks among the highest-scoring items in any subscription box it appears in, across lifestyle, wellness, food, and gift categories. The reasons are straightforward: it looks premium, it smells incredible when the box opens, it carries a compelling origin story, and the subscriber uses it every single morning for weeks. For subscription box operators, the white-label model is particularly valuable. EZPZ creates a bag branded entirely with the subscription box's identity — not EZPZ's. Your subscribers think it's your product, which strengthens their connection to your brand. The coffee inside is 80+ SCA specialty grade from a fully traceable origin, roasted fresh in Montreal at Canadian Roasting Society. The quality is exceptional. Recurring monthly orders are easy to set up, and no minimum means testing the product in a single box before committing to it as a standard inclusion. Start with a small test batch, measure the subscriber response, and scale from there.",
  whoOrders: [
    { title: "Lifestyle and home subscription boxes", body: "Lifestyle curation boxes in the home, morning ritual, and wellness categories include branded specialty coffee as a consistent high-scorer that subscribers specifically look for in recurring shipments." },
    { title: "Wellness and self-care boxes", body: "Wellness subscription boxes align naturally with ethically sourced specialty coffee — the provenance story, the ritual, and the quality signal all fit the wellness brand's values and subscriber expectations." },
    { title: "Food and beverage discovery boxes", body: "Food discovery and gourmet subscription boxes include EZPZ coffee as a premium Canadian artisan product with a compelling origin story — exactly the kind of discovery their subscribers subscribe for." },
  ],
  howItWorks: [
    { n: "01", title: "Design your box's branded bag", body: "Upload your subscription box logo and brand identity. The bag carries your brand — not EZPZ's. We create a white-label product that looks and feels like it was made by your team." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that resonate with your subscriber demographic. Light, floral Ethiopian for wellness boxes. Bold Colombian for performance-oriented audiences. We'll help you match." },
    { n: "03", title: "We roast fresh for each shipment", body: "Each batch is roasted to order at Canadian Roasting Society in Montreal. Your subscribers receive freshly roasted coffee — not product that has been sitting in a warehouse." },
    { n: "04", title: "Shipped to your fulfillment center", body: "We ship to your fulfillment center or packing facility on your box assembly schedule. Canada: 3–10 days. USA: 7–14 days. Plan 3 weeks before your subscriber ship date." },
  ],
  benefits: [
    { n: "01", title: "White-label — your brand, not ours", body: "The bag carries your subscription box's brand entirely. EZPZ provides the quality product; your brand gets all the credit. Subscribers strengthen their connection to your box, not to us." },
    { n: "02", title: "Consistently high subscriber satisfaction scores", body: "Specialty coffee ranks among the highest-scoring subscription box items across categories. Subscribers use it daily for weeks — which means 2–4 weeks of daily positive association with your box." },
    { n: "03", title: "Premium product positioning for your box", body: "A freshly roasted specialty coffee bag from a Canadian artisan roastery is a genuinely premium inclusion that elevates the perceived value of your box and justifies your price point." },
    { n: "04", title: "No minimum for test batches", body: "Test the product in a single box run before committing to a monthly inclusion. Measure subscriber response — star ratings, review mentions, repeat retention — before scaling to a permanent feature." },
  ],
  testimonial: {
    quote: "Our subscribers rated the coffee bag the highest-scoring item in the box that quarter. We've made it a permanent feature — and it's the most-mentioned item in our unboxing reviews.",
    author: "Natalie W.",
    role: "Founder, lifestyle subscription box, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-subscription-boxes",
};

const SubscriptionBoxesPage = () => <IndustryPage data={data} />;
export default SubscriptionBoxesPage;
