import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Country Clubs | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for country clubs. A member gift as exclusive as your club. No minimum order, full design included. Country clubs across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-country-clubs" },
    openGraph: {
      title: "Custom Coffee Bags for Country Clubs | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for country clubs. Exclusivity signal, member appreciation, club shop retail. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-country-clubs",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Country Clubs" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Country Clubs | EZPZ Coffee",
      description: "Custom branded coffee bags for country clubs. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Country Clubs",
  eyebrow: "Custom Coffee for Country Clubs",
  headline: "A member gift as exclusive as your club.",
  subheadline: "Country club members expect the best. A custom branded specialty coffee bag — from a traceable single origin, roasted fresh in Montreal, with the club's crest — is exactly the kind of detail that makes membership feel special.",
  intro: "Country clubs are in the business of exclusivity. Everything — from the manicured grounds to the dining room silverware to the guest experience — communicates that this is a place where standards are not just maintained but celebrated. Member gifts need to meet that same standard. A custom specialty coffee bag with the club's crest, a traceable single-origin coffee chosen for its exceptional quality, roasted fresh in Montreal — that is a gift that reinforces why membership at this club is worth having. The product is premium without being ostentatious. It is consumable without being forgettable. It carries the club's brand into members' most intimate morning moment — the one quiet ritual before the day begins. That is where brand loyalty is built. Country clubs that have introduced branded coffee report that members appreciate the quality of the product as much as the branding — which is exactly right. The coffee has to be exceptional. EZPZ sources only 80+ SCA specialty-grade beans from fully traceable origins, roasted in small batches at Canadian Roasting Society in Montreal. It meets the standard your members expect.",
  whoOrders: [
    { title: "Tennis and racquet clubs", body: "Multi-sport lifestyle clubs use branded coffee as a seasonal member gift that appeals equally to competitive players and social members — a universal luxury consumable that transcends sport preference." },
    { title: "Private social and lifestyle clubs", body: "Exclusive private clubs in urban centres use branded coffee as a new member welcome gift and a signature item in the club shop that signals the level of curation members can expect from every aspect of membership." },
    { title: "Family and multi-generational clubs", body: "Clubs with family memberships use branded coffee as a parent-focused gift that acknowledges the adult members who drive the family's membership decision and renewal." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your club crest or logo. Heritage design elements — crests, monograms, classic typography — translate beautifully onto premium coffee bags." },
    { n: "02", title: "Choose your coffee", body: "Select from our most premium single-origin offerings. Panamanian, Ethiopian, or Kenyan specialty coffees at the 85+ SCA score level are appropriate for the country club market." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. The quality is consistently exceptional — which is the only standard that works for this audience." },
    { n: "04", title: "Delivered to your club", body: "Shipped directly to your club address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Exclusivity signal that reinforces membership value", body: "A custom specialty coffee that only club members can access is a membership perk in itself. It reinforces the feeling that belonging to this club means access to things unavailable elsewhere." },
    { n: "02", title: "Member appreciation that earns renewal loyalty", body: "Members who feel genuinely appreciated by their club renew at higher rates and refer prospective members more actively. A well-chosen gift at the right moment is one of the most cost-effective retention tools available." },
    { n: "03", title: "New member welcome experience", body: "A branded specialty coffee bag in the new member welcome kit sets the tone for the relationship from day one. It signals quality, curation, and a commitment to the member experience that continues throughout membership." },
    { n: "04", title: "Club shop retail for members and guests", body: "Premium branded coffee in the club shop sells to members who want to gift it and to guests who want to take a piece of the experience home. Strong margins, no minimum reorder commitment." },
  ],
  testimonial: {
    quote: "It elevated our holiday member package from nice to exceptional. The feedback from members was unanimous — and several asked if we could make it a permanent club shop item.",
    author: "Catherine B.",
    role: "Events Director, private country club, British Columbia",
  },
  canonicalPath: "/custom-coffee-bags-country-clubs",
};

const CountryClubsPage = () => <IndustryPage data={data} />;
export default CountryClubsPage;
