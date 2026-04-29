import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Charlotte | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Charlotte businesses, shipped in 7–10 days. No minimum order, full design included. Charlotte brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-charlotte" },
    openGraph: {
      title: "Custom Coffee Bags Charlotte | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Charlotte businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-charlotte",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Charlotte" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Charlotte | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Charlotte businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Charlotte",
  province: "North Carolina",
  eyebrow: "Custom Coffee Bags — Charlotte",
  headline: "Custom coffee bags for Charlotte brands. Zero minimums.",
  subheadline: "Charlotte's banking sector, restaurants, and corporate community trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From NoDa's thriving arts and restaurant scene to South End's breweries and boutiques, from Uptown's financial towers to Plaza Midwood's neighborhood dining — Charlotte has transformed into one of America's most dynamic mid-size cities. The Queen City's banking sector and rapidly growing corporate base create a strong demand for premium branded products. EZPZ ships custom branded specialty coffee from our Montreal roastery to Charlotte in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-charlotte",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Charlotte", body: "We ship directly to your Charlotte address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality is identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Charlotte's growing corporate and hospitality culture demands quality — we deliver it." },
    { n: "04", title: "Built for Charlotte's banking and corporate culture", body: "Bank of America, Wells Fargo, and dozens of Charlotte-based financial firms create a premium corporate gifting culture. EZPZ delivers branded specialty coffee that makes the right impression." },
  ],
  whoWeServe: [
    { title: "Restaurants & NoDa Dining", body: "NoDa restaurants, South End dining destinations, and Plaza Midwood neighborhood spots use custom branded coffee to build a brand that extends into customers' daily routines." },
    { title: "Banking & Financial Services", body: "Charlotte's major banks, financial institutions, and professional services firms trust EZPZ for premium branded coffee gifts that impress clients and partners." },
    { title: "Hotels & Uptown Properties", body: "Uptown Charlotte hotels, South End boutique stays, and Dilworth properties brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Retailers & South End Boutiques", body: "South End boutiques, NoDa concept stores, and Plaza Midwood independent retailers add custom branded coffee as a high-margin product their loyal customers appreciate." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Charlotte in 7 to 10 business days via tracked international courier. We deliver to all Charlotte areas including Uptown, NoDa, South End, Dilworth, Plaza Midwood, and surrounding suburbs. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Atlanta", href: "/en/custom-coffee-bags-atlanta" },
    { city: "Raleigh", href: "/en/custom-coffee-bags-raleigh" },
  ],
};

const CharlottePage = () => <CityPage data={data} />;
export default CharlottePage;
