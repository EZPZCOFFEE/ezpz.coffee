import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les cafés de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Cafés | EZPZ Coffee";
  const description = isFr ? "Les cafés de Calgary se démarquent de leurs concurrents avec un café de maison de spécialité personnalisé. Aucun minimum, design inclus, torréfié à Montréal." : "Calgary's specialty café scene is growing fast. Define your house blend before the chains catch up — custom branded bags, zero minimum, from $11.75/bag, delivered in 4–6 days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-cafes-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-cafes-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-cafes-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-cafes-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-cafes-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les cafés de Calgary" : "Custom Coffee Bags for Calgary Cafés" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Cafés", parentHref: "/en/industries", parentLabel: "Industries" },
  hero: {
    h1: "Custom Coffee Bags for Calgary Cafés",
    subheadline:
      "Calgary's specialty coffee scene is growing faster than any other Canadian city. Claim your house blend identity before the market matures around you.",
    ctaSubject: "Custom coffee bags for my Calgary café",
  },
  aeoAnswer:
    "Calgary cafés can order custom branded house blend bags from EZPZ with no minimum, starting at 100 units at $11.75/bag. Roasted to order in Montreal, delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary's Café Market: The Window Before It Closes",
    paragraphs: [
      "Calgary's specialty coffee scene is in the early stages of the same transformation that reshaped Toronto and Vancouver over the last decade. Analog Coffee, Phil & Sebastian, Monogram Coffee, Rosso Coffee Roasters — the city's independent café leaders have established a quality baseline that has trained Calgary consumers to expect more than a chain coffee experience. That audience is growing, and it's looking for cafés with a defined identity.",
      "The opportunity for Calgary cafés right now is the same one that existed in Toronto's Kensington Market five years ago: the market is sophisticated enough to appreciate a branded house blend, but not yet so saturated that every café already has one. The first cafés in Calgary to claim a distinctive coffee identity — with a bag behind the bar that tells the story — are the ones that become reference points for the next generation of Calgary coffee culture.",
      "Calgary's young, educated professional class — energy sector engineers, tech workers at the growing tech corridor in Beltline and Inglewood, creative industry workers — have money and taste, and they respond to authenticity. A house blend that's been curated, described, and packaged by your café is authenticity you can sell at the counter.",
    ],
  },
  useCases: {
    heading: "How Calgary Cafés Build Their Brand with EZPZ",
    items: [
      {
        title: "Beltline and Inglewood counter retail",
        body: "Calgary's most design-conscious café neighbourhoods — Beltline, Inglewood, Kensington — have foot traffic that buys locally branded products. A bag at $20 that says 'house blend, roasted for [Café Name]' converts curious walk-ins into repeat buyers who take your brand home.",
      },
      {
        title: "Energy sector corporate sales",
        body: "Calgary cafés adjacent to the downtown corporate core have access to one of the highest-disposable-income business customer bases in Canada. A branded bag sold at the counter is regularly purchased as a desk gift or team gift by oil and gas professionals who come in every morning.",
      },
      {
        title: "Stampede season branded runs",
        body: "Calgary Stampede brings 1.2 million visitors through the city in 10 days. For cafés that gain new visitors during Stampede, a branded bag is the high-margin souvenir that turns a first-time Stampede tourist into a mail-order customer when they get back to Edmonton or Regina.",
      },
      {
        title: "Shopify online store",
        body: "EZPZ integrates with Shopify. Your Calgary café's house blend can be sold online and fulfilled by EZPZ from Montreal — reaching customers across Alberta and beyond with your brand, your story, and zero inventory overhead on your end.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Order with 2 weeks minimum lead time; 3 weeks recommended for Stampede season programs. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Is Calgary ready for a house blend concept?",
      a: "Yes — and the timing is ideal. Calgary's specialty coffee consumers are now educated enough to appreciate and buy a café's branded house blend. The cafés that define their identity now will own that positioning for years.",
    },
    {
      q: "Can I start small before committing to a design?",
      a: "Yes. Order 100 bags as a pilot with a simple design, test counter sales velocity, and refine the design for the next run. There's no commitment required between orders.",
    },
    {
      q: "How does the Shopify integration work?",
      a: "Connect your Shopify store to EZPZ's platform. Orders for your house blend are roasted and shipped directly to your online customers by EZPZ, with your branding. You receive the margin; we handle fulfillment.",
    },
    {
      q: "What coffee profile works well for Calgary's audience?",
      a: "Calgary's coffee audience skews toward clean, well-balanced medium roasts that work for both espresso and filter — versatile profiles that appeal to a wide customer base. We can also develop a more distinctive single-origin for a café that wants to be known for a specific flavor direction.",
    },
  ],
  siblings: [
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Cafés · Vancouver", href: "/en/custom-coffee-cafes-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's café scene is defining itself right now. Your house blend should be part of the definition.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-cafes-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Cafés",
    parentHref: "/fr/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Café personnalisé pour les cafés de Calgary",
    subheadline: "Les cafés de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les cafés de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les cafés de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "L'identité de votre café dans chaque sachet",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Les cafés de Kensington, 17e Avenue SO et Inglewood ont construit des identités de quartier fortes que leurs clients défendent avec fierté. Dans ce marché, servir un café de fournisseur générique identique à celui des cafés voisins est une occasion manquée.",
      "Un café de maison de spécialité personnalisé est le produit qui transforme un café en marque. Vos clients achètent votre café, pas un café. Ils l'emportent chez eux, ils en parlent, ils le cadeautent. Le sachet que vous vendez au comptoir avec votre logo et votre histoire devient le souvenir qui maintient votre marque présente dans la cuisine de votre client entre ses visites.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum de commande signifie que vous pouvez tester votre café de maison avec une petite quantité et ajuster avant de vous engager dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les cafés de Calgary utilisent le café de marque EZPZ",
    items: [
    { title: "Café de maison à vendre au comptoir", body: "Votre café de spécialité de marque, vendu à côté de vos espressos et cappuccinos. Les clients qui adorent votre café en boutique le ramènent chez eux et reviennent pour en acheter d'autres." },
    { title: "Produit à emporter pour fidéliser les clients", body: "Les clients réguliers de Calgary qui brûlent votre café chez eux chaque matin maintiennent un lien émotionnel avec votre café entre leurs visites. C'est une fidélisation organique que la plupart des programmes de fidélité ne réussissent pas à créer." },
    { title: "Coffrets cadeaux et boîtes saisonnières", body: "Pour les Fêtes, la Saint-Valentin et les événements locaux, vos sacs de café de marque deviennent des cadeaux premium que les clients achètent pour leurs proches. Ajoutez un message personnalisé et une enveloppe cadeau pour un article clé de votre comptoir." },
    { title: "Collaborations avec les boutiques et marchés locaux", body: "Les cafés de Calgary s'associent à des boutiques voisines et des marchés locaux pour distribuer leur café de marque en consignation, élargissant leur présence de marque au-delà de leur espace physique." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les cafés de Calgary peuvent-ils vendre le café EZPZ sous leur propre marque ?", a: "Oui, c'est précisément le modèle. EZPZ torréfie le café de spécialité et vous fournit des sacs entièrement sous votre marque. Aucun logo EZPZ n'apparaît sur le produit final. Votre café, votre marque, votre histoire." },
    { q: "Quel est l'engagement minimum pour les cafés de Calgary ?", a: "Aucun minimum. Vous pouvez commander un seul sachet pour goûter le café et évaluer l'emballage avant de vous engager. Pour les cafés qui veulent vendre en boutique, nous recommandons de commencer avec 24 à 48 sacs pour tester la demande de votre clientèle." },
  ],
  siblings: [
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
    { label: "Restaurants · Calgary", href: "/fr/custom-coffee-restaurants-calgary" },
  ],
  ctaClose: "Votre café de Calgary a une identité unique. Votre café devrait l'avoir aussi.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
