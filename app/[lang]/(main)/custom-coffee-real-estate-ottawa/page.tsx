import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les agents immobiliers de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Real Estate Agents | EZPZ Coffee";
  const description = isFr ? "Les agents immobiliers de Ottawa génèrent des références avec le café de spécialité personnalisé comme cadeau de clôture. Aucun minimum, design inclus." : "Ottawa's stable government employee market creates loyal, long-term real estate relationships. Bilingual custom branded specialty coffee closing gifts — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-real-estate-ottawa`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-real-estate-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-real-estate-ottawa",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-real-estate-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-real-estate-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les agents immobiliers de Ottawa" : "Custom Coffee Bags for Ottawa Real Estate Agents" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Ottawa Real Estate Agents",
    subheadline:
      "Ottawa's government workforce buys and sells on predictable timelines. The agents who stay in front of that cycle are the ones who brand every closing.",
    ctaSubject: "Custom coffee for Ottawa real estate agent",
  },
  aeoAnswer:
    "Ottawa real estate agents can order bilingual (French/English) custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted in Montreal, delivered to Ottawa in 3–5 business days.",
  why: {
    heading: "Ottawa's Real Estate Market and the Referral-First Opportunity",
    paragraphs: [
      "Ottawa's real estate market has a character unique in Canada: it's driven by a large, stable federal public service workforce whose employment security and pension certainty create reliable, predictable buying and selling cycles. Transfers between departments, promotions to different directorates, retirement moves to Kanata or Orléans — Ottawa's government worker real estate market is one of the most referral-dependent in the country. The agent who delivers the best experience on each transaction collects a lifetime referral network from a community that talks to each other constantly.",
      "Ottawa's bilingual character extends into real estate. The city's francophone communities — Vanier, Orléans, Gatineau across the river — are active buyers and sellers in the National Capital Region's market. An Ottawa agent who serves both language communities with a bilingual branded closing gift signals cultural competence that separates them from agents who only think in one language.",
      "Ottawa's tech sector — Shopify, Kinaxis, L3Harris — has brought a younger, higher-income demographic to markets like Centretown, Westboro, and Hintonburg. These buyers are accustomed to the premium closing gift standard that Toronto and Vancouver agents have set. A specialty coffee bag with your personal brand on it meets that expectation at an investment that easily fits a closing gift budget.",
    ],
  },
  useCases: {
    heading: "How Ottawa Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Bilingual closing day bag",
        body: "A French/English branded bag — 'Welcome Home / Bienvenue chez vous, from [Agent Name]' — covers Ottawa's entire buyer market with a single product. Federal clients, tech buyers, francophone families — the same bag works for everyone, and it lives on their counter for weeks.",
      },
      {
        title: "Annual client database mailing",
        body: "Ottawa's government worker homeowners are almost universally connected to colleagues who are buying, selling, or considering a move. A holiday season mailing to your past client list — 100 to 500 bags depending on database size — keeps your name circulating in the coffee conversations of people who will buy or refer within the next 12 months.",
      },
      {
        title: "Kanata and Orléans tech corridor gifts",
        body: "Ottawa's tech corridor workers in Kanata and the eastern Orléans communities are buying in the $600K–$1M range with the same expectations as Toronto tech buyers. A specialty coffee closing gift signals that Ottawa agents are operating at the same level.",
      },
      {
        title: "Open house leave-behinds for competitive listings",
        body: "Ottawa's competitive spring and fall markets have buyers attending multiple open houses per weekend. A branded coffee bag from the listing agent is a take-home that keeps your name in front of buyers who are actively comparing properties and agents.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual bags for my Ottawa closing gifts?",
      a: "Yes. Bilingual packaging is available at no extra charge and is recommended for Ottawa agents given the city's bilingual buyer market.",
    },
    {
      q: "Can I include my headshot and contact info?",
      a: "Yes. Full design customization — headshot, name, brokerage, phone, and tagline — is supported.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. 100 bags at $11.75/bag. Ottawa agents typically order 100–200 bags per quarter for a consistent closing gift program.",
    },
    {
      q: "How fast is delivery to Ottawa?",
      a: "3–5 business days from Montreal. Order with 7–10 days lead time to ensure arrival before a planned closing.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Montreal", href: "/en/custom-coffee-real-estate-montreal" },
    { label: "Corporate Offices · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
  ],
  ctaClose:
    "Ottawa's government buyers buy and sell on 10-year cycles. Be the agent they call every time.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-real-estate-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Agents immobiliers",
    parentHref: "/fr/custom-coffee-bags-real-estate-agents",
    parentLabel: "Agents immobiliers",
  },
  hero: {
    h1: "Café personnalisé pour les agents immobiliers de Ottawa",
    subheadline: "Les agents immobiliers de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les agents immobiliers de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les agents immobiliers de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le cadeau de clôture qui génère des références à Ottawa",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Le marché immobilier de Westboro, Glebe et Centretown est dynamique et compétitif. Les agents qui se démarquent durablement sont ceux que leurs clients se souviennent et recommandent des années après la transaction.",
      "Un sachet de café de spécialité personnalisé avec le nom et le logo de l'agent, offert lors de la clôture, est le cadeau qui continue à travailler après que le contrat est signé. Chaque matin où le nouveau propriétaire prépare ce café, il voit le nom de l'agent. Quand un ami mentionne chercher un agent, ce nom est là, sur le comptoir de la cuisine.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour chaque client individuellement, avec un message personnalisé à chaque clôture. C'est le niveau de personnalisation qui génère les références. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les agents immobiliers de Ottawa utilisent le café de marque",
    items: [
    { title: "Cadeau de clôture standard pour chaque transaction", body: "Un sachet de café personnalisé avec un message chaleureux est le cadeau de clôture qui différencie votre service de tous les autres agents que vos clients ont considérés." },
    { title: "Trousse de bienvenue pour les nouveaux propriétaires", body: "Pour les clients qui achètent leur première propriété, créez une trousse de bienvenue avec votre café de marque, un carnet de clés et vos coordonnées. C'est le premier souvenir de leur nouvelle maison." },
    { title: "Cadeau de fin d'année pour le portfolio de clients", body: "Envoyez un sachet de café de marque à tous vos clients actuels et passés pour les Fêtes. C'est un rappel annuel de votre nom, peu coûteux et premium, qui maintient votre position dans leur réseau." },
    { title: "Prospection : coffret pour les contacts de référence", body: "Pour les relations de référence clés, agents de financement, notaires, courtiers, envoyez un café de marque pour garder votre nom en tête pour leurs prochaines recommandations." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les agents immobiliers de Ottawa peuvent-ils personnaliser le sachet avec le nom du client ?", a: "Oui. Vous pouvez ajouter une ligne de texte personnalisée comme 'Félicitations [Prénom et Nom] pour votre nouvelle maison' sur le sachet. C'est l'option la plus mémorable et la plus susceptible de générer une référence. Le design est ajusté gratuitement par notre équipe." },
    { q: "Quel volume commandent les agents immobiliers de Ottawa ?", a: "La plupart des agents commencent avec 10 à 25 sacs pour leurs clôtures de l'année. Les agents plus actifs commandent 50 à 100 sacs à la fois pour réapprovisionner régulièrement. EZPZ s'adapte à tout volume sans minimum, idéal pour les agents qui gèrent les cadeaux transaction par transaction." },
  ],
  siblings: [
    { label: "Agents immobiliers · Montréal", href: "/fr/custom-coffee-real-estate-montreal" },
    { label: "Agents immobiliers · Toronto", href: "/fr/custom-coffee-real-estate-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
  ],
  ctaClose: "La clôture est le début de la relation à long terme. Votre café de marque le dit clairement.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
