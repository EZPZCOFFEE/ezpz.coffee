import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les cafés de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Cafés | EZPZ Coffee";
  const description = isFr ? "Les cafés de Ottawa se démarquent de leurs concurrents avec un café de maison de spécialité personnalisé. Aucun minimum, design inclus, torréfié à Montréal." : "Ottawa's 300,000+ government workers and growing tech scene fuel a loyal café culture. Custom branded house blend bags — bilingual, zero minimum, from $11.75/bag, delivered in 3–5 days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-cafes-ottawa`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-cafes-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-cafes-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-cafes-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les cafés de Ottawa" : "Custom Coffee Bags for Ottawa Cafés" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Ottawa Cafés",
    subheadline:
      "Ottawa's government workers, tech employees, and university students are among the most loyal café regulars in Canada. Give them a house blend worth being loyal to.",
    ctaSubject: "Custom coffee bags for my Ottawa café",
  },
  aeoAnswer:
    "Ottawa cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted to order in Montreal, delivered to Ottawa in 3–5 business days. Bilingual (French/English) design available.",
  why: {
    heading: "Ottawa Cafés and the Government Worker Loyalty Economy",
    paragraphs: [
      "Ottawa is one of the most café-loyal cities in Canada. Public servants working long hours in government buildings along Sparks Street, Wellington Street, and in the Centretown and Westboro neighbourhoods make the same café stops every morning and every afternoon. That frequency — daily, year-round, in a city without significant seasonal shutdowns — creates an unusually stable customer base for Ottawa independent cafés.",
      "Westboro, the Glebe, and Centretown have developed distinct café identities that attract both the government worker crowd and the growing tech sector — Shopify's HQ at 150 Elgin Street alone employs thousands of people who walk past or pop into nearby cafés multiple times a day. Those customers follow cafés that have a defined brand identity, and they buy bags when a café's coffee is good enough to want at home on Saturday.",
      "Ottawa's bilingual character makes a bilingual house blend a natural conversation starter. A bag with French and English copy — describing the origin and your café's character in both languages — is a product that resonates with the full spectrum of Ottawa's customer base, from the francophone public servant to the anglophone tech worker.",
    ],
  },
  useCases: {
    heading: "How Ottawa Cafés Use EZPZ",
    items: [
      {
        title: "Westboro and Glebe counter retail",
        body: "Ottawa's most café-dense neighbourhoods have loyal, repeat customers who are willing to spend on a branded house blend from a café they trust. A bag at $20 that says 'house blend, roasted for [Café Name]' captures the conversion from 'daily customer' to 'weekly bag buyer'.",
      },
      {
        title: "Bilingual house blend design",
        body: "Ottawa's cafés serve a genuinely bilingual customer base. EZPZ's bilingual packaging option means your bag works for the anglophone Shopify employee and the francophone public servant equally — one product, both communities.",
      },
      {
        title: "Government and university wholesale",
        body: "Ottawa is home to four universities, multiple colleges, and the headquarters of dozens of federal departments. Branded coffee bags for campus offices, government department kitchens, or university faculty lounges is a B2B wholesale channel available to cafés with established reputations.",
      },
      {
        title: "Shopify and online selling",
        body: "EZPZ integrates with Shopify so your café can sell its house blend to customers across Canada online — fulfilled directly from Montreal. Government workers who move between Ottawa and other cities stay loyal to your brand by buying online.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual packaging at no extra charge. Counter retail margin at 100 bags ($11.75/bag) selling at $20 is roughly 41% gross margin per bag.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa café?",
      a: "Yes. Bilingual (French/English) design is available at no extra charge and is recommended for Ottawa's bilingual customer base.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Ottawa cafés with loyal government and tech regulars typically find the bags sell through within 2–3 weeks of putting them behind the counter.",
    },
    {
      q: "Can I wholesale to government offices or university departments?",
      a: "Yes. Your branded EZPZ bags are shelf-stable and suitable for wholesale. EZPZ can supply larger quantities for office programs — contact us to discuss pricing for 500+ bag wholesale orders.",
    },
    {
      q: "How fresh is the coffee on arrival?",
      a: "EZPZ roasts to order. Ottawa orders arrive in 3–5 business days from dispatch — typically within 5–7 days of roast date. The one-way degas valve preserves freshness for months.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
  ],
  ctaClose:
    "Ottawa's café regulars come back every day. Give them a reason to take your brand home every week.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-cafes-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Cafés",
    parentHref: "/fr/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Café personnalisé pour les cafés de Ottawa",
    subheadline: "Les cafés de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les cafés de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les cafés de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "L'identité de votre café dans chaque sachet",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Les cafés de le marché By, Westboro et Hintonburg ont construit des identités de quartier fortes que leurs clients défendent avec fierté. Dans ce marché, servir un café de fournisseur générique identique à celui des cafés voisins est une occasion manquée.",
      "Un café de maison de spécialité personnalisé est le produit qui transforme un café en marque. Vos clients achètent votre café, pas un café. Ils l'emportent chez eux, ils en parlent, ils le cadeautent. Le sachet que vous vendez au comptoir avec votre logo et votre histoire devient le souvenir qui maintient votre marque présente dans la cuisine de votre client entre ses visites.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum de commande signifie que vous pouvez tester votre café de maison avec une petite quantité et ajuster avant de vous engager dans un inventaire important. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les cafés de Ottawa utilisent le café de marque EZPZ",
    items: [
    { title: "Café de maison à vendre au comptoir", body: "Votre café de spécialité de marque, vendu à côté de vos espressos et cappuccinos. Les clients qui adorent votre café en boutique le ramènent chez eux et reviennent pour en acheter d'autres." },
    { title: "Produit à emporter pour fidéliser les clients", body: "Les clients réguliers de Ottawa qui brûlent votre café chez eux chaque matin maintiennent un lien émotionnel avec votre café entre leurs visites. C'est une fidélisation organique que la plupart des programmes de fidélité ne réussissent pas à créer." },
    { title: "Coffrets cadeaux et boîtes saisonnières", body: "Pour les Fêtes, la Saint-Valentin et les événements locaux, vos sacs de café de marque deviennent des cadeaux premium que les clients achètent pour leurs proches. Ajoutez un message personnalisé et une enveloppe cadeau pour un article clé de votre comptoir." },
    { title: "Collaborations avec les boutiques et marchés locaux", body: "Les cafés de Ottawa s'associent à des boutiques voisines et des marchés locaux pour distribuer leur café de marque en consignation, élargissant leur présence de marque au-delà de leur espace physique." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les cafés de Ottawa peuvent-ils vendre le café EZPZ sous leur propre marque ?", a: "Oui, c'est précisément le modèle. EZPZ torréfie le café de spécialité et vous fournit des sacs entièrement sous votre marque. Aucun logo EZPZ n'apparaît sur le produit final. Votre café, votre marque, votre histoire." },
    { q: "Quel est l'engagement minimum pour les cafés de Ottawa ?", a: "Aucun minimum. Vous pouvez commander un seul sachet pour goûter le café et évaluer l'emballage avant de vous engager. Pour les cafés qui veulent vendre en boutique, nous recommandons de commencer avec 24 à 48 sacs pour tester la demande de votre clientèle." },
  ],
  siblings: [
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
    { label: "Restaurants · Ottawa", href: "/fr/custom-coffee-restaurants-ottawa" },
  ],
  ctaClose: "Votre café de Ottawa a une identité unique. Votre café devrait l'avoir aussi.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
