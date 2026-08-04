import type { Metadata } from "next";
import Script from "next/script";

import CareersPage from "../careers/CareersPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Carrières chez EZPZ Coffee | Nous embauchons | Montréal, Toronto & Vancouver",
    description:
      "Rejoignez EZPZ Coffee, l'entreprise de café personnalisé à zéro minimum du Canada. Nous embauchons un spécialiste médias sociaux, un directeur café et des représentants commerciaux à Montréal, Toronto et Vancouver.",
    alternates: { canonical: "/fr/carrieres" },
    openGraph: {
      title: "Carrières chez EZPZ Coffee | Nous embauchons | Montréal, Toronto & Vancouver",
      description:
        "Rejoignez EZPZ Coffee — l'entreprise de café personnalisé à zéro minimum du Canada. Postes ouverts : Spécialiste médias sociaux, Directeur café, et Ventes.",
      type: "website",
      url: "https://www.ezpz.coffee/fr/carrieres",
      images: [
        {
          url: "/assets/banner-01.jpg",
          width: 1200,
          height: 630,
          alt: "Carrières chez EZPZ Coffee",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Carrières chez EZPZ Coffee | Nous embauchons",
      description:
        "Rejoignez EZPZ Coffee — l'entreprise de café personnalisé à zéro minimum du Canada.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BASE = "https://www.ezpz.coffee";
const DATE_POSTED = "2026-08-03";

const JOB_POSTINGS_FR = [
  {
    title: "Spécialiste médias sociaux",
    description:
      "Vous vivez sur Instagram, TikTok et LinkedIn. Vous gérerez la présence sociale d'EZPZ, en créant du contenu accrocheur, en développant notre audience et en construisant une voix de marque audacieuse et premium.",
    city: "Montréal",
    region: "QC",
  },
  {
    title: "Directeur café",
    description:
      "Vous connaissez le café, en profondeur. Vous serez responsable de la qualité, de l'approvisionnement et du savoir-faire derrière chaque produit EZPZ.",
    city: "Montréal",
    region: "QC",
  },
  {
    title: "Représentant commercial — Montréal",
    description:
      "Vous aimez le défi de bâtir des relations et de conclure des ententes. Vous serez notre personne sur le terrain à Montréal.",
    city: "Montréal",
    region: "QC",
  },
  {
    title: "Représentant commercial — Toronto",
    description:
      "Toronto est l'un de nos plus grands marchés de croissance. Vous bâtirez la présence d'EZPZ dans le Grand Toronto.",
    city: "Toronto",
    region: "ON",
  },
  {
    title: "Représentant commercial — Vancouver",
    description:
      "Nous nous développons vers l'ouest et Vancouver est un élément clé du plan. Vous ouvrirez et développerez le marché de Vancouver.",
    city: "Vancouver",
    region: "BC",
  },
];

const jobPostingSchemas = JOB_POSTINGS_FR.map((job) => ({
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
}));

export default function CarrieresRoutePage() {
  return (
    <>
      {jobPostingSchemas.map((schema, i) => (
        <Script
          key={i}
          id={`job-posting-fr-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CareersPage locale="fr" />
    </>
  );
}
