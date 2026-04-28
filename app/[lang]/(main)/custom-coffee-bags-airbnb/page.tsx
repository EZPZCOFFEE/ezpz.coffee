import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Airbnb Hosts | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for Airbnb hosts. The detail that turns a 4-star stay into a 5-star review. No minimum order, full design included. Airbnb hosts across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-airbnb" },
    openGraph: {
      title: "Custom Coffee Bags for Airbnb Hosts | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for Airbnb hosts. 5-star reviews, memorable guest experience, no minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-airbnb",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Airbnb Hosts" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Airbnb Hosts | EZPZ Coffee",
      description: "Custom branded coffee bags for Airbnb hosts. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Airbnb Hosts",
  eyebrow: "Custom Coffee for Airbnb Hosts",
  headline: "Give your Airbnb guests a morning they will write 5 stars about.",
  subheadline: "Superhosts differentiate through details. A custom branded coffee bag with your property name is the kind of touch that gets mentioned specifically in 5-star reviews.",
  intro: "Airbnb reviews are won and lost on details. The hosts with the highest ratings aren't the ones with the nicest properties — they're the ones who sweat the small things. The handwritten welcome note. The local restaurant recommendations. The specialty coffee on the counter with the host's name on the bag. That last detail costs less than a bouquet of flowers and lasts weeks after checkout. A guest who discovers a custom branded coffee bag in your kitchen doesn't just use it during the stay — they take it home. For the next few weeks, every morning they make coffee, they think of your property. They tell friends about it. They come back. They leave a review that specifically mentions the coffee. That is not hypothetical. Superhosts who have introduced custom branded coffee report seeing it mentioned in review text with surprising frequency. The investment is minimal — EZPZ has no minimum order, so you can order 5 bags for a single property, 20 bags for a multi-unit listing, or 100 bags for an entire portfolio. They ship directly to your property address anywhere in Canada or the USA in 3 to 14 business days.",
  whoOrders: [
    { title: "Urban apartment superhosts", body: "City apartment hosts use branded coffee to stand out in competitive urban markets where every listing looks similar. A small detail like branded specialty coffee can be the deciding factor in a return booking." },
    { title: "Country cottage and cabin hosts", body: "Rural property hosts find that branded coffee complements the artisan, handcrafted aesthetic guests expect from a cottage or cabin stay. It feels local and personal even when the host isn't present." },
    { title: "Luxury villa and premium property hosts", body: "High-end property hosts use branded coffee as part of a premium welcome experience alongside other curated touches. At the luxury tier, branded specialty coffee is expected, not exceptional." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your property name or brand, add a personal welcome message, and choose your packaging style. Takes under 10 minutes and requires no designer." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing specialty coffee that works for a range of guest preferences. Medium roast Colombian or Ethiopian are popular choices for Airbnb hosts." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order exactly what you need for your property's bookings." },
    { n: "04", title: "Delivered directly to your property", body: "Shipped to your Airbnb address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "The detail that earns 5-star reviews", body: "Superhosts know that exceptional reviews come from unexpected details. A custom branded coffee bag costs less than a restaurant meal and gets mentioned in reviews more often than any other amenity." },
    { n: "02", title: "A memorable guest experience", body: "Guests who experience a branded coffee welcome remember the property differently. It signals that the host cares — and that care translates directly into glowing written reviews and return bookings." },
    { n: "03", title: "No minimum — order exactly what you need", body: "5 bags for a weekend booking. 20 bags for a summer season. 100 bags for a portfolio of properties. EZPZ's zero minimum means you never waste product or money." },
    { n: "04", title: "Ships directly to the property", body: "Whether you manage your property remotely or in person, EZPZ ships directly to the address. No pickup, no courier run — just branded coffee waiting for your next guests." },
  ],
  testimonial: {
    quote: "Three guests mentioned the coffee bags in their reviews last month. It's a $12 bag and it's generating my best reviews. Best ROI of any hosting investment I've made.",
    author: "Tom K.",
    role: "Superhost, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-airbnb",
};

const AirbnbPage = () => <IndustryPage data={data} />;
export default AirbnbPage;
