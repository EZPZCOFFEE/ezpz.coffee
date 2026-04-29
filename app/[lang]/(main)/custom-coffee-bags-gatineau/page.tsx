import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Gatineau | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Gatineau businesses, shipped in 5–7 days. No minimum order, full design included. Gatineau and Hull businesses choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-gatineau" },
    openGraph: {
      title: "Custom Coffee Bags Gatineau | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Gatineau businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-gatineau",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Gatineau" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Gatineau | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Gatineau businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Gatineau",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Gatineau",
  headline: "Custom coffee bags for Gatineau brands. Zero minimums.",
  subheadline: "Gatineau businesses — from Hull restaurants to Aylmer boutiques — trust EZPZ to put their brand on specialty coffee. No minimums, full design included.",
  bodyIntro:
    "From the vibrant restaurant scene of the Hull sector to the artsy boutiques of Aylmer, from government-adjacent offices near the Maison du Citoyen to the arts community along the Gatineau River — Gatineau is a bilingual, culturally rich market with strong ties to Ottawa across the river. EZPZ ships custom branded specialty coffee from Montreal to Gatineau in 5 to 7 business days. No minimum order. Full custom design included.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-gatineau",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Gatineau", body: "We ship directly to your Gatineau address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test before you commit." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Bilingual-ready packaging", body: "Gatineau is a bilingual market. We can design your bags with French and English text to serve your full customer base across Hull, Aylmer, and Buckingham." },
  ],
  whoWeServe: [
    { title: "Restaurants & Hull Dining", body: "Hull's lively restaurant and bar scene uses custom branded coffee to create a take-home experience that extends the evening well past last call." },
    { title: "Government & Corporate Offices", body: "Gatineau's proximity to Ottawa means a significant base of government contractors, federal agencies, and corporate offices that use branded coffee as a premium gift." },
    { title: "Hotels & Boutique Stays", body: "Gatineau hotels and Aylmer boutique properties brand their in-room coffee experience to deliver a memorable, locally rooted guest stay." },
    { title: "Arts & Cultural Organizations", body: "Gatineau's vibrant arts community — galleries, performance venues, and cultural organizations — uses custom coffee as a creative, memorable patron gift." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Gatineau in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Gatineau sectors including Hull, Aylmer, Buckingham, Masson-Angers, and Gatineau proper. First orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is already on file.",
  relatedCities: [
    { city: "Ottawa", href: "/en/custom-coffee-bags-ottawa" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
};

const GatineauPage = () => <CityPage data={data} />;
export default GatineauPage;
