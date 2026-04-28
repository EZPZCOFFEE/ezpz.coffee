import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Wineries | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for wineries. Your terroir story now in coffee form. No minimum order, full design included. Wineries across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-wineries" },
    openGraph: {
      title: "Custom Coffee Bags for Wineries | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for wineries. Terroir storytelling, cellar door retail, wine club gifting. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-wineries",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Wineries" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Wineries | EZPZ Coffee",
      description: "Custom branded coffee bags for wineries. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Wineries",
  eyebrow: "Custom Coffee for Wineries",
  headline: "Your winery's terroir story. Now in coffee form.",
  subheadline: "Wine and specialty coffee share the same vocabulary: terroir, origin, tasting notes, vintage, craft. Winery visitors who love the wine story love the coffee story for the same reasons.",
  intro: "The parallels between wine and specialty coffee are deep and underexplored. Both are agricultural products where terroir — the specific combination of soil, climate, altitude, and microorganism — determines flavor. Both have communities built around provenance, processing methods, and flavor development. Both reward the drinker who asks where it came from and how it was made. Winery visitors already understand and appreciate this language. When they discover a branded coffee at the cellar door shop — traceable to a specific farm, with flavor notes that tell a story parallel to the wine they just tasted — they don't just buy it. They engage with it. Okanagan, Niagara, and Prince Edward County wineries that have introduced branded specialty coffee report that it adds a morning dimension to a brand that has previously only lived in the evening. The wine you sell for dinner; the coffee you sell for morning. It's the brand touchpoint that extends your reach into the part of the day you've never owned. Wine club members are the most natural buyers — they already trust the brand's curation and want to take more of it home. No minimum means testing the concept at the cellar door before committing to a wine club bundle.",
  whoOrders: [
    { title: "Okanagan and BC wineries", body: "BC wine country wineries use branded coffee to extend their visitor experience into a morning ritual product. The terroir storytelling that sells wine sells specialty coffee equally well." },
    { title: "Niagara and Ontario wineries", body: "Ontario wineries include branded coffee in their cellar door retail assortment and in wine club quarterly shipments as a premium add-on that surprises and delights wine club members." },
    { title: "Boutique estate wineries", body: "Small estate producers with strong brand identities use EZPZ to create a coffee product that matches the artisan, provenance-driven positioning of their wine portfolio." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your winery logo and estate branding. Wine brands tend toward elegant, label-inspired design — our tool creates bags that look like they belong alongside your bottles." },
    { n: "02", title: "Choose your coffee", body: "We'll help you select a single-origin coffee with a terroir story that parallels your wine's. Ethiopian origins with their complex flavor profiles are often a natural match for wine-literate audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Test with a small cellar door batch before adding it to your wine club program." },
    { n: "04", title: "Delivered to your winery", body: "Shipped directly to your estate or winery address. Canada: 3–10 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Natural terroir storytelling parallel", body: "Specialty coffee speaks the same language as wine. Origin, processing, flavor notes — your visitors already understand and appreciate this vocabulary. The coffee story sells itself in a wine environment." },
    { n: "02", title: "Cellar door retail with no minimum risk", body: "Test a small retail display at the cellar door before committing to larger quantities. Winery visitors are proven premium purchasers — sell-through for branded specialty coffee in this environment is consistently strong." },
    { n: "03", title: "Wine club member gifting and retention", body: "A branded coffee bag included in a wine club quarterly shipment delights members with something unexpected. It demonstrates that the winery's curation extends beyond wine — which strengthens club loyalty." },
    { n: "04", title: "Morning brand presence in an evening-dominant category", body: "Wine is an evening product. Coffee gives your winery brand a morning touchpoint — extending your reach into the part of the day that wine has never owned. Every morning your visitor brews it, the estate is there." },
  ],
  testimonial: {
    quote: "It surprised people at the cellar door — suddenly we had a morning product, not just a wine. It added a dimension to the brand that visitors loved, and sales are strong.",
    author: "Laurent M.",
    role: "Winery Owner, Okanagan Valley",
  },
  canonicalPath: "/custom-coffee-bags-wineries",
};

const WineriesPage = () => <IndustryPage data={data} />;
export default WineriesPage;
