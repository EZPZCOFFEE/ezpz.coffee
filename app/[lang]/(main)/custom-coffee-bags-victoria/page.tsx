import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Victoria CB | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Victoria BC | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Victoria en CB, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Victoria choisissent EZPZ." : "Custom coffee bags for Victoria BC businesses, shipped in 7–10 days. No minimum order, full design included. Victoria brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-victoria`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-victoria",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-victoria",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-victoria",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-victoria`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Victoria CB" : "Custom Coffee Bags Victoria BC" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Victoria",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Victoria, BC",
  headline: "Custom coffee bags for Victoria brands. Zero minimums.",
  subheadline: "Victoria's hotels, restaurants, and tourism operators trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "Victoria is famously known as Canada's tea capital — but the truth is, Victoria's coffee scene is equally serious and its business community deeply values quality and local identity. From the boutique hotels and fine dining of Government Street to the independent shops and galleries of Fernwood, from the Inner Harbour tourism corridor to the historic homes of James Bay — Victoria brands lead with character. EZPZ ships custom branded specialty coffee from Montreal to Victoria in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-victoria",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your hotel name, restaurant brand, or business message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Victoria", body: "We ship directly to your Victoria address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for seasonal tourism batches and boutique runs." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Victoria's quality-first consumers appreciate transparency — we deliver it." },
    { n: "04", title: "The coffee alternative in Canada's tea capital", body: "Victoria is Canada's tea capital — which makes a beautifully branded specialty coffee bag an even more memorable, unexpected, and premium gift for visitors and locals alike." },
  ],
  whoWeServe: [
    { title: "Hotels & Inner Harbour Properties", body: "Victoria's Government Street hotels, Inner Harbour boutique stays, and Oak Bay bed-and-breakfasts brand their morning coffee experience with EZPZ custom bags." },
    { title: "Restaurants & Government Street Dining", body: "Government Street dining rooms, Fernwood neighbourhood restaurants, and Chinatown cafés use custom branded coffee that guests take home and remember." },
    { title: "Tourism & Experience Operators", body: "Victoria's tourism sector — whale watching, garden tours, cycling experiences — uses EZPZ custom coffee as a premium branded takeaway that outlasts the trip." },
    { title: "Tech Companies & Innovation Sector", body: "Victoria's growing tech community uses branded coffee for premium client gifts and office hospitality that stands out from generic corporate swag." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Victoria in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Victoria areas including Government Street, Fernwood, James Bay, Oak Bay, Esquimalt, and Saanich. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
    { city: "Kelowna", href: "/en/custom-coffee-bags-kelowna" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Victoria take?",
      a: "Victoria orders ship via tracked Canada Post or courier and typically arrive in 7 to 10 business days from order confirmation. We ship to the island and deliver to Government Street, Fernwood, James Bay, Oak Bay, Esquimalt, and Saanich. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Victoria businesses use EZPZ?",
      a: "Inner Harbour boutique hotels and inns, Government Street gift shops, Oak Bay restaurants and tea rooms, Fernwood independent cafés, and corporate gifting programs for Victoria's legal and government sector all use EZPZ. Victoria's tourism-heavy economy makes branded coffee especially effective as a premium takeaway souvenir.",
    },
    {
      q: "Can a Victoria Airbnb or bed and breakfast use EZPZ with a small order?",
      a: "Yes — zero minimum means a single bag is a valid order. Victoria's thriving B&B and short-term rental market is one of our strongest Airbnb hosting segments. A custom branded coffee bag in your kitchen tells guests you've thought about every detail — it's also a natural conversation starter and social media moment.",
    },
  ],
};


const frData: CityPageData = {
  city: "Victoria", province: "Colombie-Britannique",
  eyebrow: "Sacs de café personnalisés — Victoria, CB",
  headline: "Sacs de café personnalisés pour les marques de Victoria, CB. Aucun minimum.",
  subheadline: "Les restaurants, hôtels patrimoniaux et boutiques de Victoria font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Du quartier Government Street animé aux boutiques du marché public de Victoria, des hôtels patrimoniaux du Inner Harbour aux cafés et restaurants de Cook Street Village, Victoria combine le charme patrimonial britannique avec une culture coffee et gastronomique de classe mondiale. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Victoria en 7 à 10 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-victoria",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Victoria", body: "Nous livrons directement à votre adresse à Victoria en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché patrimonial et gastronomique de Victoria", body: "Du Inner Harbour à Cook Street Village, EZPZ livre un café de marque premium qui résonne avec les clients exigeants de Victoria." },
  ],
  whoWeServe: [
    { title: "Restaurants et Cook Street Village", body: "Les restaurants de Cook Street Village, les bistros du Fort Street et les cafés du centre-ville de Victoria utilisent le café personnalisé pour garder leur marque visible." },
    { title: "Hôtels patrimoniaux et Inner Harbour", body: "Les hôtels patrimoniaux et les propriétés du Inner Harbour personnalisent leur expérience café en chambre pour offrir un séjour mémorable." },
    { title: "Tourisme et expériences culturelles", body: "Les opérateurs touristiques, les galeries et les lieux culturels de Victoria utilisent le café personnalisé comme souvenir qui garde leur marque en tête." },
    { title: "Détaillants et boutiques lifestyle", body: "Les boutiques de Government Street et les commerces lifestyle de Victoria ajoutent le café personnalisé comme produit différenciant." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Victoria, CB en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Victoria. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Vancouver", href: "/fr/custom-coffee-bags-vancouver" },
    { city: "Kelowna", href: "/fr/custom-coffee-bags-kelowna" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Victoria ?", a: "Les commandes de Victoria arrivent en 7 à 10 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de Victoria utilisent le café personnalisé ?", a: "Les hôtels patrimoniaux du Inner Harbour, les restaurants de Cook Street Village, les opérateurs touristiques et les boutiques de Government Street sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Victoria ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const VictoriaPage = () => <CityPage data={data} frData={frData} />;
export default VictoriaPage;
