import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Gyms | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for gyms and fitness studios. Fuel your members with your brand's specialty coffee. No minimum order, full design included. Gyms across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-gyms" },
    openGraph: {
      title: "Custom Coffee Bags for Gyms | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for gyms. Natural lifestyle fit, loyal member base, retail revenue. No minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-gyms",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Gyms" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Gyms | EZPZ Coffee",
      description: "Custom branded coffee bags for gyms. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Gyms",
  eyebrow: "Custom Coffee for Gyms",
  headline: "Fuel your members with your brand's own specialty coffee.",
  subheadline: "Gym members are health-conscious, brand-loyal, and looking for products that align with their lifestyle. Pre-workout fuel that carries your brand makes perfect sense.",
  intro: "Protein shakes sell in gyms. So does creatine, pre-workout powder, and athletic gear. But branded specialty coffee is the product that gym owners consistently overlook — and it's one of the most natural fits in the entire fitness ecosystem. Think about who your members are: health-conscious people who care about what they put in their body, who value quality over convenience, and who are looking for rituals that support their active lifestyle. Coffee is part of that ritual. Pre-workout, post-workout, or first thing in the morning before they even walk through your door — coffee is a daily constant for most gym members. When that coffee carries your gym's brand, your name is part of their daily routine in the most intimate way possible. The loyalty dynamics in the gym industry are powerful. Members who identify with their gym as a lifestyle brand — not just a place to work out — are the ones who stay longest, refer the most, and spend the most on branded merchandise. A custom specialty coffee bag sold at the front desk or in a retail display is a natural extension of that identity. No minimum means testing the concept with a small run before committing to inventory.",
  whoOrders: [
    { title: "CrossFit gyms and functional fitness studios", body: "CrossFit boxes have intensely loyal communities that love branded merchandise. A custom coffee bag with the box's branding sells out at member events and sits in every athlete's kitchen." },
    { title: "Yoga studios and mindfulness fitness spaces", body: "Yoga-adjacent fitness studios find natural alignment with specialty coffee — both communities value quality, sourcing, and intentional rituals. The product fits seamlessly." },
    { title: "Personal training studios", body: "High-end personal training studios use branded coffee as a premium client gift for new clients, milestone achievements, and holiday appreciation gifts that reinforce the premium relationship." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your gym logo and brand colors. Choose your packaging style — clean, bold, and athletic-looking designs work best for fitness brands." },
    { n: "02", title: "Choose your coffee", body: "We'll help you choose a specialty origin that matches your gym's brand. Bold, high-caffeine profiles for performance gyms. Light, clean origins for wellness-focused studios." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test with a small batch and reorder when members ask for more." },
    { n: "04", title: "Delivered to your gym", body: "Shipped directly to your gym address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Natural lifestyle fit for your member base", body: "Coffee is already part of most gym members' daily routine. Branded coffee connects your gym to the ritual that frames their entire day — before or after training." },
    { n: "02", title: "Loyal member base ready to buy", body: "Gym members who identify with their gym as a brand are the most eager merch buyers. Branded coffee sells better than most apparel because it gets used every day." },
    { n: "03", title: "Retail revenue with no minimum inventory risk", body: "Start with 10 bags and see if they sell. They will. When they do, reorder. No risk, no overhead, no unsold stock — just pure margin merchandise revenue." },
    { n: "04", title: "Brand loyalty reinforcement", body: "When your brand is part of a member's morning ritual, it's part of their identity. That emotional connection to your gym keeps members renewing and referring longer." },
  ],
  testimonial: {
    quote: "Our members buy it because it's OUR brand. That's the whole point — it becomes part of their morning just like training is part of their day.",
    author: "Marcus R.",
    role: "Owner, CrossFit gym, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-gyms",
};

const GymsPage = () => <IndustryPage data={data} />;
export default GymsPage;
