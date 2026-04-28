import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Dental Offices | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for dental offices. The most ironic patient gift they will love and remember. No minimum order, full design included. Dental offices across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-dental-offices" },
    openGraph: {
      title: "Custom Coffee Bags for Dental Offices | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for dental offices. Memorable, shareable, patient retention tool. No minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-dental-offices",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Dental Offices" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Dental Offices | EZPZ Coffee",
      description: "Custom branded coffee bags for dental offices. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Dental Offices",
  eyebrow: "Custom Coffee for Dental Offices",
  headline: "The most ironic gift your patients will love.",
  subheadline: "A coffee gift from a dentist is memorable precisely because it is unexpected. Patients who get it laugh, share it, and remember your practice for exactly the right reasons.",
  intro: "Dental practices have a gifting problem. The usual options — branded floss, a travel toothbrush kit, a stress ball with the office logo — are forgettable at best and condescending at worst. Patients don't think about their dentist between appointments unless something hurts, and that's a problem for practices that depend on recalls and referrals. A custom specialty coffee bag from a dental office is memorable precisely because it shouldn't exist. The irony is the point. A dentist who gives their patients a bag of specialty coffee with a playful message like \"Enjoy this — we'll handle what comes next\" or \"Stain away — we've got you covered\" is a dentist with personality, confidence, and a sense of humor. Patients remember that dentist. They tell their friends. They take a photo and post it. They show up for their six-month recall because they actually like the experience of going to that practice. The concept is also enormously practical: coffee is a product that virtually every adult patient uses every day. No minimum means ordering a small batch for holiday gifting or a new patient welcome program without any inventory commitment.",
  whoOrders: [
    { title: "General dental practices", body: "General dentists use branded coffee as a holiday patient gift, a new patient welcome gift, and a loyalty appreciation gift for long-term patients who refer friends and family." },
    { title: "Orthodontic practices", body: "Orthodontists use branded coffee for parent gifting — the adults who bring their kids in, pay the bills, and make the referrals. A thoughtful gift for the parent builds the practice." },
    { title: "Specialty dental practices", body: "Oral surgeons, periodontists, and dental specialists use branded coffee as a post-procedure comfort gift — something warm and reassuring for patients after their appointment." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your practice logo and add a message. Lean into the irony — a playful tagline on the bag makes it memorable and shareable. Our tool handles the design with no designer needed." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing medium roast that works for all your patients. Colombian or blend profiles are reliable favorites that no one can object to." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order a small holiday batch or a new patient welcome kit supply without commitment." },
    { n: "04", title: "Delivered to your practice", body: "Shipped directly to your dental office. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Memorable and shareable concept", body: "Coffee from a dentist is inherently shareable. Patients photograph it, post it, send it to friends. That organic social reach costs your practice nothing and builds the brand effortlessly." },
    { n: "02", title: "Patient retention through positive association", body: "Patients who associate your practice with warmth, humor, and generosity are the patients who come back on schedule and refer their social circle without being asked." },
    { n: "03", title: "Holiday and seasonal gifting program", body: "A branded coffee gift campaign at the holidays turns routine recall appointments into memorable experiences. Patients look forward to coming in — a competitive advantage in any market." },
    { n: "04", title: "No minimum for any campaign size", body: "Order 20 bags for a new patient welcome program. Order 200 for a holiday gifting campaign. Order 5 for your most loyal referring patients. Zero minimum makes any program viable." },
  ],
  testimonial: {
    quote: "My patients think it's hilarious and they love it. I've never had so many people bring it up at their next appointment — and three patients have told me they referred friends specifically because of it.",
    author: "Dr. Sarah M.",
    role: "General Dentist, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-dental-offices",
};

const DentalPage = () => <IndustryPage data={data} />;
export default DentalPage;
