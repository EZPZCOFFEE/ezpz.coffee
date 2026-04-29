import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Golf Clubs | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for golf clubs. The premium member gift for those who have everything. No minimum order, full design included. Golf clubs across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-golf-clubs" },
    openGraph: {
      title: "Custom Coffee Bags for Golf Clubs | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for golf clubs. Premium member gifts, tournament prizes, pro shop retail. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-golf-clubs",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Golf Clubs" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Golf Clubs | EZPZ Coffee",
      description: "Custom branded coffee bags for golf clubs. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Golf Clubs",
  eyebrow: "Custom Coffee for Golf Clubs",
  headline: "The premium gift for members who have everything.",
  subheadline: "Golf club members are affluent, brand-conscious, and accustomed to premium experiences. A branded specialty coffee bag is the member gift, tournament prize, or holiday thank-you that stands out.",
  intro: "Golf club members are among the hardest people in the world to gift. They have everything, and they have strong opinions about quality. Generic branded merchandise — hats, towels, ball markers — is dismissed as marketing material. What they respond to is genuine quality with a story. A custom specialty coffee bag from a traceable single-origin farm, roasted fresh in Montreal, with the club's crest on the front, is genuinely premium in a way that most club merchandise is not. The product aligns with how golf clubs present themselves: quality, tradition, and attention to detail. Members who receive a bag of the club's branded specialty coffee as a holiday thank-you or a tournament prize don't just use it — they appreciate it. They mention it to other members. They ask the pro shop manager if they can buy more. That is the retail opportunity. Golf clubs that have introduced branded coffee in the pro shop report strong sales to members who want to take a piece of the club experience home with them or gift it to business associates. No minimum means testing the concept at a member event before committing to pro shop inventory.",
  whoOrders: [
    { title: "Private golf clubs", body: "Private clubs use branded coffee as a member appreciation gift, a new member welcome package, and a holiday season gift that reflects the club's commitment to quality and thoughtfulness." },
    { title: "Golf resorts and destination courses", body: "Golf resorts include branded coffee bags in premium stay packages, tournament gift bags, and pro shop retail displays. Resort guests purchase them as a premium take-home memento of their experience." },
    { title: "Country clubs with golf facilities", body: "Multi-sport country clubs use branded coffee as a unified club gift that appeals to golfers, tennis players, and social members alike — one elegant product for the entire membership." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your club crest or logo. Classic, elegant design aesthetics — navy, forest green, gold — work exceptionally well for golf club branding on a premium coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select a premium single-origin coffee that matches the club's positioning. Panamanian Geisha or Ethiopian Yirgacheffe are excellent choices for members who appreciate provenance and quality." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test at a member event before committing to pro shop inventory." },
    { n: "04", title: "Delivered to your club", body: "Shipped directly to your club address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Premium member gift at the right price point", body: "A custom specialty coffee bag is premium without being extravagant — it sits at the ideal gifting price point for a club that wants to signal quality without triggering questions about member dues." },
    { n: "02", title: "Tournament prize and competition award", body: "Tournament prizes that generate genuine excitement are rare. A branded specialty coffee bag as a closest-to-the-pin or longest-drive prize is memorable and appreciated at every skill level." },
    { n: "03", title: "Holiday gifting and member retention", body: "A holiday gift to the full membership — or to the club's top-tier members — is a relationship investment that pays dividends in renewal rates and referrals to prospective members." },
    { n: "04", title: "Pro shop retail with no minimum commitment", body: "Test a small retail display in the pro shop before committing to large quantities. Golf club members are proven luxury consumers — the sell-through rate for premium branded coffee is consistently high." },
  ],
  testimonial: {
    quote: "Our members loved it. Several asked if they could order more bags to give as gifts themselves — so now we sell them in the pro shop and they move consistently.",
    author: "Richard P.",
    role: "General Manager, private golf club, Ontario",
  },
  canonicalPath: "/custom-coffee-bags-golf-clubs",
};

const GolfClubsPage = () => <IndustryPage data={data} />;
export default GolfClubsPage;
