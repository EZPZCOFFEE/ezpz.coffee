import type { Metadata } from "next";

import WhiteLabelVerticalPage, { VerticalPageData } from "../../_components/WhiteLabelVerticalPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Private Label Coffee for Retailers & Boutiques | EZPZ Coffee",
    description:
      "Add a high margin private label coffee to your shelves with zero production headaches. Custom blends, branded packaging, no minimums. Exclusive to your store.",
    alternates: { canonical: "/white-label/retailers" },
    openGraph: {
      title: "Private Label Coffee for Retailers & Boutiques | EZPZ Coffee",
      description:
        "Add a high margin private label coffee to your shelves. Custom blends, branded packaging, no minimum orders. Exclusive to your store.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label/retailers",
      images: [{ url: "/assets/banner-base.jpg", width: 1200, height: 630, alt: "Private Label Coffee for Retailers" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Private Label Coffee for Retailers & Boutiques | EZPZ Coffee",
      description:
        "Add a high margin private label coffee to your shelves. Custom blends, branded packaging, no minimum orders.",
      images: ["/assets/banner-base.jpg"],
    },
  };
}

const data: VerticalPageData = {
  hero: {
    eyebrow: "Private Label Coffee for Retailers & Boutiques",
    title: "A product no other store in your market carries.",
    subtitle:
      "Stop competing on price with national brands your customers can find anywhere. Your own private label coffee gives you exclusivity, better margins, and a story worth telling at the point of sale.",
    ctaText: "Launch your private label",
    contactSubject: "Private Label Coffee — Retailers & Boutiques",

  },
  pain: {
    eyebrow: "Sound familiar?",
    title: "You're selling other people's brands. There's a better way.",
    items: [
      {
        icon: "🏪",
        text: "You stock coffee brands that your competitors — and Amazon — also carry. There's no reason to buy from you specifically.",
      },
      {
        icon: "📉",
        text: "National brand margins are thin, fixed, and not negotiable. You're doing the work; they're capturing the value.",
      },
      {
        icon: "🔄",
        text: "Customers buy once, then reorder directly from the brand's website. You lose the repeat purchase to someone else.",
      },
      {
        icon: "🏷️",
        text: "Your store has a distinct identity and aesthetic — but your coffee shelf looks like every other grocery aisle.",
      },
    ],
  },
  benefits: {
    eyebrow: "The EZPZ advantage",
    title: "Private label coffee that works as hard as you do.",
    items: [
      {
        icon: "🔒",
        title: "Exclusive to your store",
        body: "Your private label blend is yours alone. Customers can only get it from you — online, in store, or through subscription.",
      },
      {
        icon: "💰",
        title: "Significantly better margins",
        body: "Private label coffee typically yields 40 to 60% higher margins than reselling national brands on the same shelf space.",
      },
      {
        icon: "🎨",
        title: "Packaging that fits your store",
        body: "We design labels and packaging that match your store's visual identity — so the coffee feels native, not generic.",
      },
      {
        icon: "📦",
        title: "No inventory risk",
        body: "No minimum orders mean you can start small, test sell through, and scale confidently without overstocking.",
      },
      {
        icon: "🔁",
        title: "Built in repeat purchases",
        body: "Coffee is a habit. Customers who love your blend come back to you — not a national brand's website — to reorder.",
      },
      {
        icon: "🚀",
        title: "Ready to sell in weeks",
        body: "From first conversation to product on shelf typically takes 3 to 4 weeks. No long lead times, no complex logistics.",
      },
    ],
  },
  products: [
    {
      tag: "Highest margin",
      title: "Private Label Coffee Bags",
      body: "Your best shelf performer. A beautifully branded 250g or 340g bag with your store name, your story, and your blend. The product customers come back for — and tell their friends about.",
      bullets: [
        "250g and 340g formats, whole bean or ground",
        "Full label design included — matched to your brand",
        "Single origin or custom blended options",
        "Kraft, matte, or gloss finish packaging available",
        "No minimum — test before you scale",
      ],
      ctaText: "Get pricing on bags",
      contactSubject: "Private Label Coffee Bags — Retailer",
      imageKey: "bag",
      imageAlt: "Private label coffee bags for retail stores",
      imageFirst: true,
      theme: "dark",
    },
    {
      tag: "Premium format",
      title: "Branded Nespresso Capsules",
      body: "Premium capsules in a format customers already love. A box of 10 branded capsules on your shelf commands a higher price point and signals quality. Great for gift purchases and repeat buys.",
      bullets: [
        "Nespresso Original Line compatible",
        "Sold in boxes of 10 with full custom packaging",
        "Multiple intensity profiles available",
        "High perceived value relative to cost of goods",
        "Ideal for gift sets and seasonal displays",
      ],
      ctaText: "Ask about capsules",
      contactSubject: "Private Label Capsules — Retailer",
      imageKey: "capsule",
      imageAlt: "Private label coffee capsules for retail",
      imageFirst: false,
      theme: "light",
    },
    {
      tag: "Impulse buy",
      title: "Ready to Drink Branded Cans",
      body: "Cold coffee in a can next to your checkout or in a display fridge. Premium perceived value, impulse purchase price point, and your brand on every can customers carry out the door.",
      bullets: [
        "Cold brew and iced latte formats",
        "Full custom label design",
        "Perfect at checkout, fridge display, or seasonal feature",
        "Great for pop up events and markets",
        "Available by the case for easy restocking",
      ],
      ctaText: "Ask about cans",
      contactSubject: "Private Label RTD Cans — Retailer",
      imageKey: "can",
      imageAlt: "Branded ready to drink coffee cans for retail",
      imageFirst: true,
      theme: "dark",
    },
  ],
  stats: [
    { value: "40–60%", label: "Higher margin vs. reselling national brands" },
    { value: "0", label: "Minimum order on coffee bags" },
    { value: "3–4 wks", label: "From brief to product on your shelf" },
    { value: "100%", label: "Exclusive to your store" },
  ],
  howItWorks: [
    {
      n: "01",
      title: "Category and client brief",
      body: "We learn about your store, your clientele, and your price points to recommend the right product line and blend profile.",
    },
    {
      n: "02",
      title: "Blend and format selection",
      body: "Choose from our existing blends or develop a custom roast. Select the formats — bags, capsules, cans — that fit your shelf strategy.",
    },
    {
      n: "03",
      title: "Design and approval",
      body: "Our team designs packaging aligned with your store's identity. You approve, we produce. No revisions are rushed.",
    },
    {
      n: "04",
      title: "Delivered and reordered on your schedule",
      body: "First order ships in 3 to 4 weeks. Ongoing restocking ships in 5 to 7 business days — timed to your sell through rate.",
    },
  ],
  testimonials: [
    {
      quote:
        "Our branded coffee now outsells every national brand we carry. Customers love the story and the exclusivity. It moves faster than anything else on that shelf.",
      name: "Sarah L.",
      role: "Boutique Owner, Toronto",
    },
    {
      quote:
        "The margin difference was genuinely shocking. Same shelf space, same customer, but 40% more per unit sold. I wish we'd done this two years ago.",
      name: "Thibaut G.",
      role: "Specialty Retail, Vancouver",
    },
    {
      quote:
        "EZPZ made private label accessible for a small shop like mine. No huge minimums, no risk. And the design came out looking like a premium national brand.",
      name: "Nadia P.",
      role: "Lifestyle Boutique, Quebec City",
    },
  ],
  faq: [
    {
      q: "What's the shelf life of the coffee?",
      a: "Our roasted coffee has a shelf life of 9 to 12 months when stored properly and sealed. We include a best before date on every bag and recommend a first in, first out rotation policy for retail display.",
    },
    {
      q: "Is my product exclusive to my store?",
      a: "Yes. Your private label blend and packaging are exclusive to you. We do not supply the same product to another retailer. This is the core of what makes private label valuable.",
    },
    {
      q: "Can I offer more than one blend or SKU?",
      a: "Absolutely. Many retailers carry two to three SKUs — for example, a light roast, a medium house blend, and a single origin. We can develop a full line strategy with you from the start.",
    },
    {
      q: "Do you handle restocking and replenishment?",
      a: "Yes. We can set up a recurring replenishment schedule based on your sell through rate, or you can place orders as needed. Reorders ship within 5 to 7 business days.",
    },
    {
      q: "Can I sell online as well as in store?",
      a: "Yes — many of our retail clients sell their private label coffee both in store and through their own ecommerce store. We can discuss fulfillment options depending on your volume.",
    },
  ],
  cta: {
    title: "Ready to put your brand on the shelf?",
    subtitle:
      "Private label coffee is one of the highest margin, lowest risk additions you can make to your retail lineup. Let's build yours.",
    ctaText: "Get a free quote",
    contactSubject: "Private Label Coffee — Retailers & Boutiques",
  },
};

const RetailersPage = () => {
  return <WhiteLabelVerticalPage data={data} />;
};

export default RetailersPage;
