import type { Metadata } from "next";
import Script from "next/script";

import CareersPage from "./CareersPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Careers at EZPZ Coffee | We're Hiring | Join the Team in Montreal, Toronto & Vancouver",
    description:
      "Join EZPZ Coffee, Canada's zero-minimum custom coffee company. We're hiring a Social Media Specialist, Head of Coffee, and salespeople in Montreal, Toronto, and Vancouver.",
    alternates: { canonical: "/en/careers" },
    openGraph: {
      title: "Careers at EZPZ Coffee | We're Hiring | Montreal, Toronto & Vancouver",
      description:
        "Join EZPZ Coffee — Canada's zero-minimum custom coffee company. Open roles: Social Media Specialist, Head of Coffee, and Sales.",
      type: "website",
      url: "https://www.ezpz.coffee/en/careers",
      images: [
        {
          url: "/assets/banner-01.jpg",
          width: 1200,
          height: 630,
          alt: "Careers at EZPZ Coffee",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers at EZPZ Coffee | We're Hiring",
      description:
        "Join EZPZ Coffee — Canada's zero-minimum custom coffee company. Open roles in Montreal, Toronto, and Vancouver.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BASE = "https://www.ezpz.coffee";
const DATE_POSTED = "2026-08-03";

const JOB_POSTINGS = [
  {
    title: "Social Media Specialist",
    description:
      "You live on Instagram, TikTok, and LinkedIn. You know what makes people stop scrolling. You'll own EZPZ's social presence, creating scroll-stopping content, growing our audience, and building the kind of bold, funny, premium brand voice that makes our competitors jealous.",
    city: "Montréal",
    region: "QC",
  },
  {
    title: "Head of Coffee",
    description:
      "You know coffee, deeply. You'll be the person who owns the quality, sourcing, and craft behind every EZPZ product. From selecting traceable specialty green coffee to dialing in roast profiles at Canadian Roasting Society, you'll make sure everything in the bag is as good as the brand on it.",
    city: "Montréal",
    region: "QC",
  },
  {
    title: "Salesperson — Montreal",
    description:
      "You love the hustle of building relationships and closing deals. You'll be our person on the ground in Montreal, connecting with restaurants, hotels, boutiques, gyms, and brands who want their own coffee.",
    city: "Montréal",
    region: "QC",
  },
  {
    title: "Salesperson — Toronto",
    description:
      "Toronto is one of our biggest growth markets, and we want someone who knows it inside out. You'll build EZPZ's presence across the GTA, connecting with restaurants, hotels, retailers, offices, and brands ready to launch their own coffee.",
    city: "Toronto",
    region: "ON",
  },
  {
    title: "Salesperson — Vancouver",
    description:
      "We're expanding west, and Vancouver is a key part of the plan. You'll open and grow the Vancouver market, introducing EZPZ to the city's vibrant food, hospitality, and wellness scenes.",
    city: "Vancouver",
    region: "BC",
  },
];

const jobPostingSchemas = JOB_POSTINGS.map((job) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.description,
  datePosted: DATE_POSTED,
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    sameAs: BASE,
    logo: `${BASE}/logo.svg`,
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: job.city,
      addressRegion: job.region,
      addressCountry: "CA",
    },
  },
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Canada",
  },
}));

export default function CareersRoutePage() {
  return (
    <>
      {jobPostingSchemas.map((schema, i) => (
        <Script
          key={i}
          id={`job-posting-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CareersPage locale="en" />
    </>
  );
}
