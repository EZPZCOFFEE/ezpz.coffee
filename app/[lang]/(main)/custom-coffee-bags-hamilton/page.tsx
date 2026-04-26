import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Hamilton | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Hamilton businesses, shipped in 5–7 days. No minimum order, full design included. Hamilton brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-hamilton" },
    openGraph: {
      title: "Custom Coffee Bags Hamilton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Hamilton businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-hamilton",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Hamilton" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Hamilton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Hamilton businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Hamilton",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Hamilton",
  headline: "Custom coffee bags for Hamilton brands. Zero minimums.",
  subheadline: "Hamilton's booming arts scene, restaurant corridor, and creative businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the James Street North arts corridor to the independent restaurants of Locke Street, from Westdale's student-and-family café culture to the craft community thriving across the lower city — Hamilton is one of Canada's most exciting urban markets for independent brands. The Steel City has reinvented itself as a creative hub, and the businesses here compete on authenticity and quality. EZPZ ships custom branded specialty coffee from Montreal to Hamilton in 5 to 7 business days. No minimum order.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-hamilton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Hamilton", body: "We ship directly to your Hamilton address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for Hamilton's independent, risk-taking business culture." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Hamilton's discerning craft community expects quality — we deliver it." },
    { n: "04", title: "Built for Hamilton's creative community", body: "James Street North galleries, Locke Street restaurants, and Westdale independent shops — EZPZ serves Hamilton's creative and independent business scene with premium branded coffee." },
  ],
  whoWeServe: [
    { title: "Restaurants & Locke Street Dining", body: "Hamilton's restaurant renaissance — from Locke Street bistros to James Street North brunch spots — uses custom branded coffee to add a premium, shareable touchpoint." },
    { title: "Arts & Creative Businesses", body: "Galleries, studios, and creative agencies on Hamilton's arts corridor use branded coffee as a sophisticated client gift that reflects their creative identity." },
    { title: "Craft & Independent Retailers", body: "Hamilton's flourishing independent retail scene — vintage shops, craft breweries, and artisan boutiques — adds custom coffee as a natural brand extension." },
    { title: "Hotels & Boutique Properties", body: "Hamilton's boutique hotels and Airbnb properties brand their welcome experience with EZPZ coffee to stand out in an increasingly competitive short-term rental market." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Hamilton in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Hamilton areas including James Street North, Locke Street, Westdale, Dundas, Ancaster, Stoney Creek, and Waterdown. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "London", href: "/en/custom-coffee-bags-london-ontario" },
  ],
};

const HamiltonPage = () => <CityPage data={data} />;
export default HamiltonPage;
