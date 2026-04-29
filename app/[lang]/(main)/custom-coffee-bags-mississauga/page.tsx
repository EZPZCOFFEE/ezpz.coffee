import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Mississauga | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Mississauga businesses, shipped in 5–7 days. No minimum order, full design included. Mississauga brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-mississauga" },
    openGraph: {
      title: "Custom Coffee Bags Mississauga | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Mississauga businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-mississauga",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Mississauga" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Mississauga | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Mississauga businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Mississauga",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Mississauga",
  headline: "Custom coffee bags for Mississauga brands. Zero minimums.",
  subheadline: "Mississauga's restaurants, corporate offices, and retailers trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Port Credit's waterfront restaurant strip to the boutique shops of Streetsville Village, from corporate towers in the Square One area to the financial services district along Hurontario — Mississauga is one of Canada's most economically active mid-size cities. EZPZ ships custom branded specialty coffee from Montreal to Mississauga in 5 to 7 business days. No minimum order. Full custom design included. Zero risk to try.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-mississauga",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Mississauga", body: "We ship directly to your Mississauga address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for any business size." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Mississauga's corporate market", body: "From Square One-area headquarters to Port Credit waterfront restaurants — EZPZ serves Mississauga's full business spectrum with the same no-minimum, premium-quality approach." },
  ],
  whoWeServe: [
    { title: "Restaurants & Port Credit Dining", body: "Port Credit waterfront restaurants, Streetsville bistros, and Square One-area eateries add custom branded coffee that keeps their brand visible in customers' daily routines." },
    { title: "Corporate Offices & Financial Services", body: "Mississauga's Hurontario corridor, Erin Mills corporate parks, and financial services firms use EZPZ for premium branded client gifts and office hospitality." },
    { title: "Hotels & Event Venues", body: "Mississauga hotels, Pearson Airport-adjacent properties, and conference centres brand their coffee amenities with EZPZ custom bags." },
    { title: "Retailers & Lifestyle Brands", body: "Streetsville boutiques, Port Credit lifestyle shops, and Erin Mills retailers add custom branded coffee as a high-margin product that resonates with their customers." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Mississauga in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Mississauga areas including Port Credit, Streetsville, Meadowvale, Erin Mills, City Centre, and Lakeview. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "Brampton", href: "/en/custom-coffee-bags-brampton" },
  ],
};

const MississaugaPage = () => <CityPage data={data} />;
export default MississaugaPage;
