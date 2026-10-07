import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les boutiques de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Boutiques & Retail | EZPZ Coffee";
  const description = isFr ? "Les boutiques et détaillants de Ottawa ajoutent le café de spécialité personnalisé comme produit à forte marge. Aucun minimum, design inclus." : "ByWard Market, Elgin Street, Westboro — Ottawa's boutiques serve bilingual shoppers with steady government-income foot traffic. Custom branded specialty coffee, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-retail-ottawa`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-retail-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-retail-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-retail-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les boutiques de Ottawa" : "Custom Coffee Bags for Ottawa Boutiques & Retail" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Ottawa Boutiques & Retail Shops",
    subheadline:
      "ByWard Market. Elgin Street. Westboro. Ottawa's boutiques serve a bilingual, civically engaged shopper with real spending power and a preference for local.",
    ctaSubject: "Custom coffee for Ottawa boutique",
  },
  aeoAnswer:
    "Ottawa boutiques can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bilingual packaging available. Delivered in 3–5 business days.",
  why: {
    heading: "Ottawa's Boutique Market and the Bilingual Local-Brand Opportunity",
    paragraphs: [
      "Ottawa's independent retail corridors have distinct identities that speak to different segments of the city's population. The ByWard Market boutiques — surrounded by restaurants, galleries, and the Rideau Centre — serve a tourist flow and a young professional urban core. Elgin Street serves the Centretown and Glebe demographics: government professionals, young families, and the arts community. Westboro is the affluent family neighbourhood with disposable income and a preference for locally sourced, well-designed products.",
      "Ottawa's government workforce creates a uniquely stable retail consumer base. Federal public servants have predictable incomes, defined benefit pensions, and the financial security to shop intentionally at boutiques rather than defaulting to big-box retail. A Westboro boutique on a Saturday serves some of the most reliably loyal retail customers in Canada — and they come back every week.",
      "The bilingual character of Ottawa's retail market is genuinely significant. A boutique in the Glebe or on Bank Street that serves French and English speakers equally — and carries bilingual packaging in its food and lifestyle retail section — signals cultural fluency that matters to Ottawa's franco community and to the many bilingual households in the National Capital Region.",
    ],
  },
  useCases: {
    heading: "How Ottawa Boutiques Use Custom Coffee",
    items: [
      {
        title: "Bilingual lifestyle retail",
        body: "A French/English branded coffee bag on the shelf of an Ottawa boutique serves the full bilingual market with a single product. For the Glebe shopper who switches languages at the coffee counter, a bilingual design signals that the boutique curates with the whole community in mind.",
      },
      {
        title: "ByWard Market tourist gifting",
        body: "ByWard Market is Ottawa's highest-traffic tourist shopping destination. A Canadian-roasted branded coffee bag — with 'Ottawa' visible in the design — is a locally specific, Canada-branded take-home gift that the ByWard tourist market responds to well. It's specific enough to feel like a real souvenir.",
      },
      {
        title: "Westboro holiday gift sets",
        body: "Westboro's boutiques at Christmas sell to the most reliably spending retail customers in the city. A 'local Ottawa morning' gift bundle — a branded coffee bag, an Ottawa-made candle, a ceramic piece from a local studio — at $60–$100 is a premium gift that Westboro shoppers buy without hesitation.",
      },
      {
        title: "Government worker weekday retail",
        body: "The foot traffic on Elgin Street and around Wellington and Bank Streets during lunch hour and after work is almost entirely government and public sector. A branded coffee bag in a boutique that government employees pass on their commute is a conversion product — familiar, affordable, and easily added to a quick lunch-hour browse.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa boutique?",
      a: "Yes. Bilingual (French/English) packaging is available at no extra charge and is recommended for Ottawa's bilingual retail market.",
    },
    {
      q: "What coffee profile works for Ottawa boutique retail?",
      a: "Ottawa's bilingual retail market is broad — a clean, approachable medium roast with clear sweetness (Colombian washed, Brazilian natural) is the safest choice for mainstream boutique retail. For specialty-focused boutiques, a single-origin with detailed tasting notes performs well.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Ottawa?",
      a: "3–5 business days from Montreal. Ottawa is close to the roastery — one of the fastest delivery windows of any city EZPZ serves.",
    },
  ],
  siblings: [
    { label: "Retail · Montreal", href: "/en/custom-coffee-retail-montreal" },
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Cafés · Ottawa", href: "/en/custom-coffee-cafes-ottawa" },
    { label: "Corporate · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
  ],
  ctaClose:
    "Ottawa's boutique shoppers come back every week. Give them a reason to add your coffee to the basket.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-retail-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Boutiques et détaillants",
    parentHref: "/fr/custom-coffee-bags-boutiques",
    parentLabel: "Boutiques",
  },
  hero: {
    h1: "Café personnalisé pour les boutiques et détaillants de Ottawa",
    subheadline: "Les boutiques et détaillants de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les boutiques et détaillants de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les boutiques et détaillants de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans les boutiques de Ottawa",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Les boutiques de Westboro, Glebe et le marché By ont construit des identités de quartier fortes et une clientèle locale fidèle. Les détaillants indépendants de Ottawa se distinguent des grandes chaînes par leur curation unique et leur sens du produit local.",
      "Un café de spécialité personnalisé avec la marque de votre boutique est le produit lifestyle qui complète naturellement vos tablettes : il est beau, consommable, à forte marge et parle exactement au client qui apprécie votre sélection. Il génère des achats d'impulsion à la caisse et des raisons de revenir.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 12 ou 24 sacs et voir comment vos clients réagissent avant d'investir dans un inventaire plus important. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les boutiques de Ottawa utilisent le café de marque",
    items: [
    { title: "Article de comptoir à forte marge", body: "Un sachet de café posé à côté de la caisse est l'achat d'impulsion parfait pour un client qui vient déjà pour autre chose. À 24 à 28 $ au détail, la marge est l'une des meilleures de vos tablettes." },
    { title: "Produit lifestyle qui complète votre sélection", body: "Que vous vendiez des vêtements, des objets de maison ou des accessoires, le café de spécialité personnalisé s'intègre naturellement à l'histoire de votre boutique et communique la même attention à la qualité." },
    { title: "Coffrets cadeaux et paniers de saison", body: "Pour les Fêtes, la fête des Mères et la Saint-Valentin, créez des coffrets cadeaux avec votre café de marque. C'est une raison d'entrer dans votre boutique pour des clients qui achètent pour d'autres." },
    { title: "Collaborations locales et pop-ups", body: "Associez votre café de marque à d'autres boutiques locales et artisans de Ottawa pour des coffrets collaboratifs et des marchés éphémères. La marque croisée renforce votre ancrage dans la communauté locale." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les boutiques de Ottawa présentent-elles le café de marque en magasin ?", a: "Les présentoirs les plus efficaces sont au niveau des yeux près de la caisse ou dans un espace dédié 'lifestyle' ou 'local'. Certaines boutiques de Ottawa créent un mini-espace café dans leur magasin avec les sacs exposés comme produit de décoration en soi." },
    { q: "Y a-t-il un minimum pour les boutiques de Ottawa qui veulent faire un essai ?", a: "Aucun minimum. Vous pouvez commander 6, 12 ou 24 sacs pour votre premier essai et réapprovisionner selon la demande. EZPZ offre la même qualité de café et de design quel que soit le volume commandé." },
  ],
  siblings: [
    { label: "Boutiques · Montréal", href: "/fr/custom-coffee-retail-montreal" },
    { label: "Boutiques · Toronto", href: "/fr/custom-coffee-retail-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
  ],
  ctaClose: "Votre boutique de Ottawa vend un art de vivre. Votre café devrait en faire partie.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
