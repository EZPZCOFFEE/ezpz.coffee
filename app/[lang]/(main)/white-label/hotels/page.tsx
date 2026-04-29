import type { Metadata } from "next";

import WhiteLabelVerticalPage, { VerticalPageData } from "../../_components/WhiteLabelVerticalPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee for Hotels & Hospitality | EZPZ Coffee",
    description:
      "Custom branded coffee for hotels, resorts, and hospitality venues. In room capsules, restaurant bags, and minibar cans — all under your brand. No minimums.",
    alternates: { canonical: "/en/white-label/hotels" },
    openGraph: {
      title: "White Label Coffee for Hotels & Hospitality | EZPZ Coffee",
      description:
        "Custom branded coffee for hotels, resorts, and hospitality venues. In room capsules, restaurant bags, and minibar cans — all under your brand.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label/hotels",
      images: [{ url: "/assets/banner-02.jpg", width: 1200, height: 630, alt: "White Label Coffee for Hotels" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "White Label Coffee for Hotels & Hospitality | EZPZ Coffee",
      description:
        "Custom branded coffee for hotels, resorts, and hospitality venues. In room capsules, restaurant bags, and minibar cans.",
      images: ["/assets/banner-02.jpg"],
    },
  };
}

const data: VerticalPageData = {
  hero: {
    eyebrow: "White Label Coffee for Hotels & Hospitality",
    title: "From the lobby to room 412, it's all your brand.",
    subtitle:
      "Every touchpoint in your property is an opportunity to reinforce who you are. The coffee in your rooms, your restaurant, and your gift shop should carry your name — not a generic supplier's.",
    ctaText: "Upgrade your guest experience",
    contactSubject: "White Label Coffee — Hotels & Hospitality",

  },
  pain: {
    eyebrow: "Sound familiar?",
    title: "Your guests remember the stay. Make sure they remember the coffee too.",
    items: [
      {
        icon: "🏨",
        text: "Your in room coffee station features a national brand with no connection to your property's identity.",
      },
      {
        icon: "⭐",
        text: "Guests mention breakfast and room service in reviews, but your coffee is never a distinguishing feature.",
      },
      {
        icon: "🎁",
        text: "Your gift shop sells third party products when it could be selling your own branded coffee for premium margins.",
      },
      {
        icon: "🍽️",
        text: "Your restaurant and bar coffee program feels disconnected from the curated experience you've built everywhere else.",
      },
    ],
  },
  benefits: {
    eyebrow: "The EZPZ advantage",
    title: "One partner. Every coffee touchpoint in your property, branded.",
    items: [
      {
        icon: "🛏️",
        title: "In room capsules",
        body: "Nespresso compatible capsules with your hotel's branding. A small detail that guests notice and mention in reviews.",
      },
      {
        icon: "🍳",
        title: "Restaurant & breakfast service",
        body: "Branded coffee bags for your kitchen and service team. Custom blends tuned to your menu and your guests.",
      },
      {
        icon: "🛍️",
        title: "Gift shop & retail",
        body: "Sell branded coffee bags and capsule boxes at reception or your boutique. High margin, zero sourcing headaches.",
      },
      {
        icon: "🥤",
        title: "Minibar & room service",
        body: "Ready to drink branded cans for minibar placement or room service delivery — a premium perceived product.",
      },
      {
        icon: "🔄",
        title: "Ongoing replenishment",
        body: "We coordinate supply on your schedule. Never run out of in room stock or branded product at peak season.",
      },
      {
        icon: "📊",
        title: "Volume pricing",
        body: "Properties with consistent volume benefit from tiered pricing. The more you serve, the better the economics.",
      },
    ],
  },
  products: [
    {
      tag: "In room essential",
      title: "Branded Nespresso Capsules",
      body: "The most most noticed in room detail. Custom blended capsules in packaging that carries your hotel's logo, colour palette, and brand voice. Compatible with every Nespresso Original Line machine.",
      bullets: [
        "Custom blend development available — light to intense profiles",
        "Individually packaged with your hotel's branding",
        "Compatible with all Nespresso Original Line machines",
        "Available in single serve boxes for retail or gift shop sale",
        "Fast reorder turnaround to keep rooms stocked year round",
      ],
      ctaText: "Ask about in room capsules",
      contactSubject: "White Label Capsules — Hotel In Room",
      imageKey: "capsule",
      imageAlt: "Branded hotel coffee capsules",
      imageFirst: true,
      theme: "dark",
    },
    {
      tag: "Restaurant & bar",
      title: "Custom Branded Coffee Bags",
      body: "For your restaurant, lounge, and breakfast service. Branded bags your team uses behind the bar — and that guests can purchase to take a piece of the experience home with them.",
      bullets: [
        "250g and 340g formats, whole bean or ground",
        "Custom label design matched to your property's identity",
        "Available as retail bags at reception or gift shop",
        "Single origin or custom house blend options",
        "No minimum order — restock exactly what you need",
      ],
      ctaText: "Get a quote on coffee bags",
      contactSubject: "White Label Coffee Bags — Hotel",
      imageKey: "bag",
      imageAlt: "Branded coffee bags for hotel restaurant",
      imageFirst: false,
      theme: "light",
    },
    {
      tag: "Minibar & events",
      title: "Ready to Drink Branded Cans",
      body: "Cold coffee in a branded can for minibar placement, room service, event catering, and poolside service. A product that photographs well, tastes exceptional, and carries your brand everywhere it goes.",
      bullets: [
        "Cold brew and iced latte formats",
        "Custom label on every can — your branding, our quality",
        "Sold by the case — easy to stock across departments",
        "Perfect for conference packages and premium event bars",
        "Pairs well with branded welcome amenity packages",
      ],
      ctaText: "Ask about RTD cans",
      contactSubject: "White Label RTD Cans — Hotel",
      imageKey: "can",
      imageAlt: "Branded ready to drink coffee cans for hotels",
      imageFirst: true,
      theme: "dark",
    },
  ],
  stats: [
    { value: "3–4 wks", label: "From brief to first in room delivery" },
    { value: "3", label: "Formats: bags, capsules, and RTD cans" },
    { value: "100%", label: "Canadian roasted specialty coffee" },
    { value: "65%+", label: "Hotel clients who add retail at check in" },
  ],
  howItWorks: [
    {
      n: "01",
      title: "Property audit & brief",
      body: "We identify every coffee touchpoint in your property — rooms, restaurant, bar, events, and gift shop — and map the right product for each.",
    },
    {
      n: "02",
      title: "Format and blend selection",
      body: "Choose capsules, bags, cans, or all three. Select from our existing blends or develop a custom roast profile exclusive to your property.",
    },
    {
      n: "03",
      title: "Design and production",
      body: "Our designers create branded packaging for each product. Once approved, we produce and quality-check your full order.",
    },
    {
      n: "04",
      title: "Delivery and ongoing supply",
      body: "First order ships to your property. We set up a replenishment schedule so you never run low during peak season.",
    },
  ],
  testimonials: [
    {
      quote:
        "Guests now ask where they can buy our coffee at home. It's become a genuine brand touchpoint — something we're actually proud of in every room.",
      name: "Philippe M.",
      role: "Hotel Director, Montreal",
    },
    {
      quote:
        "We switched from a national brand to EZPZ and our breakfast satisfaction scores went up noticeably within the first quarter. Simple change, meaningful impact.",
      name: "Isabelle T.",
      role: "F&B Manager, Quebec",
    },
    {
      quote:
        "The capsule branding in our rooms is a detail that guests genuinely notice and mention in reviews. It signals care and attention to the full experience.",
      name: "Martin L.",
      role: "General Manager, Boutique Hotel",
    },
  ],
  faq: [
    {
      q: "Can different areas of the property have different products?",
      a: "Yes. Many of our hotel clients run capsules in rooms, bags in the restaurant, and cans in the minibar — all under the same brand but optimized for each use case. We coordinate everything.",
    },
    {
      q: "What Nespresso machines are the capsules compatible with?",
      a: "Our capsules are compatible with all Nespresso Original Line machines, which are the standard format in most hotel in room setups. If you use a different machine format, let us know and we'll confirm compatibility.",
    },
    {
      q: "Can we have different blends for the restaurant versus in room?",
      a: "Absolutely. A lighter, brighter blend is often preferred for in room morning use, while a bolder espresso-forward blend suits restaurant and bar service. We'll help you define the right profiles.",
    },
    {
      q: "Do you offer volume pricing for large properties?",
      a: "Yes. Properties with consistent monthly volume qualify for tiered pricing. We'll provide a custom quote based on your estimated usage across all product formats.",
    },
    {
      q: "What's the lead time for an initial order?",
      a: "Typically 3 to 4 weeks from brief approval to first delivery. This covers blend selection, label design, production, and shipping. Ongoing reorders ship in 5 to 7 business days.",
    },
  ],
  cta: {
    title: "Ready to make coffee part of your guest experience?",
    subtitle:
      "From in room capsules to gift shop bags, EZPZ gives you a complete branded coffee program with one point of contact and zero production headaches.",
    ctaText: "Talk to our team",
    contactSubject: "White Label Coffee — Hotels & Hospitality",
  },
};

const HotelsPage = () => {
  return <WhiteLabelVerticalPage data={data} />;
};

export default HotelsPage;
