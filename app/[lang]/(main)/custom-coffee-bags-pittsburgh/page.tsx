import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Pittsburgh | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Pittsburgh businesses, shipped in 7–10 days. No minimum order, full design included. Pittsburgh brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-pittsburgh" },
    openGraph: {
      title: "Custom Coffee Bags Pittsburgh | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Pittsburgh businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-pittsburgh",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Pittsburgh" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Pittsburgh | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Pittsburgh businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Pittsburgh",
  province: "Pennsylvania",
  eyebrow: "Custom Coffee Bags — Pittsburgh",
  headline: "Custom coffee bags for Pittsburgh brands. Zero minimums.",
  subheadline: "Pittsburgh's tech sector, universities, and independent restaurant community trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Lawrenceville's thriving restaurant strip and boutique studios to East Liberty's tech-company campuses and independent coffee shops, from Squirrel Hill's neighborhood dining to the Strip District's wholesale market and food culture — Pittsburgh has quietly become one of America's most dynamic mid-size cities. The Steel City's transformation into a tech and university hub, led by Carnegie Mellon and the University of Pittsburgh, has created a thriving creative and corporate economy. EZPZ ships custom branded specialty coffee from our Montreal roastery to Pittsburgh in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-pittsburgh",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Pittsburgh", body: "We ship directly to your Pittsburgh address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Pittsburgh's growing specialty coffee culture and university-driven quality expectations are a natural fit." },
    { n: "04", title: "Built for Pittsburgh's tech and university ecosystem", body: "Carnegie Mellon, University of Pittsburgh, and the tech companies they attract create a strong demand for premium branded products. EZPZ delivers specialty coffee that makes an impression on campus and in the boardroom." },
  ],
  whoWeServe: [
    { title: "Restaurants & Lawrenceville Dining", body: "Lawrenceville restaurants, Strip District vendors, and Squirrel Hill neighborhood spots use custom branded coffee to build a brand that travels with their loyal customers." },
    { title: "Tech & University Sector", body: "Pittsburgh's CMU-affiliated startups, robotics companies, and university departments trust EZPZ for premium branded coffee gifts for recruiting, client events, and lab milestones." },
    { title: "Hotels & Downtown Properties", body: "Downtown Pittsburgh hotels, East Liberty boutique stays, and Shadyside guesthouses brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Independent Retailers & Creative Studios", body: "Lawrenceville concept stores, East Liberty boutiques, and Strip District specialty shops add custom branded coffee as a differentiated product with strong margins." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Pittsburgh in 7 to 10 business days via tracked international courier. We deliver to all Pittsburgh neighborhoods including Lawrenceville, East Liberty, Squirrel Hill, Strip District, Downtown, Shadyside, and surrounding communities. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Philadelphia", href: "/en/custom-coffee-bags-philadelphia" },
    { city: "Detroit", href: "/en/custom-coffee-bags-detroit" },
  ],
};

const PittsburghPage = () => <CityPage data={data} />;
export default PittsburghPage;
