import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Los Angeles | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Los Angeles businesses, shipped in 7–10 days. No minimum order, full design included. Los Angeles brands choose EZPZ for premium branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-los-angeles" },
    openGraph: {
      title: "Custom Coffee Bags Los Angeles | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags for Los Angeles businesses. No minimum order, full design included, specialty coffee shipped from Montreal to LA.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-los-angeles",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Los Angeles" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Los Angeles | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Los Angeles businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Los Angeles",
  province: "California",
  eyebrow: "Custom Coffee Bags — Los Angeles",
  headline: "Custom coffee bags for Los Angeles brands. Zero minimums.",
  subheadline:
    "LA's restaurants, wellness brands, and retailers are adding branded coffee to their lineup. EZPZ makes it simple with no minimums and full design included.",
  bodyIntro:
    "From Silver Lake cafés to Beverly Hills hotels, from Venice wellness studios to Downtown LA creative agencies — Los Angeles brands live and die on aesthetics. A custom coffee bag that looks incredible on a shelf in a Los Feliz boutique or a Culver City office is exactly what EZPZ delivers. We ship from Montreal to Los Angeles in 7 to 10 business days, with full custom design always included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-los-angeles",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Los Angeles.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the quality LA expects.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Los Angeles",
      body: "We ship directly to your Los Angeles address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "Zero minimums — built for LA brands",
      body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum order. Launch a limited batch for a pop-up, a new menu season, or a brand collab.",
    },
    {
      n: "02",
      title: "Design included — your aesthetic, handled",
      body: "Full custom bag design is included in every order at no extra cost. Bring your logo, your colors, your vibe — our team handles the rest without additional fees.",
    },
    {
      n: "03",
      title: "Quality as premium as your brand",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. LA customers know quality — our coffee matches your brand positioning.",
    },
    {
      n: "04",
      title: "Built for LA's visual-first culture",
      body: "Los Angeles is the most brand-conscious market in America. Our packaging is designed to look stunning on a Silver Lake shelf, a Venice counter, or a Beverly Hills gift table.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Cafés",
      body: "Silver Lake bistros, Venice Beach breakfast spots, and Culver City dining rooms sell and gift custom branded coffee that keeps their brand visible in customers' kitchens every morning.",
    },
    {
      title: "Hotels & Wellness Resorts",
      body: "Beverly Hills hotels, Malibu resorts, and West Hollywood boutique properties brand every guest touchpoint — including the coffee — with EZPZ custom bags.",
    },
    {
      title: "Retail & Lifestyle Brands",
      body: "Melrose boutiques, Los Feliz concept stores, and Venice lifestyle brands add custom branded coffee as a high-margin product that fits perfectly with their aesthetic.",
    },
    {
      title: "Film & Entertainment Industry",
      body: "Production companies, talent agencies, and entertainment brands in Hollywood and Burbank trust EZPZ for premium branded coffee gifts that make a lasting impression.",
    },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Los Angeles in 7 to 10 business days via tracked international courier. We deliver to all of greater Los Angeles — Hollywood, Silver Lake, Venice, Beverly Hills, Culver City, Burbank, Pasadena, and beyond. First orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is on file. No import paperwork required on your end. For large retail or event orders, contact us for volume pricing.",
  relatedCities: [
    { city: "San Francisco", href: "/en/custom-coffee-bags-san-francisco" },
    { city: "San Diego", href: "/en/custom-coffee-bags-san-diego" },
    { city: "Las Vegas", href: "/en/custom-coffee-bags-las-vegas" },
  ],
};

const LosAngelesPage = () => <CityPage data={data} />;
export default LosAngelesPage;
