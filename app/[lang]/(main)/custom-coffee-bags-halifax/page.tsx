import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Halifax | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Halifax | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Halifax, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Halifax choisissent EZPZ." : "Custom coffee bags for Halifax businesses, shipped in 7–10 days. No minimum order, full design included. Halifax brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-halifax`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-halifax",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-halifax",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-halifax`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Halifax" : "Custom Coffee Bags Halifax" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Halifax",
  province: "Nova Scotia",
  eyebrow: "Custom Coffee Bags — Halifax",
  headline: "Custom coffee bags for Halifax brands. Zero minimums.",
  subheadline: "Halifax's restaurants, hotels, and university community trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Spring Garden Road's restaurant and retail corridor to the independent galleries and cafés of the North End, from the waterfront tourism district to the university campuses of Quinpool — Halifax is Atlantic Canada's most dynamic commercial market. The city's deep maritime identity, thriving restaurant scene, and growing tech sector all benefit from authentic, quality-first branding. EZPZ ships custom branded specialty coffee from our Montreal roastery to Halifax in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-halifax",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Halifax", body: "We ship directly to your Halifax address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for Halifax's independent and entrepreneurial business scene." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Halifax's quality-conscious market appreciates provenance — our traceability story resonates." },
    { n: "04", title: "Built for Halifax's tourism and hospitality sector", body: "Halifax's waterfront hotels, seafood restaurants, and tourism operators trust EZPZ to help them create a branded product that visitors take home from Atlantic Canada." },
  ],
  whoWeServe: [
    { title: "Restaurants & Seafood Scene", body: "Spring Garden Road bistros, waterfront seafood restaurants, and North End neighbourhood cafés add custom branded coffee that extends the Halifax hospitality experience into guests' homes." },
    { title: "Hotels & Waterfront Properties", body: "Halifax's waterfront hotels, boutique properties, and heritage inns brand their in-room coffee experience to deliver a premium, distinctly Maritime guest stay." },
    { title: "Tourism & Experience Operators", body: "Halifax's harbour tours, historic site visitors centres, and tourism operators use custom coffee as a premium branded takeaway that connects visitors to the Halifax experience." },
    { title: "Universities & Campus Businesses", body: "Dalhousie, King's, and SMU-area cafés and campus organizations use EZPZ custom coffee to build brand recognition among Halifax's large and engaged student population." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Halifax in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Halifax areas including Spring Garden Road, North End, Downtown, Quinpool, Dartmouth, and surrounding HRM communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Moncton", href: "/en/custom-coffee-bags-moncton" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Halifax take?",
      a: "Halifax orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. Maritime shipping routes are well-connected. We deliver to Historic Properties, Spring Garden Road, North End, Downtown Halifax, Dartmouth Crossing, and surrounding HRM communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Halifax businesses use EZPZ?",
      a: "Historic Properties waterfront restaurants, Spring Garden Road boutiques, downtown Halifax boutique hotels, North End neighbourhood cafés, Dartmouth Crossing retailers, and corporate gifting programs for Halifax-based professional services firms. Halifax's growing food and hospitality scene is an ideal market for branded coffee as a premium takeaway.",
    },
    {
      q: "Is there a minimum order for Atlantic Canada businesses?",
      a: "No minimum anywhere in Canada, including Nova Scotia. Whether you're a sole proprietor ordering 5 bags as client gifts or a Halifax hotel ordering 500 bags for in-room amenities, EZPZ accommodates any volume. For 100+ bags, contact us for volume pricing.",
    },
  ],
};


const frData: CityPageData = {
  city: "Halifax", province: "Nouvelle-Écosse",
  eyebrow: "Sacs de café personnalisés — Halifax",
  headline: "Sacs de café personnalisés pour les marques de Halifax. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et entreprises créatives de Halifax font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Du front de mer animé du port de Halifax aux restaurants et galeries du quartier North End, de la scène universitaire dynamique à la communauté d'affaires de Dartmouth de l'autre côté du port, Halifax est une ville où la culture maritime rencontre l'innovation moderne. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Halifax en 7 à 10 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-halifax",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Halifax", body: "Nous livrons directement à votre adresse à Halifax en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour la scène créative et hôtelière de Halifax", body: "De la Prom du port aux studios du North End, EZPZ livre un café de marque premium qui résonne avec le marché exigeant de Halifax." },
  ],
  whoWeServe: [
    { title: "Restaurants et front de mer", body: "Les restaurants du bord de l'eau, les pubs du North End et les bistros du Spring Garden Road utilisent le café personnalisé pour garder leur marque visible dans les cuisines de leurs clients." },
    { title: "Hôtels et hébergements", body: "Les hôtels du centre-ville de Halifax personnalisent leur café en chambre pour offrir une expérience client mémorable dans la ville portuaire." },
    { title: "Arts et culture", body: "Les galeries, salles de spectacle et organisations culturelles de Halifax utilisent le café personnalisé comme cadeau créatif et mémorable pour leurs mécènes." },
    { title: "Corporatif et services professionnels", body: "Les firmes professionnelles et les entreprises du centre-ville de Halifax utilisent EZPZ pour des cadeaux de café de marque premium qui font forte impression." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Halifax en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Halifax : centre-ville, North End, South End, Dartmouth et les environs. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Moncton", href: "/fr/custom-coffee-bags-moncton" },
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Halifax ?", a: "Les commandes de Halifax arrivent en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Nous livrons dans tous les quartiers de Halifax et Dartmouth." },
    { q: "Quelles industries de Halifax utilisent le café personnalisé ?", a: "Les restaurants et bars du front de mer, les hôtels du centre-ville, les organisations artistiques du North End, les entreprises gouvernementales et les services professionnels utilisent tous EZPZ." },
    { q: "Y a-t-il un minimum de commande pour Halifax ?", a: "Aucun minimum. Que vous ayez besoin de quelques sacs pour un événement ou de milliers pour un programme de cadeaux corporatifs, EZPZ s'adapte à tout volume." },
  ],
};

const HalifaxPage = () => <CityPage data={data} frData={frData} />;
export default HalifaxPage;
