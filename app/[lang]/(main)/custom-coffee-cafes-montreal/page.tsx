import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les cafés de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Cafés | EZPZ Coffee";
  const description = isFr ? "Les cafés de Montréal se démarquent de leurs concurrents avec un café de maison de spécialité personnalisé. Aucun minimum, design inclus, torréfié à Montréal." : "Montreal has 400+ independent cafés and the most educated coffee consumers in Canada. Define your house blend identity — bilingual, roasted locally, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-cafes-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-cafes-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-cafes-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-cafes-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les cafés de Montréal" : "Custom Coffee Bags for Montreal Cafés" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Cafés",
    parentHref: "/en/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Custom Coffee Bags for Montreal Cafés",
    subheadline:
      "Your café's identity deserves a coffee that's unmistakably yours — not a bag from a supplier your neighbours are also serving.",
    ctaSubject: "Custom coffee bags for my Montreal café",
  },
  aeoAnswer:
    "Montreal cafés can order custom branded house blend bags from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order at the Canadian Roasting Society in Montreal, delivered in 2–3 business days. EZPZ handles design, roasting, and shipping — including Shopify integration for online sales.",
  why: {
    heading: "Montreal Cafés and the House Blend Identity Problem",
    paragraphs: [
      "Montreal has one of the densest café cultures in North America. The Plateau, Mile End, Rosemont, Verdun, Griffintown — virtually every neighbourhood has multiple specialty cafés competing for the same local clientele. When two cafés on the same block serve coffee from the same well-known roaster, they're reducing their product to atmosphere and service. That's a race no one wins permanently.",
      "The cafés that build lasting brand identity — the ones guests describe as 'their café' — are the ones with a house blend that belongs to them. Not a 'café blend' from a shared wholesale catalog, but a coffee described on the menu by origin, process, and tasting notes, with a bag behind the bar that reinforces the story visually.",
      "EZPZ makes this accessible without a minimum order. You can start with 100 bags of your house blend, sell them at the counter for $18–$22, and reinvest that margin into the next order. There's no warehouse commitment and no design fee. It's the coffee identity investment that pays for itself.",
    ],
  },
  useCases: {
    heading: "How Montreal Cafés Build Their Brand with EZPZ",
    items: [
      {
        title: "Counter retail bags",
        body: "A branded bag behind the espresso machine — visible to every customer — is a constant, silent pitch. Montreal café clients are predisposed to buy local. A bag that says 'roasted in Montreal' and carries your café's design language sells itself.",
      },
      {
        title: "House espresso blend",
        body: "Define your café's signature espresso profile. A classic Brazil/Colombia blend for sweetness and body, or an Ethiopian natural for a fruit-forward identity. EZPZ will work with you on the cupping profile and translate it into copy your baristas can describe with confidence.",
      },
      {
        title: "Wholesale to Montreal restaurants",
        body: "Your branded coffee isn't just for your café. Montreal restaurants, wine bars, and food venues that respect quality often prefer to source from an independent café brand over a corporate supplier. Your EZPZ bags open a B2B revenue channel alongside your retail.",
      },
      {
        title: "Online store via Shopify dropshipping",
        body: "EZPZ integrates with Shopify. Your café's house blend can be available online, shipped directly to customers across Canada with your branding, from our Montreal facility. You never touch the inventory.",
      },
    ],
  },
  localNote:
    "EZPZ roasts at the Canadian Roasting Society in Montreal — the same city as your café. Delivery takes 2–3 business days. Counter retail bags typically sell for $18–$22, giving roughly 40%+ gross margin on a 100-bag order at $11.75/bag.",
  faq: [
    {
      q: "Will my café's coffee be unique to me?",
      a: "Your roast profile and bag design are yours. EZPZ sources from a curated library of origins; the specific profile we develop for your café is designed around your preferences and approved by you before production. We won't sell the same profile under the same name to anyone else.",
    },
    {
      q: "Can I sell the bags on my website?",
      a: "Yes. EZPZ integrates with Shopify — your café can sell branded bags online, with orders fulfilled and shipped directly by EZPZ. You carry no inventory and no shipping overhead.",
    },
    {
      q: "What margin can I expect selling bags at the counter?",
      a: "At 100 bags at $11.75/bag cost, selling at $20 retail gives you roughly $8.25 gross margin per bag — about 41%. Most Montreal cafés price between $18 and $24 depending on the format (250g vs 340g).",
    },
    {
      q: "Do you offer bilingual bag designs?",
      a: "Yes. Bilingual (French/English) bag copy is available at no additional charge — and it's the default recommendation for a Montreal market where both languages are present every day.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
  ],
  ctaClose:
    "Montreal's café scene is the best in Canada. Make sure your coffee bag says so.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-cafes-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Cafés",
    parentHref: "/fr/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Café personnalisé pour les cafés de Montréal",
    subheadline: "Les cafés de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les cafés de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les cafés de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "L'identité de votre café dans chaque sachet",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Les cafés de Plateau-Mont-Royal, Mile End et Rosemont ont construit des identités de quartier fortes que leurs clients défendent avec fierté. Dans ce marché, servir un café de fournisseur générique identique à celui des cafés voisins est une occasion manquée.",
      "Un café de maison de spécialité personnalisé est le produit qui transforme un café en marque. Vos clients achètent votre café, pas un café. Ils l'emportent chez eux, ils en parlent, ils le cadeautent. Le sachet que vous vendez au comptoir avec votre logo et votre histoire devient le souvenir qui maintient votre marque présente dans la cuisine de votre client entre ses visites.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum de commande signifie que vous pouvez tester votre café de maison avec une petite quantité et ajuster avant de vous engager dans un inventaire important. La majorité des clients de Montréal préfèrent un design d'emballage en français : c'est naturel et local.",
    ],
  },
  useCases: {
    heading: "Comment les cafés de Montréal utilisent le café de marque EZPZ",
    items: [
    { title: "Café de maison à vendre au comptoir", body: "Votre café de spécialité de marque, vendu à côté de vos espressos et cappuccinos. Les clients qui adorent votre café en boutique le ramènent chez eux et reviennent pour en acheter d'autres." },
    { title: "Produit à emporter pour fidéliser les clients", body: "Les clients réguliers de Montréal qui brûlent votre café chez eux chaque matin maintiennent un lien émotionnel avec votre café entre leurs visites. C'est une fidélisation organique que la plupart des programmes de fidélité ne réussissent pas à créer." },
    { title: "Coffrets cadeaux et boîtes saisonnières", body: "Pour les Fêtes, la Saint-Valentin et les événements locaux, vos sacs de café de marque deviennent des cadeaux premium que les clients achètent pour leurs proches. Ajoutez un message personnalisé et une enveloppe cadeau pour un article clé de votre comptoir." },
    { title: "Collaborations avec les boutiques et marchés locaux", body: "Les cafés de Montréal s'associent à des boutiques voisines et des marchés locaux pour distribuer leur café de marque en consignation, élargissant leur présence de marque au-delà de leur espace physique." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les cafés de Montréal peuvent-ils vendre le café EZPZ sous leur propre marque ?", a: "Oui, c'est précisément le modèle. EZPZ torréfie le café de spécialité et vous fournit des sacs entièrement sous votre marque. Aucun logo EZPZ n'apparaît sur le produit final. Votre café, votre marque, votre histoire." },
    { q: "Quel est l'engagement minimum pour les cafés de Montréal ?", a: "Aucun minimum. Vous pouvez commander un seul sachet pour goûter le café et évaluer l'emballage avant de vous engager. Pour les cafés qui veulent vendre en boutique, nous recommandons de commencer avec 24 à 48 sacs pour tester la demande de votre clientèle." },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
  ],
  ctaClose: "Votre café de Montréal a une identité unique. Votre café devrait l'avoir aussi.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
