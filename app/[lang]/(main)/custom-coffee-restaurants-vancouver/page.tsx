import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les restaurants de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Restaurants | EZPZ Coffee";
  const description = isFr ? "Les restaurants de Vancouver se distinguent avec leur propre café de spécialité de marque. Aucun minimum, design inclus, torréfié à Montréal." : "Vancouver restaurants compete on authenticity and sustainability. Custom branded specialty coffee — origin-specific, traceable, zero minimum, from $11.75/bag, delivered in 4–6 business days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-restaurants-vancouver`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-restaurants-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-restaurants-vancouver",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-restaurants-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-restaurants-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les restaurants de Vancouver" : "Custom Coffee Bags for Vancouver Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Vancouver Restaurants",
    subheadline:
      "Vancouver's dining scene is MICHELIN-recognized and globally watched. Your coffee should be traceable, branded, and worth talking about.",
    ctaSubject: "Custom coffee for Vancouver restaurant",
  },
  aeoAnswer:
    "Vancouver restaurants can order custom branded specialty coffee from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order in Montreal and delivered to Vancouver in 4–6 business days. Single-origin, traceable coffees are available.",
  why: {
    heading: "Vancouver's Restaurant Market and the Coffee Brand Gap",
    paragraphs: [
      "Vancouver joined the MICHELIN Guide in 2022, recognizing what locals already knew: the city's restaurant scene — Gastown to Yaletown, Kitsilano to Commercial Drive — is globally significant. The multicultural dining landscape is unlike anywhere else in Canada, with world-class Japanese, Chinese, Pacific Northwest, and fusion concepts competing for an audience that has eaten in Tokyo, New York, and Copenhagen.",
      "That same audience is deeply sustainability-conscious. Vancouver leads Canada in organic certification adoption, sustainability commitments, and 'know your farmer' storytelling. A single-origin specialty coffee bag with a traceable supply chain — farm name, processing method, roast date — lands authentically in this market in a way no commodity coffee can.",
      "EZPZ sources specialty coffees with the kind of traceability Vancouver restaurants can put on their menu. A Yirgacheffe natural process from a named cooperative, a washed Guatemalan from a specific micro-lot — the kind of coffee story that fits a menu already telling the story of its proteins, its produce, and its cheese.",
    ],
  },
  useCases: {
    heading: "How Vancouver Restaurants Use Custom Coffee",
    items: [
      {
        title: "Farm-to-table coffee narrative",
        body: "Add your coffee's origin, process, and elevation to your menu — the same language you use for your salmon or your beef. A branded bag that carries that story extends the farm-to-table philosophy to the final course.",
      },
      {
        title: "Gastown and Yaletown retail bags",
        body: "Vancouver's tourist-heavy neighbourhoods have guests actively looking to take home local, premium products. A branded coffee bag at $18–$22 is an accessible, TSA-friendly souvenir that carries your restaurant's identity across North America.",
      },
      {
        title: "Collaboration and neighbourhood identity",
        body: "Vancouver has a strong local food identity. EZPZ can help you develop a coffee program that acknowledges the city's culture while making the bag your own — a neighbourhood roast or a house variant that's distinctly yours and connectable to your block.",
      },
      {
        title: "Sustainable close-of-meal service",
        body: "Replace single-serve pods or generic commercial coffee with a specialty bag program. One bag serves multiple guests, generates less packaging waste per cup, and gives diners something to take home. It's the sustainable closing ritual for a restaurant that already composts, sources locally, and eliminates straws.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. For seasonal menu changes or spring/fall openings, we recommend ordering with 3 weeks lead time. All coffees are roasted to order — no sitting inventory, maximum freshness.",
  faq: [
    {
      q: "Can I get traceable single-origin coffees for my restaurant?",
      a: "Yes. EZPZ sources specialty grade (80+ SCA score) coffees with traceability to the farm, cooperative, or washing station. We can provide the origin story, processing method, and cupping notes to publish on your menu.",
    },
    {
      q: "How does Vancouver delivery timing work?",
      a: "Standard orders arrive in 4–6 business days from order confirmation. We recommend keeping 2–3 weeks of supply on hand to avoid running short — coffee is roasted to order, so there's no 'pull from stock' option.",
    },
    {
      q: "Can you match the coffee to our cuisine's flavor profile?",
      a: "Yes. If your restaurant serves Japanese cuisine, we might recommend a clean washed Ethiopian that complements umami flavors. For a Pacific Northwest seafood menu, a bright Colombian or sweet Brazilian filter roast. We'll work with you on the pairing.",
    },
    {
      q: "Is there a sustainability angle I can communicate to guests?",
      a: "Yes. EZPZ's bags use one-way valve pouches that extend freshness and reduce waste compared to pods. The specialty supply chain is traceable. You can describe your coffee as 'specialty-grade, ethically sourced, roasted to order in Canada.'",
    },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver eats with intention. Make sure your coffee can say the same.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-restaurants-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Restaurants",
    parentHref: "/fr/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Café personnalisé pour les restaurants de Vancouver",
    subheadline: "Les restaurants de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les restaurants de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les restaurants de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans la scène gastronomique de Vancouver",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Les restaurants de Gastown, Yaletown et Main Street se démarquent par leur identité de marque autant que par leur menu. Dans ce marché compétitif, le café en fin de repas est le dernier point de contact avec vos clients, et c'est souvent le plus mémorable.",
      "Un café de spécialité personnalisé avec le nom et le logo de votre restaurant transforme ce moment final en un ancrage de marque. Les clients qui emportent un sachet chez eux préparent votre café chaque matin et se souviennent de leur expérience. Ce rappel quotidien génère des rebookings, des références et des avis positifs sans aucune dépense marketing.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Vous pouvez servir votre café de marque au restaurant et le vendre au comptoir à la sortie. Aucun minimum de commande signifie que vous pouvez commencer avec une petite quantité et ajuster selon la demande.",
    ],
  },
  useCases: {
    heading: "Comment les restaurants de Vancouver utilisent le café de marque",
    items: [
    { title: "Service en fin de repas et café de maison", body: "Servez votre propre café de spécialité de marque en fin de repas. L'histoire de l'origine et le design du sachet créent un moment de conversation qui marque la mémoire de vos clients." },
    { title: "Vente au comptoir comme produit à emporter", body: "Proposez des sacs de votre café de maison à la caisse ou à l'entrée. Les clients qui ont adoré leur café voudront en acheter pour chez eux, et chaque sachet maintient votre marque dans leur cuisine." },
    { title: "Cadeaux corporatifs et événements privés", body: "Pour les événements privés, les réceptions d'entreprise et les sorties de groupe, utilisez votre café de marque comme cadeau de bienvenue ou faveur de table qui reflète la qualité de votre établissement." },
    { title: "Coffrets et paniers cadeaux des Fêtes", body: "Créez des coffrets cadeaux premium avec votre café de maison pour les Fêtes. Les clients réguliers achètent ces coffrets pour offrir à leurs proches une expérience liée à leur restaurant préféré de Vancouver." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les restaurants de Vancouver servent-ils le café EZPZ en fin de repas ?", a: "La plupart des restaurants servent le café dans un filtre ou une cafetière French press, avec le sachet ouvert visible ou posé sur la table pour que les clients voient l'histoire de l'origine. D'autres servent la portion en capsule ou en dosette adaptée à leur équipement." },
    { q: "Peut-on commander des sacs avec les noms des restaurants de Vancouver sans fichiers prêts à imprimer ?", a: "Oui. Notre équipe de design gère l'ensemble de la création visuelle. Fournissez votre logo et vos couleurs de marque, et nous créons un design de sachet professionnel sans frais supplémentaires. Aucun fichier prêt à imprimer ni designer externe n'est nécessaire." },
  ],
  siblings: [
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
  ],
  ctaClose: "La dernière impression que vous laissez à vos clients de Vancouver. Faites-la mémorable.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
