import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Law Firms | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for law firms. A client gift as distinguished as your practice. No minimum order, full design included. Law firms across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-law-firms" },
    openGraph: {
      title: "Custom Coffee Bags for Law Firms | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for law firms. Premium client gifting, memorable and talked about, no minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-law-firms",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Law Firms" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Law Firms | EZPZ Coffee",
      description: "Custom branded coffee bags for law firms. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Law Firms",
  eyebrow: "Custom Coffee for Law Firms",
  headline: "A client gift as distinguished as your practice.",
  subheadline: "Law firms need client gifts that reflect their premium positioning. A beautifully designed specialty coffee bag from a traceable Montreal roastery says quality, attention to detail, and thoughtfulness.",
  intro: "Law firms spend significant budgets on client gifts and never quite get it right. Wine is generic and raises ethical questions in some jurisdictions. Gift cards feel impersonal. Branded merchandise communicates the wrong message — clients don't want to wear a firm's logo. A custom specialty coffee bag is the exception to all of these problems. It is genuinely premium without being extravagant. It is useful without being forgettable. It carries the firm's branding without asking the client to become a walking advertisement. And it communicates something important: that this firm chose a Montreal specialty roaster with traceable single-origin beans because quality and provenance matter to them — which is exactly the message a premium legal practice should send. Compare it to a $35 bottle of wine that will be opened in five minutes and forgotten. The coffee bag sits on the client's kitchen counter for weeks. Every morning they make coffee, they see the firm's name. When a colleague asks about a lawyer, the client's mind goes to the bag on the counter. That is the referral moment. No minimum means gifting per client at the exact right moment — a matter closing, a contract renewal, the holiday season.",
  whoOrders: [
    { title: "Corporate law firms", body: "Corporate practices use branded coffee as a deal-closing gift, holiday appreciation gift, and new client welcome package that reflects their position as a premium professional services firm." },
    { title: "Family law and estate practices", body: "Practices with ongoing client relationships use branded coffee to maintain warmth in inherently transactional work. A thoughtful gift signals care that goes beyond the invoice." },
    { title: "Boutique specialty firms", body: "Small and boutique firms use branded coffee to punch above their weight — a premium gift that signals quality and sophistication disproportionate to firm size." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your firm logo. Clean, minimal design works best for law firm branding — sophisticated, professional, and immediately recognizable." },
    { n: "02", title: "Choose your coffee", body: "Select a premium single origin that speaks for itself. Panamanian or Ethiopian specialty coffees are a natural choice for firms that want to signal discernment." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order per client at the right moment in the relationship." },
    { n: "04", title: "Delivered to your firm or directly to clients", body: "Ship to your office for delivery, or ship individual bags to each client's address. Canada: 3–10 days. USA: 7–14 days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Premium positioning at the right price point", body: "A custom specialty coffee bag is genuinely premium without triggering ethical concerns around gifts to clients. It's memorable, appreciated, and appropriately measured." },
    { n: "02", title: "Memorable and talked about", body: "Few client gifts generate conversation. A beautifully designed custom coffee bag from a specialty Montreal roaster gets mentioned — which is exactly the brand recall a law firm invests in." },
    { n: "03", title: "No minimum for per-client gifting", body: "Order exactly one bag for one client at one relationship moment. Scale to 200 bags for a firm-wide holiday campaign. Zero minimum makes the economics work at any scale." },
    { n: "04", title: "Easily paired with a personal note", body: "A handwritten note alongside a branded coffee bag creates a complete client gift that demonstrates personal investment in the relationship beyond the billable hour." },
  ],
  testimonial: {
    quote: "More memorable than the wine we used to send and half the price. Clients specifically mention it at our next meeting — wine never prompted that kind of response.",
    author: "Michael C.",
    role: "Partner, boutique law firm, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-law-firms",
};

const LawFirmsPage = () => <IndustryPage data={data} />;
export default LawFirmsPage;
