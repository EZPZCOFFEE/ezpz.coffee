import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Medical Clinics | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for medical clinics. Show patients you care beyond the appointment. No minimum order, full design included. Medical clinics across Canada and the USA choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-medical-clinics" },
    openGraph: {
      title: "Custom Coffee Bags for Medical Clinics | No Minimum | EZPZ Coffee",
      description: "Custom branded coffee bags for medical clinics. Patient appreciation, warm brand positioning, staff gifting. No minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-medical-clinics",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Medical Clinics" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Medical Clinics | EZPZ Coffee",
      description: "Custom branded coffee bags for medical clinics. No minimum order. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: IndustryPageData = {
  industry: "Medical Clinics",
  eyebrow: "Custom Coffee for Medical Clinics",
  headline: "Show patients you care — beyond the appointment.",
  subheadline: "Healthcare providers increasingly focused on patient experience find that a branded coffee gift communicates warmth and care that goes beyond the transactional nature of medicine.",
  intro: "Healthcare is the most personal service industry there is — but it often feels impersonal by necessity. The clinic environment, the clinical language, the billing process all create distance between the provider and the patient. The practices that stand out are the ones that find moments to close that distance. A branded specialty coffee gift is one of the most effective of those moments. It is unexpected, warm, and completely outside the clinical transaction. A patient who receives a custom coffee bag from their clinic at the holidays, for their birthday, or as a post-procedure comfort gift does not just feel appreciated — they feel like they matter to the clinic beyond their insurance card number. That feeling is enormously powerful for patient retention and referrals. Word-of-mouth is the primary acquisition channel for most private clinics, and it is driven almost entirely by emotional experiences. Staff gifting is equally important: clinic staff who feel appreciated deliver better patient care. A branded specialty coffee bag for a physician, nurse, or administrative team member says that their contribution is seen and valued. No minimum means running a patient holiday gift program, a staff appreciation program, or a new patient welcome initiative at any scale.",
  whoOrders: [
    { title: "Private medical clinics", body: "Private practices use branded coffee as a holiday patient gift, a new patient welcome package, and an annual loyalty appreciation gift for long-term patients who are the backbone of the practice." },
    { title: "Specialist practices", body: "Specialist physicians use branded coffee as a thank-you gift for patients completing long treatment courses — acknowledging the patient's commitment to their health and to the practice." },
    { title: "Wellness and integrative health clinics", body: "Integrative health practices — naturopathic, functional medicine, chiropractic — use branded coffee as a natural extension of their wellness brand and an accessible gift that resonates with their patient community." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your clinic logo and choose a warm, approachable design that reflects your brand. A clean design with the clinic name and a caring message works best for medical contexts." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing specialty origin. Medium roast Colombian or a well-rounded blend works for a diverse patient population across all preferences and sensitivities." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — run a small pilot holiday program and scale based on patient response." },
    { n: "04", title: "Delivered to your clinic", body: "Shipped directly to your clinic address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Patient appreciation that creates loyalty", body: "Patients who feel genuinely appreciated by their clinic stay longer, comply better with treatment plans, and refer friends and family. A branded coffee gift is a low-cost investment in all three outcomes." },
    { n: "02", title: "Staff gifting and team morale", body: "Clinic staff who receive branded specialty coffee as an appreciation gift feel valued. Team morale in healthcare settings directly impacts patient care quality and staff retention." },
    { n: "03", title: "Warm brand positioning in a clinical category", body: "Healthcare brands that communicate warmth and care — not just competence — stand out in a market where most clinics feel indistinguishable. Branded coffee is a small but meaningful signal of that positioning." },
    { n: "04", title: "Holiday and seasonal gifting programs", body: "A holiday patient gift program powered by branded coffee turns the end of year into a relationship-building moment. No minimum means running a program sized exactly for your patient list." },
  ],
  testimonial: {
    quote: "It felt personal in a way our other patient gifts never did. We've had patients come back specifically to thank us — and mention it when they refer someone new.",
    author: "Dr. Martin L.",
    role: "Clinic Director, private clinic, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-medical-clinics",
};

const MedicalPage = () => <IndustryPage data={data} />;
export default MedicalPage;
