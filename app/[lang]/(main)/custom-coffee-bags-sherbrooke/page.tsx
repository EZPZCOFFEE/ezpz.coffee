import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Sherbrooke | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Sherbrooke businesses, shipped in 5–7 days. No minimum order, full design included. Sherbrooke brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-sherbrooke" },
    openGraph: {
      title: "Custom Coffee Bags Sherbrooke | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Sherbrooke businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-sherbrooke",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Sherbrooke" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Sherbrooke | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Sherbrooke businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Sherbrooke",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Sherbrooke",
  headline: "Custom coffee bags for Sherbrooke brands. Zero minimums.",
  subheadline: "Sherbrooke restaurants, cafés, and university-area businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the student-fuelled café culture of Downtown Sherbrooke to the family restaurants of Fleurimont, from Lennoxville's Anglo university enclave to Rock Forest's growing commercial strips — Sherbrooke punches above its weight as a market for quality coffee brands. As a university town with Université de Sherbrooke and Bishop's University, Sherbrooke rewards authentic, quality-first brands. EZPZ ships from Montreal to Sherbrooke in 5 to 7 business days. No minimum order. Full custom design included.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-sherbrooke",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Sherbrooke", body: "We ship directly to your Sherbrooke address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for test launches and seasonal batches." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. University markets appreciate quality and transparency — we deliver both." },
    { n: "04", title: "Built for Sherbrooke's university market", body: "From Downtown Sherbrooke cafés serving students to Lennoxville pubs — EZPZ helps Sherbrooke businesses build a coffee brand that resonates with their young, quality-conscious clientele." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cafés", body: "Downtown Sherbrooke restaurants and student-area cafés use custom branded coffee to build a recognizable brand that students and locals recommend to each other." },
    { title: "University & Campus Businesses", body: "Campus café operators, university bookstores, and student association spaces use EZPZ to create branded coffee that becomes part of campus culture." },
    { title: "Retailers & Gift Shops", body: "Sherbrooke's independent boutiques and specialty retailers add custom branded coffee as a high-margin product with strong gift appeal." },
    { title: "Hotels & Event Venues", body: "Sherbrooke's conference hotels, event spaces, and wedding venues use EZPZ for branded hospitality experiences that guests remember." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Sherbrooke in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Sherbrooke neighbourhoods and boroughs including Downtown, Fleurimont, Rock Forest, Lennoxville, and Brompton. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Quebec City", href: "/en/custom-coffee-bags-quebec-city" },
  ],
};

const SherbrookePage = () => <CityPage data={data} />;
export default SherbrookePage;
