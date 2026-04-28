import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Hotels | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for hotels. Transform your in-room guest experience. No minimum order, full design included. Hotels across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-hotels" },
    openGraph: {
      title: "Custom Coffee Bags for Hotels | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for hotels. Premium in-room experience, lobby retail, no minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-hotels",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Hotels" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Hotels | EZPZ Coffee",
      description: "Custom branded coffee bags for hotels. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Hotels",
  eyebrow: "Custom Coffee for Hotels",
  headline: "Your hotel's brand. In every guest's morning cup.",
  subheadline: "Guests who wake up to a custom coffee bag with your hotel's name and logo associate quality with your brand — every morning of their stay and long after checkout.",
  intro: "The hospitality industry is in the middle of a shift toward premium branded amenities. Generic instant coffee packets are being replaced by something guests actually notice, remember, and talk about. A custom specialty coffee bag with your hotel's branding is the morning touchpoint that sets the tone for the entire stay. Guests who find a beautifully designed bag on their nightstand or coffee station associate the hotel with thoughtfulness and quality. Fairmont Hotels already works with EZPZ — and the feedback from their guests is exactly what you'd expect: they ask where they can buy more. That's the opportunity. Beyond the room, branded coffee opens up lobby retail revenue, room service premium pairing, and corporate event gifting for conference groups. The hospitality industry's shift toward premium branded amenities is a direct response to the guest's desire for experiences, not just rooms. EZPZ makes it possible to deliver that experience at any scale — whether you're a boutique 12-room property or a full-service resort — with no minimum order and full design included.",
  whoOrders: [
    { title: "Boutique hotels", body: "Independent boutique hotels use branded coffee as a signature brand touchpoint that differentiates them from chain competitors. It signals curation and quality in a way that generic amenities never could." },
    { title: "Luxury resorts", body: "Resorts include branded coffee in VIP room packages, use it as a spa amenity, and offer it as a premium gift for guests celebrating special occasions." },
    { title: "Business hotels", body: "Corporate travel hotels offer branded coffee bags as a conference and meeting room amenity, and include them in executive floor packages to justify premium pricing." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your hotel logo, choose your packaging style, and add your property name and message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees to match your hotel's positioning — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to your property", body: "We ship directly to your hotel address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Premium in-room experience", body: "A branded specialty coffee bag in the room signals quality from the moment guests check in. It transforms the morning ritual into a brand moment they'll remember and mention in reviews." },
    { n: "02", title: "Lobby retail and F&B revenue", body: "Guests who love the in-room coffee want to take it home. A retail display in the lobby with your branded bags generates direct revenue with zero waste and no minimum reorder." },
    { n: "03", title: "Brand recall long after checkout", body: "A guest who takes a bag home brews your hotel's coffee every morning for weeks. That daily brand touchpoint is worth far more than any digital ad spend." },
    { n: "04", title: "Corporate event and group gifting", body: "Hotel groups and conference clients receive branded coffee as a premium welcome or closing gift. It elevates the event experience and gives the hotel a memorable differentiator." },
  ],
  testimonial: {
    quote: "Our guests kept asking where they could buy the coffee from the room. Now we sell it in the lobby and it's one of our best-performing retail items.",
    author: "David M.",
    role: "General Manager, boutique hotel, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-hotels",
};

const HotelsPage = () => <IndustryPage data={data} />;
export default HotelsPage;
