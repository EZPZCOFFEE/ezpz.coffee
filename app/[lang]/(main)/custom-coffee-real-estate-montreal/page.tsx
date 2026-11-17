import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les agents immobiliers de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Real Estate Agents | EZPZ Coffee";
  const description = isFr ? "Les agents immobiliers de Montréal génèrent des références avec le café de spécialité personnalisé comme cadeau de clôture. Aucun minimum, design inclus." : "Montreal's bilingual real estate market requires a closing gift that works in both languages. Custom branded specialty coffee — French/English, roasted locally, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-real-estate-montreal`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-real-estate-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-real-estate-montreal",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-real-estate-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-real-estate-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les agents immobiliers de Montréal" : "Custom Coffee Bags for Montreal Real Estate Agents" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Montreal Real Estate Agents",
    subheadline:
      "Montreal's real estate market spans from Plateau triplexes to Outremont duplexes to Griffintown condos. Your closing gift should be as thoughtful as your market knowledge.",
    ctaSubject: "Custom coffee for Montreal real estate agent",
  },
  aeoAnswer:
    "Montreal real estate agents can order bilingual (French/English) custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted locally in Montreal, delivered in 2–3 business days.",
  why: {
    heading: "Montreal Real Estate Agents and the Bilingual Closing Gift",
    paragraphs: [
      "Montreal's real estate market is unlike any other in Canada — it spans French-speaking buyers in Rosemont and Verdun, English-speaking buyers in NDG and the West Island, and a growing bilingual buyer base in Griffintown, Plateau-Mont-Royal, and Mile End who move fluidly between both languages. A real estate agent who serves this market effectively speaks both, and so should their closing gift.",
      "A bilingual custom-branded coffee bag — your name, your photo, your tagline in French and English — is the closing gift that tells your Montreal clients that you understand the city they just bought into. 'Roasted in Montreal' on the bag is genuine local provenance: this coffee is from here, just like you, just like the neighbourhood they chose.",
      "Montreal's real estate is also among Canada's most personal — buyers in this city research the arrondissement, the café culture, the walking score of the block before they make an offer. They are detail-oriented people who notice and appreciate detail in return. A quality closing gift signals that you noticed them too.",
    ],
  },
  useCases: {
    heading: "How Montreal Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "Bilingual closing day gift",
        body: "A French/English branded bag — 'Welcome Home / Bienvenue chez vous' — handed over at the notaire appointment covers every Montreal buyer regardless of their first language. One product, one message, zero awkwardness.",
      },
      {
        title: "Neighbourhood-specific open house bags",
        body: "Leave branded bags at Plateau open houses for Mile End buyers, or Griffintown open houses for Centretown buyers. Montreal buyers are neighbourhood-loyal — a bag that shows you know the neighbourhood builds trust before they've even made an offer.",
      },
      {
        title: "Annual referral network gift",
        body: "November and December are Montreal moving season's quiet period and referral season's peak. A holiday branded coffee bag to your past client list — 'Merci / Thank you' — is a bilingual gesture that lands with both language communities and keeps your name on the fridge for January conversations.",
      },
      {
        title: "Condo investor gifts",
        body: "Montreal's condo investor market — particularly Griffintown, Côte-des-Neiges, and Ville-Marie — involves repeat buyers who invest in multiple units. A premium bilingual branded coffee bag as a closing gift for an investor communicates that you treat their business as the relationship it is, not just a transaction.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery, the freshest possible closing gift for a Montreal agent. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual (French/English) bags for my Montreal clients?",
      a: "Yes. Bilingual packaging is available at no extra charge and is the default recommendation for Montreal agents. One bag, both language communities.",
    },
    {
      q: "Can I put my headshot and contact info on the bag?",
      a: "Yes. Your name, headshot, brokerage logo, phone number, and tagline can all be incorporated into the bag design.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. 100 bags at $11.75/bag. A Montreal agent closing 20 transactions a year who gives a coffee gift at every closing spends less than $2,500/year for a closing gift that keeps their name in the client's home for months.",
    },
    {
      q: "Can I order fresh batches as I close new deals?",
      a: "Yes. Reorders use your saved design and are produced and delivered in 2–3 business days. No commitment required between orders.",
    },
  ],
  siblings: [
    { label: "Real Estate · Toronto", href: "/en/custom-coffee-real-estate-toronto" },
    { label: "Real Estate · Vancouver", href: "/en/custom-coffee-real-estate-vancouver" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
  ],
  ctaClose:
    "Montreal buyers chose their neighbourhood as carefully as their home. Your closing gift should match that intention.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-real-estate-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Agents immobiliers",
    parentHref: "/fr/custom-coffee-bags-real-estate-agents",
    parentLabel: "Agents immobiliers",
  },
  hero: {
    h1: "Café personnalisé pour les agents immobiliers de Montréal",
    subheadline: "Les agents immobiliers de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les agents immobiliers de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les agents immobiliers de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le cadeau de clôture qui génère des références à Montréal",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Le marché immobilier de Plateau-Mont-Royal, Outremont et Griffintown est dynamique et compétitif. Les agents qui se démarquent durablement sont ceux que leurs clients se souviennent et recommandent des années après la transaction.",
      "Un sachet de café de spécialité personnalisé avec le nom et le logo de l'agent, offert lors de la clôture, est le cadeau qui continue à travailler après que le contrat est signé. Chaque matin où le nouveau propriétaire prépare ce café, il voit le nom de l'agent. Quand un ami mentionne chercher un agent, ce nom est là, sur le comptoir de la cuisine.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour chaque client individuellement, avec un message personnalisé à chaque clôture. C'est le niveau de personnalisation qui génère les références.",
    ],
  },
  useCases: {
    heading: "Comment les agents immobiliers de Montréal utilisent le café de marque",
    items: [
    { title: "Cadeau de clôture standard pour chaque transaction", body: "Un sachet de café personnalisé avec un message chaleureux est le cadeau de clôture qui différencie votre service de tous les autres agents que vos clients ont considérés." },
    { title: "Trousse de bienvenue pour les nouveaux propriétaires", body: "Pour les clients qui achètent leur première propriété, créez une trousse de bienvenue avec votre café de marque, un carnet de clés et vos coordonnées. C'est le premier souvenir de leur nouvelle maison." },
    { title: "Cadeau de fin d'année pour le portfolio de clients", body: "Envoyez un sachet de café de marque à tous vos clients actuels et passés pour les Fêtes. C'est un rappel annuel de votre nom, peu coûteux et premium, qui maintient votre position dans leur réseau." },
    { title: "Prospection : coffret pour les contacts de référence", body: "Pour les relations de référence clés, agents de financement, notaires, courtiers, envoyez un café de marque pour garder votre nom en tête pour leurs prochaines recommandations." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les agents immobiliers de Montréal peuvent-ils personnaliser le sachet avec le nom du client ?", a: "Oui. Vous pouvez ajouter une ligne de texte personnalisée comme 'Félicitations [Prénom et Nom] pour votre nouvelle maison' sur le sachet. C'est l'option la plus mémorable et la plus susceptible de générer une référence. Le design est ajusté gratuitement par notre équipe." },
    { q: "Quel volume commandent les agents immobiliers de Montréal ?", a: "La plupart des agents commencent avec 10 à 25 sacs pour leurs clôtures de l'année. Les agents plus actifs commandent 50 à 100 sacs à la fois pour réapprovisionner régulièrement. EZPZ s'adapte à tout volume sans minimum, idéal pour les agents qui gèrent les cadeaux transaction par transaction." },
  ],
  siblings: [
    { label: "Agents immobiliers · Toronto", href: "/fr/custom-coffee-real-estate-toronto" },
    { label: "Agents immobiliers · Vancouver", href: "/fr/custom-coffee-real-estate-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
  ],
  ctaClose: "La clôture est le début de la relation à long terme. Votre café de marque le dit clairement.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
