import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags London Ontario | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for London Ontario businesses, shipped in 5–7 days. No minimum order, full design included. London Ontario brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-london-ontario" },
    openGraph: {
      title: "Custom Coffee Bags London Ontario | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for London Ontario businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-london-ontario",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags London Ontario" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags London Ontario | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for London Ontario businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "London",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — London, Ontario",
  headline: "Custom coffee bags for London, Ontario brands. Zero minimums.",
  subheadline: "London Ontario's restaurants, healthcare organizations, and university-area businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Richmond Row's restaurant and entertainment corridor to the indie shops and cafés of Old East Village, from Western University's campus coffee culture to St. Joseph's Health Care's institutional gifting needs — London, Ontario is a mid-size city with genuine appetite for premium brands. EZPZ ships custom branded specialty coffee from Montreal to London, Ontario in 5 to 7 business days. No minimum order. Full custom design included.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-london-ontario",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to London, Ontario", body: "We ship directly to your London address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. No risk to test your concept." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for London's university and healthcare market", body: "From Western University campus businesses to healthcare organizations across London — EZPZ serves sectors that demand quality, traceability, and professional presentation." },
  ],
  whoWeServe: [
    { title: "Restaurants & Richmond Row", body: "Richmond Row restaurants, Old East Village cafés, and Old South dining spots use custom branded coffee to keep their brand visible in customers' daily routines." },
    { title: "Healthcare & Institutional Sector", body: "London's healthcare institutions, medical offices, and hospital gift shops use EZPZ for branded coffee products and premium patient and donor gifts." },
    { title: "University & Campus Businesses", body: "Western University-area cafés, student-facing retailers, and campus organizations use custom branded coffee to build community and brand recognition." },
    { title: "Retailers & Boutiques", body: "Old East Village independent shops, Wortley Village boutiques, and downtown London retailers add custom branded coffee as a distinctive, high-margin product." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to London, Ontario in 5 to 7 business days via tracked Canada Post or courier. We deliver to all London areas including Downtown, Richmond Row, Wortley Village, Old East Village, Byron, and White Oaks. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Hamilton", href: "/en/custom-coffee-bags-hamilton" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
};

const LondonOntarioPage = () => <CityPage data={data} />;
export default LondonOntarioPage;
