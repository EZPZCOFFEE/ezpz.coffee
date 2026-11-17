import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les cafés de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Cafés | EZPZ Coffee";
  const description = isFr ? "Les cafés de Québec se démarquent de leurs concurrents avec un café de maison de spécialité personnalisé. Aucun minimum, design inclus, torréfié à Montréal." : "Quebec City's French café culture and 10M annual tourist traffic create a unique opportunity. Custom branded house blend bags — French design, locally roasted, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-cafes-quebec-city`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-cafes-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-cafes-quebec-city",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-cafes-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-cafes-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les cafés de Québec" : "Custom Coffee Bags for Quebec City Cafés" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Quebec City Cafés",
    subheadline:
      "Quebec City's café culture is deeply French and visited by millions annually. Your house blend should be the one they bring home from Rue Saint-Jean.",
    ctaSubject: "Custom coffee bags for my Quebec City café",
  },
  aeoAnswer:
    "Quebec City cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted in Montreal, delivered to Quebec City in 2–3 business days. French-language design is the default.",
  why: {
    heading: "Quebec City Cafés: Local Pride and Tourist Volume",
    paragraphs: [
      "Quebec City's café scene has a character that is distinctly its own — rooted in French café culture, connected to the tourist flow of Old Quebec, and shaped by the local pride of a city that guards its identity with unusual tenacity. The cafés on Rue Saint-Jean, in Saint-Roch, and in Old Quebec are visited by both a loyal local clientele and a continuous stream of 10 million annual tourists who are in Quebec City specifically to experience French North American culture.",
      "A café in Quebec City that has its own house blend — with a French-language bag describing the origin, the roast, and the café's own story — is giving both its regulars and its tourists something to take home. The tourist buys it as a souvenir. The regular buys it because it's theirs. The margin on either transaction is the same, and the brand impression compounds over every cup brewed at home.",
      "EZPZ roasts in Montreal — same province, 2–3 day delivery — which makes 'roasted au Québec' an honest and compelling claim. French-only packaging is standard for Quebec City clients, consistent with both Loi 101 requirements and the cultural preference of Quebec City's predominantly francophone market.",
    ],
  },
  useCases: {
    heading: "How Quebec City Cafés Use EZPZ",
    items: [
      {
        title: "Rue Saint-Jean tourist retail",
        body: "Quebec City's most café-dense street sees constant tourist foot traffic. A branded house blend bag at $20–$22, with French copy and your café's visual identity, is one of the few souvenirs that tourists use every morning after they return home — and associate with the city they fell in love with.",
      },
      {
        title: "French-language house blend identity",
        body: "Define your café's espresso or filter profile in French — tasting notes, origin, story — and put it on a bag that is yours. A named house blend differentiates your café from every other spot on Rue Saint-Jean that is also buying from a shared roaster.",
      },
      {
        title: "Carnaval and FEQ seasonal editions",
        body: "For Quebec's two biggest festivals — Carnaval de Québec (February) and Festival d'été (July) — a limited-edition seasonal bag is a collectible souvenir. Cafés near the Plains of Abraham and Old Quebec are positioned to sell to a captive festival audience for whom the bag is a physical memory of the event.",
      },
      {
        title: "Wholesale to Old Quebec restaurants and hotels",
        body: "The hotels and restaurants in Old Quebec are actively looking for Quebec-made products to feature. A café with a well-designed branded house blend can supply those establishments with a product they can sell or serve under their own brand — or under a co-branded label that references your café.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — delivery to Quebec City is 2–3 business days. French-language design is the default. Counter margin at 100 bags ($11.75/bag cost, $20 retail) is approximately 41% gross per bag.",
  faq: [
    {
      q: "Can I get French-only packaging?",
      a: "Yes. French-only is the default for Quebec City clients. All copy — tasting notes, origin story, bag branding — can be entirely in French, consistent with the city's cultural and legal context.",
    },
    {
      q: "Can I sell the bags to tourists who don't have local delivery?",
      a: "Yes. EZPZ integrates with Shopify, allowing tourists who visit your café and scan a QR code to reorder your house blend online after they return home. We ship across Canada and the US.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Quebec City's tourist-heavy foot traffic typically converts to strong counter sales, especially during festival seasons.",
    },
    {
      q: "How fresh is the coffee when it arrives?",
      a: "EZPZ roasts to order. Quebec City orders arrive in 2–3 business days — among the freshest possible delivery windows in Canada given Montreal's proximity.",
    },
  ],
  siblings: [
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
  ],
  ctaClose:
    "Quebec City's cafés are part of the world's most-visited French city outside France. Your house blend should hold that standard.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-cafes-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Cafés",
    parentHref: "/fr/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Café personnalisé pour les cafés de Québec",
    subheadline: "Les cafés de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les cafés de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les cafés de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "L'identité de votre café dans chaque sachet",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Les cafés de le Vieux-Québec, Saint-Roch et Montcalm ont construit des identités de quartier fortes que leurs clients défendent avec fierté. Dans ce marché, servir un café de fournisseur générique identique à celui des cafés voisins est une occasion manquée.",
      "Un café de maison de spécialité personnalisé est le produit qui transforme un café en marque. Vos clients achètent votre café, pas un café. Ils l'emportent chez eux, ils en parlent, ils le cadeautent. Le sachet que vous vendez au comptoir avec votre logo et votre histoire devient le souvenir qui maintient votre marque présente dans la cuisine de votre client entre ses visites.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum de commande signifie que vous pouvez tester votre café de maison avec une petite quantité et ajuster avant de vous engager dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les cafés de Québec utilisent le café de marque EZPZ",
    items: [
    { title: "Café de maison à vendre au comptoir", body: "Votre café de spécialité de marque, vendu à côté de vos espressos et cappuccinos. Les clients qui adorent votre café en boutique le ramènent chez eux et reviennent pour en acheter d'autres." },
    { title: "Produit à emporter pour fidéliser les clients", body: "Les clients réguliers de Québec qui brûlent votre café chez eux chaque matin maintiennent un lien émotionnel avec votre café entre leurs visites. C'est une fidélisation organique que la plupart des programmes de fidélité ne réussissent pas à créer." },
    { title: "Coffrets cadeaux et boîtes saisonnières", body: "Pour les Fêtes, la Saint-Valentin et les événements locaux, vos sacs de café de marque deviennent des cadeaux premium que les clients achètent pour leurs proches. Ajoutez un message personnalisé et une enveloppe cadeau pour un article clé de votre comptoir." },
    { title: "Collaborations avec les boutiques et marchés locaux", body: "Les cafés de Québec s'associent à des boutiques voisines et des marchés locaux pour distribuer leur café de marque en consignation, élargissant leur présence de marque au-delà de leur espace physique." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les cafés de Québec peuvent-ils vendre le café EZPZ sous leur propre marque ?", a: "Oui, c'est précisément le modèle. EZPZ torréfie le café de spécialité et vous fournit des sacs entièrement sous votre marque. Aucun logo EZPZ n'apparaît sur le produit final. Votre café, votre marque, votre histoire." },
    { q: "Quel est l'engagement minimum pour les cafés de Québec ?", a: "Aucun minimum. Vous pouvez commander un seul sachet pour goûter le café et évaluer l'emballage avant de vous engager. Pour les cafés qui veulent vendre en boutique, nous recommandons de commencer avec 24 à 48 sacs pour tester la demande de votre clientèle." },
  ],
  siblings: [
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
    { label: "Restaurants · Québec", href: "/fr/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose: "Votre café de Québec a une identité unique. Votre café devrait l'avoir aussi.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
