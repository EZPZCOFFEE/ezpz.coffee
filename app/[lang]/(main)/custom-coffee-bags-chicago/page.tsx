import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Chicago | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Chicago businesses, shipped in 7–10 days. No minimum order, full design included. Chicago brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-chicago" },
    openGraph: {
      title: "Custom Coffee Bags Chicago | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags for Chicago businesses. No minimum order, full design included, specialty coffee shipped from Montreal to Chicago.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-chicago",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Chicago" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Chicago | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Chicago businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Chicago",
  province: "Illinois",
  eyebrow: "Custom Coffee Bags — Chicago",
  headline: "Custom coffee bags for Chicago brands. Zero minimums.",
  subheadline:
    "Chicago's restaurants, hotels, and retailers trust EZPZ to bring their coffee brand to life — with no minimum orders and specialty coffee from traceable origins.",
  bodyIntro:
    "From River North restaurants to Loop hotels, from Wicker Park boutiques to Lincoln Park fitness studios — Chicago businesses build some of the most loyal local customer bases in America. A custom branded coffee bag sold at the counter of a Pilsen café or gifted to a Gold Coast client keeps your brand top of mind every morning. EZPZ ships from Montreal to Chicago in 7 to 10 business days.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-chicago",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Chicago.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We will help you find the right fit.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Chicago",
      body: "We ship directly to your Chicago address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "No minimum — perfect for Chicago's independent scene",
      body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Whether you run one location or a dozen, you order exactly what you need.",
    },
    {
      n: "02",
      title: "Design included — no extra cost",
      body: "Full custom bag design is included in every order. Your logo, your brand, your message — handled by our team without additional fees or print-ready file requirements.",
    },
    {
      n: "03",
      title: "Specialty grade coffee Chicago customers expect",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Chicago has a discerning coffee culture — our quality is built to match it.",
    },
    {
      n: "04",
      title: "Built for Chicago's neighbourhoods",
      body: "River North, Wicker Park, Lincoln Park, Pilsen, Gold Coast — EZPZ serves Chicago businesses across every neighbourhood with the same no-minimum, design-included approach.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Deep Dish Icons",
      body: "From River North fine dining to Wicker Park neighbourhood restaurants — custom branded coffee adds a premium extension to your menu and a memorable takeaway for loyal customers.",
    },
    {
      title: "Hotels & Loop Properties",
      body: "Downtown Chicago hotels, Magnificent Mile properties, and Streeterville boutique stays trust EZPZ to brand their in-room and lobby coffee experience.",
    },
    {
      title: "Retailers & Lincoln Park Boutiques",
      body: "Lincoln Park shops, Wicker Park boutiques, and Gold Coast gift stores add custom branded coffee as a high-margin retail product with strong repeat purchase appeal.",
    },
    {
      title: "Financial & Corporate Gifting",
      body: "Chicago's financial district, LaSalle Street firms, and Merchandise Mart companies trust EZPZ for premium branded coffee gifts that make a strong impression on clients and colleagues.",
    },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Chicago in 7 to 10 business days via tracked international courier. We deliver to all Chicago neighbourhoods — River North, the Loop, Wicker Park, Lincoln Park, Pilsen, Gold Coast, Hyde Park, and beyond. First orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is already on file. No import paperwork on your end. For large hospitality or corporate orders, contact us for volume pricing.",
  relatedCities: [
    { city: "Minneapolis", href: "/en/custom-coffee-bags-minneapolis" },
    { city: "Detroit", href: "/en/custom-coffee-bags-detroit" },
    { city: "New York", href: "/en/custom-coffee-bags-new-york" },
  ],
};

const ChicagoPage = () => <CityPage data={data} />;
export default ChicagoPage;
