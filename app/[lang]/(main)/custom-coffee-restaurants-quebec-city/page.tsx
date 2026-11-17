import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les restaurants de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Restaurants | EZPZ Coffee";
  const description = isFr ? "Les restaurants de Québec se distinguent avec leur propre café de spécialité de marque. Aucun minimum, design inclus, torréfié à Montréal." : "Quebec City's French gastronomic tradition and UNESCO World Heritage tourism create a unique restaurant market. Custom branded specialty coffee — French design, roasted in QC, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-restaurants-quebec-city`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-restaurants-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-restaurants-quebec-city",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-restaurants-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-restaurants-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les restaurants de Québec" : "Custom Coffee Bags for Quebec City Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Quebec City Restaurants",
    subheadline:
      "UNESCO heritage. French gastronomy. 10 million visitors a year. The coffee in your restaurant is part of the story.",
    ctaSubject: "Custom coffee for Quebec City restaurant",
  },
  aeoAnswer:
    "Quebec City restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted to order in Montreal, delivered to Quebec City in 2–3 business days. French-language design is the default.",
  why: {
    heading: "Why Quebec City Restaurants Need a Coffee With a Story",
    paragraphs: [
      "Quebec City's Old Town is a UNESCO World Heritage Site that attracts over 10 million visitors annually, including hundreds of thousands who come specifically for the French culinary experience — poutine in its birthplace, tourtière from a stone-wall bistro, foie gras from Charlevoix. The restaurants on Rue Saint-Jean, in Place Royale, and along the Grand Allée are part of a culinary tradition that guests expect to be authentic at every detail.",
      "A generic coffee at the close of a beautifully executed French meal in Old Quebec is a missed opportunity. EZPZ's custom-branded specialty bags let Quebec City restaurants complete their culinary narrative with a coffee that has the same intentionality as the rest of the menu — described by origin, process, and tasting notes in French, packaged in a bag that reflects the restaurant's design identity.",
      "EZPZ roasts in Montreal — the same province, one of the fastest delivery times in Canada — which makes 'roasted au Québec' a genuine and defensible claim on your bag copy. For a city whose culinary identity is built on local provenance, that matters.",
    ],
  },
  useCases: {
    heading: "How Quebec City Restaurants Use Branded Coffee",
    items: [
      {
        title: "French-language post-dinner souvenir",
        body: "A beautifully designed French-language bag — describing your restaurant's coffee in the voice of your brand — is the premium souvenir that tourists bring home from Old Quebec. At $20–$22 retail, it's accessible and distinctive. Many visitors buy two: one to keep and one to gift.",
      },
      {
        title: "Festival season hospitality",
        body: "Le Festival d'été de Québec and Carnaval de Québec bring enormous crowds to the city's restaurants. A custom-branded bag given as a gift at the close of a dinner or included in a prix-fixe menu extends your restaurant's hospitality past the meal and into guests' homes across Canada and the world.",
      },
      {
        title: "Charlevoix and local sourcing narrative",
        body: "Quebec City's finest restaurants tell a sourcing story rooted in Charlevoix, Île d'Orléans, and regional Quebec agriculture. EZPZ lets you extend that story to coffee — with a Canadian specialty origin and a French tasting narrative that fits the provenance philosophy your menu already practices.",
      },
      {
        title: "Château Frontenac and Old Quebec area prestige",
        body: "The restaurants near and within Old Quebec serve a high-spend tourist audience. EZPZ's specialty-grade coffee in custom packaging elevates the dining memory for guests who are experiencing the city at its best and price accordingly.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — your Quebec City delivery arrives in 2–3 business days. French-language bag design is the default for Quebec City clients; bilingual (French/English) is also available. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only bag design?",
      a: "Yes. French-only design is the default recommendation for Quebec City restaurants. Your bag will be entirely in French — origin story, tasting notes, brand copy — consistent with your city's linguistic and cultural identity.",
    },
    {
      q: "Can you describe the coffee's Quebec provenance?",
      a: "Yes. Although coffee doesn't grow in Quebec, EZPZ can accurately describe the bag as 'roasted in Montreal, Quebec' — and pair that with a specialty origin from a named farm or cooperative. That's an honest and compelling provenance story for your guests.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — among EZPZ's fastest delivery windows in Canada. Roasted to order, shipped fresh.",
    },
    {
      q: "Is there a minimum order for a restaurant?",
      a: "No minimum. Start with 100 bags, test the concept at the counter, and reorder once guests begin asking to buy. Most Quebec City restaurants find tourist traffic drives strong retail coffee sales.",
    },
  ],
  siblings: [
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Cafés · Quebec City", href: "/en/custom-coffee-cafes-quebec-city" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
  ],
  ctaClose:
    "Quebec City's restaurants are part of the most French culinary culture in North America. Make sure your coffee is too.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-restaurants-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Restaurants",
    parentHref: "/fr/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Café personnalisé pour les restaurants de Québec",
    subheadline: "Les restaurants de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les restaurants de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les restaurants de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "Le café de marque dans la scène gastronomique de Québec",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Les restaurants de le Vieux-Québec, Saint-Roch et Montcalm se démarquent par leur identité de marque autant que par leur menu. Dans ce marché compétitif, le café en fin de repas est le dernier point de contact avec vos clients, et c'est souvent le plus mémorable.",
      "Un café de spécialité personnalisé avec le nom et le logo de votre restaurant transforme ce moment final en un ancrage de marque. Les clients qui emportent un sachet chez eux préparent votre café chaque matin et se souviennent de leur expérience. Ce rappel quotidien génère des rebookings, des références et des avis positifs sans aucune dépense marketing.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Vous pouvez servir votre café de marque au restaurant et le vendre au comptoir à la sortie. Aucun minimum de commande signifie que vous pouvez commencer avec une petite quantité et ajuster selon la demande.",
    ],
  },
  useCases: {
    heading: "Comment les restaurants de Québec utilisent le café de marque",
    items: [
    { title: "Service en fin de repas et café de maison", body: "Servez votre propre café de spécialité de marque en fin de repas. L'histoire de l'origine et le design du sachet créent un moment de conversation qui marque la mémoire de vos clients." },
    { title: "Vente au comptoir comme produit à emporter", body: "Proposez des sacs de votre café de maison à la caisse ou à l'entrée. Les clients qui ont adoré leur café voudront en acheter pour chez eux, et chaque sachet maintient votre marque dans leur cuisine." },
    { title: "Cadeaux corporatifs et événements privés", body: "Pour les événements privés, les réceptions d'entreprise et les sorties de groupe, utilisez votre café de marque comme cadeau de bienvenue ou faveur de table qui reflète la qualité de votre établissement." },
    { title: "Coffrets et paniers cadeaux des Fêtes", body: "Créez des coffrets cadeaux premium avec votre café de maison pour les Fêtes. Les clients réguliers achètent ces coffrets pour offrir à leurs proches une expérience liée à leur restaurant préféré de Québec." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les restaurants de Québec servent-ils le café EZPZ en fin de repas ?", a: "La plupart des restaurants servent le café dans un filtre ou une cafetière French press, avec le sachet ouvert visible ou posé sur la table pour que les clients voient l'histoire de l'origine. D'autres servent la portion en capsule ou en dosette adaptée à leur équipement." },
    { q: "Peut-on commander des sacs avec les noms des restaurants de Québec sans fichiers prêts à imprimer ?", a: "Oui. Notre équipe de design gère l'ensemble de la création visuelle. Fournissez votre logo et vos couleurs de marque, et nous créons un design de sachet professionnel sans frais supplémentaires. Aucun fichier prêt à imprimer ni designer externe n'est nécessaire." },
  ],
  siblings: [
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
  ],
  ctaClose: "La dernière impression que vous laissez à vos clients de Québec. Faites-la mémorable.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
