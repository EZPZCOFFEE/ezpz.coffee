import type { Metadata } from "next";

import WhiteLabelVerticalPage, { VerticalPageData } from "../../_components/WhiteLabelVerticalPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Brand for Creators & Influencers | EZPZ Coffee",
    description:
      "Launch your own coffee brand and turn your audience into daily customers. Custom blends, stunning packaging, direct to fan fulfillment. Your name on every bag.",
    alternates: { canonical: "/en/white-label/influencers" },
    openGraph: {
      title: "Custom Coffee Brand for Creators & Influencers | EZPZ Coffee",
      description:
        "Launch your own coffee brand. Custom blends, stunning packaging, direct to fan fulfillment. Turn your daily content into a daily product your audience buys.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label/influencers",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Brand for Creators" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Brand for Creators & Influencers | EZPZ Coffee",
      description:
        "Launch your own coffee brand. Custom blends, stunning packaging, direct to fan fulfillment.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: VerticalPageData = {
  hero: {
    eyebrow: "White Label Coffee for Creators & Influencers",
    title: "Your audience follows you every day. Now they can start their morning with you.",
    subtitle:
      "Coffee is consumed daily by over 70% of adults. Your signature blend is a brand extension that pays you back every single morning — every cup, every reorder, every new follower who becomes a customer.",
    ctaText: "Build your coffee brand",
    contactSubject: "Custom Coffee Brand — Creator / Influencer",

  },
  pain: {
    eyebrow: "Sound familiar?",
    title: "Most creator products fade. Coffee doesn't.",
    items: [
      {
        icon: "👕",
        text: "Merch drops generate a spike, then go cold. Customers buy once and closets fill up. There's no repeat purchase.",
      },
      {
        icon: "🤝",
        text: "Brand deals can compromise your credibility — your audience knows you're paid to say it, not that you genuinely use it.",
      },
      {
        icon: "📦",
        text: "Launching a physical product means suppliers, logistics, inventory risk, and customer service — none of which is your strength.",
      },
      {
        icon: "💤",
        text: "Your current revenue is tied to content output. A product that sells while you sleep changes the equation entirely.",
      },
    ],
  },
  benefits: {
    eyebrow: "The EZPZ advantage",
    title: "A product your audience uses every morning, for years.",
    items: [
      {
        icon: "☕",
        title: "Daily repeat purchases",
        body: "Coffee is consumed every day. Your audience doesn't buy once — they reorder every 2 to 4 weeks, for as long as they drink coffee.",
      },
      {
        icon: "📸",
        title: "Built for content",
        body: "Our packaging is designed to look stunning on camera. Unboxing moments, morning routines, flat lays — every format converts.",
      },
      {
        icon: "🚀",
        title: "We handle everything",
        body: "Production, roasting, fulfillment, and shipping are fully managed by EZPZ. You market, we handle the rest.",
      },
      {
        icon: "🧪",
        title: "Your own signature blend",
        body: "Work with our roasters to develop a flavor profile that reflects your brand — bold, smooth, adventurous, or anything in between.",
      },
      {
        icon: "🌐",
        title: "Direct to your fans",
        body: "We can fulfill directly to your customers on your behalf. Your store, your margins, your relationship with your audience.",
      },
      {
        icon: "🎯",
        title: "Limited drops and collabs",
        body: "Launch seasonal limited editions, collab blends, or anniversary runs that create urgency and fuel content cycles.",
      },
    ],
  },
  products: [
    {
      tag: "Signature product",
      title: "Custom Branded Coffee Bags",
      body: "Your name, your aesthetic, your blend — on a bag that sits on your audience's kitchen counter every morning. Available in 250g and 340g, with packaging designed to look as good in a flat lay as it does on a shelf.",
      bullets: [
        "Full custom packaging design — your brand direction, our execution",
        "Signature blend development with our roasters",
        "Whole bean or ground, light to dark roast",
        "Kraft, matte, or gloss finish options",
        "No minimum — start with a small launch run",
      ],
      ctaText: "Start your signature bag",
      contactSubject: "Custom Coffee Bags — Creator Brand",
      imageKey: "bag",
      imageAlt: "Custom branded coffee bags for creators and influencers",
      imageFirst: true,
      theme: "dark",
    },
    {
      tag: "Premium tier",
      title: "Branded Nespresso Capsules",
      body: "A premium product format for a premium audience. Branded capsule boxes positioned as the high tier SKU in your coffee line. Great for drops, gifting, and subscribers who want the full experience.",
      bullets: [
        "Nespresso Original Line compatible",
        "Custom packaging — boxes of 10 with your full branding",
        "Multiple blend and intensity options",
        "High perceived value — positioned above standard bags",
        "Ideal for gift sets, limited editions, and collab drops",
      ],
      ctaText: "Ask about capsules",
      contactSubject: "Custom Capsules — Creator Brand",
      imageKey: "capsule",
      imageAlt: "Branded Nespresso capsules for influencer coffee brand",
      imageFirst: false,
      theme: "light",
    },
    {
      tag: "Content ready",
      title: "Ready to Drink Branded Cans",
      body: "Cold coffee in a can that your audience can carry, photograph, and post. Perfect for events, meet and greets, pop ups, and merch table moments. A format that creates content opportunities beyond the morning routine.",
      bullets: [
        "Cold brew and iced latte formats",
        "Full custom label — designed for maximum visual impact",
        "Perfect for events, pop ups, and limited drops",
        "Carry the brand to places a bag never goes",
        "Available by the case for event fulfillment",
      ],
      ctaText: "Ask about RTD cans",
      contactSubject: "Custom RTD Cans — Creator Brand",
      imageKey: "can",
      imageAlt: "Branded ready to drink coffee cans for influencer brand",
      imageFirst: true,
      theme: "dark",
    },
  ],
  stats: [
    { value: "60%+", label: "Average repeat purchase rate on coffee products" },
    { value: "48h", label: "Fastest first drop sellout by a creator client" },
    { value: "3–4 wks", label: "From brief to launch ready product" },
    { value: "100%", label: "Canadian roasted specialty coffee" },
  ],
  howItWorks: [
    {
      n: "01",
      title: "Brand discovery",
      body: "We learn your aesthetic, your audience, your tone, and what you want your coffee to say. This shapes everything from blend to packaging.",
    },
    {
      n: "02",
      title: "Blend selection",
      body: "Work with our roasters to choose or develop a signature profile. Bold, smooth, single origin, or a custom blend — it's your call.",
    },
    {
      n: "03",
      title: "Full brand design",
      body: "Our designers create packaging that looks incredible on camera and on a shelf. You approve every detail before production begins.",
    },
    {
      n: "04",
      title: "Launch and fulfill",
      body: "We produce your run and fulfill directly to your customers. Announce the drop, we handle the shipping. Reorders are seamless.",
    },
  ],
  testimonials: [
    {
      quote:
        "I launched a coffee collab with EZPZ and sold out the first run in 48 hours. The packaging was made for content — every unboxing video performed above my average.",
      name: "Creator",
      role: "850K followers, lifestyle & wellness",
    },
    {
      quote:
        "My audience orders my morning coffee from my store now. The repeat purchase rate is something I've never seen from any other product I've ever launched.",
      name: "Digital Creator",
      role: "1.2M followers, food & travel",
    },
    {
      quote:
        "We did a limited edition run for my podcast listeners. It became the highest-converting product I've ever sold, and 60% reordered within 6 weeks.",
      name: "Podcast Host",
      role: "200K subscribers, entrepreneurship",
    },
  ],
  faq: [
    {
      q: "Do you ship directly to my customers?",
      a: "Yes. EZPZ can fulfill orders directly to your customers on your behalf. You run your store and collect revenue — we handle picking, packing, and shipping with your branded packaging.",
    },
    {
      q: "Can I do a limited edition drop?",
      a: "Absolutely. Limited drops are one of the most effective formats for creator coffee brands. We can produce a small run with unique packaging for a seasonal, anniversary, or collab release.",
    },
    {
      q: "What's the minimum for a launch run?",
      a: "For coffee bags, there is no minimum. For limited edition runs with custom packaging, we recommend a minimum of 50 to 100 units to make the design investment worthwhile. We'll advise based on your audience size.",
    },
    {
      q: "Can I choose different blends for different drops?",
      a: "Yes. Many creator clients rotate blends seasonally — a light summer blend, a dark winter roast — to give their audience a reason to reorder and create new content around each launch.",
    },
    {
      q: "Can I offer a subscription product?",
      a: "Yes. A recurring subscription to your signature blend is one of the strongest recurring revenue models available to creators. We can advise on how to set this up with your existing store platform.",
    },
  ],
  cta: {
    title: "Ready to turn your audience into daily customers?",
    subtitle:
      "Coffee is the most consumed beverage in the world. Your signature blend is a brand extension that earns revenue every morning — without you posting a single piece of content.",
    ctaText: "Build your coffee brand",
    contactSubject: "Custom Coffee Brand — Creator / Influencer",
  },
};

const InfluencersPage = () => {
  return <WhiteLabelVerticalPage data={data} />;
};

export default InfluencersPage;
