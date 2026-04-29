import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Regina | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Regina businesses, shipped in 7–10 days. No minimum order, full design included. Regina brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-regina" },
    openGraph: {
      title: "Custom Coffee Bags Regina | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Regina businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-regina",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Regina" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Regina | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Regina businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Regina",
  province: "Saskatchewan",
  eyebrow: "Custom Coffee Bags — Regina",
  headline: "Custom coffee bags for Regina brands. Zero minimums.",
  subheadline: "Regina's restaurants, government sector, and agriculture businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the charming bungalows and independent restaurants of Cathedral Village to the heritage buildings and cultural venues of the Warehouse District, from the government offices around the Legislative Assembly to the growing entrepreneurial scene downtown — Regina is Saskatchewan's capital and a city with genuine civic pride. EZPZ ships custom branded specialty coffee from our Montreal roastery to Regina in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-regina",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Regina", body: "We ship directly to your Regina address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test before you scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Regina's government and agriculture sectors", body: "Regina's government offices, agriculture companies, and Saskatchewan Crown corporations use EZPZ for premium branded coffee gifts that make a lasting impression on clients and colleagues." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cathedral Village", body: "Cathedral Village restaurants, Warehouse District cafés, and downtown Regina dining spots add custom branded coffee that keeps their brand visible in customers' daily routines." },
    { title: "Government & Crown Corporations", body: "Saskatchewan's Legislative Assembly-area offices, provincial agencies, and Crown corporations use EZPZ for premium branded coffee gifts and corporate hospitality." },
    { title: "Agriculture & Agri-Business", body: "Saskatchewan's agriculture sector, grain companies, and agri-tech businesses use custom coffee as a premium branded gift for clients and trade show giveaways." },
    { title: "Hotels & Event Venues", body: "Regina hotels, Delta conference properties, and event venues brand their hospitality experience with EZPZ custom coffee to deliver a premium, memorable stay." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Regina in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Regina areas including Cathedral Village, Warehouse District, Downtown, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Saskatoon", href: "/en/custom-coffee-bags-saskatoon" },
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
  ],
};

const ReginaPage = () => <CityPage data={data} />;
export default ReginaPage;
