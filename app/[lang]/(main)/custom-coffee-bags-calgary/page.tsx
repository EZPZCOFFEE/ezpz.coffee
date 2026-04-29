import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Calgary | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Calgary businesses, shipped in 7–10 days. No minimum order, full design included. Calgary brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-calgary" },
    openGraph: {
      title: "Custom Coffee Bags Calgary | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Calgary businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-calgary",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Calgary" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Calgary | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Calgary businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Calgary",
  province: "Alberta",
  eyebrow: "Custom Coffee Bags — Calgary",
  headline: "Custom coffee bags for Calgary brands. Zero minimums.",
  subheadline: "Calgary's restaurants, corporate offices, and hotels trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the restaurant-dense 17th Avenue SW to the boutique shops of Kensington, from the booming Beltline dining scene to the corporate towers of downtown — Calgary businesses combine oil-patch boldness with a genuine appreciation for premium products. EZPZ ships custom branded specialty coffee from our Montreal roastery to Calgary in 7 to 10 business days. Whether you are gifting to energy sector clients or branding a Stephen Avenue hotel, no minimum order applies.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-calgary",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Calgary", body: "We ship directly to your Calgary address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for corporate gifting at any scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Calgary's premium market expects the best — we deliver it every time." },
    { n: "04", title: "Built for Calgary's corporate gifting culture", body: "Calgary's oil and gas sector, professional services firms, and executive gift culture make branded specialty coffee one of the most effective and appreciated gifts you can give." },
  ],
  whoWeServe: [
    { title: "Restaurants & 17th Avenue Dining", body: "17th Avenue restaurants, Kensington bistros, and Inglewood dining destinations add custom branded coffee that keeps their brand top of mind between visits." },
    { title: "Corporate Offices & Oil & Gas Sector", body: "Calgary's energy companies, financial firms, and professional services offices trust EZPZ for premium branded coffee gifts that make a strong impression on clients." },
    { title: "Hotels & Boutique Properties", body: "Downtown Calgary hotels, Stephen Avenue boutique stays, and Inglewood inns brand their in-room coffee experience to deliver a premium, memorable stay." },
    { title: "Retailers & Lifestyle Brands", body: "Kensington boutiques, Bridgeland lifestyle shops, and Mission retailers add custom branded coffee as a distinctive product that resonates with Calgary's quality-first consumers." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Calgary in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Calgary areas including Downtown, 17th Avenue SW, Kensington, Inglewood, Beltline, Marda Loop, and the surrounding suburbs. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Edmonton", href: "/en/custom-coffee-bags-edmonton" },
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
  ],
};

const CalgaryPage = () => <CityPage data={data} />;
export default CalgaryPage;
