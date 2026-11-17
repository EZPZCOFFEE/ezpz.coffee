import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Moncton | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Moncton | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Moncton, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques bilingues de Moncton choisissent EZPZ." : "Custom coffee bags for Moncton businesses, shipped in 7–10 days. No minimum order, full design included. Moncton brands choose EZPZ for specialty coffee.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-moncton`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-moncton",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-moncton",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-moncton",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-moncton`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Moncton" : "Custom Coffee Bags Moncton" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Moncton",
  province: "New Brunswick",
  eyebrow: "Custom Coffee Bags — Moncton",
  headline: "Custom coffee bags for Moncton brands. Zero minimums.",
  subheadline: "Moncton's bilingual business community, retailers, and hospitality sector trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the growing restaurant scene of Downtown Moncton to the commercial corridors of Dieppe, from Riverview's suburban businesses to the bilingual professional community at the heart of Atlantic Canada's fastest-growing city — Moncton serves a unique dual English and French market. EZPZ ships custom branded specialty coffee from our Montreal roastery to Moncton in 7 to 10 business days. Bilingual bag designs available. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-moncton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name in English, French, or both, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Moncton", body: "We ship directly to your Moncton address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept without risk." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. We can design in English, French, or bilingual format." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Bilingual-ready packaging for Moncton's market", body: "Moncton's unique English-French bilingual market is a competitive advantage for businesses that serve both communities well — EZPZ designs your bags in both languages at no extra cost." },
  ],
  whoWeServe: [
    { title: "Restaurants & Downtown Moncton", body: "Downtown Moncton restaurants, Dieppe dining destinations, and Riverview cafés use custom branded coffee to keep their brand visible in customers' morning routines." },
    { title: "Retailers & Bilingual Brands", body: "Moncton's bilingual retail community adds custom branded coffee — available in English, French, or both — as a differentiated product that serves their full customer base." },
    { title: "Hotels & Hospitality", body: "Moncton hotels, conference properties, and hospitality venues brand their in-room coffee experience to deliver a premium guest stay in Atlantic Canada's hub city." },
    { title: "Corporate & Professional Services", body: "Moncton's professional services firms, financial offices, and corporate sector use EZPZ for premium branded coffee gifts that make a strong impression on clients." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Moncton in 7 to 10 business days via tracked Canada Post or courier. We deliver to Downtown Moncton, Dieppe, Riverview, and surrounding Greater Moncton communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Halifax", href: "/en/custom-coffee-bags-halifax" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Moncton take?",
      a: "Moncton orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to Downtown Moncton, Dieppe, Riverview, and surrounding Greater Moncton communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "Can I get bilingual French and English bag designs for Moncton?",
      a: "Yes — Moncton's bilingual character is one of Canada's strongest, with both English and French as everyday commercial languages. Our team designs French/English bilingual bags, French-only, and English-only layouts at no extra cost. For Dieppe-based businesses in particular, a French-first bilingual design is often the right call.",
    },
    {
      q: "What kinds of Moncton businesses use custom coffee bags?",
      a: "Main Street restaurants and bars, Magnetic Hill-area event venues and hotels, Champlain Place-adjacent retailers, corporate gifting programs for Greater Moncton professional services, and community organizations across New Brunswick all use EZPZ. Moncton's geographic centre in the Maritimes also makes it a hub for regional distribution.",
    },
  ],
};


const frData: CityPageData = {
  city: "Moncton",
  province: "Nouveau-Brunswick",
  eyebrow: "Sacs de café personnalisés — Moncton",
  headline: "Sacs de café personnalisés pour les marques de Moncton. Aucun minimum.",
  subheadline: "La communauté d'affaires bilingue de Moncton, ses détaillants et son secteur hôtelier font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "De la scène restauratrice en plein essor du centre-ville de Moncton aux corridors commerciaux de Dieppe, des commerces suburbains de Riverview à la communauté professionnelle bilingue au coeur de la ville à la croissance la plus rapide des Maritimes, Moncton sert un marché unique à double caractère anglais et français. EZPZ livre des sacs de café de spécialité personnalisés depuis notre torréfacteur montréalais jusqu'à Moncton en 7 à 10 jours ouvrables. Designs bilingues disponibles. Aucun minimum. Design inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-moncton",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Moncton", body: "Nous livrons directement à votre adresse à Moncton en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Emballage bilingue pour le marché de Moncton", body: "Le caractère bilingue unique de Moncton est un avantage concurrentiel pour les entreprises qui servent bien les deux communautés. EZPZ conçoit vos sacs dans les deux langues sans frais supplémentaires." },
  ],
  whoWeServe: [
    { title: "Restaurants et centre-ville de Moncton", body: "Les restaurants et bars du centre-ville de Moncton, les destinations gastronomiques de Dieppe et les cafés de Riverview utilisent le café personnalisé pour maintenir leur marque visible dans les routines matinales de leurs clients." },
    { title: "Détaillants et marques bilingues", body: "La communauté de détail bilingue de Moncton ajoute le café personnalisé, disponible en anglais, en français ou dans les deux langues, comme produit différencié qui sert toute leur clientèle." },
    { title: "Hôtels et hospitalité", body: "Les hôtels de Moncton, propriétés de conférence et lieux hôteliers personnalisent leur expérience café en chambre pour offrir un séjour premium dans la ville-carrefour des Maritimes." },
    { title: "Services professionnels et corporatifs", body: "Les firmes de services professionnels de Moncton et le secteur corporatif utilisent EZPZ pour des cadeaux de café de marque premium qui font forte impression sur les clients." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Moncton en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons au centre-ville de Moncton, à Dieppe, à Riverview et dans les communautés environnantes du Grand Moncton. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Halifax", href: "/fr/custom-coffee-bags-halifax" },
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Moncton ?", a: "Les commandes de Moncton arrivent en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons au centre-ville de Moncton, à Dieppe, à Riverview et dans les communautés environnantes du Grand Moncton. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Puis-je obtenir des designs de sacs bilingues ou en français pour Moncton ?", a: "Oui. Le caractère bilingue de Moncton est l'un des plus forts au Canada. Notre équipe conçoit des sacs bilingues français/anglais, en français seulement et en anglais seulement, sans frais supplémentaires. Pour les entreprises basées à Dieppe en particulier, un design d'abord en français est souvent le meilleur choix." },
    { q: "Quels types d'entreprises de Moncton utilisent des sacs de café personnalisés ?", a: "Les restaurants et bars de la rue Main, les hôtels et lieux d'événements du secteur Magnetic Hill, les détaillants du secteur Place Champlain, les programmes de cadeaux corporatifs pour les services professionnels du Grand Moncton utilisent tous EZPZ." },
  ],
};

const MonctonPage = () => <CityPage data={data} frData={frData} />;
export default MonctonPage;
