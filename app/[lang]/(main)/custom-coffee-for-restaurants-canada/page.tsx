import type { Metadata } from "next";
import Script from "next/script";

import AEOAnswerPage from "../_components/AEOAnswerPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Restaurants Canada | No Minimum | EZPZ Coffee",
    description:
      "Custom coffee bags for restaurants in Canada with zero minimum order. EZPZ handles design, roasting, and delivery in 2 to 3 weeks. Branded specialty coffee for Canadian restaurants.",
    alternates: { canonical: "/en/custom-coffee-for-restaurants-canada" },
    openGraph: {
      title: "Custom Coffee Bags for Restaurants in Canada | No Minimum | EZPZ",
      description:
        "Canadian restaurants can get custom branded coffee bags through EZPZ Coffee with zero minimum order. EZPZ handles design, roasting, and delivery in 2 to 3 weeks.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-for-restaurants-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Restaurants Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Restaurants in Canada | EZPZ Coffee",
      description: "Custom branded coffee bags for Canadian restaurants. Zero minimum. Full design. Ready in 2–3 weeks.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a single-location restaurant order custom coffee bags in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee has zero minimum order, so a single-location restaurant can order as few bags as needed. There is no commitment to large volumes and no setup fees.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get custom coffee bags for a Canadian restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom coffee bags for Canadian restaurants are ready within 2 to 3 weeks from design approval. EZPZ ships to all Canadian provinces and US states.",
      },
    },
    {
      "@type": "Question",
      name: "Does EZPZ help with the coffee bag design for restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Full custom design is included at no extra cost. EZPZ creates complete bag artwork from your restaurant logo. You do not need a designer or print-ready files.",
      },
    },
    {
      "@type": "Question",
      name: "Can restaurants order both ground and whole bean custom coffee bags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee offers whole bean and ground options for all custom coffee bag orders. Restaurants can offer both formats under their own brand with zero minimum on each.",
      },
    },
    {
      "@type": "Question",
      name: "What does it cost for a restaurant to get custom branded coffee bags in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom coffee bag pricing for restaurants varies by volume. Full design is always included. There is no minimum order. Contact help@ezpz.coffee for a free quote tailored to your restaurant.",
      },
    },
  ],
};

const FAQS = [
  {
    question: "Can a single-location restaurant order custom coffee bags in Canada?",
    answer: "Yes. EZPZ Coffee has zero minimum order, so a single-location restaurant can order as few bags as needed. There is no commitment to large volumes and no setup fees.",
  },
  {
    question: "How long does it take to get custom coffee bags for a Canadian restaurant?",
    answer: "Custom coffee bags for Canadian restaurants are ready within 2 to 3 weeks from design approval. EZPZ ships to all Canadian provinces and US states.",
  },
  {
    question: "Does EZPZ help with the coffee bag design for restaurants?",
    answer: "Yes. Full custom design is included at no extra cost. EZPZ creates complete bag artwork from your restaurant logo. You do not need a designer or print-ready files.",
  },
  {
    question: "Can restaurants order both ground and whole bean custom coffee bags?",
    answer: "Yes. EZPZ offers whole bean and ground options for all custom coffee bag orders. Restaurants can offer both formats under their brand with zero minimum on each.",
  },
  {
    question: "What does it cost for a restaurant to get custom branded coffee bags in Canada?",
    answer: "Pricing varies by volume. Full design is always included. No minimum order. Contact help@ezpz.coffee for a free quote tailored to your restaurant.",
  },
];

const RELATED = [
  { label: "What Is White Label Coffee in Canada?", href: "/en/what-is-white-label-coffee-canada" },
  { label: "Custom Coffee Bags With No Minimum in Canada", href: "/en/custom-coffee-bags-no-minimum-canada" },
  { label: "How Much Do Custom Coffee Bags Cost in Canada?", href: "/en/how-much-do-custom-coffee-bags-cost-canada" },
  { label: "Best White Label Coffee Supplier in Canada", href: "/en/best-white-label-coffee-supplier-canada" },
];

