import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les cafés de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Cafés | EZPZ Coffee";
  const description = isFr ? "Les cafés de Toronto se démarquent de leurs concurrents avec un café de maison de spécialité personnalisé. Aucun minimum, design inclus, torréfié à Montréal." : "Toronto's café scene is the most competitive in Canada. Custom branded house blend bags — zero minimum, specialty grade, Shopify integration — from $11.75/bag, delivered in 3–5 days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-cafes-toronto`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-cafes-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-cafes-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-cafes-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les cafés de Toronto" : "Custom Coffee Bags for Toronto Cafés" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-cafes-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Cafés",
    parentHref: "/en/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Custom Coffee Bags for Toronto Cafés",
    subheadline:
      "Toronto has more cafés than any other city in Canada. The ones that build lasting identity are the ones with a house blend that's unmistakably theirs.",
    ctaSubject: "Custom coffee bags for my Toronto café",
  },
  aeoAnswer:
    "Toronto cafés can order custom branded house blend bags from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order in Montreal and arriving in 3–5 business days. EZPZ integrates with Shopify for online sales with no inventory required.",
  why: {
    heading: "Toronto Cafés and the House Blend Advantage",
    paragraphs: [
      "Toronto's café scene has matured faster than almost any other city in North America. Pilot Coffee Roasters, Sam James Coffee Bar, Fahrenheit Coffee, Te Aro, De Mello, Café Tamps — the city has world-class independent cafés in Kensington Market, the Distillery District, Liberty Village, Leslieville, and beyond. That maturity has made the market more competitive, not less, and the differentiation battlefield has shifted from equipment and technique to identity and story.",
      "A café with a house blend that its baristas can describe with enthusiasm — 'our Ethiopia is a natural process from a cooperative in Sidama, it's chocolate and stone fruit, it pulls beautifully as espresso and makes a stunning pour-over' — is a café that gets talked about. That story lives on a bag. The bag sells at the counter, ships online, and shows up on kitchen shelves across the city long after the customer's last visit.",
      "EZPZ started in Montreal but serves Toronto cafés across the city because the need is the same: specialty coffee, custom branding, zero minimum, with a business model that pays for itself. Counter retail at $18–$22/bag on a $11.75 cost is a margin most café operators can't ignore.",
    ],
  },
  useCases: {
    heading: "How Toronto Cafés Use EZPZ",
    items: [
      {
        title: "Signature house blend",
        body: "Define your espresso or filter identity with a curated origin blend. EZPZ will curate options from their specialty library, taste with you, and produce a profile that's yours — from tasting notes to bag copy to the origin story behind the bar.",
      },
      {
        title: "Counter retail across Toronto neighbourhoods",
        body: "Neighbourhoods like Kensington Market, Roncesvalles, and Leslieville have foot traffic with high willingness to buy local coffee brands. Branded bags at $20 sell consistently in cafés with strong community identity — EZPZ's margin structure makes this a viable revenue line from day one.",
      },
      {
        title: "Shopify store and dropshipping",
        body: "EZPZ integrates with Shopify. Your Toronto café's house blend can be sold online — shipped directly from Montreal to customers across Canada without you handling inventory, packing tape, or courier accounts. Passive revenue, your brand, no fulfillment overhead.",
      },
      {
        title: "Wholesale to restaurants and offices",
        body: "Your branded coffee isn't just for your counter. King West restaurants, Liberty Village offices, and Corktown co-working spaces are all active buyers of independently branded coffee for their programs. Your EZPZ bag is a wholesale product with credibility.",
      },
    ],
  },
  localNote:
    "EZPZ delivers to Toronto café addresses in 3–5 business days from Montreal. Counter retail economics: at 100 bags at $11.75, selling at $20 retail yields roughly $8.25 gross margin per bag (~41%). Shopify integration is available for online sales with zero inventory required.",
  faq: [
    {
      q: "How do I know the coffee profile will be right for espresso service?",
      a: "EZPZ curates every profile for the intended brew method. For espresso, we'll work toward a balanced blend — typically Brazil-forward for sweetness and body — and send you a sample roast before production. You approve before any bags are printed.",
    },
    {
      q: "Can I start with a small test run before committing to a design?",
      a: "Yes. You can order 100 bags as a pilot with a simple design, test sales velocity at the counter, then refine the design for the next run. There's no long-term commitment — each order is independent.",
    },
    {
      q: "How does the Shopify integration work?",
      a: "Connect your Shopify store to EZPZ's platform. When a customer orders your house blend, EZPZ roasts and ships directly to them with your branding. You receive the margin, EZPZ handles fulfillment. You never touch the coffee or the box.",
    },
    {
      q: "Are there cafés in Toronto already doing this?",
      a: "Yes. EZPZ works with cafés across the GTA. The platform started in Montreal but serves Toronto clients from Etobicoke to Scarborough. We can share case studies upon request.",
    },
  ],
  siblings: [
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
  ],
  ctaClose:
    "Toronto's best cafés are defined by their coffee, not just their vibe. Start building yours.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-cafes-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Cafés",
    parentHref: "/fr/industries",
    parentLabel: "Industries",
  },
  hero: {
    h1: "Café personnalisé pour les cafés de Toronto",
    subheadline: "Les cafés de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les cafés de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les cafés de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "L'identité de votre café dans chaque sachet",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Les cafés de King West, Kensington Market et Leslieville ont construit des identités de quartier fortes que leurs clients défendent avec fierté. Dans ce marché, servir un café de fournisseur générique identique à celui des cafés voisins est une occasion manquée.",
      "Un café de maison de spécialité personnalisé est le produit qui transforme un café en marque. Vos clients achètent votre café, pas un café. Ils l'emportent chez eux, ils en parlent, ils le cadeautent. Le sachet que vous vendez au comptoir avec votre logo et votre histoire devient le souvenir qui maintient votre marque présente dans la cuisine de votre client entre ses visites.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum de commande signifie que vous pouvez tester votre café de maison avec une petite quantité et ajuster avant de vous engager dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les cafés de Toronto utilisent le café de marque EZPZ",
    items: [
    { title: "Café de maison à vendre au comptoir", body: "Votre café de spécialité de marque, vendu à côté de vos espressos et cappuccinos. Les clients qui adorent votre café en boutique le ramènent chez eux et reviennent pour en acheter d'autres." },
    { title: "Produit à emporter pour fidéliser les clients", body: "Les clients réguliers de Toronto qui brûlent votre café chez eux chaque matin maintiennent un lien émotionnel avec votre café entre leurs visites. C'est une fidélisation organique que la plupart des programmes de fidélité ne réussissent pas à créer." },
    { title: "Coffrets cadeaux et boîtes saisonnières", body: "Pour les Fêtes, la Saint-Valentin et les événements locaux, vos sacs de café de marque deviennent des cadeaux premium que les clients achètent pour leurs proches. Ajoutez un message personnalisé et une enveloppe cadeau pour un article clé de votre comptoir." },
    { title: "Collaborations avec les boutiques et marchés locaux", body: "Les cafés de Toronto s'associent à des boutiques voisines et des marchés locaux pour distribuer leur café de marque en consignation, élargissant leur présence de marque au-delà de leur espace physique." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les cafés de Toronto peuvent-ils vendre le café EZPZ sous leur propre marque ?", a: "Oui, c'est précisément le modèle. EZPZ torréfie le café de spécialité et vous fournit des sacs entièrement sous votre marque. Aucun logo EZPZ n'apparaît sur le produit final. Votre café, votre marque, votre histoire." },
    { q: "Quel est l'engagement minimum pour les cafés de Toronto ?", a: "Aucun minimum. Vous pouvez commander un seul sachet pour goûter le café et évaluer l'emballage avant de vous engager. Pour les cafés qui veulent vendre en boutique, nous recommandons de commencer avec 24 à 48 sacs pour tester la demande de votre clientèle." },
  ],
  siblings: [
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
  ],
  ctaClose: "Votre café de Toronto a une identité unique. Votre café devrait l'avoir aussi.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
