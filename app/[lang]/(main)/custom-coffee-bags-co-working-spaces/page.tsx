import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Co-working Spaces | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for co-working spaces. Build community with your own specialty coffee blend. No minimum order, full design included. Co-working spaces across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-co-working-spaces" },
    openGraph: {
      title: "Custom Coffee Bags for Co-working Spaces | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for co-working spaces. Community building, member retention, brand differentiator. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-co-working-spaces",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Co-working Spaces" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Co-working Spaces | EZPZ Coffee",
      description: "Custom branded coffee bags for co-working spaces. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Co-working Spaces",
  eyebrow: "Custom Coffee for Co-working Spaces",
  headline: "Your co-working space's brand. In every morning cup.",
  subheadline: "Co-working spaces compete on community and experience. Branded specialty coffee is a tangible expression of that community — something members take home and share.",
  intro: "The co-working space market is intensely competitive. Members have dozens of options and they choose the space that feels like their professional home — not just the one with the fastest internet. The spaces that win are the ones that build genuine community. Branded specialty coffee is a small but powerful tool in that community-building effort. When your co-working space has its own branded blend on the counter, it sends a clear signal: this space is curated, quality-focused, and invested in the member experience beyond a desk and a password. Members who take a bag home feel a connection to the space that extends beyond their working hours. They brew your coffee on weekends. They give it to friends as a gift. They talk about it at events. A co-working space with its own branded specialty coffee attracts members who appreciate that level of detail — which is exactly the member type that stays longest, refers the most, and pays premium rates. No minimum means starting with a small member welcome kit batch and scaling as the program proves itself.",
  whoOrders: [
    { title: "Boutique co-working spaces", body: "Independent co-working operators use branded coffee as a premium differentiator against WeWork and generic alternatives. It's a low-cost signal of the curation that justifies a premium membership price." },
    { title: "Creative studio collectives", body: "Designer, photographer, and creative professional collectives use branded coffee as part of a carefully curated studio environment that reflects the aesthetic values of their community." },
    { title: "Shared office and flex workspace providers", body: "Flex workspace operators include branded coffee bags in member welcome kits, use them as member retention gifts, and sell them in the lobby as a merchandise revenue stream." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your co-working space logo and brand identity. Clean, modern design aesthetics are a natural fit — our tool creates bags that look right at home in a design-forward environment." },
    { n: "02", title: "Choose your coffee", body: "Select a specialty origin that represents your community's values. Traceable, single-origin coffees with interesting sourcing stories work well for co-working audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test with a member welcome kit batch and reorder based on response." },
    { n: "04", title: "Delivered to your space", body: "Shipped directly to your co-working address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Community building tool", body: "A branded coffee that members share creates a shared ritual. That ritual builds the sense of belonging that keeps members renewing and drives word-of-mouth referrals from people who love their workspace." },
    { n: "02", title: "Member retention and loyalty", body: "Members who feel emotionally connected to a co-working space — not just transactionally — renew at dramatically higher rates. Branded coffee is a low-cost investment in that emotional connection." },
    { n: "03", title: "Retail and welcome kit revenue", body: "Sell branded coffee bags to members as a retail product or include them in premium membership packages. Both create direct revenue from an already-loyal audience." },
    { n: "04", title: "Brand differentiator in a crowded market", body: "A co-working space with its own branded specialty coffee blend stands out in a market full of identical offerings. It signals curation and quality that attracts and retains the members you want most." },
  ],
  testimonial: {
    quote: "Members feel like it's their coffee — because it is their space, their community. That sense of ownership is exactly what we're building here.",
    author: "Ryan T.",
    role: "Founder, boutique co-working space, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-co-working-spaces",
};

const CoWorkingPage = () => <IndustryPage data={data} />;
export default CoWorkingPage;
