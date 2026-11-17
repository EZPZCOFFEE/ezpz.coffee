import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les agents immobiliers de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Real Estate Agents | EZPZ Coffee";
  const description = isFr ? "Les agents immobiliers de Calgary génèrent des références avec le café de spécialité personnalisé comme cadeau de clôture. Aucun minimum, design inclus." : "Calgary's fast-growing real estate market rewards agents who build lasting referral networks. Custom branded specialty coffee closing gifts — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-real-estate-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-real-estate-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-real-estate-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-real-estate-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-real-estate-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les agents immobiliers de Calgary" : "Custom Coffee Bags for Calgary Real Estate Agents" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Calgary Real Estate Agents",
    subheadline:
      "Calgary is growing faster than any other major Canadian city. The agents building referral networks now are the ones who thrive in the next cycle.",
    ctaSubject: "Custom coffee for Calgary real estate agent",
  },
  aeoAnswer:
    "Calgary real estate agents can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary Real Estate and the Referral Network Investment",
    paragraphs: [
      "Calgary's real estate market has been one of Canada's fastest-growing in recent years, fueled by interprovincial migration from BC and Ontario and a resurgent energy sector. Agents who positioned themselves in growing communities — Panorama Hills, Seton, Legacy, Springbank Hill — are handling a wave of first-time buyers and upsizing families who are building deep roots in their new neighbourhoods. These buyers become the referral networks of the next five to ten years.",
      "Calgary buyers are practical but quality-conscious. They've moved here from other major Canadian cities and brought their quality expectations with them. An energy sector buyer who relocated from Vancouver or Toronto and just closed on a $700K home in Signal Hill or Aspen Landing is accustomed to premium closing gifts from their previous market. A generic basket signals that the Calgary market doesn't play at that level. A custom branded specialty coffee bag says otherwise.",
      "Calgary also has a robust luxury acreage market — Bearspaw, Springbank, and the Rocky View County properties that attract buyers spending $1M–$5M on estate properties. These buyers are the strongest referral source in any market, and they remember the agent who treated their closing with the same gravity as their home purchase.",
    ],
  },
  useCases: {
    heading: "How Calgary Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "New community closing gifts",
        body: "Calgary's newest communities — Seton, Cornerstone, Hotchkiss — have buyers who are starting fresh in a new neighbourhood. A branded coffee bag at closing is a daily brand impression in a brand new kitchen, reaching a buyer who is about to meet their neighbours and talk about their agent.",
      },
      {
        title: "Energy sector professional client gifts",
        body: "Calgary's oil and gas executives and engineers are closing on $800K–$2M+ homes in SW Calgary and the luxury acreage market. For this buyer, a quality specialty coffee closing gift communicates that you understand the level of transaction they're used to conducting.",
      },
      {
        title: "Annual client appreciation mailing",
        body: "Calgary's referral real estate runs on annual touch points. A November or December branded coffee mailing to your past client database — 200 to 2,000 bags depending on your database size — is a relationship maintenance investment that keeps your name warm through the slow winter season.",
      },
      {
        title: "Open house bags for competitive listings",
        body: "In Calgary's competitive listing environment, an agent whose open houses include branded take-home bags for qualified buyers is the agent whose name stays on the kitchen counter. EZPZ makes it affordable to do this for every open house.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. For agents running annual client touch programs, volume pricing is available at 500+ bags.",
  faq: [
    {
      q: "Can my headshot and brokerage logo go on the bag?",
      a: "Yes. Full design customization — headshot, logo, name, phone, tagline — is supported.",
    },
    {
      q: "Can I order batches for a specific community launch event?",
      a: "Yes. For community launch events or development pre-sales, EZPZ can produce a co-branded design with your agency and the project name. Minimum is 100 bags per design.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Calgary agents doing 30 closings a year typically order 200–400 bags per quarter.",
    },
    {
      q: "How fast is delivery to Calgary?",
      a: "4–6 business days. Order with 10 days lead time to ensure delivery before a planned closing.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Vancouver", href: "/en/custom-coffee-real-estate-vancouver" },
    { label: "Corporate Offices · Calgary", href: "/en/custom-coffee-corporate-offices-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's market is growing. Build the referral network now with the closing gift that stays on the counter.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-real-estate-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Agents immobiliers",
    parentHref: "/fr/custom-coffee-bags-real-estate-agents",
    parentLabel: "Agents immobiliers",
  },
  hero: {
    h1: "Café personnalisé pour les agents immobiliers de Calgary",
    subheadline: "Les agents immobiliers de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les agents immobiliers de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les agents immobiliers de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le cadeau de clôture qui génère des références à Calgary",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Le marché immobilier de Beltline, Inglewood et le centre-ville est dynamique et compétitif. Les agents qui se démarquent durablement sont ceux que leurs clients se souviennent et recommandent des années après la transaction.",
      "Un sachet de café de spécialité personnalisé avec le nom et le logo de l'agent, offert lors de la clôture, est le cadeau qui continue à travailler après que le contrat est signé. Chaque matin où le nouveau propriétaire prépare ce café, il voit le nom de l'agent. Quand un ami mentionne chercher un agent, ce nom est là, sur le comptoir de la cuisine.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour chaque client individuellement, avec un message personnalisé à chaque clôture. C'est le niveau de personnalisation qui génère les références.",
    ],
  },
  useCases: {
    heading: "Comment les agents immobiliers de Calgary utilisent le café de marque",
    items: [
    { title: "Cadeau de clôture standard pour chaque transaction", body: "Un sachet de café personnalisé avec un message chaleureux est le cadeau de clôture qui différencie votre service de tous les autres agents que vos clients ont considérés." },
    { title: "Trousse de bienvenue pour les nouveaux propriétaires", body: "Pour les clients qui achètent leur première propriété, créez une trousse de bienvenue avec votre café de marque, un carnet de clés et vos coordonnées. C'est le premier souvenir de leur nouvelle maison." },
    { title: "Cadeau de fin d'année pour le portfolio de clients", body: "Envoyez un sachet de café de marque à tous vos clients actuels et passés pour les Fêtes. C'est un rappel annuel de votre nom, peu coûteux et premium, qui maintient votre position dans leur réseau." },
    { title: "Prospection : coffret pour les contacts de référence", body: "Pour les relations de référence clés, agents de financement, notaires, courtiers, envoyez un café de marque pour garder votre nom en tête pour leurs prochaines recommandations." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les agents immobiliers de Calgary peuvent-ils personnaliser le sachet avec le nom du client ?", a: "Oui. Vous pouvez ajouter une ligne de texte personnalisée comme 'Félicitations [Prénom et Nom] pour votre nouvelle maison' sur le sachet. C'est l'option la plus mémorable et la plus susceptible de générer une référence. Le design est ajusté gratuitement par notre équipe." },
    { q: "Quel volume commandent les agents immobiliers de Calgary ?", a: "La plupart des agents commencent avec 10 à 25 sacs pour leurs clôtures de l'année. Les agents plus actifs commandent 50 à 100 sacs à la fois pour réapprovisionner régulièrement. EZPZ s'adapte à tout volume sans minimum, idéal pour les agents qui gèrent les cadeaux transaction par transaction." },
  ],
  siblings: [
    { label: "Agents immobiliers · Montréal", href: "/fr/custom-coffee-real-estate-montreal" },
    { label: "Agents immobiliers · Toronto", href: "/fr/custom-coffee-real-estate-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
  ],
  ctaClose: "La clôture est le début de la relation à long terme. Votre café de marque le dit clairement.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
