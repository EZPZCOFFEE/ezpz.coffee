import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Saskatoon | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Saskatoon businesses, shipped in 7–10 days. No minimum order, full design included. Saskatoon brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-saskatoon" },
    openGraph: {
      title: "Custom Coffee Bags Saskatoon | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Saskatoon businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-saskatoon",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Saskatoon" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Saskatoon | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Saskatoon businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Saskatoon",
  province: "Saskatchewan",
  eyebrow: "Custom Coffee Bags — Saskatoon",
  headline: "Custom coffee bags for Saskatoon brands. Zero minimums.",
  subheadline: "Saskatoon's restaurants, university community, and agriculture sector businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Broadway Avenue's vibrant café and restaurant strip to the River Landing development's waterfront dining, from the Riversdale arts district's creative studios to the University of Saskatchewan's campus community — Saskatoon is a prairie city with genuine sophistication. EZPZ ships custom branded specialty coffee from our Montreal roastery to Saskatoon in 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-saskatoon",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Saskatoon", body: "We ship directly to your Saskatoon address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for independent businesses at any scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Saskatoon's university market values authenticity — our traceability story delivers it." },
    { n: "04", title: "Built for Saskatoon's agriculture and university sectors", body: "From agriculture businesses wanting to tell a farm-to-cup story to University of Saskatchewan campus cafés building brand loyalty — EZPZ serves Saskatoon's most distinctive market segments." },
  ],
  whoWeServe: [
    { title: "Restaurants & Broadway Avenue", body: "Broadway Avenue restaurants, River Landing dining destinations, and Riversdale cafés add custom branded coffee to extend their brand into customers' daily morning routines." },
    { title: "Agriculture & Farm Brands", body: "Saskatchewan agricultural businesses, farm-to-table operators, and ag-tech companies use EZPZ custom coffee as a premium branded gift for clients and partners." },
    { title: "University & Campus Businesses", body: "University of Saskatchewan-area cafés, student businesses, and campus organizations use custom branded coffee to build community and lasting brand recognition." },
    { title: "Retailers & Boutiques", body: "Broadway Avenue boutiques, Riversdale independent shops, and downtown Saskatoon retailers add custom branded coffee as a distinctive, high-margin product." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Saskatoon in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Saskatoon areas including Broadway Avenue, Riversdale, River Landing, Sutherland, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
    { city: "Regina", href: "/en/custom-coffee-bags-regina" },
  ],
};

const SaskatoonPage = () => <CityPage data={data} />;
export default SaskatoonPage;
