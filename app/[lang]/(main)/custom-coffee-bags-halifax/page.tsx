import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Halifax | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Halifax businesses, shipped in 7–10 days. No minimum order, full design included. Halifax brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-halifax" },
    openGraph: {
      title: "Custom Coffee Bags Halifax | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Halifax businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-halifax",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Halifax" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Halifax | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Halifax businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Halifax",
  province: "Nova Scotia",
  eyebrow: "Custom Coffee Bags — Halifax",
  headline: "Custom coffee bags for Halifax brands. Zero minimums.",
  subheadline: "Halifax's restaurants, hotels, and university community trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Spring Garden Road's restaurant and retail corridor to the independent galleries and cafés of the North End, from the waterfront tourism district to the university campuses of Quinpool — Halifax is Atlantic Canada's most dynamic commercial market. The city's deep maritime identity, thriving restaurant scene, and growing tech sector all benefit from authentic, quality-first branding. EZPZ ships custom branded specialty coffee from our Montreal roastery to Halifax in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-halifax",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Halifax", body: "We ship directly to your Halifax address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for Halifax's independent and entrepreneurial business scene." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Halifax's quality-conscious market appreciates provenance — our traceability story resonates." },
    { n: "04", title: "Built for Halifax's tourism and hospitality sector", body: "Halifax's waterfront hotels, seafood restaurants, and tourism operators trust EZPZ to help them create a branded product that visitors take home from Atlantic Canada." },
  ],
  whoWeServe: [
    { title: "Restaurants & Seafood Scene", body: "Spring Garden Road bistros, waterfront seafood restaurants, and North End neighbourhood cafés add custom branded coffee that extends the Halifax hospitality experience into guests' homes." },
    { title: "Hotels & Waterfront Properties", body: "Halifax's waterfront hotels, boutique properties, and heritage inns brand their in-room coffee experience to deliver a premium, distinctly Maritime guest stay." },
    { title: "Tourism & Experience Operators", body: "Halifax's harbour tours, historic site visitors centres, and tourism operators use custom coffee as a premium branded takeaway that connects visitors to the Halifax experience." },
    { title: "Universities & Campus Businesses", body: "Dalhousie, King's, and SMU-area cafés and campus organizations use EZPZ custom coffee to build brand recognition among Halifax's large and engaged student population." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Halifax in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Halifax areas including Spring Garden Road, North End, Downtown, Quinpool, Dartmouth, and surrounding HRM communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Moncton", href: "/en/custom-coffee-bags-moncton" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
};

const HalifaxPage = () => <CityPage data={data} />;
export default HalifaxPage;
