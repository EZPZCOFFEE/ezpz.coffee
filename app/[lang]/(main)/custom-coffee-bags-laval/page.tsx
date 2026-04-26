import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Laval | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Laval businesses, delivered in 3–5 days from Montreal. No minimum order, full design included. Laval brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-laval" },
    openGraph: {
      title: "Custom Coffee Bags Laval | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Laval businesses. No minimum order, full design included, delivered in 3–5 days from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-laval",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Laval" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Laval | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Laval businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Laval",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Laval",
  headline: "Custom coffee bags for Laval brands. Zero minimums.",
  subheadline: "Laval restaurants, retailers, and fitness studios trust EZPZ to put their brand on specialty coffee — no minimums, full design included.",
  bodyIntro:
    "From the restaurant cluster around Centropolis to the busy retail corridors near Carrefour Laval, from Sainte-Rose neighbourhood cafés to Vimont family businesses — Laval is one of Canada's most active suburban business markets. Being just north of Montreal means Laval businesses benefit from some of the fastest EZPZ delivery in Canada — typically 3 to 5 business days from order confirmation. No minimum order. Full custom design included.",
  deliveryTime: "3 to 5 business days",
  canonicalPath: "/custom-coffee-bags-laval",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal — just a short distance from Laval. No minimum required." },
    { n: "04", title: "Delivered to Laval", body: "We ship directly to your Laval address within 3 to 5 business days from order confirmation. Fast, local, tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for small businesses and large retailers alike." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Among the fastest delivery in Canada", body: "Laval's proximity to our Montreal roastery means your order arrives faster than almost anywhere else in Canada — typically 3 to 5 business days." },
    { n: "04", title: "Built for Laval's family business scene", body: "From Centropolis restaurants to Carrefour Laval-area retailers — EZPZ works with independent Laval businesses of every size and serves the local community they have built." },
  ],
  whoWeServe: [
    { title: "Restaurants & Family Dining", body: "Laval's diverse restaurant scene — from Italian trattorias to Vietnamese noodle houses to Brazilian churrascos — uses custom branded coffee to add a premium finishing touch." },
    { title: "Retail & Shopping Centre Brands", body: "Carrefour Laval-area boutiques and independent retailers add custom branded coffee as a high-margin, repeat-purchase product that differentiates them from big-box neighbours." },
    { title: "Gyms & Fitness Studios", body: "Laval fitness clubs, CrossFit gyms, and yoga studios offer branded coffee as an extension of their lifestyle brand and a reason for members to return." },
    { title: "Family & Community Businesses", body: "Daycares, wellness clinics, and community-focused businesses in Laval use EZPZ to create a branded gift that resonates with their local clientele." },
  ],
  deliveryBody:
    "Laval is one of our closest shipping destinations — just across the river from our Montreal roastery. Orders typically arrive within 3 to 5 business days from design approval. We deliver to all Laval sectors including Centropolis, Chomedey, Sainte-Rose, Vimont, Laval-des-Rapides, and Fabreville. Local pickup at our Montreal facility can also be arranged.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Longueuil", href: "/en/custom-coffee-bags-longueuil" },
  ],
};

const LavalPage = () => <CityPage data={data} />;
export default LavalPage;
