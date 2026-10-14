import type { Metadata } from "next";
import Script from "next/script";

import WholesaleCoffeePage from "../wholesale-coffee-beans/WholesaleCoffeePage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Café en gros pour restaurants, cafés et hôtels | EZPZ Coffee"
    : "Wholesale Coffee Beans for Restaurants, Cafés & Hotels | Bulk Coffee Supply | EZPZ";
  const description = isFr
    ? "Achetez des grains de café de spécialité en gros pour votre restaurant, café, hôtel ou bureau. Torréfié frais à Montréal, qualité constante, livraison récurrente. Servez un café exceptionnel à vos clients."
    : "Buy specialty wholesale coffee beans in bulk for your restaurant, café, hotel, or office. Freshly roasted in Montreal, consistent quality, recurring delivery. Serve exceptional coffee to your guests.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/cafe-en-gros`,
      languages: {
        en: "https://www.ezpz.coffee/en/wholesale-coffee-beans",
        "fr-CA": "https://www.ezpz.coffee/fr/cafe-en-gros",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/cafe-en-gros`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Café en gros | EZPZ Coffee" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Café en gros",
  description:
    "Grains de café de spécialité en gros pour restaurants, cafés, hôtels, bureaux et entreprises partout au Canada. Torréfié frais à Montréal, qualité constante, livraison récurrente.",
  provider: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3780 Rue Saint-Patrick",
      addressLocality: "Montréal",
      addressRegion: "QC",
      postalCode: "H4E 1A2",
      addressCountry: "CA",
    },
  },
  areaServed: { "@type": "Country", name: "Canada" },
  serviceType: "Approvisionnement en café en gros",
  url: "https://www.ezpz.coffee/fr/cafe-en-gros",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vendez-vous des grains de café en gros aux restaurants et cafés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. EZPZ fournit des grains de café de spécialité en gros aux restaurants, cafés, hôtels, bureaux et autres entreprises, torréfiés frais à Montréal, disponibles en grains entiers ou moulus, avec livraison récurrente.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre les grains en gros et la marque privée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les grains en gros sont du café en vrac que vous infusez et servez à vos clients. La marque privée, c'est du café emballé dans des sacs de détail sous votre propre marque pour la vente. EZPZ offre les deux : ce programme concerne les grains en vrac que vous servez.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je recevoir du café selon un calendrier récurrent ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous mettons en place des livraisons récurrentes selon un calendrier adapté à votre utilisation, pour que votre entreprise ne manque jamais de café et que votre café arrive toujours fraîchement torréfié.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous du café en gros en grains entiers ou moulus ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les deux. Nous fournissons des grains entiers pour votre moulin ou pré-moulus selon les spécifications de votre machine, selon ce qui convient à votre configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je goûter le café avant de commander en gros ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous fournissons des échantillons pour que vous puissiez goûter et choisir le bon café pour votre entreprise avant de vous engager dans une commande régulière.",
      },
    },
  ],
};

const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Café en gros pour restaurants, cafés et hôtels | EZPZ Coffee",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  },
  url: "https://www.ezpz.coffee/fr/cafe-en-gros",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.ezpz.coffee/fr" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ezpz.coffee/fr/services" },
    { "@type": "ListItem", position: 3, name: "Café en gros", item: "https://www.ezpz.coffee/fr/cafe-en-gros" },
  ],
};

const CafeEnGrosRoutePage = () => (
  <>
    <Script id="wholesale-fr-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
    <Script id="wholesale-fr-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <Script id="wholesale-fr-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />
    <Script id="wholesale-fr-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    <WholesaleCoffeePage />
  </>
);

export default CafeEnGrosRoutePage;
