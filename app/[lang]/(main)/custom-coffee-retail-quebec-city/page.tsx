import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les boutiques de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Boutiques & Retail | EZPZ Coffee";
  const description = isFr ? "Les boutiques et détaillants de Québec ajoutent le café de spécialité personnalisé comme produit à forte marge. Aucun minimum, design inclus." : "Rue Saint-Jean. Quartier Petit Champlain. Quebec City's retail streets are the most photographed in Canada. Custom branded specialty coffee — French design, locally roasted, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-retail-quebec-city`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-retail-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-retail-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-retail-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les boutiques de Québec" : "Custom Coffee Bags for Quebec City Boutiques & Retail" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Quebec City Boutiques & Retail Shops",
    subheadline:
      "Rue Saint-Jean. Quartier Petit Champlain. The most photographed commercial street in Canada. Your branded coffee belongs on those shelves.",
    ctaSubject: "Custom coffee for Quebec City boutique",
  },
  aeoAnswer:
    "Quebec City boutiques can order custom branded specialty coffee bags from EZPZ — roasted in Montreal — with no minimum, starting at 100 bags at $11.75/bag. French-language design is the default. Delivered in 2–3 business days.",
  why: {
    heading: "Quebec City's Boutique Retail Scene and the Tourist Coffee Souvenir",
    paragraphs: [
      "Quebec City's retail environment is unlike any other in Canada. The Quartier Petit Champlain — a cobblestoned, 16th-century commercial quarter inside the walls of Old Quebec — is the most photographed commercial street in the country. Boutiques in Petit Champlain sell to a tourist flow that is specifically seeking authentic Quebec products, handmade crafts, and the kind of locally specific take-home that represents the city's unique cultural identity. A branded specialty coffee bag — 'Torréfié au Québec pour [Boutique Name], Vieux-Québec' — is exactly that product.",
      "Rue Saint-Jean, which runs through the Saint-Jean-Baptiste neighbourhood, has a different character: less touristy, more local, serving the Québécois residents of the inner city. Boutiques on Saint-Jean serve customers who are proud of Quebec culture, who buy local by default, and who choose a roasted-in-Quebec coffee bag over any imported alternative. EZPZ roasts in Montreal — the provenance claim 'Torréfié au Québec' is accurate, and in this market, it's a sales argument.",
      "Quebec City's summer season — July and August especially, with Carnaval in February — concentrates enormous tourist volume into a compressed window. A boutique in Vieux-Québec that stocks a well-designed branded coffee bag is positioned to convert that tourist traffic into a product that travels home to Toronto, New York, Paris, and Tokyo and continues representing the city's brand long after the visit.",
    ],
  },
  useCases: {
    heading: "How Quebec City Boutiques Use Custom Coffee",
    items: [
      {
        title: "Tourist souvenir in Petit Champlain",
        body: "A French-language branded coffee bag from a Petit Champlain boutique is a high-quality souvenir that survives the journey home and gets used. Unlike a ceramic piece that might break in luggage or a magnet that competes with every other magnet, a coffee bag is consumed, appreciated, and creates a morning sensory recall of the visit to Quebec City.",
      },
      {
        title: "Quebec cultural identity retail",
        body: "A bag that says 'Torréfié au Québec' on the front and carries the visual language of Quebec City — the Château Frontenac silhouette, the plains of Abraham, the fleur-de-lis — is a product that sells to both tourists seeking Quebec identity and to locals who want to support a Quebec-made food product.",
      },
      {
        title: "Carnaval and winter festival retail",
        body: "Carnaval de Québec in February brings hundreds of thousands of visitors to the city. A limited-edition Carnaval coffee bag — seasonal design, French-language, with a reference to the winter festival's bonhomme imagery — is a seasonal souvenir product timed to the city's highest tourist volume of the winter.",
      },
      {
        title: "Vieux-Québec artisan gift sets",
        body: "A gift set combining a branded coffee bag with a local pottery piece, a Quebec maple product, and a locally printed card is a premium Quebec artisan gift that sells at $60–$100 to the tourist who wants to give something authentic and meaningful from their visit to Vieux-Québec.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City, the freshest local-sourced option. French-language design is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Quebec City boutique?",
      a: "Yes. French-only is the default for Quebec City clients — consistent with Loi 101 and with the predominantly francophone character of Quebec City's local retail market.",
    },
    {
      q: "Can I print 'Torréfié au Québec' on the bag?",
      a: "Yes — it's accurate. EZPZ roasts in Montreal. Your design can include this claim and it will be true.",
    },
    {
      q: "What coffee works for tourist-focused boutique retail?",
      a: "For tourist retail, clarity of story matters as much as flavour. A single-origin with an accessible profile — Colombian washed with caramel sweetness, Ethiopian natural with berry and florals — and a French-language tasting note card is the right product. The tourist who buys it will share it with people who will ask where it came from.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Retail · Montreal", href: "/en/custom-coffee-retail-montreal" },
    { label: "Retail · Ottawa", href: "/en/custom-coffee-retail-ottawa" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
  ],
  ctaClose:
    "The most photographed street in Canada runs through your retail market. Make your branded coffee part of what tourists carry home.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-retail-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Boutiques et détaillants",
    parentHref: "/fr/custom-coffee-bags-boutiques",
    parentLabel: "Boutiques",
  },
  hero: {
    h1: "Café personnalisé pour les boutiques et détaillants de Québec",
    subheadline: "Les boutiques et détaillants de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les boutiques et détaillants de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les boutiques et détaillants de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les boutiques de Québec",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Les boutiques de Saint-Roch, la rue Saint-Jean et le Vieux-Québec ont construit des identités de quartier fortes et une clientèle locale fidèle. Les détaillants indépendants de Québec se distinguent des grandes chaînes par leur curation unique et leur sens du produit local.",
      "Un café de spécialité personnalisé avec la marque de votre boutique est le produit lifestyle qui complète naturellement vos tablettes : il est beau, consommable, à forte marge et parle exactement au client qui apprécie votre sélection. Il génère des achats d'impulsion à la caisse et des raisons de revenir.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 12 ou 24 sacs et voir comment vos clients réagissent avant d'investir dans un inventaire plus important.",
    ],
  },
  useCases: {
    heading: "Comment les boutiques de Québec utilisent le café de marque",
    items: [
    { title: "Article de comptoir à forte marge", body: "Un sachet de café posé à côté de la caisse est l'achat d'impulsion parfait pour un client qui vient déjà pour autre chose. À 24 à 28 $ au détail, la marge est l'une des meilleures de vos tablettes." },
    { title: "Produit lifestyle qui complète votre sélection", body: "Que vous vendiez des vêtements, des objets de maison ou des accessoires, le café de spécialité personnalisé s'intègre naturellement à l'histoire de votre boutique et communique la même attention à la qualité." },
    { title: "Coffrets cadeaux et paniers de saison", body: "Pour les Fêtes, la fête des Mères et la Saint-Valentin, créez des coffrets cadeaux avec votre café de marque. C'est une raison d'entrer dans votre boutique pour des clients qui achètent pour d'autres." },
    { title: "Collaborations locales et pop-ups", body: "Associez votre café de marque à d'autres boutiques locales et artisans de Québec pour des coffrets collaboratifs et des marchés éphémères. La marque croisée renforce votre ancrage dans la communauté locale." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les boutiques de Québec présentent-elles le café de marque en magasin ?", a: "Les présentoirs les plus efficaces sont au niveau des yeux près de la caisse ou dans un espace dédié 'lifestyle' ou 'local'. Certaines boutiques de Québec créent un mini-espace café dans leur magasin avec les sacs exposés comme produit de décoration en soi." },
    { q: "Y a-t-il un minimum pour les boutiques de Québec qui veulent faire un essai ?", a: "Aucun minimum. Vous pouvez commander 6, 12 ou 24 sacs pour votre premier essai et réapprovisionner selon la demande. EZPZ offre la même qualité de café et de design quel que soit le volume commandé." },
  ],
  siblings: [
    { label: "Boutiques · Montréal", href: "/fr/custom-coffee-retail-montreal" },
    { label: "Boutiques · Toronto", href: "/fr/custom-coffee-retail-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
  ],
  ctaClose: "Votre boutique de Québec vend un art de vivre. Votre café devrait en faire partie.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
