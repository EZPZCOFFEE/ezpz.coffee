import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Kelowna | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Kelowna | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Kelowna, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Kelowna choisissent EZPZ." : "Custom coffee bags for Kelowna businesses, shipped in 7–10 days. No minimum order, full design included. Kelowna brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-kelowna`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-kelowna",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-kelowna",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-kelowna",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-kelowna`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Kelowna" : "Custom Coffee Bags Kelowna" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Kelowna",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Kelowna",
  headline: "Custom coffee bags for Kelowna brands. Zero minimums.",
  subheadline: "Kelowna's wineries, boutique hotels, and tourism operators trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the tasting rooms and winery restaurants along the Okanagan Mission to the boutique hotels of Downtown Kelowna, from Pandosy Village's independent boutiques to the recreation-first lifestyle brands of Black Mountain — Kelowna businesses operate in one of Canada's most aspirational tourism and lifestyle markets. EZPZ ships custom branded specialty coffee from our Montreal roastery to Kelowna in 7 to 10 business days. No minimum order. Full design always included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-kelowna",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your winery name, hotel brand, or business message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Kelowna", body: "We ship directly to your Kelowna address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for seasonal batches and winery gift shops." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Kelowna's quality-conscious market expects the best — we deliver it." },
    { n: "04", title: "Built for Kelowna's wine country experience", body: "Wineries, luxury vacation rentals, and Okanagan lifestyle brands use EZPZ to create a branded morning ritual that pairs perfectly with the world-class experience they offer guests." },
  ],
  whoWeServe: [
    { title: "Wineries & Tasting Rooms", body: "Okanagan wineries add EZPZ custom coffee to their gift shop and winery experience — a natural pairing with wine and a premium branded product guests take home." },
    { title: "Boutique Hotels & Vacation Rentals", body: "Kelowna boutique hotels and luxury vacation rentals brand their morning coffee to deliver a complete, premium guest experience from breakfast to bedtime." },
    { title: "Restaurants & Farm-to-Table Dining", body: "Downtown Kelowna restaurants and Pandosy Village dining destinations add custom branded coffee to extend their local, quality-first brand story." },
    { title: "Tourism & Experience Operators", body: "Okanagan experience companies, eco-tourism operators, and outdoor adventure brands use custom coffee as a memorable branded gift for their guests." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Kelowna in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Kelowna areas including Downtown, Pandosy Village, Rutland, Black Mountain, and the surrounding Okanagan communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
    { city: "Victoria", href: "/en/custom-coffee-bags-victoria" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Kelowna take?",
      a: "Kelowna orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to Downtown, Pandosy Village, Rutland, Black Mountain, West Kelowna, and surrounding Okanagan communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "How does EZPZ fit Kelowna's winery and hospitality sector?",
      a: "Okanagan wineries, Mission Hill-area luxury properties, lakefront resort hotels, and boutique inns throughout the valley use custom branded coffee as a premium guest amenity that extends their brand beyond wine. A coffee bag with your winery's label on the kitchen counter is daily brand exposure — something a wine label never achieves on its own.",
    },
    {
      q: "Can Kelowna Airbnb hosts and vacation rentals use EZPZ?",
      a: "Absolutely — our zero minimum makes EZPZ perfect for Okanagan vacation rental hosts who want to stand out. Even a single bag of custom branded coffee left for guests creates a memorable, shareable experience. Many Kelowna Airbnb hosts reorder regularly for back-to-back guest seasons.",
    },
  ],
};


const frData: CityPageData = {
  city: "Kelowna", province: "Colombie-Britannique",
  eyebrow: "Sacs de café personnalisés — Kelowna",
  headline: "Sacs de café personnalisés pour les marques de Kelowna. Aucun minimum.",
  subheadline: "Les restaurants, vignobles et hôtels de villégiature de Kelowna font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Des vignobles et domaines viticoles de l'Okanagan aux restaurants gastronomiques du front de lac, de la scène hôtelière de villégiature de Kelowna aux boutiques du quartier Bernard Avenue, Kelowna est un marché premium axé sur l'expérience. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Kelowna en 7 à 10 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-kelowna",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Kelowna", body: "Nous livrons directement à votre adresse à Kelowna en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché de villégiature et viticole de Kelowna", body: "Des vignobles de l'Okanagan aux hôtels de villégiature du lac, EZPZ livre un café de marque premium qui résonne avec les clients exigeants de Kelowna." },
  ],
  whoWeServe: [
    { title: "Restaurants et gastronomie", body: "Les restaurants du front de lac, les bistros gastronomiques et les cafés de Bernard Avenue utilisent le café personnalisé pour prolonger l'expérience culinaire." },
    { title: "Vignobles et domaines viticoles", body: "Les vignobles de l'Okanagan ajoutent le café personnalisé comme produit complémentaire de boutique de domaine à forte marge." },
    { title: "Hôtels de villégiature et spas", body: "Les hôtels de villégiature et spas de Kelowna personnalisent leur expérience café pour offrir un séjour premium mémorable." },
    { title: "Détaillants et boutiques lifestyle", body: "Les boutiques de Bernard Avenue et les commerces lifestyle de Kelowna ajoutent le café personnalisé comme produit différenciant." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Kelowna en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Kelowna. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Vancouver", href: "/fr/custom-coffee-bags-vancouver" },
    { city: "Victoria", href: "/fr/custom-coffee-bags-victoria" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Kelowna ?", a: "Les commandes de Kelowna arrivent en 7 à 10 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de Kelowna utilisent le café personnalisé ?", a: "Les vignobles de l'Okanagan, les hôtels de villégiature, les restaurants gastronomiques du front de lac et les boutiques de Bernard Avenue sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Kelowna ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const KelownaPage = () => <CityPage data={data} frData={frData} />;
export default KelownaPage;
