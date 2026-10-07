import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les restaurants de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Restaurants | EZPZ Coffee";
  const description = isFr ? "Les restaurants de Calgary se distinguent avec leur propre café de spécialité de marque. Aucun minimum, design inclus, torréfié à Montréal." : "Calgary's energy sector dining culture and Stampede season demand premium. Custom branded specialty coffee for restaurants — zero minimum, from $11.75/bag, delivered in 4–6 days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-restaurants-calgary`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-restaurants-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-restaurants-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-restaurants-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les restaurants de Calgary" : "Custom Coffee Bags for Calgary Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Calgary Restaurants",
    subheadline:
      "Calgary's dining scene punches above its weight — and in Stampede season, the entire city is a restaurant. Brand every cup.",
    ctaSubject: "Custom coffee for Calgary restaurant",
  },
  aeoAnswer:
    "Calgary restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Why Calgary Restaurants Are Differentiating Through Coffee",
    paragraphs: [
      "Calgary's population surpassed 1.4 million and is growing faster than any other major Canadian city. The restaurant strip on 17th Avenue SW, the Kensington Village, and the Inglewood neighbourhood are increasingly competitive markets where cuisine alone no longer sets you apart. Calgary diners — particularly the energy sector executives on expense accounts who populate downtown steakhouses and upscale cocktail bars — are accustomed to the best and notice the difference between a commodity coffee and a specialty one.",
      "Calgary Stampede is the most intense 10-day hospitality event in Western Canada, bringing over 1.2 million visitors to a city that runs at full capacity. The restaurants that make a memorable impression during Stampede — with a custom-branded bag as a takeaway, a post-dinner coffee that guests ask about, or a retail bag at the host stand — capture guest loyalty that lasts well past July.",
      "Alberta beef culture means Calgary's best restaurants already tell a precise story about provenance and quality. Coffee is the final course in that story. A single-origin specialty bag with your restaurant's branding, describing the farm, the processing method, and the roast date, extends the same rigorous sourcing narrative to the cup.",
    ],
  },
  useCases: {
    heading: "How Calgary Restaurants Use Branded Coffee",
    items: [
      {
        title: "Energy sector client entertaining",
        body: "Calgary's oil and gas executives entertain at steakhouses and upscale dining rooms on budgets that prioritize premium over price. A custom-labeled post-dinner coffee — with your restaurant's name and a specialty origin story — is the kind of elevated closer that keeps the table talking.",
      },
      {
        title: "Stampede season takeaway bags",
        body: "During the 10 days of Calgary Stampede, your restaurant has guests who'll never come back unless you give them a reason to think of you. A branded coffee bag at $18–$22 is a souvenir they use every morning — far more effective than a business card.",
      },
      {
        title: "Alberta beef pairing concept",
        body: "A menu that describes the origin of its beef, the farm of its produce, and the cooperative of its coffee tells a complete story. EZPZ can source a traceable specialty origin and put it on your menu and in a retail bag. Your coffee becomes a product with the same integrity as your proteins.",
      },
      {
        title: "House blend as restaurant identity",
        body: "17th Ave and Inglewood restaurant-goers are loyal to the places that have a defined identity. A named house blend — something your front-of-house team can describe with the same enthusiasm as a wine recommendation — creates a coffee memory that anchors repeat visits.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. For Stampede season, we recommend ordering 4 weeks before July to ensure supply through the full event. Starting at $11.75/bag at 100 bags, with volume pricing available for event-scale orders.",
  faq: [
    {
      q: "Can I order in time for Calgary Stampede?",
      a: "Yes. For Stampede in early July, we recommend ordering by early June. Orders of 100–500 bags have a 2–3 week lead time from design approval to delivery. Place your order by June 1 to be comfortable.",
    },
    {
      q: "Do you have coffees that pair with an Alberta beef-forward menu?",
      a: "Yes. For steakhouses and beef-forward menus, EZPZ recommends a full-bodied, low-acid profile — often a natural-processed Brazil or a Sumatra — that complements rich proteins without competing. We'll work with you on the pairing.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum enforced. Start with 100 bags at $11.75/bag to test the concept. Stampede-scale orders (1,000+) qualify for volume pricing — contact us.",
    },
    {
      q: "How fresh is the coffee by the time it reaches Calgary?",
      a: "Very fresh. EZPZ roasts to order — bags are roasted, rested, and shipped within 48–72 hours of production. Calgary delivery takes 4–6 business days, so guests receive coffee typically roasted 6–8 days ago.",
    },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
    { label: "Corporate Offices · Calgary", href: "/en/custom-coffee-corporate-offices-calgary" },
    { label: "Cafés · Calgary", href: "/en/custom-coffee-cafes-calgary" },
  ],
  ctaClose:
    "Calgary's dining scene is growing fast. Make sure your restaurant's coffee brand is growing with it.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-restaurants-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Restaurants",
    parentHref: "/fr/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Café personnalisé pour les restaurants de Calgary",
    subheadline: "Les restaurants de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les restaurants de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les restaurants de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans la scène gastronomique de Calgary",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Les restaurants de 17e Avenue SO, Kensington et Inglewood se démarquent par leur identité de marque autant que par leur menu. Dans ce marché compétitif, le café en fin de repas est le dernier point de contact avec vos clients, et c'est souvent le plus mémorable.",
      "Un café de spécialité personnalisé avec le nom et le logo de votre restaurant transforme ce moment final en un ancrage de marque. Les clients qui emportent un sachet chez eux préparent votre café chaque matin et se souviennent de leur expérience. Ce rappel quotidien génère des rebookings, des références et des avis positifs sans aucune dépense marketing.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Vous pouvez servir votre café de marque au restaurant et le vendre au comptoir à la sortie. Aucun minimum de commande signifie que vous pouvez commencer avec une petite quantité et ajuster selon la demande.",
    ],
  },
  useCases: {
    heading: "Comment les restaurants de Calgary utilisent le café de marque",
    items: [
    { title: "Service en fin de repas et café de maison", body: "Servez votre propre café de spécialité de marque en fin de repas. L'histoire de l'origine et le design du sachet créent un moment de conversation qui marque la mémoire de vos clients." },
    { title: "Vente au comptoir comme produit à emporter", body: "Proposez des sacs de votre café de maison à la caisse ou à l'entrée. Les clients qui ont adoré leur café voudront en acheter pour chez eux, et chaque sachet maintient votre marque dans leur cuisine." },
    { title: "Cadeaux corporatifs et événements privés", body: "Pour les événements privés, les réceptions d'entreprise et les sorties de groupe, utilisez votre café de marque comme cadeau de bienvenue ou faveur de table qui reflète la qualité de votre établissement." },
    { title: "Coffrets et paniers cadeaux des Fêtes", body: "Créez des coffrets cadeaux premium avec votre café de maison pour les Fêtes. Les clients réguliers achètent ces coffrets pour offrir à leurs proches une expérience liée à leur restaurant préféré de Calgary." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les restaurants de Calgary servent-ils le café EZPZ en fin de repas ?", a: "La plupart des restaurants servent le café dans un filtre ou une cafetière French press, avec le sachet ouvert visible ou posé sur la table pour que les clients voient l'histoire de l'origine. D'autres servent la portion en capsule ou en dosette adaptée à leur équipement." },
    { q: "Peut-on commander des sacs avec les noms des restaurants de Calgary sans fichiers prêts à imprimer ?", a: "Oui. Notre équipe de design gère l'ensemble de la création visuelle. Fournissez votre logo et vos couleurs de marque, et nous créons un design de sachet professionnel sans frais supplémentaires. Aucun fichier prêt à imprimer ni designer externe n'est nécessaire." },
  ],
  siblings: [
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
  ],
  ctaClose: "La dernière impression que vous laissez à vos clients de Calgary. Faites-la mémorable.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
