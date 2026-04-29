import type { Metadata } from "next";

import WhiteLabelVerticalPage, { VerticalPageData } from "../../_components/WhiteLabelVerticalPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee for Restaurants & Cafés | EZPZ Coffee",
    description:
      "Serve coffee under your own brand at your restaurant or café. Custom blends, custom packaging, no minimum orders. EZPZ handles everything from roasting to delivery.",
    alternates: { canonical: "/en/white-label/restaurants" },
    openGraph: {
      title: "White Label Coffee for Restaurants & Cafés | EZPZ Coffee",
      description:
        "Serve coffee under your own brand at your restaurant or café. Custom blends, custom packaging, no minimum orders. EZPZ handles everything from roasting to delivery.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label/restaurants",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "White Label Coffee for Restaurants" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "White Label Coffee for Restaurants & Cafés | EZPZ Coffee",
      description:
        "Serve coffee under your own brand at your restaurant or café. Custom blends, custom packaging, no minimum orders.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: VerticalPageData = {
  hero: {
    eyebrow: "White Label Coffee for Restaurants & Cafés",
    title: "Your restaurant. Your coffee. Your brand.",
    subtitle:
      "Stop serving coffee under someone else's name. Every cup you pour is an opportunity to reinforce your identity, build loyalty, and create a product your guests want to take home.",
    ctaText: "Get a free quote",
    contactSubject: "White Label Coffee — Restaurants & Cafés",

  },
  pain: {
    eyebrow: "Sound familiar?",
    title: "You're building a brand. Your coffee should be part of it.",
    items: [
      {
        icon: "☕",
        text: "You serve a generic national brand that your competitors also carry — there's nothing memorable about it.",
      },
      {
        icon: "🏷️",
        text: "Customers compliment the coffee, but they associate it with the roaster's brand, not yours.",
      },
      {
        icon: "📦",
        text: "You have zero control over sourcing, pricing, or how the product is presented at your tables.",
      },
      {
        icon: "💸",
        text: "You could be selling branded coffee bags as a retail revenue stream, but you have nothing to put your name on.",
      },
    ],
  },
  benefits: {
    eyebrow: "The EZPZ advantage",
    title: "Everything you need to launch your coffee brand, handled.",
    items: [
      {
        icon: "🎨",
        title: "Your name on every bag",
        body: "Custom labels and packaging designed to match your restaurant's visual identity, printed and applied by our team.",
      },
      {
        icon: "🫘",
        title: "Custom blends",
        body: "Work with our roasters to develop a house blend that matches your cuisine, your service, and your guests' palate.",
      },
      {
        icon: "0️⃣",
        title: "No minimum order",
        body: "Order exactly what you need. No large upfront commitment, no warehouse full of unsold product.",
      },
      {
        icon: "🚚",
        title: "Direct delivery",
        body: "Your branded coffee arrives at your restaurant door on a schedule that works for you.",
      },
      {
        icon: "📈",
        title: "New revenue stream",
        body: "Sell branded bags and capsules at your front counter or online. Our clients add hundreds to thousands of dollars monthly.",
      },
      {
        icon: "🤝",
        title: "Dedicated support",
        body: "A real person handles your account. No ticketing system, no chatbots — just fast, direct communication.",
      },
    ],
  },
  products: [
    {
      tag: "Best seller",
      title: "Custom Branded Coffee Bags",
      body: "Your signature blend in a beautifully branded bag. Available in 250g and 340g formats, whole bean or ground. Designed to sit on your front counter and sell itself.",
      bullets: [
        "Full custom label design included",
        "Choice of single origin or custom house blend",
        "Whole bean or preground to your specification",
        "Kraft or matte finish packaging options",
        "No minimum order quantity",
      ],
      ctaText: "Get a quote on bags",
      contactSubject: "White Label Coffee Bags — Restaurant",
      imageKey: "bag",
      imageAlt: "Custom branded coffee bag for restaurants",
      imageFirst: true,
      theme: "dark",
    },
    {
      tag: "Premium service",
      title: "Nespresso Compatible Capsules",
      body: "Elevate your table coffee service with capsules that carry your brand. Perfect for upscale restaurants, private dining rooms, or any venue with Nespresso machines.",
      bullets: [
        "Compatible with all Nespresso Original Line machines",
        "Custom blended and freshness sealed",
        "Individually branded outer packaging",
        "Great for table service, bar menus, or retail upsell",
        "Available in multiple intensity levels",
      ],
      ctaText: "Ask about capsules",
      contactSubject: "White Label Capsules — Restaurant",
      imageKey: "capsule",
      imageAlt: "Branded Nespresso capsules for restaurants",
      imageFirst: false,
      theme: "light",
    },
    {
      tag: "New format",
      title: "Ready to Drink Branded Cans",
      body: "Cold coffee in a branded can. Perfect for bar service, summer terraces, event catering, or as a retail add on at the counter. A conversation starter in every format.",
      bullets: [
        "Cold brew and iced latte formats available",
        "Full custom label on every can",
        "Sold as cases — easy to stock and serve",
        "Great margin for a premium perceived product",
        "Ideal for events, patios, and brunch menus",
      ],
      ctaText: "Ask about cans",
      contactSubject: "White Label RTD Cans — Restaurant",
      imageKey: "can",
      imageAlt: "Branded ready to drink coffee cans",
      imageFirst: true,
      theme: "dark",
    },
  ],
  stats: [
    { value: "3–4 wks", label: "Average time from brief to first delivery" },
    { value: "1", label: "Minimum order quantity on coffee bags" },
    { value: "60%+", label: "Repeat order rate across restaurant clients" },
    { value: "100%", label: "Canadian roasted specialty coffee" },
  ],
  howItWorks: [
    {
      n: "01",
      title: "Tell us about your restaurant",
      body: "We learn about your concept, cuisine, service style, and what you want your coffee to say about you.",
    },
    {
      n: "02",
      title: "Choose your blend and format",
      body: "Select from our existing blends or work with our roasters to develop something entirely yours — bags, capsules, or cans.",
    },
    {
      n: "03",
      title: "We design and produce",
      body: "Our design team creates packaging that fits your brand. Once approved, we roast, package, and prep your order.",
    },
    {
      n: "04",
      title: "Delivered to your door",
      body: "Your branded coffee arrives ready to serve and sell. Reorders are seamless, with fast 5–7 business day turnaround.",
    },
  ],
  testimonials: [
    {
      quote:
        "We launched our house blend six months ago. It's now on every table and guests constantly ask to buy a bag to take home. It's become one of our best retail items.",
      name: "Antoine D.",
      role: "Chef and Owner, Montreal",
    },
    {
      quote:
        "I was skeptical about private label coffee but EZPZ made the whole thing effortless. Zero minimums meant no financial risk, and the design came out better than I imagined.",
      name: "Camille R.",
      role: "Café Owner, Quebec City",
    },
    {
      quote:
        "Our branded coffee bags became our number one retail product. Customers come back not just for brunch, but to replenish their supply at home.",
      name: "Julien M.",
      role: "Restaurant Group Director, Ottawa",
    },
  ],
  faq: [
    {
      q: "What's the minimum order for coffee bags?",
      a: "There is no minimum order quantity for our coffee bags. Order as little or as much as you need. This is especially useful for smaller restaurants testing the concept before scaling.",
    },
    {
      q: "Can I choose my own blend or roast profile?",
      a: "Yes. You can select from our existing single origin and blend profiles, or work with our team to develop a completely custom house blend tailored to your guests' palate and your menu.",
    },
    {
      q: "How long does it take from first contact to first delivery?",
      a: "For new clients, the typical timeline is 3 to 4 weeks from initial brief to first delivery. This includes blend selection, design, approval, production, and shipping. Reorders ship in 5 to 7 business days.",
    },
    {
      q: "Can we sell the branded coffee at our restaurant?",
      a: "Absolutely — and we encourage it. Many of our restaurant clients sell branded 250g bags and capsule boxes as a retail product at their counter or checkout. It generates meaningful additional revenue and drives loyalty.",
    },
    {
      q: "Do you handle the design for our packaging?",
      a: "Yes. Packaging design is included at no extra cost. Our design team will work with your existing branding guidelines — or help you develop something new — to create packaging that looks professional and on brand.",
    },
  ],
  cta: {
    title: "Ready to serve coffee with your name on it?",
    subtitle:
      "Join dozens of Canadian restaurants and cafés who have turned their coffee program into a branded experience and a genuine revenue stream.",
    ctaText: "Start your coffee brand",
    contactSubject: "White Label Coffee — Restaurants & Cafés",
  },
};

const RestaurantsPage = () => {
  return <WhiteLabelVerticalPage data={data} />;
};

export default RestaurantsPage;
