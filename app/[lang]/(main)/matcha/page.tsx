import type { Metadata } from "next";
import Script from "next/script";

import MatchaPage from "./MatchaPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Matcha japonais biologique en marque blanche | Marque privée matcha Canada | EZPZ Coffee"
    : "Private-Label Organic Japanese Matcha | White-Label Matcha Canada — EZPZ Coffee";
  const description = isFr
    ? "Lancez votre propre marque de matcha. Matcha biologique japonais premium, étiquette personnalisée, aucun minimum sur le sachet 85g. Ajoutez le matcha à votre gamme café. Contactez-nous pour les prix."
    : "Launch your own matcha brand. Premium organic Japanese matcha, custom-label, no minimum on the 85g pouch. Add matcha to your coffee line. Contact us for pricing.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/matcha`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/matcha",
        "fr-CA": "https://www.ezpz.coffee/fr/matcha",
        "x-default": "https://www.ezpz.coffee/en/matcha",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/matcha`,
      images: [
        {
          url: "/assets/banner-01.jpg",
          width: 1200,
          height: 630,
          alt: isFr
            ? "Matcha japonais biologique en marque blanche | EZPZ Coffee"
            : "White-Label Organic Japanese Matcha | EZPZ Coffee",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "White-Label Organic Japanese Matcha",
  description:
    "100% pure, premium-grade organic Japanese matcha. Product of Japan, certified organic, gluten-free. Available in an 85g custom-label pouch with no minimum order, or in bulk. Private-label program for coffee brands, cafes, hotels, and retailers across Canada.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-MATCHA",
  offers: {
    "@type": "Offer",
    url: "https://www.ezpz.coffee/en/matcha",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "EZPZ Coffee" },
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the matcha certified organic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our matcha is 100% certified organic and a product of Japan. It meets Canadian organic standards and is completely free of pesticides and additives.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum order for white-label matcha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No minimum order for the 85g pouch with your label applied. For fully custom branded pouches with no EZPZ branding, the minimum is 5,000 units.",
      },
    },
    {
      "@type": "Question",
      name: "Can I add matcha to my existing coffee brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Matcha is a natural complement to a coffee brand. It gives your customers a caffeine-alternative and broadens your product range without adding complexity on your end.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get matcha pricing from EZPZ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us at help@ezpz.coffee or use the contact form on our website. We will put together a quote based on your format and volume.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ezpz.coffee/en/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "White-Label Organic Matcha",
      item: "https://www.ezpz.coffee/en/matcha",
    },
  ],
};

const MatchaRoutePage = () => (
  <>
    <Script
      id="matcha-product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
    />
    <Script
      id="matcha-faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
    />
    <Script
      id="matcha-breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
    />
    <MatchaPage />
  </>
);

export default MatchaRoutePage;
