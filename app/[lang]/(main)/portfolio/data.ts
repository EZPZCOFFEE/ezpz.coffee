export interface PortfolioClient {
  slug: string;
  name: string;
  industry: string;
  description: string;
  color: string;
  initials: string;
  challenge: string;
  delivered: {
    productType: string;
    designIncluded: string;
    turnaround: string;
  };
  productCaption: string;
  quote: {
    text: string;
    author: string;
    title: string;
  };
  stats: Array<{ value: string; label: string }>;
}

export const PORTFOLIO_CLIENTS: PortfolioClient[] = [
  {
    slug: "fairmont-hotels",
    name: "Fairmont Hotels",
    industry: "Hospitality",
    description: "Custom branded coffee bags for in-room and restaurant service",
    color: "#1a3a5c",
    initials: "FH",
    challenge:
      "Fairmont Hotels needed an in-room and restaurant coffee experience that matched the standard of their five-star brand. Generic hotel coffee was undermining the guest experience they worked so hard to build. They came to us needing a fully custom solution — their branding, their story, their coffee — delivered reliably at scale.",
    delivered: {
      productType: "Custom branded coffee bags",
      designIncluded: "Full custom label design",
      turnaround: "2–3 weeks",
    },
    productCaption: "Custom branded coffee bags for Fairmont Hotels",
    quote: {
      text: "Our guests immediately noticed the difference. Having our own branded coffee elevated the entire room experience — it became one of the most talked-about details in our guest reviews.",
      author: "Michael T.",
      title: "F&B Director, Fairmont Hotels",
    },
    stats: [
      { value: "3 wks", label: "From order to delivery" },
      { value: "100%", label: "Custom design" },
      { value: "1", label: "Minimum order" },
    ],
  },
  {
    slug: "avenue",
    name: "Avenue",
    industry: "Retail",
    description: "Private label whole bean bags sold in-store",
    color: "#2d4a2d",
    initials: "AV",
    challenge:
      "Avenue wanted to offer a premium private label coffee line that fit seamlessly into their curated retail assortment. They needed a product that felt native to their brand — not a generic resell — with packaging that matched their refined aesthetic. The goal was to create a new revenue stream while deepening customer loyalty.",
    delivered: {
      productType: "Private label whole bean bags",
      designIncluded: "Full custom label design",
      turnaround: "2–3 weeks",
    },
    productCaption: "Private label whole bean bags for Avenue",
    quote: {
      text: "Our customers love being able to take a piece of our store home with them. The bags look incredible on the shelf and the coffee quality speaks for itself — it's become one of our top-selling SKUs.",
      author: "Sophie L.",
      title: "Retail Buyer, Avenue",
    },
    stats: [
      { value: "3 wks", label: "From order to delivery" },
      { value: "100%", label: "Custom design" },
      { value: "1", label: "Minimum order" },
    ],
  },
  {
    slug: "regine",
    name: "Regine",
    industry: "Food & Beverage",
    description: "Branded espresso blend for their café locations",
    color: "#4a1a2d",
    initials: "RG",
    challenge:
      "Regine's café locations had built a loyal following, but they were pouring a roaster's blend with someone else's name on it. They wanted a signature espresso that was entirely theirs — one they could serve in-cup and sell at the counter as a retail bag. We helped them develop and brand a blend that became central to their café identity.",
    delivered: {
      productType: "Branded espresso blend bags",
      designIncluded: "Full custom label design",
      turnaround: "2–3 weeks",
    },
    productCaption: "Branded espresso blend bags for Regine",
    quote: {
      text: "Having our own espresso blend changed everything. Customers ask for it by name now and our retail bag sales have added a whole new revenue stream we didn't expect.",
      author: "Regine M.",
      title: "Founder, Regine Café",
    },
    stats: [
      { value: "3 wks", label: "From order to delivery" },
      { value: "100%", label: "Custom design" },
      { value: "1", label: "Minimum order" },
    ],
  },
  {
    slug: "cowork",
    name: "Cowork",
    industry: "Workspace",
    description: "Custom office coffee program with monthly delivery",
    color: "#1a2d4a",
    initials: "CW",
    challenge:
      "Cowork needed more than just good coffee in their shared workspace — they wanted a branded touchpoint that reinforced their community feel and gave members something to talk about. A generic office coffee service wasn't going to cut it. We set them up with a monthly delivery program using their own branded bags, making great coffee part of their member experience.",
    delivered: {
      productType: "Custom branded bags + monthly program",
      designIncluded: "Full custom label design",
      turnaround: "2–3 weeks",
    },
    productCaption: "Custom branded coffee program for Cowork",
    quote: {
      text: "Members mention the coffee constantly when recommending us to friends. It's one of those small things that makes a big impression — and having our own brand on the bag makes it feel like a proper perk, not just an afterthought.",
      author: "Alex R.",
      title: "Community Manager, Cowork",
    },
    stats: [
      { value: "3 wks", label: "From order to delivery" },
      { value: "100%", label: "Custom design" },
      { value: "1", label: "Minimum order" },
    ],
  },
  {
    slug: "janine",
    name: "Janine",
    industry: "Boutique",
    description: "Limited edition seasonal coffee bags for gifting",
    color: "#3d2a1a",
    initials: "JN",
    challenge:
      "Janine's boutique was known for thoughtfully curated gifts, but they lacked a signature product customers could return for season after season. They wanted a limited edition holiday coffee bag that felt as premium as the rest of their store — beautiful enough to give as a gift, delicious enough to keep. We designed and produced a seasonal run that sold out in weeks.",
    delivered: {
      productType: "Limited edition seasonal coffee bags",
      designIncluded: "Full custom label design",
      turnaround: "2–3 weeks",
    },
    productCaption: "Limited edition seasonal gift bags for Janine",
    quote: {
      text: "We sold out our first run in under three weeks. Customers were buying three at a time — one to keep, two to give. It's become our most anticipated seasonal product and we're already planning next year's edition.",
      author: "Janine K.",
      title: "Owner, Janine Boutique",
    },
    stats: [
      { value: "3 wks", label: "From order to delivery" },
      { value: "100%", label: "Custom design" },
      { value: "1", label: "Minimum order" },
    ],
  },
  {
    slug: "stephen",
    name: "Stephen",
    industry: "Restaurant",
    description: "House blend bags served and sold on-site",
    color: "#2a1a3d",
    initials: "ST",
    challenge:
      "Stephen's restaurant was known for its attention to detail from appetizer to digestif — but the after-dinner coffee was an afterthought. He wanted a house blend that reflected the same care he put into his menu, one that could be served tableside and sold as a retail bag at the exit. We helped him develop a blend and brand it as a natural extension of his restaurant.",
    delivered: {
      productType: "House blend coffee bags",
      designIncluded: "Full custom label design",
      turnaround: "2–3 weeks",
    },
    productCaption: "House blend coffee bags for Stephen Restaurant",
    quote: {
      text: "Guests now ask to buy a bag on their way out almost every night. It extends the dining experience beyond the restaurant walls and keeps us top of mind every morning when they brew a cup at home.",
      author: "Stephen B.",
      title: "Chef & Owner, Stephen",
    },
    stats: [
      { value: "3 wks", label: "From order to delivery" },
      { value: "100%", label: "Custom design" },
      { value: "1", label: "Minimum order" },
    ],
  },
];

export const getClientBySlug = (slug: string): PortfolioClient | undefined =>
  PORTFOLIO_CLIENTS.find((c) => c.slug === slug);
