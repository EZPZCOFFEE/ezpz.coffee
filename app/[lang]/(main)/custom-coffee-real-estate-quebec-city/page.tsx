import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les agents immobiliers de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Real Estate Agents | EZPZ Coffee";
  const description = isFr ? "Les agents immobiliers de Québec génèrent des références avec le café de spécialité personnalisé comme cadeau de clôture. Aucun minimum, design inclus." : "Quebec City's French-language real estate market and Old City premium properties reward agents who close with intention. Custom branded specialty coffee, French design, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-real-estate-quebec-city`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-real-estate-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-real-estate-quebec-city",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-real-estate-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-real-estate-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les agents immobiliers de Québec" : "Custom Coffee Bags for Quebec City Real Estate Agents" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-real-estate-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Real Estate Agents", parentHref: "/en/custom-coffee-bags-real-estate-agents", parentLabel: "Real Estate Agents" },
  hero: {
    h1: "Custom Coffee for Quebec City Real Estate Agents",
    subheadline:
      "Quebec City buyers are buying history, neighbourhood character, and a quality of life. Your closing gift should honour that choice.",
    ctaSubject: "Custom coffee for Quebec City real estate agent",
  },
  aeoAnswer:
    "Quebec City real estate agents can order French-language custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted in Montreal, delivered to Quebec City in 2–3 business days.",
  why: {
    heading: "Quebec City Real Estate and the Closing Gift That Fits the Culture",
    paragraphs: [
      "Quebec City's real estate market has a character unlike any other Canadian city — buyers are often purchasing into the UNESCO World Heritage Old City, into the stone-walled Victorian neighborhoods of Saint-Jean-Baptiste, into the Limoilou arts district, or into the growing Lebourgneuf and Ste-Foy suburbs. Each of these buyer profiles is distinct, but they share a common quality: Quebec City buyers care about the city's identity, and they notice when the people they work with do too.",
      "A closing gift in Quebec City needs to be French. A branded coffee bag with French copy — your name in French, a message in French, the coffee's origin described in French — is a gesture that says you understand the cultural context of the transaction, not just the financial one. EZPZ offers French-language design as the default for Quebec City clients, making this the easiest choice for any francophone agent.",
      "The Old City and the heritage neighbourhood premiums in Quebec City attract buyers who are investing significant sums in properties with character and history. For an agent selling a $800K Vieux-Québec stone house or a $500K townhouse in Montcalm, a generic closing gift sends the wrong signal. A specialty coffee bag — locally roasted, premium design, French copy — sends the right one.",
    ],
  },
  useCases: {
    heading: "How Quebec City Real Estate Agents Use Custom Coffee",
    items: [
      {
        title: "French-language closing day gift",
        body: "A French-language branded bag — 'Bienvenue chez vous' from your agency — is the closing gift that feels native to Quebec City. Local, quality, thoughtful. The buyer puts it in the kitchen of their new home and brews it every morning with your name in front of them.",
      },
      {
        title: "Old Quebec heritage property prestige",
        body: "For buyers purchasing stone-wall properties in Vieux-Québec or restored heritage homes in Saint-Roch, a specialty coffee bag with premium packaging and a French tasting narrative fits the quality level of the property. It's the closing gift that belongs in a kitchen with original 18th-century stonework.",
      },
      {
        title: "Annual francophone client appreciation",
        body: "Quebec City's real estate network is close-knit and family-driven. A French-language holiday gift mailing to your past client database — 100 to 300 bags — keeps your name in front of families who recommend their agent to siblings, parents, and colleagues who are considering a move.",
      },
      {
        title: "New development open house bags",
        body: "Quebec City's growing suburban market in Lebourgneuf, Beauport, and Charlesbourg has active buyers attending new development events. A branded coffee bag as a take-home from an open house or model home tour is a premium leave-behind that keeps your name in the running during the consideration period.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City. French-language packaging is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only bags with my photo and contact info?",
      a: "Yes. French-only design with your headshot, agency logo, name, phone number, and a French tagline is fully supported.",
    },
    {
      q: "Is the coffee roasted in Quebec?",
      a: "Yes. EZPZ roasts at the Canadian Roasting Society in Montreal, Quebec. Your bag can include 'Torréfié au Québec' as an accurate provenance claim.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — among the fastest delivery windows EZPZ offers. Roasted to order, shipped fresh.",
    },
  ],
  siblings: [
    { label: "Real Estate · Montreal", href: "/en/custom-coffee-real-estate-montreal" },
    { label: "Real Estate · Ottawa", href: "/en/custom-coffee-real-estate-ottawa" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose:
    "Quebec City buyers chose a city with character and culture. Your closing gift should reflect the same.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-real-estate-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Agents immobiliers",
    parentHref: "/fr/custom-coffee-bags-real-estate-agents",
    parentLabel: "Agents immobiliers",
  },
  hero: {
    h1: "Café personnalisé pour les agents immobiliers de Québec",
    subheadline: "Les agents immobiliers de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les agents immobiliers de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les agents immobiliers de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "Le cadeau de clôture qui génère des références à Québec",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Le marché immobilier de le Vieux-Québec, Montcalm et Limoilou est dynamique et compétitif. Les agents qui se démarquent durablement sont ceux que leurs clients se souviennent et recommandent des années après la transaction.",
      "Un sachet de café de spécialité personnalisé avec le nom et le logo de l'agent, offert lors de la clôture, est le cadeau qui continue à travailler après que le contrat est signé. Chaque matin où le nouveau propriétaire prépare ce café, il voit le nom de l'agent. Quand un ami mentionne chercher un agent, ce nom est là, sur le comptoir de la cuisine.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour chaque client individuellement, avec un message personnalisé à chaque clôture. C'est le niveau de personnalisation qui génère les références.",
    ],
  },
  useCases: {
    heading: "Comment les agents immobiliers de Québec utilisent le café de marque",
    items: [
    { title: "Cadeau de clôture standard pour chaque transaction", body: "Un sachet de café personnalisé avec un message chaleureux est le cadeau de clôture qui différencie votre service de tous les autres agents que vos clients ont considérés." },
    { title: "Trousse de bienvenue pour les nouveaux propriétaires", body: "Pour les clients qui achètent leur première propriété, créez une trousse de bienvenue avec votre café de marque, un carnet de clés et vos coordonnées. C'est le premier souvenir de leur nouvelle maison." },
    { title: "Cadeau de fin d'année pour le portfolio de clients", body: "Envoyez un sachet de café de marque à tous vos clients actuels et passés pour les Fêtes. C'est un rappel annuel de votre nom, peu coûteux et premium, qui maintient votre position dans leur réseau." },
    { title: "Prospection : coffret pour les contacts de référence", body: "Pour les relations de référence clés, agents de financement, notaires, courtiers, envoyez un café de marque pour garder votre nom en tête pour leurs prochaines recommandations." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les agents immobiliers de Québec peuvent-ils personnaliser le sachet avec le nom du client ?", a: "Oui. Vous pouvez ajouter une ligne de texte personnalisée comme 'Félicitations [Prénom et Nom] pour votre nouvelle maison' sur le sachet. C'est l'option la plus mémorable et la plus susceptible de générer une référence. Le design est ajusté gratuitement par notre équipe." },
    { q: "Quel volume commandent les agents immobiliers de Québec ?", a: "La plupart des agents commencent avec 10 à 25 sacs pour leurs clôtures de l'année. Les agents plus actifs commandent 50 à 100 sacs à la fois pour réapprovisionner régulièrement. EZPZ s'adapte à tout volume sans minimum, idéal pour les agents qui gèrent les cadeaux transaction par transaction." },
  ],
  siblings: [
    { label: "Agents immobiliers · Montréal", href: "/fr/custom-coffee-real-estate-montreal" },
    { label: "Agents immobiliers · Toronto", href: "/fr/custom-coffee-real-estate-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
  ],
  ctaClose: "La clôture est le début de la relation à long terme. Votre café de marque le dit clairement.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