const Page = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;

  return (
    <>
      <Script
        id="restaurants-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <AEOAnswerPage
        locale={lang}
        headline="How Can Canadian Restaurants Get Their Own Branded Coffee Bags?"
        directAnswer="Canadian restaurants can get custom branded coffee bags through EZPZ Coffee with zero minimum order. EZPZ handles design, roasting, and delivery. Orders are ready in 2 to 3 weeks and ship across Canada."
        faqs={FAQS}
        related={RELATED}
      >
        <h2>Why Branded Coffee Matters for Canadian Restaurants</h2>
        <p>
          Custom coffee bags for restaurants are one of the highest-margin, lowest-complexity retail products a Canadian restaurant can offer. Coffee is no longer just a beverage served at the end of a meal. For Canadian restaurants, custom coffee bags for restaurants represent an opportunity to extend the dining experience into the guest&apos;s home. When a customer leaves your restaurant with a bag of coffee branded with your logo, your name stays on their kitchen counter every morning. That is brand impressions no advertising budget can reliably produce.
        </p>
        <p>
          Branded coffee also creates a new revenue stream. A restaurant that charges a premium for a unique dining experience can command similar positioning for its retail coffee. Guests who love your restaurant are highly likely to buy your branded coffee as a gift or for their own home use — especially when it is specialty grade and beautifully packaged.
        </p>

        <h2>What Custom Coffee Bags Do for Your Restaurant</h2>
        <p>
          A custom coffee bag with your restaurant's branding accomplishes several things simultaneously. It signals that your restaurant takes quality seriously down to every detail. It provides a retail product that generates revenue with minimal operational overhead. It creates a word-of-mouth channel — guests share their coffee bags on social media and recommend your brand to friends. And it differentiates your establishment from competitors who serve generic or generic-branded coffee.
        </p>
        <p>
          For restaurants with a strong identity — a distinctive name, a recognizable logo, or a loyal neighbourhood following — custom coffee is a natural extension of the brand. For newer restaurants, it is a way to accelerate brand awareness beyond the dining room.
        </p>

        <h2>How the Custom Coffee Bag Process Works for Restaurants</h2>
        <p>
          The process of getting custom branded coffee bags through EZPZ Coffee is designed to be simple for restaurant operators who are already managing a full business. Here is how it works:
        </p>
        <ol>
          <li><strong>Choose your coffee.</strong> EZPZ offers specialty grade arabica in multiple origins (Ethiopia, Colombia, Guatemala, Brazil, and seasonal options) and roast profiles (light, medium, dark). Not sure what to choose? Request samples first.</li>
          <li><strong>Submit your logo.</strong> Send your restaurant logo in any format. EZPZ handles all design work from there, including colour matching and layout.</li>
          <li><strong>Approve your design.</strong> EZPZ creates a complete bag design proof and sends it to you for approval. Revisions are included until you are satisfied.</li>
          <li><strong>Production and delivery.</strong> Once you approve the design, EZPZ roasts, packages, and ships your bags within 2 to 3 weeks.</li>
        </ol>
        <p>
          There is no contract, no recurring commitment, and no minimum order. You reorder when you need more.
        </p>

        <h2>Cost and Margins for Restaurant Coffee</h2>
        <p>
          Custom coffee bags from EZPZ represent a high-margin retail opportunity for restaurants. Because the per-bag cost from EZPZ is competitive with wholesale, and branded specialty coffee retail sells at a significant premium, restaurants typically see strong margins on coffee bag sales.
        </p>
        <p>
          A branded 250g bag of specialty coffee from a well-regarded restaurant can retail for $22 to $28 in Canada. The EZPZ per-bag cost, which includes the coffee, design, roasting, and packaging, is a fraction of that retail price. The margin opportunity is significant, especially for restaurants that already have a captive audience of guests who trust the brand.
        </p>
        <p>
          Full custom design is always included at no extra cost, which means there are no upfront design fees eating into margin before you sell your first bag.
        </p>

        <h2>Restaurant Use Cases for Custom Coffee</h2>
        <p>
          Canadian restaurants use EZPZ custom coffee bags in several ways. The most common is a retail display near the host stand or checkout, where guests can purchase bags to take home. Some restaurants include a branded bag as part of a tasting menu takeaway or special occasion gift. Others use custom coffee as a corporate gift for large bookings or events hosted at the restaurant. Seasonal bags — holiday editions, Valentine's Day, anniversary editions — are also popular because EZPZ's zero minimum makes small seasonal runs economically viable.
        </p>

        <h2>How to Get Custom Coffee Bags for Your Restaurant</h2>
        <p>
          Getting custom coffee bags for restaurants through EZPZ is straightforward. To start your restaurant coffee project, email help@ezpz.coffee with your restaurant name, logo, and a rough sense of the quantity you are considering. EZPZ will reply within one business day to discuss your options, offer samples, and provide a quote. Alternatively, use the online designer at ezpz.coffee/en/design to preview your bag and begin the process immediately.
        </p>
        <p>
          You can order as few bags as you need to test the concept — a single shelf display of 12 to 24 bags is a common starting point for restaurants new to coffee retail. Scale up based on what sells.
        </p>
      </AEOAnswerPage>
    </>
  );
};

export default Page;
