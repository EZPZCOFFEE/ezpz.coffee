import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags New Orleans | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for New Orleans businesses, shipped in 7–10 days. No minimum order, full design included. New Orleans brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-new-orleans" },
    openGraph: {
      title: "Custom Coffee Bags New Orleans | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for New Orleans businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-new-orleans",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags New Orleans" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags New Orleans | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for New Orleans businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "New Orleans",
  province: "Louisiana",
  eyebrow: "Custom Coffee Bags — New Orleans",
  headline: "Custom coffee bags for New Orleans brands. Zero minimums.",
  subheadline: "New Orleans's restaurants, hotels, and tourism sector trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the French Quarter's iconic restaurants and jazz venues to the Garden District's elegant hotels and boutique stays, from the Warehouse District's galleries and creative businesses to the Marigny's indie music scene and neighborhood restaurants — New Orleans is a city with one of the world's most distinctive food cultures. EZPZ ships custom branded specialty coffee from our Montreal roastery to New Orleans in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-new-orleans",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to New Orleans", body: "We ship directly to your New Orleans address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Perfect for New Orleans's seasonal tourism patterns and event-driven demand." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee for a food-obsessed city", body: "New Orleans has one of the world's great food cultures. We source only 80+ SCA specialty grade coffees from traceable origins — our quality honors that tradition." },
    { n: "04", title: "Built for New Orleans's tourism and event sector", body: "Jazz Fest, Mardi Gras, French Quarter Fest — New Orleans's event calendar creates constant demand for premium branded experiences. EZPZ delivers coffee that visitors take home with them." },
  ],
  whoWeServe: [
    { title: "Restaurants & French Quarter Dining", body: "French Quarter restaurants, Garden District dining, and Marigny neighborhood spots use custom branded coffee to extend the New Orleans dining experience into guests' daily lives." },
    { title: "Hotels & Garden District Properties", body: "Garden District hotels, French Quarter boutique stays, and Uptown bed-and-breakfasts brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Tourism & Experience Operators", body: "New Orleans tour companies, jazz venue operators, and cultural experience brands use EZPZ custom coffee as a premium branded souvenir that guests take home." },
    { title: "Event & Corporate Sector", body: "New Orleans's convention industry, corporate event planners, and hospitality venues use EZPZ branded coffee as a premium event giveaway and hospitality gift." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to New Orleans in 7 to 10 business days via tracked international courier. We deliver to all New Orleans areas including French Quarter, Garden District, Warehouse District, Marigny, Uptown, Mid-City, and surrounding parishes. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Houston", href: "/en/custom-coffee-bags-houston" },
    { city: "Atlanta", href: "/en/custom-coffee-bags-atlanta" },
  ],
};

const NewOrleansPage = () => <CityPage data={data} />;
export default NewOrleansPage;
