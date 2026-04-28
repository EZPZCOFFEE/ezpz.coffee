import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Yoga Studios | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for yoga studios. Mindful mornings start with your studio's specialty coffee. No minimum order, full design included. Yoga studios across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-yoga-studios" },
    openGraph: {
      title: "Custom Coffee Bags for Yoga Studios | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for yoga studios. Values alignment, morning ritual integration, retail revenue. No minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-yoga-studios",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Yoga Studios" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Yoga Studios | EZPZ Coffee",
      description: "Custom branded coffee bags for yoga studios. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Yoga Studios",
  eyebrow: "Custom Coffee for Yoga Studios",
  headline: "Mindful mornings start with your studio's own specialty coffee.",
  subheadline: "Yoga students who start their day with your branded coffee associate your studio with their most intentional moments — long before they step onto the mat.",
  intro: "There is a deep alignment between yoga and specialty coffee that most studio owners haven't tapped yet. Both are about intentionality, ritual, and quality. Both have communities built around sourcing, story, and craft. The student who spends $180 a month on a yoga membership and cares deeply about where their food comes from is exactly the person who wants to know that their coffee came from a traceable single-origin farm in Ethiopia, roasted fresh in Montreal, and designed with their studio's identity on the bag. That is the EZPZ product. Traceable, ethically sourced specialty coffee aligns with yoga's values around mindfulness, sustainability, and conscious consumption in a way that commodity coffee never could. Yoga studios that have introduced branded specialty coffee report that it becomes a conversation piece in the studio — students ask about it, recommend it to friends, and return specifically to restock. It's also a genuinely beautiful product. The design is clean, the bag is premium, and it looks at home on the retail shelf alongside yoga mats and accessories. No minimum means starting with a small batch to test demand before committing to a larger order.",
  whoOrders: [
    { title: "Hot yoga and power yoga studios", body: "High-intensity yoga studios whose members are performance-oriented find natural alignment with specialty coffee. The community is tight, the brand loyalty is high, and the retail appetite is strong." },
    { title: "Meditation centers and mindfulness studios", body: "Meditation-focused studios use branded coffee as a ritual extension of their teaching. A morning cup of their studio's coffee is a mindfulness practice in itself — that's a powerful brand association." },
    { title: "Wellness retreats and yoga destinations", body: "Yoga retreats use branded coffee as a premium take-home product for retreat participants. It's a memory of the retreat experience that guests brew every morning when they return home." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your studio logo. Clean, minimal design aesthetics work best for yoga brands — our tool lets you achieve that without a designer." },
    { n: "02", title: "Choose your coffee", body: "We'll help you choose an ethical, traceable origin that resonates with your community. Ethiopian light roasts with floral, tea-like notes are a favorite for yoga-adjacent audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — a single test batch is enough to gauge your community's appetite." },
    { n: "04", title: "Delivered to your studio", body: "Shipped directly to your studio address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Deep values alignment with specialty coffee", body: "Traceable, ethically sourced specialty coffee aligns with your community's values around mindfulness, sustainability, and intentional living. It's not just a product — it's a statement." },
    { n: "02", title: "Morning ritual integration", body: "The morning ritual is sacred in yoga culture. When your studio's coffee is part of that ritual, your brand is present in your students' most intentional moments every single day." },
    { n: "03", title: "Retail revenue with no inventory risk", body: "No minimum means testing with a small run. Yoga communities tend to be enthusiastic early adopters. Start small, sell out, reorder — zero overhead, strong margins." },
    { n: "04", title: "Community building tool", body: "Branded coffee creates a shared ritual that strengthens community. Students who drink the same studio coffee feel a connection to each other and to the studio that goes beyond classes." },
  ],
  testimonial: {
    quote: "The sourcing story matters to our community. Ethiopian single origin, traceable, ethical — it fits perfectly with what we teach. Students ask about it every class.",
    author: "Anya S.",
    role: "Studio Director, hot yoga studio, Calgary",
  },
  canonicalPath: "/custom-coffee-bags-yoga-studios",
};

const YogaStudiosPage = () => <IndustryPage data={data} />;
export default YogaStudiosPage;
