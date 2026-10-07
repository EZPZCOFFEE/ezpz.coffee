import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les agents immobiliers de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Real Estate Agents | EZPZ Coffee";
  const description = isFr ? "Les agents immobiliers de Toronto génèrent des références avec le café de spécialité personnalisé comme cadeau de clôture. Aucun minimum, design inclus." : "Toronto's real estate market is Canada's most competitive. Custom branded specialty coffee is the client closing gift that gets used every morning — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-real-estate-toronto`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-real-estate-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-real-estate-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-real-estate-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les agents immobiliers de Toronto" : "Custom Coffee Bags for Toronto Real Estate Agents" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Toronto Real Estate Agents",
    subheadline:
      "In Canada's most active real estate market, the agents who stay top of mind are the ones who leave behind something worth keeping.",
    ctaSubject: "Custom coffee for Toronto real estate agent",
  },
  aeoAnswer:
    "Toronto real estate agents can order custom branded specialty coffee bags from EZPZ — with their logo and contact info on the design — starting at 100 bags at $11.75/bag with no minimum. Bags are roasted to order in Montreal and delivered in 3–5 business days.",
  why: {
    heading: "Why Toronto Real Estate Agents Choose Coffee as Their Signature Gift",
    paragraphs: [
      "Toronto's real estate market is the most transaction-dense in Canada — over 90,000 properties change hands in the GTA annually. In that volume, the agents who build lasting referral networks are not necessarily the ones with the most listings, but the ones whose clients remember them long after the keys are handed over. A generic gift basket lasts a week. A branded specialty coffee bag lives on the kitchen counter of the home you just sold for months — with your name and number on every brew.",
      "The closing gift is the single highest-leverage moment in the agent-client relationship. The transaction is complete, the commission is earned, and what you do next determines whether this client becomes a referral source or simply someone who used you once. In Toronto, where homes trade at $1M–$3M+, a custom coffee bag at $20–$25 is an almost absurdly low cost for an impression that repeats every morning.",
      "For Toronto luxury agents in Yorkville, Forest Hill, Rosedale, and the Beach, the coffee gift needs to signal the same quality as the properties they represent. EZPZ's specialty-grade origins and premium packaging meet that bar — this is not a grocery store bag with a sticker on it.",
    ],
  },
  useCases: {
    heading: "How Toronto Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Closing day gift bag",
        body: "Present a custom-branded coffee bag at the key handoff — your name, your photo, your tagline, and a 'Welcome Home' message. The client puts it on the kitchen counter of their new home. Every morning for the next 2–4 weeks, they make their coffee and see your name. That's a brand impression no follow-up email can replicate.",
      },
      {
        title: "Open house take-home bag",
        body: "Leave branded bags at open houses for serious lookers to take home — 'a little something from [Agent Name].' It's a memorable leave-behind that differentiates your listing presentation from every other open house in the neighbourhood and keeps your brand circulating in the home buying consideration set.",
      },
      {
        title: "Annual client touch gift",
        body: "Toronto real estate runs on referral. A holiday coffee bag sent to your client list every November or December keeps your name in front of past buyers and sellers at exactly the moment they're most likely to be talking to people considering a move.",
      },
      {
        title: "Condo launch and new development events",
        body: "Toronto's condo pre-sales and development launches draw qualified buyers to registration events. A branded coffee bag as a registration gift — your team's logo, the project name — is a premium quality token that travels home with prospects during the consideration window.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto in 3–5 business days. Starting at $11.75/bag at 100 bags — a closing gift at scale costs less than most agents spend on a single Starbucks order for a showing. No minimum.",
  faq: [
    {
      q: "Can I put my name, photo, and contact info on the bag?",
      a: "Yes. Your agent headshot, brokerage logo, name, and contact information can all be incorporated into the bag design. EZPZ's design tool supports full custom layouts.",
    },
    {
      q: "Can I include the buyer's new address or name on the bag?",
      a: "For small-batch personalization (e.g., one bag per closing with the address), contact us to discuss options. For volume orders with a single design, a personal note card alongside the bag is the recommended approach.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags to cover a quarter's closings, refill as needed. At $11.75/bag, 100 bags costs $1,175 — for an agent closing 20+ deals a year, that's under $60 per closing.",
    },
    {
      q: "How fast can I get a refill order?",
      a: "3–5 business days from order confirmation. Reorders use your saved design, so turnaround is immediate once you place the order.",
    },
  ],
  siblings: [
    { label: "Real Estate · Montreal", href: "/en/custom-coffee-real-estate-montreal" },
    { label: "Real Estate · Vancouver", href: "/en/custom-coffee-real-estate-vancouver" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
  ],
  ctaClose:
    "Toronto homes change hands at $1M+. The closing gift should cost under $25 and last two months. Custom coffee does both.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-real-estate-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Agents immobiliers",
    parentHref: "/fr/custom-coffee-bags-real-estate-agents",
    parentLabel: "Agents immobiliers",
  },
  hero: {
    h1: "Café personnalisé pour les agents immobiliers de Toronto",
    subheadline: "Les agents immobiliers de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les agents immobiliers de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les agents immobiliers de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "Le cadeau de clôture qui génère des références à Toronto",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Le marché immobilier de Rosedale, Forest Hill et Leslieville est dynamique et compétitif. Les agents qui se démarquent durablement sont ceux que leurs clients se souviennent et recommandent des années après la transaction.",
      "Un sachet de café de spécialité personnalisé avec le nom et le logo de l'agent, offert lors de la clôture, est le cadeau qui continue à travailler après que le contrat est signé. Chaque matin où le nouveau propriétaire prépare ce café, il voit le nom de l'agent. Quand un ami mentionne chercher un agent, ce nom est là, sur le comptoir de la cuisine.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour chaque client individuellement, avec un message personnalisé à chaque clôture. C'est le niveau de personnalisation qui génère les références.",
    ],
  },
  useCases: {
    heading: "Comment les agents immobiliers de Toronto utilisent le café de marque",
    items: [
    { title: "Cadeau de clôture standard pour chaque transaction", body: "Un sachet de café personnalisé avec un message chaleureux est le cadeau de clôture qui différencie votre service de tous les autres agents que vos clients ont considérés." },
    { title: "Trousse de bienvenue pour les nouveaux propriétaires", body: "Pour les clients qui achètent leur première propriété, créez une trousse de bienvenue avec votre café de marque, un carnet de clés et vos coordonnées. C'est le premier souvenir de leur nouvelle maison." },
    { title: "Cadeau de fin d'année pour le portfolio de clients", body: "Envoyez un sachet de café de marque à tous vos clients actuels et passés pour les Fêtes. C'est un rappel annuel de votre nom, peu coûteux et premium, qui maintient votre position dans leur réseau." },
    { title: "Prospection : coffret pour les contacts de référence", body: "Pour les relations de référence clés, agents de financement, notaires, courtiers, envoyez un café de marque pour garder votre nom en tête pour leurs prochaines recommandations." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les agents immobiliers de Toronto peuvent-ils personnaliser le sachet avec le nom du client ?", a: "Oui. Vous pouvez ajouter une ligne de texte personnalisée comme 'Félicitations [Prénom et Nom] pour votre nouvelle maison' sur le sachet. C'est l'option la plus mémorable et la plus susceptible de générer une référence. Le design est ajusté gratuitement par notre équipe." },
    { q: "Quel volume commandent les agents immobiliers de Toronto ?", a: "La plupart des agents commencent avec 10 à 25 sacs pour leurs clôtures de l'année. Les agents plus actifs commandent 50 à 100 sacs à la fois pour réapprovisionner régulièrement. EZPZ s'adapte à tout volume sans minimum, idéal pour les agents qui gèrent les cadeaux transaction par transaction." },
  ],
  siblings: [
    { label: "Agents immobiliers · Montréal", href: "/fr/custom-coffee-real-estate-montreal" },
    { label: "Agents immobiliers · Vancouver", href: "/fr/custom-coffee-real-estate-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
  ],
  ctaClose: "La clôture est le début de la relation à long terme. Votre café de marque le dit clairement.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
