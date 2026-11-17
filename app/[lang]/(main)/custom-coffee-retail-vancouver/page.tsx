import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les boutiques de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Boutiques & Retail | EZPZ Coffee";
  const description = isFr ? "Les boutiques et détaillants de Vancouver ajoutent le café de spécialité personnalisé comme produit à forte marge. Aucun minimum, design inclus." : "Gastown, Yaletown, Robson Street — Vancouver's boutique retail is eco-conscious and sustainability-forward. Custom branded specialty coffee with traceable sourcing, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-retail-vancouver`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-retail-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-retail-vancouver",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-retail-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-retail-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les boutiques de Vancouver" : "Custom Coffee Bags for Vancouver Boutiques & Retail" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Vancouver Boutiques & Retail Shops",
    subheadline:
      "Gastown. Yaletown. Robson Street. Vancouver's boutiques carry products that reflect Pacific Northwest values — and so should your branded coffee.",
    ctaSubject: "Custom coffee for Vancouver boutique",
  },
  aeoAnswer:
    "Vancouver boutiques can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Traceable, sustainably sourced coffee available. Delivered in 4–6 business days.",
  why: {
    heading: "Vancouver Boutique Retail and the Sustainable Coffee Standard",
    paragraphs: [
      "Vancouver's independent boutique corridors — Gastown's Water Street and Abbott Street, Yaletown's Mainland Street, the South Granville gallery-retail strip — attract the most environmentally conscious retail consumer in Canada. The buyer who shops at a Gastown boutique has already filtered for values alignment before they walk in the door. If the products on the shelf don't meet that standard, they don't sell — or worse, they signal that the buyer isn't paying attention.",
      "Branded coffee at a Vancouver boutique passes or fails on sustainability. A custom bag with traceable single-origin sourcing, a Canadian roastery's seal, and eco-conscious packaging materials is a product that earns its shelf space. EZPZ can provide full traceability documentation — farm, cooperative, processing method, certifications — to support any boutique's transparency claims about the products it carries.",
      "Vancouver's specialty coffee consumption is among the highest per capita in Canada. A customer who picks up a branded coffee bag at a Yaletown boutique is a customer who knows what good coffee costs and why it costs that. Specialty-grade coffee at $20–$22 a bag is not an impulse purchase in the way it might be elsewhere — it's a considered buy from an informed consumer, which means higher conversion and higher repeat purchase rates.",
    ],
  },
  useCases: {
    heading: "How Vancouver Boutiques Use Custom Coffee",
    items: [
      {
        title: "Eco-aligned retail shelf product",
        body: "A specialty coffee bag with traceable sourcing and minimal packaging — one-way valve, resealable, no excess — is a product that belongs on the shelf of a Gastown boutique that has already made commitments about the sustainability of what it carries.",
      },
      {
        title: "Pacific Northwest lifestyle gift bundle",
        body: "A 'Vancouver morning' gift bundle — branded coffee, a locally made mug, an artisan chocolate from a Granville Island maker — is a $60–$100 gift set that sells to tourists, to corporate gifters, and to locals who want to give something that represents the city at its best.",
      },
      {
        title: "Neighbourhood identity retail",
        body: "A bag with 'Custom-roasted for [Shop Name], Gastown, Vancouver' printed below the branding is a product that locals buy for the same reason they wear neighbourhood pride — it's specific, it's theirs, and it supports a place they care about.",
      },
      {
        title: "Seasonal outdoor and adventure retail",
        body: "Vancouver boutiques that carry outdoor lifestyle or adventure gear — Kitsilano, North Shore, or Gastown's crossover outdoor-lifestyle retail — can position branded coffee as a 'trail morning' or 'mountain ritual' product that connects to the city's active identity. A bag designed around a mountain silhouette or Pacific coastline sells consistently in this context.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Traceable, sustainably sourced specialty coffee available. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can you provide documentation of your coffee's traceability for our sustainability reports?",
      a: "Yes. EZPZ sources specialty-grade coffees with full traceability — farm name, processing station, cooperative, certifications. We can provide documentation that supports your boutique's sustainability claims.",
    },
    {
      q: "What coffee profile fits Vancouver's eco-conscious retail buyer?",
      a: "Vancouver's informed coffee buyers respond well to a clean, traceable single-origin with specific provenance — a natural-process Ethiopian from a known cooperative, or a washed Colombian from a single farm. The story matters as much as the taste in this market.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "How long does delivery take?",
      a: "4–6 business days from Montreal to Vancouver. Order a week ahead of any pop-up or seasonal push.",
    },
  ],
  siblings: [
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Retail · Calgary", href: "/en/custom-coffee-retail-calgary" },
    { label: "Cafés · Vancouver", href: "/en/custom-coffee-cafes-vancouver" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
  ],
  ctaClose:
    "Vancouver's boutiques set the sustainability bar for Canadian retail. Your branded coffee should clear it.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-retail-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Boutiques et détaillants",
    parentHref: "/fr/custom-coffee-bags-boutiques",
    parentLabel: "Boutiques",
  },
  hero: {
    h1: "Café personnalisé pour les boutiques et détaillants de Vancouver",
    subheadline: "Les boutiques et détaillants de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les boutiques et détaillants de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les boutiques et détaillants de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les boutiques de Vancouver",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Les boutiques de Gastown, Main Street et Commercial Drive ont construit des identités de quartier fortes et une clientèle locale fidèle. Les détaillants indépendants de Vancouver se distinguent des grandes chaînes par leur curation unique et leur sens du produit local.",
      "Un café de spécialité personnalisé avec la marque de votre boutique est le produit lifestyle qui complète naturellement vos tablettes : il est beau, consommable, à forte marge et parle exactement au client qui apprécie votre sélection. Il génère des achats d'impulsion à la caisse et des raisons de revenir.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 12 ou 24 sacs et voir comment vos clients réagissent avant d'investir dans un inventaire plus important.",
    ],
  },
  useCases: {
    heading: "Comment les boutiques de Vancouver utilisent le café de marque",
    items: [
    { title: "Article de comptoir à forte marge", body: "Un sachet de café posé à côté de la caisse est l'achat d'impulsion parfait pour un client qui vient déjà pour autre chose. À 24 à 28 $ au détail, la marge est l'une des meilleures de vos tablettes." },
    { title: "Produit lifestyle qui complète votre sélection", body: "Que vous vendiez des vêtements, des objets de maison ou des accessoires, le café de spécialité personnalisé s'intègre naturellement à l'histoire de votre boutique et communique la même attention à la qualité." },
    { title: "Coffrets cadeaux et paniers de saison", body: "Pour les Fêtes, la fête des Mères et la Saint-Valentin, créez des coffrets cadeaux avec votre café de marque. C'est une raison d'entrer dans votre boutique pour des clients qui achètent pour d'autres." },
    { title: "Collaborations locales et pop-ups", body: "Associez votre café de marque à d'autres boutiques locales et artisans de Vancouver pour des coffrets collaboratifs et des marchés éphémères. La marque croisée renforce votre ancrage dans la communauté locale." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les boutiques de Vancouver présentent-elles le café de marque en magasin ?", a: "Les présentoirs les plus efficaces sont au niveau des yeux près de la caisse ou dans un espace dédié 'lifestyle' ou 'local'. Certaines boutiques de Vancouver créent un mini-espace café dans leur magasin avec les sacs exposés comme produit de décoration en soi." },
    { q: "Y a-t-il un minimum pour les boutiques de Vancouver qui veulent faire un essai ?", a: "Aucun minimum. Vous pouvez commander 6, 12 ou 24 sacs pour votre premier essai et réapprovisionner selon la demande. EZPZ offre la même qualité de café et de design quel que soit le volume commandé." },
  ],
  siblings: [
    { label: "Boutiques · Montréal", href: "/fr/custom-coffee-retail-montreal" },
    { label: "Boutiques · Toronto", href: "/fr/custom-coffee-retail-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
  ],
  ctaClose: "Votre boutique de Vancouver vend un art de vivre. Votre café devrait en faire partie.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
