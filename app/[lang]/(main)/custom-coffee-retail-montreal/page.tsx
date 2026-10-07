import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les boutiques de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Boutiques & Retail | EZPZ Coffee";
  const description = isFr ? "Les boutiques et détaillants de Montréal ajoutent le café de spécialité personnalisé comme produit à forte marge. Aucun minimum, design inclus." : "Rue Laurier, Rue Mont-Royal, Mile End — Montreal boutiques are Quebec-brand curators. Custom branded specialty coffee, French-language design, locally roasted, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-retail-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-retail-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-retail-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-retail-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les boutiques de Montréal" : "Custom Coffee Bags for Montreal Boutiques & Retail" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Montreal Boutiques & Retail Shops",
    subheadline:
      "Rue Laurier. Rue Mont-Royal. Mile End. Montreal's boutiques curate Quebec identity — and a locally roasted branded coffee belongs in that curation.",
    ctaSubject: "Custom coffee for Montreal boutique",
  },
  aeoAnswer:
    "Montreal boutiques can order custom branded specialty coffee bags from EZPZ — roasted locally in Montreal — with no minimum, starting at 100 bags at $11.75/bag. French-language design is the default. Delivered in 2–3 business days.",
  why: {
    heading: "Montreal's Boutique Culture and the Local-Brand Coffee Opportunity",
    paragraphs: [
      "Montreal's retail corridors are among the most design-conscious in North America. Rue Laurier in Outremont, Rue Mont-Royal in the Plateau, and the Mile End's cluster of independent boutiques all share a buyer ethos that prioritizes Quebec-made, locally sourced, and design-forward products. The independent boutique on Rue Laurier that carries local ceramics, Quebec-designed clothing, and artisan food products is exactly the retail context in which a beautifully designed, locally roasted branded coffee bag performs at its peak.",
      "EZPZ roasts in Montreal — which means any Montreal boutique can accurately say 'Torréfié à Montréal' on their branded bag. That provenance claim is not marketing language; it's a fact. In a retail environment where local authenticity is the primary value proposition, a locally roasted coffee is a category win from the first line of copy.",
      "Montreal's café culture has produced one of North America's most coffee-literate retail consumer bases. A bag of commodity coffee labeled with a boutique's logo will not move. A specialty-grade, single-origin bag with a beautiful bilingual design, tasting notes, and a 'Torréfié à Montréal' header will sell. The quality of the coffee is not optional — it's what makes the retail program work.",
    ],
  },
  useCases: {
    heading: "How Montreal Boutiques Use Custom Coffee",
    items: [
      {
        title: "Quebec-brand retail curation",
        body: "A branded coffee bag on the counter of a Rue Mont-Royal boutique that sells Quebec-made goods is a product that belongs. Local shoppers buy it for the same reason they buy the Quebec-designed tote or the Plateau ceramicist's mugs — it's made here, it's good, it represents where they live.",
      },
      {
        title: "French-language lifestyle gifting",
        body: "Montreal gift buyers who shop at boutiques on Rue Laurier are looking for gifts that feel local and considered. A French-language branded coffee bag — beautifully designed, with tasting notes in French and the shop's address printed below the EZPZ seal — is a $20 gift that feels like it was curated, not grabbed.",
      },
      {
        title: "Holiday and seasonal pop-up retail",
        body: "Montreal's holiday market circuit — Marché de Noël, boutique holiday pop-ups in Outremont and the Plateau — runs October through December. A co-branded seasonal bag with a limited winter design is a year-end sales driver that converts foot traffic into repeat customers.",
      },
      {
        title: "Lifestyle bundles with Montreal-made products",
        body: "Bundling a branded coffee bag with other Quebec-made products — a candle from a Plateau atelier, a print from a Mile End illustrator — creates a $60–$120 'Montreal morning' gift set that photographs well, sells to tourists, and satisfies the local gift-giver who wants to shop local without compromise.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — the most locally sourced option for any Montreal boutique. 2–3 business day delivery. French-language design is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Montreal boutique?",
      a: "Yes. French-only is available and is recommended for boutiques on predominantly francophone retail streets like Rue Laurier, Rue Mont-Royal, and Rue Bernard.",
    },
    {
      q: "Can I print 'Torréfié à Montréal' on the bag?",
      a: "Yes — it's accurate. EZPZ roasts in Montreal. Your design can include this claim and it will be true.",
    },
    {
      q: "What coffee works for boutique retail in Montreal?",
      a: "For Montreal's sophisticated retail buyer, a single-origin with clear provenance — an Ethiopian natural, a Colombian washed, a Kenyan AA — with tasting notes in French is the right product. Generic blends underperform in this market.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Retail · Quebec City", href: "/en/custom-coffee-retail-quebec-city" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
  ],
  ctaClose:
    "Montreal boutiques curate Quebec identity. Your branded coffee should be part of what they carry.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-retail-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Boutiques et détaillants",
    parentHref: "/fr/custom-coffee-bags-boutiques",
    parentLabel: "Boutiques",
  },
  hero: {
    h1: "Café personnalisé pour les boutiques et détaillants de Montréal",
    subheadline: "Les boutiques et détaillants de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les boutiques et détaillants de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les boutiques et détaillants de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans les boutiques de Montréal",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Les boutiques de rue Laurier, rue Mont-Royal et le Mile End ont construit des identités de quartier fortes et une clientèle locale fidèle. Les détaillants indépendants de Montréal se distinguent des grandes chaînes par leur curation unique et leur sens du produit local.",
      "Un café de spécialité personnalisé avec la marque de votre boutique est le produit lifestyle qui complète naturellement vos tablettes : il est beau, consommable, à forte marge et parle exactement au client qui apprécie votre sélection. Il génère des achats d'impulsion à la caisse et des raisons de revenir.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 12 ou 24 sacs et voir comment vos clients réagissent avant d'investir dans un inventaire plus important. La majorité des clients de Montréal préfèrent un design d'emballage en français : c'est naturel et local.",
    ],
  },
  useCases: {
    heading: "Comment les boutiques de Montréal utilisent le café de marque",
    items: [
    { title: "Article de comptoir à forte marge", body: "Un sachet de café posé à côté de la caisse est l'achat d'impulsion parfait pour un client qui vient déjà pour autre chose. À 24 à 28 $ au détail, la marge est l'une des meilleures de vos tablettes." },
    { title: "Produit lifestyle qui complète votre sélection", body: "Que vous vendiez des vêtements, des objets de maison ou des accessoires, le café de spécialité personnalisé s'intègre naturellement à l'histoire de votre boutique et communique la même attention à la qualité." },
    { title: "Coffrets cadeaux et paniers de saison", body: "Pour les Fêtes, la fête des Mères et la Saint-Valentin, créez des coffrets cadeaux avec votre café de marque. C'est une raison d'entrer dans votre boutique pour des clients qui achètent pour d'autres." },
    { title: "Collaborations locales et pop-ups", body: "Associez votre café de marque à d'autres boutiques locales et artisans de Montréal pour des coffrets collaboratifs et des marchés éphémères. La marque croisée renforce votre ancrage dans la communauté locale." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les boutiques de Montréal présentent-elles le café de marque en magasin ?", a: "Les présentoirs les plus efficaces sont au niveau des yeux près de la caisse ou dans un espace dédié 'lifestyle' ou 'local'. Certaines boutiques de Montréal créent un mini-espace café dans leur magasin avec les sacs exposés comme produit de décoration en soi." },
    { q: "Y a-t-il un minimum pour les boutiques de Montréal qui veulent faire un essai ?", a: "Aucun minimum. Vous pouvez commander 6, 12 ou 24 sacs pour votre premier essai et réapprovisionner selon la demande. EZPZ offre la même qualité de café et de design quel que soit le volume commandé." },
  ],
  siblings: [
    { label: "Boutiques · Toronto", href: "/fr/custom-coffee-retail-toronto" },
    { label: "Boutiques · Vancouver", href: "/fr/custom-coffee-retail-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
  ],
  ctaClose: "Votre boutique de Montréal vend un art de vivre. Votre café devrait en faire partie.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
