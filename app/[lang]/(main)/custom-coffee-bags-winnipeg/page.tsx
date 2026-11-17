import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Winnipeg | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Winnipeg | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Winnipeg, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Winnipeg choisissent EZPZ." : "Custom coffee bags for Winnipeg businesses, shipped in 7–10 days. No minimum order, full design included. Winnipeg brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-winnipeg`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-winnipeg",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-winnipeg",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-winnipeg",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-winnipeg`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Winnipeg" : "Custom Coffee Bags Winnipeg" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Winnipeg",
  province: "Manitoba",
  eyebrow: "Custom Coffee Bags — Winnipeg",
  headline: "Custom coffee bags for Winnipeg brands. Zero minimums.",
  subheadline: "Winnipeg's restaurants, arts community, and prairie lifestyle brands trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the heritage warehouses of the Exchange District to the indie restaurants of Osborne Village, from The Forks market to the arts-forward community of Wolseley — Winnipeg has a distinctly proud, locally-rooted business culture. Prairie businesses here build deep community ties, and a branded coffee product is one of the most effective ways to turn those ties into daily brand impressions. EZPZ ships from Montreal to Winnipeg in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-winnipeg",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Winnipeg", body: "We ship directly to your Winnipeg address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept before committing to volume." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Winnipeg's community-first culture", body: "Winnipeg businesses build deep local loyalty — EZPZ helps them leverage that loyalty with a branded coffee product customers use every morning and associate with their favourite local brand." },
  ],
  whoWeServe: [
    { title: "Restaurants & Osborne Village Dining", body: "Osborne Village restaurants, Exchange District cafés, and Wolseley community eateries add custom branded coffee that extends their brand into customers' morning rituals." },
    { title: "Arts & Exchange District Galleries", body: "Winnipeg's vibrant arts community — from Royal MTC to Exchange District galleries — uses custom coffee as a memorable patron gift that reflects creative identity." },
    { title: "Retailers & The Forks Market", body: "The Forks vendors, Exchange District boutiques, and independent Winnipeg retailers add custom branded coffee as a premium, giftable product with strong repeat appeal." },
    { title: "Hotels & Event Venues", body: "Winnipeg hotels, conference centres near the Convention Centre, and event venues brand their hospitality experience with EZPZ custom coffee." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Winnipeg in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Winnipeg neighbourhoods including Exchange District, Osborne Village, The Forks area, Wolseley, St. Boniface, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Edmonton", href: "/en/custom-coffee-bags-edmonton" },
    { city: "Saskatoon", href: "/en/custom-coffee-bags-saskatoon" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Winnipeg take?",
      a: "Winnipeg orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Winnipeg neighbourhoods including the Exchange District, Osborne Village, The Forks area, Wolseley, St. Boniface, and surrounding communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "Is bilingual French and English bag design available for Winnipeg?",
      a: "Yes — Manitoba's strong Franco-Manitoban community means many Winnipeg businesses benefit from bilingual bag design. We offer French/English bilingual layouts, French-only, or English-only designs at no extra cost. Businesses in St. Boniface especially appreciate the option to lead with French copy that reflects their community's character.",
    },
    {
      q: "What Winnipeg businesses use EZPZ most?",
      a: "Exchange District restaurants and bars, Osborne Village boutiques and wellness studios, The Forks market vendors, corporate offices in downtown Winnipeg, and the growing tech and creative sector across the city. Winnipeg's vibrant arts and food culture is building brands that want to stand out with premium products.",
    },
  ],
};


const frData: CityPageData = {
  city: "Winnipeg", province: "Manitoba",
  eyebrow: "Sacs de café personnalisés — Winnipeg",
  headline: "Sacs de café personnalisés pour les marques de Winnipeg. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et entreprises créatives de Winnipeg font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "De l'Exchange District animé aux restaurants du Osborne Village, de la scène culturelle dynamique du Centre Canadien jusqu'aux entreprises de Saint-Boniface, Winnipeg est une ville de fierté locale et de créativité authentique. EZPZ livre des sacs de café de spécialité personnalisés depuis notre torréfacteur montréalais jusqu'à Winnipeg en 7 à 10 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-winnipeg",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Winnipeg", body: "Nous livrons directement à votre adresse à Winnipeg en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour les marchés créatif et corporatif de Winnipeg", body: "De l'Exchange District aux bureaux d'entreprises du centre-ville, EZPZ livre un café de marque premium qui résonne avec la clientèle exigeante de Winnipeg." },
  ],
  whoWeServe: [
    { title: "Restaurants et Exchange District", body: "Les restaurants de l'Exchange District, les bistros du Osborne Village et les cafés d'Osborne Village utilisent le café personnalisé pour garder leur marque visible dans les cuisines de leurs clients." },
    { title: "Hôtels et propriétés de centre-ville", body: "Les hôtels du centre-ville de Winnipeg personnalisent leur café en chambre pour offrir une expérience client mémorable." },
    { title: "Entreprises créatives et culturelles", body: "Les galeries, lieux de spectacle et organisations artistiques de Winnipeg utilisent le café personnalisé comme cadeau créatif et mémorable pour leurs mécènes." },
    { title: "Corporatif et services professionnels", body: "Les firmes professionnelles et les entreprises du centre-ville utilisent EZPZ pour des cadeaux de café de marque premium qui font forte impression sur les clients." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Winnipeg en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Winnipeg : Exchange District, Osborne Village, Saint-Boniface, Transcona et les environs. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Calgary", href: "/fr/custom-coffee-bags-calgary" },
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Winnipeg ?", a: "Les commandes de Winnipeg arrivent en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Nous livrons dans tous les quartiers de Winnipeg." },
    { q: "Quelles industries de Winnipeg utilisent le café personnalisé ?", a: "Les restaurants et bars de l'Exchange District, les hôtels du centre-ville, les organisations artistiques, les entreprises gouvernementales et les services professionnels utilisent tous EZPZ pour des cadeaux de café de marque premium." },
    { q: "Y a-t-il un minimum de commande pour Winnipeg ?", a: "Aucun minimum. Que vous ayez besoin de quelques sacs pour un événement ou de milliers pour un programme de cadeaux corporatifs, EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const WinnipegPage = () => <CityPage data={data} frData={frData} />;
export default WinnipegPage;
