import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les agents immobiliers de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Real Estate Agents | EZPZ Coffee";
  const description = isFr ? "Les agents immobiliers de Vancouver génèrent des références avec le café de spécialité personnalisé comme cadeau de clôture. Aucun minimum, design inclus." : "Vancouver is the most expensive real estate market in Canada. A custom branded specialty coffee closing gift should match the calibre of the transaction — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-real-estate-vancouver`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-real-estate-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-real-estate-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-real-estate-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les agents immobiliers de Vancouver" : "Custom Coffee Bags for Vancouver Real Estate Agents" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Vancouver Real Estate Agents",
    subheadline:
      "Vancouver homes trade at some of the highest prices in the world. The closing gift should reflect the calibre of the transaction — and the relationship.",
    ctaSubject: "Custom coffee for Vancouver real estate agent",
  },
  aeoAnswer:
    "Vancouver real estate agents can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Vancouver in 4–6 business days.",
  why: {
    heading: "Vancouver Real Estate and the Premium Closing Gift Standard",
    paragraphs: [
      "Vancouver's real estate market is among the most expensive in the world — the average detached home in Greater Vancouver trades above $2 million. The agents who compete at that level are not generic real estate practitioners; they are luxury brand ambassadors who invest heavily in their personal brand, their client relationships, and every touchpoint in the transaction experience. The closing gift is one of the highest-leverage moments in that experience.",
      "Vancouver's buyer base is internationally sophisticated — many buyers are comparing Vancouver to Hong Kong, Tokyo, London, and New York. This is a clientele that has experienced the best closing gifts and the most forgettable ones. A custom branded specialty coffee bag — with a traceable single-origin, premium packaging, and the agent's design identity — communicates a level of intentionality that a wine bottle or a box of chocolates simply doesn't.",
      "Vancouver's wellness and sustainability values add a further dimension. A specialty coffee with a traceable supply chain, minimal-waste packaging, and a Canadian provenance story resonates with buyers whose lifestyle choices already reflect premium, values-aligned consumption. This is a closing gift that fits the home they just bought.",
    ],
  },
  useCases: {
    heading: "How Vancouver Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Luxury closing gift for West Side and Westside properties",
        body: "For Shaughnessy, Kerrisdale, and Point Grey properties trading at $3M–$10M, a custom-branded specialty coffee bag as a closing component — alongside champagne or a luxury gift box — is the consumable element that outlasts everything else. The bag lives on the kitchen counter of the home you sold for months.",
      },
      {
        title: "Eco-conscious client appreciation",
        body: "Vancouver buyers who are buying LEED homes, demanding heat pumps, and choosing electric vehicles are the same buyers who appreciate a closing gift with an environmentally aligned story. A specialty coffee with traceable sourcing and minimal-waste packaging lands authentically with that audience.",
      },
      {
        title: "Pre-sale condo development events",
        body: "Vancouver's pre-sale condo market — Burrard, Yaletown, Olympic Village — draws qualified buyers to registration events. A branded coffee bag as a registration gift for a development project, co-branded with the project name, creates premium brand impression during the consideration window.",
      },
      {
        title: "Annual luxury client maintenance",
        body: "In Vancouver's luxury market, a relationship with a past buyer is worth $100,000–$500,000 in future and referred transaction value. An annual holiday coffee gift — with your name on the design — is an investment of $25 that maintains a relationship worth exponentially more.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Order with 2 weeks lead time for closing gifts planned in advance. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I put my headshot, logo, and contact info on the bag?",
      a: "Yes. Full design customization — headshot, brokerage logo, name, number, tagline, and social handles — is supported. Your bag is your brand.",
    },
    {
      q: "What coffee profile is right for Vancouver luxury buyers?",
      a: "For Vancouver's sophisticated buyer base, EZPZ recommends a traceable single-origin — an Ethiopian natural or a Guatemalan honey process — with clear tasting notes on the bag. The specificity signals quality and care to clients who already know the difference.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Vancouver agents closing 10–15 deals a year find a batch of 100 bags lasts a season.",
    },
    {
      q: "Can I get these in time for a closing that's two weeks away?",
      a: "Yes. Order immediately, and with 4–6 business days to Vancouver, a 10-day turnaround is achievable. Contact us if you have a specific closing date deadline.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Calgary", href: "/en/custom-coffee-real-estate-calgary" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Corporate Offices · Vancouver", href: "/en/custom-coffee-corporate-offices-vancouver" },
  ],
  ctaClose:
    "Vancouver homes are generational decisions. The closing gift should be one worth remembering.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-real-estate-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Agents immobiliers",
    parentHref: "/fr/custom-coffee-bags-real-estate-agents",
    parentLabel: "Agents immobiliers",
  },
  hero: {
    h1: "Café personnalisé pour les agents immobiliers de Vancouver",
    subheadline: "Les agents immobiliers de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les agents immobiliers de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les agents immobiliers de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le cadeau de clôture qui génère des références à Vancouver",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Le marché immobilier de Point Grey, Kitsilano et Mount Pleasant est dynamique et compétitif. Les agents qui se démarquent durablement sont ceux que leurs clients se souviennent et recommandent des années après la transaction.",
      "Un sachet de café de spécialité personnalisé avec le nom et le logo de l'agent, offert lors de la clôture, est le cadeau qui continue à travailler après que le contrat est signé. Chaque matin où le nouveau propriétaire prépare ce café, il voit le nom de l'agent. Quand un ami mentionne chercher un agent, ce nom est là, sur le comptoir de la cuisine.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour chaque client individuellement, avec un message personnalisé à chaque clôture. C'est le niveau de personnalisation qui génère les références.",
    ],
  },
  useCases: {
    heading: "Comment les agents immobiliers de Vancouver utilisent le café de marque",
    items: [
    { title: "Cadeau de clôture standard pour chaque transaction", body: "Un sachet de café personnalisé avec un message chaleureux est le cadeau de clôture qui différencie votre service de tous les autres agents que vos clients ont considérés." },
    { title: "Trousse de bienvenue pour les nouveaux propriétaires", body: "Pour les clients qui achètent leur première propriété, créez une trousse de bienvenue avec votre café de marque, un carnet de clés et vos coordonnées. C'est le premier souvenir de leur nouvelle maison." },
    { title: "Cadeau de fin d'année pour le portfolio de clients", body: "Envoyez un sachet de café de marque à tous vos clients actuels et passés pour les Fêtes. C'est un rappel annuel de votre nom, peu coûteux et premium, qui maintient votre position dans leur réseau." },
    { title: "Prospection : coffret pour les contacts de référence", body: "Pour les relations de référence clés, agents de financement, notaires, courtiers, envoyez un café de marque pour garder votre nom en tête pour leurs prochaines recommandations." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les agents immobiliers de Vancouver peuvent-ils personnaliser le sachet avec le nom du client ?", a: "Oui. Vous pouvez ajouter une ligne de texte personnalisée comme 'Félicitations [Prénom et Nom] pour votre nouvelle maison' sur le sachet. C'est l'option la plus mémorable et la plus susceptible de générer une référence. Le design est ajusté gratuitement par notre équipe." },
    { q: "Quel volume commandent les agents immobiliers de Vancouver ?", a: "La plupart des agents commencent avec 10 à 25 sacs pour leurs clôtures de l'année. Les agents plus actifs commandent 50 à 100 sacs à la fois pour réapprovisionner régulièrement. EZPZ s'adapte à tout volume sans minimum, idéal pour les agents qui gèrent les cadeaux transaction par transaction." },
  ],
  siblings: [
    { label: "Agents immobiliers · Montréal", href: "/fr/custom-coffee-real-estate-montreal" },
    { label: "Agents immobiliers · Toronto", href: "/fr/custom-coffee-real-estate-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
  ],
  ctaClose: "La clôture est le début de la relation à long terme. Votre café de marque le dit clairement.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
