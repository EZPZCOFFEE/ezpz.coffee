import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les cafés de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Cafés | EZPZ Coffee";
  const description = isFr ? "Les cafés de Vancouver se démarquent de leurs concurrents avec un café de maison de spécialité personnalisé. Aucun minimum, design inclus, torréfié à Montréal." : "Vancouver has one of North America's most sophisticated café cultures. Define your house blend identity with custom branded bags — zero minimum, sustainable, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-cafes-vancouver`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-cafes-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-cafes-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-cafes-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les cafés de Vancouver" : "Custom Coffee Bags for Vancouver Cafés" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Vancouver Cafés",
    subheadline:
      "49th Parallel, Revolver, Nemesis. Vancouver's café scene is globally referenced. Your café's identity deserves a bag that stands with the best.",
    ctaSubject: "Custom coffee bags for my Vancouver café",
  },
  aeoAnswer:
    "Vancouver cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted to order in Montreal, delivered in 4–6 business days. Sustainable packaging and Shopify integration available.",
  why: {
    heading: "Vancouver Cafés and the Identity Stakes",
    paragraphs: [
      "Vancouver's specialty coffee scene is world-class by any measure. Revolver on Cambie, 49th Parallel on West 4th, Nemesis in the Flatiron Building, Pallet in Gastown — the city has cafés that set global benchmarks for sourcing, technique, and design. The audience they've cultivated is among the most coffee-educated in Canada. To compete in that market, you need a house blend with a story, not just a recipe.",
      "Vancouver's café culture is also deeply sustainability-conscious — rooted in the same environmental values that produced Lululemon's brand identity and made Whole Foods' first Canadian location a Vancouver institution. A coffee bag that describes single-origin sourcing, a named farm, and a one-way valve freshness system resonates authentically with a customer base that already reads ingredient labels and asks about supply chains.",
      "EZPZ integrates with Shopify, which matters specifically in Vancouver's tech-forward market. A café whose house blend is also available online — shipped directly from the roastery to customers across BC and beyond — is building a brand with a channel that Starbucks and the chains can't replicate: an independent, owner-driven story that customers choose to support.",
    ],
  },
  useCases: {
    heading: "How Vancouver Cafés Build Their Brand with EZPZ",
    items: [
      {
        title: "Sustainability-forward house blend",
        body: "A single-origin bag with traceable sourcing, described in the language of Vancouver's environmental values — named farm, processing method, fair trade or direct-trade relationship — is a product your Kitsilano and Commercial Drive customers will choose over a chain's commodity blend on principle.",
      },
      {
        title: "Counter retail in Gastown and Yaletown",
        body: "Vancouver's tourist-dense neighbourhoods have foot traffic willing to spend $20–$22 on a premium local coffee bag as a souvenir or gift. Branded EZPZ bags at Gastown cafés routinely convert one-time visitors into online repeat buyers once they get home.",
      },
      {
        title: "Shopify online store with zero inventory",
        body: "EZPZ's Shopify integration means your café's house blend ships directly from Montreal to customers across Canada and the US when they order online. No inventory, no fulfillment overhead — just passive revenue with your brand on every bag.",
      },
      {
        title: "Wholesale to Vancouver restaurants and hotels",
        body: "Vancouver's Michelin-recognized restaurants and luxury hotels are active buyers of independently branded specialty coffee. Your EZPZ-powered house blend — with the story, design, and quality to match the venue — opens a B2B wholesale channel at a margin that justifies the relationship.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Counter retail economics are strong: at $11.75/bag cost, selling at $20 retail yields ~41% gross margin. Shopify integration available for online sales with no inventory required.",
  faq: [
    {
      q: "Can I feature my coffee's sustainability credentials on the bag?",
      a: "Yes. EZPZ sources specialty coffees with traceable supply chains. We can provide origin documentation — farm name, cooperative, processing method, and certifications — for you to feature on the bag and on your menu.",
    },
    {
      q: "How does the Shopify integration work for a Vancouver café?",
      a: "Connect your Shopify store to EZPZ's platform. When a customer orders your house blend online, EZPZ roasts and ships directly to them with your branding. You earn the margin; EZPZ handles all fulfillment. No warehouse, no labels, no courier accounts.",
    },
    {
      q: "Is there a minimum for a trial run?",
      a: "No minimum. Start with 100 bags as a pilot — most Vancouver cafés find the coffee sells through quickly once it's visible behind the counter.",
    },
    {
      q: "How does Vancouver delivery timing work?",
      a: "4–6 business days from order confirmation. We recommend keeping 2 weeks of supply on hand given the lead time, especially heading into summer when foot traffic peaks.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver set the bar for Canadian café culture. Make sure your bag is part of the standard.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-cafes-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Cafés",
    parentHref: "/fr/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Café personnalisé pour les cafés de Vancouver",
    subheadline: "Les cafés de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les cafés de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les cafés de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "L'identité de votre café dans chaque sachet",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Les cafés de Gastown, Main Street et Commercial Drive ont construit des identités de quartier fortes que leurs clients défendent avec fierté. Dans ce marché, servir un café de fournisseur générique identique à celui des cafés voisins est une occasion manquée.",
      "Un café de maison de spécialité personnalisé est le produit qui transforme un café en marque. Vos clients achètent votre café, pas un café. Ils l'emportent chez eux, ils en parlent, ils le cadeautent. Le sachet que vous vendez au comptoir avec votre logo et votre histoire devient le souvenir qui maintient votre marque présente dans la cuisine de votre client entre ses visites.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum de commande signifie que vous pouvez tester votre café de maison avec une petite quantité et ajuster avant de vous engager dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les cafés de Vancouver utilisent le café de marque EZPZ",
    items: [
    { title: "Café de maison à vendre au comptoir", body: "Votre café de spécialité de marque, vendu à côté de vos espressos et cappuccinos. Les clients qui adorent votre café en boutique le ramènent chez eux et reviennent pour en acheter d'autres." },
    { title: "Produit à emporter pour fidéliser les clients", body: "Les clients réguliers de Vancouver qui brûlent votre café chez eux chaque matin maintiennent un lien émotionnel avec votre café entre leurs visites. C'est une fidélisation organique que la plupart des programmes de fidélité ne réussissent pas à créer." },
    { title: "Coffrets cadeaux et boîtes saisonnières", body: "Pour les Fêtes, la Saint-Valentin et les événements locaux, vos sacs de café de marque deviennent des cadeaux premium que les clients achètent pour leurs proches. Ajoutez un message personnalisé et une enveloppe cadeau pour un article clé de votre comptoir." },
    { title: "Collaborations avec les boutiques et marchés locaux", body: "Les cafés de Vancouver s'associent à des boutiques voisines et des marchés locaux pour distribuer leur café de marque en consignation, élargissant leur présence de marque au-delà de leur espace physique." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les cafés de Vancouver peuvent-ils vendre le café EZPZ sous leur propre marque ?", a: "Oui, c'est précisément le modèle. EZPZ torréfie le café de spécialité et vous fournit des sacs entièrement sous votre marque. Aucun logo EZPZ n'apparaît sur le produit final. Votre café, votre marque, votre histoire." },
    { q: "Quel est l'engagement minimum pour les cafés de Vancouver ?", a: "Aucun minimum. Vous pouvez commander un seul sachet pour goûter le café et évaluer l'emballage avant de vous engager. Pour les cafés qui veulent vendre en boutique, nous recommandons de commencer avec 24 à 48 sacs pour tester la demande de votre clientèle." },
  ],
  siblings: [
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
    { label: "Restaurants · Vancouver", href: "/fr/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose: "Votre café de Vancouver a une identité unique. Votre café devrait l'avoir aussi.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
