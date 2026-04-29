import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Corporate Gifting | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for corporate gifting. Daily brand visibility in every client's morning. No minimum order, full design included. Corporate clients across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-corporate" },
    openGraph: {
      title: "Custom Coffee Bags for Corporate Gifting | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for corporate gifting. Daily brand visibility, premium feel, no minimum per client.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-corporate",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Corporate Gifting" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Corporate Gifting | EZPZ Coffee",
      description: "Custom branded coffee bags for corporate gifting. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Corporate",
  eyebrow: "Custom Coffee for Corporate Gifting",
  headline: "Your brand. In the hands of every client. Every morning.",
  subheadline: "Branded pens get lost. Notebooks gather dust. A bag of specialty coffee with your logo gets used every single morning for weeks — and your brand is there for all of it.",
  intro: "Corporate gifting is a billion-dollar industry built largely on forgettable products. Every September, procurement teams order boxes of branded notebooks, pens, and chocolate that are used once, given away, or thrown out. The problem isn't the budget — it's the product. A custom specialty coffee bag is the corporate gift that actually earns daily brand exposure. When your client brews your company's coffee every morning, they see your name, your logo, and your brand colors. That is three to five minutes of brand attention, 365 days a year, that no advertising budget can replicate. Montreal and Toronto companies are replacing generic corporate gifts with custom coffee bags because the results are measurable: clients mention it in thank-you emails, ask where they can order more for their own offices, and remember the company name when the next opportunity comes up. No minimum means ordering per client — five bags for your five biggest accounts, or five hundred for a national campaign. The product scales with your intention and your budget.",
  whoOrders: [
    { title: "Consulting and professional services firms", body: "Consulting firms use branded coffee as an end-of-project gift, holiday appreciation gift, and new client welcome package. It signals thoughtfulness and quality that generic gifts never convey." },
    { title: "Financial services companies", body: "Financial advisors, wealth management firms, and insurance companies use branded coffee as a quarterly client gift that keeps their name top of mind between reviews and renewals." },
    { title: "Technology companies", body: "Tech companies use branded coffee for customer success gifting, partner appreciation, and sales pipeline outreach. A personalized bag with the prospect's company name has a very high open rate." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your company logo and brand colors. Our design tool creates a professional bag that matches your brand standards without needing a designer or print-ready files." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that signal quality — Colombian, Ethiopian, or Panamanian. We can include tasting notes that demonstrate your attention to detail." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order 5 bags for your top clients or 500 for a campaign. Same quality either way." },
    { n: "04", title: "Delivered to your office or directly to clients", body: "Ship to your office for distribution, or ship individual bags directly to each client's address. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Daily brand visibility that advertising can't buy", body: "Every morning your client brews your coffee, they see your brand. That's 3–5 minutes of focused brand attention per day for 2–4 weeks per bag — no ad format delivers that." },
    { n: "02", title: "Premium feel at an accessible price", body: "A custom specialty coffee bag feels expensive and thoughtful without the cost and legal complexity of wine, spirits, or luxury goods. It's the sweet spot for professional gifting." },
    { n: "03", title: "No minimum — gift per client, not per campaign", body: "Order 5 bags for your 5 most important clients. Order 500 for a national campaign. EZPZ's zero minimum makes per-client personalization economically viable." },
    { n: "04", title: "Talked about and remembered", body: "Corporate gifts that get mentioned in thank-you emails are rare. Branded coffee consistently earns explicit acknowledgment — which means it's driving the relationship signal you're investing in." },
  ],
  testimonial: {
    quote: "We stopped sending wine bottles. Coffee gets mentioned in thank-you emails — wine never did. Our clients actually talk about it when we see them next.",
    author: "James P.",
    role: "VP Marketing, consulting firm, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-corporate",
};

const CorporatePage = () => <IndustryPage data={data} />;
export default CorporatePage;
