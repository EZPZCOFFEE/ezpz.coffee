import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Universities | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for universities. Alumni engagement, convocation gifting, campus retail. No minimum order, full design included. Universities across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-universities" },
    openGraph: {
      title: "Custom Coffee Bags for Universities | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for universities. Alumni engagement, fundraising, convocation gifts. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-universities",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Universities" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Universities | EZPZ Coffee",
      description: "Custom branded coffee bags for universities. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Universities",
  eyebrow: "Custom Coffee for Universities",
  headline: "Your university's brand. In every alumnus's morning ritual.",
  subheadline: "Universities have among the most loyal brand communities in the world. Branded specialty coffee turns that loyalty into a daily morning ritual that keeps alumni connected to the institution.",
  intro: "University alumni are among the most brand-loyal communities that exist. They wear the gear, they attend the events, they give when asked — but only when they feel connected. That connection fades with time and distance. A custom branded specialty coffee bag from the university alumni association is the kind of gift that re-establishes that connection in a small but significant way. Every morning the alumnus brews the university's coffee, they think of their time there, the friendships they made, the professors they remember. That is not nostalgia — that is a re-engagement that translates into donation rates, event attendance, and referrals to the admissions office. Universities also have immediate retail applications: the campus café branded with the university's specialty blend, the student union selling branded coffee as a fundraiser, the graduate school welcome kit with a bag of the institution's coffee. Convocation gifting is particularly powerful — a branded coffee bag given at graduation is a daily companion into the next chapter of the graduate's life, associating the institution with their most hopeful mornings. No minimum means running small targeted programs — the MBA cohort welcome, the donor appreciation gift — without institutional purchasing complexity.",
  whoOrders: [
    { title: "Alumni associations", body: "Alumni offices use branded coffee as a donor appreciation gift, a reunion gift, and a direct mail campaign piece that generates responses from lapsed alumni at rates traditional mail never achieves." },
    { title: "Campus cafés and student unions", body: "Campus food service operations add the university's branded specialty coffee to their retail offering. Students buy it as merchandise and gift it to family — generating both revenue and brand reach off-campus." },
    { title: "Graduate schools and academic departments", body: "MBA programs, law schools, and academic departments use branded coffee as a cohort welcome gift, a faculty appreciation gift, and a premium item for donor cultivation events." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your university crest, department logo, or alumni association branding. Academic institutions have rich visual identities — our tool brings them to life on a premium coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that represent the quality of your institution. Single-origin traceable coffees with interesting academic stories — provenance, growing conditions, flavor development — resonate with educated audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Run targeted programs for specific cohorts or departments without bulk purchasing commitments." },
    { n: "04", title: "Delivered to your campus or mailed to alumni", body: "Ship to campus for in-person distribution, or ship individual bags to alumni addresses for direct mail programs. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Alumni engagement that lasts beyond the event", body: "A branded coffee bag given at a reunion or donor event continues to engage the alumnus every morning for weeks. It's a relationship touchpoint that extends the impact of every alumni engagement initiative." },
    { n: "02", title: "Fundraising and donor cultivation tool", body: "Donor cultivation programs that include a premium branded gift see measurably higher response rates. A specialty coffee bag signals that the institution values the relationship before asking for anything." },
    { n: "03", title: "Convocation and graduation gifting", body: "A branded coffee bag given at graduation is a daily companion into the graduate's next chapter. Every morning they brew it during their first job, their first apartment — the institution is there with them." },
    { n: "04", title: "Campus retail and fundraising revenue", body: "University branded coffee sold at campus cafés and student union stores generates direct revenue with strong margins. It's a premium merchandise item that doesn't require a clothing or accessories infrastructure." },
  ],
  testimonial: {
    quote: "Alumni donation rates from cohorts who received the coffee gift were measurably higher at our last giving campaign. It's a small investment with a real return.",
    author: "Patricia N.",
    role: "Director of Alumni Relations, university, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-universities",
};

const UniversitiesPage = () => <IndustryPage data={data} />;
export default UniversitiesPage;
