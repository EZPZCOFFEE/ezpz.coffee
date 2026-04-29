import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Offices | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for offices. Specialty coffee that reflects your company culture and impresses clients. No minimum order, full design included. Offices across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-offices" },
    openGraph: {
      title: "Custom Coffee Bags for Offices | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for offices. Employee morale, client impressions, culture signal. No minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-offices",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Offices" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Offices | EZPZ Coffee",
      description: "Custom branded coffee bags for offices. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Offices",
  eyebrow: "Custom Coffee for Offices",
  headline: "Your office coffee. Your brand. Your culture.",
  subheadline: "Offices are moving away from generic pods toward branded specialty coffee that reflects their values and impresses the clients who walk through the door.",
  intro: "The office coffee machine is a cultural artifact. It is where teams gather, where conversations happen, and where the tone of the workplace is subtly set every morning. Generic Nespresso pods and bulk grocery-store coffee say something about your company — and it is not the message you want to send to talented employees or visiting clients. Branded specialty coffee from EZPZ says something different: that you care about quality, that you think about details, and that you invest in experiences beyond the transactional minimum. The trend is clear: companies that want to attract and retain top talent are upgrading every touchpoint of the office experience. Specialty coffee is one of the most visible and lowest-cost ways to do that. Beyond the daily ritual, branded coffee bags in the office kitchen are a conversation starter for clients. A visitor who notices that your company has its own branded specialty coffee blend asks about it. That is a brand story moment with zero effort. No minimum means testing with a small order to see how the team responds before committing to a recurring supply.",
  whoOrders: [
    { title: "Tech startups and scale-ups", body: "Tech companies use branded office coffee as a talent retention and culture signal. In a competitive hiring market, every touchpoint of the employee experience matters — including what's in the kitchen." },
    { title: "Creative agencies and studios", body: "Creative agencies use branded coffee as an extension of their brand identity. A design studio with its own specialty coffee blend is consistent with its positioning as a premium, detail-oriented partner." },
    { title: "Professional services firms", body: "Law firms, accounting firms, and consulting companies use branded office coffee to impress clients who visit the office. It signals quality and sets the tone for the relationship before a word is spoken." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your company logo and colors. We'll create a bag that looks like it was made by your brand team — clean, professional, on-brand." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that match your office culture. Bold Colombian for a high-energy startup. Elegant Ethiopian for a premium professional services firm." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Set up a recurring order schedule and we'll have fresh bags ready whenever you need them." },
    { n: "04", title: "Delivered to your office", body: "Shipped directly to your office address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Employee morale and retention signal", body: "Branded specialty coffee in the office kitchen tells employees that the company invests in their experience. It is a small investment with a disproportionate impact on how people feel about their workplace." },
    { n: "02", title: "Client impression on every visit", body: "A client who visits your office and notices your branded specialty coffee blend remembers it. It is a brand story moment that costs less than the coffee service you were already providing." },
    { n: "03", title: "Culture signal for recruits and partners", body: "Every detail of the office communicates culture. Branded specialty coffee signals that your company is thoughtful, detail-oriented, and invested in quality — values that attract great people and great partners." },
    { n: "04", title: "No minimum to test the concept", body: "Order a single bag to see how the team reacts. Order 50 to supply the office for a month. Order 200 to include in a client gift campaign. Zero minimum means zero risk." },
  ],
  testimonial: {
    quote: "It replaced the Nespresso pods and team morale went up. That's not a joke. Three people have mentioned it in their Glassdoor reviews.",
    author: "Sarah W.",
    role: "Office Manager, tech startup, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-offices",
};

const OfficesPage = () => <IndustryPage data={data} />;
export default OfficesPage;
