import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Calgary | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Calgary | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Calgary, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Calgary choisissent EZPZ pour le café de spécialité." : "Custom coffee bags for Calgary businesses, shipped in 7–10 days. No minimum order, full design included. Calgary brands choose EZPZ for specialty branded coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Calgary" : "Custom Coffee Bags Calgary" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Calgary",
  province: "Alberta",
  eyebrow: "Custom Coffee Bags — Calgary",
  headline: "Custom coffee bags for Calgary brands. Zero minimums.",
  subheadline: "Calgary's restaurants, corporate offices, and hotels trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the restaurant-dense 17th Avenue SW to the boutique shops of Kensington, from the booming Beltline dining scene to the corporate towers of downtown — Calgary businesses combine oil-patch boldness with a genuine appreciation for premium products. EZPZ ships custom branded specialty coffee from our Montreal roastery to Calgary in 7 to 10 business days. Whether you are gifting to energy sector clients or branding a Stephen Avenue hotel, no minimum order applies.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-calgary",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Calgary", body: "We ship directly to your Calgary address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for corporate gifting at any scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Calgary's premium market expects the best — we deliver it every time." },
    { n: "04", title: "Built for Calgary's corporate gifting culture", body: "Calgary's oil and gas sector, professional services firms, and executive gift culture make branded specialty coffee one of the most effective and appreciated gifts you can give." },
  ],
  whoWeServe: [
    { title: "Restaurants & 17th Avenue Dining", body: "17th Avenue restaurants, Kensington bistros, and Inglewood dining destinations add custom branded coffee that keeps their brand top of mind between visits." },
    { title: "Corporate Offices & Oil & Gas Sector", body: "Calgary's energy companies, financial firms, and professional services offices trust EZPZ for premium branded coffee gifts that make a strong impression on clients." },
    { title: "Hotels & Boutique Properties", body: "Downtown Calgary hotels, Stephen Avenue boutique stays, and Inglewood inns brand their in-room coffee experience to deliver a premium, memorable stay." },
    { title: "Retailers & Lifestyle Brands", body: "Kensington boutiques, Bridgeland lifestyle shops, and Mission retailers add custom branded coffee as a distinctive product that resonates with Calgary's quality-first consumers." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Calgary in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Calgary areas including Downtown, 17th Avenue SW, Kensington, Inglewood, Beltline, Marda Loop, and the surrounding suburbs. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Edmonton", href: "/en/custom-coffee-bags-edmonton" },
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
    { city: "Saskatoon", href: "/en/custom-coffee-bags-saskatoon" },
    { city: "Regina", href: "/en/custom-coffee-bags-regina" },
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
  faq: [
    {
      q: "How long does shipping take from Montreal to Calgary?",
      a: "Calgary orders ship from our Montreal roastery and typically arrive in 7 to 10 business days via tracked courier. First-time orders take 2 to 3 weeks total from design approval to delivery. Repeat orders are faster since your design is saved. We deliver to all Calgary postal codes including downtown, Beltline, 17th Avenue, Kensington, Inglewood, and Marda Loop.",
    },
    {
      q: "What Calgary industries use custom branded coffee most?",
      a: "Calgary's energy sector, professional services firms (law, engineering, accounting), downtown boutique hotels on Stephen Avenue, and 17th Avenue restaurants are the heaviest users of custom branded coffee. Corporate gifting in the oil and gas sector is especially strong — a premium coffee bag with your firm's branding makes a more memorable impression than a standard promotional item.",
    },
    {
      q: "Is there a minimum order for Calgary corporate gifting programs?",
      a: "No minimum at all. Whether you need 5 bags for a key client presentation or 5,000 for an annual corporate gifting program, EZPZ accommodates any volume with the same no-minimum policy and full design included. Volume orders of 100+ bags qualify for bulk pricing — contact us for a custom quote.",
    },
  ],
};


const frData: CityPageData = {
  city: "Calgary", province: "Alberta",
  eyebrow: "Sacs de café personnalisés — Calgary",
  headline: "Sacs de café personnalisés pour les marques de Calgary. Aucun minimum.",
  subheadline: "Les restaurants, bureaux corporatifs et hôtels de Calgary font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "De la densité de restaurants sur la 17e Avenue SO aux boutiques chics de Kensington, de la scène gastronomique florissante du Beltline aux tours corporatives du centre-ville, les entreprises de Calgary allient audace et véritable appréciation des produits premium. EZPZ livre des sacs de café de spécialité personnalisés depuis notre torréfacteur montréalais jusqu'à Calgary en 7 à 10 jours ouvrables. Que vous fassiez des cadeaux à des clients du secteur énergétique ou que vous personnalisiez un hôtel de la rue Stephen Avenue, aucun minimum de commande ne s'applique.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-calgary",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Calgary", body: "Nous livrons directement à votre adresse à Calgary en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour la culture de cadeaux corporatifs de Calgary", body: "Le secteur pétrolier et gazier de Calgary, les firmes de services professionnels et la culture des cadeaux exécutifs font du café de spécialité de marque l'un des cadeaux les plus efficaces et appréciés que vous puissiez offrir." },
  ],
  whoWeServe: [
    { title: "Restaurants et gastronomie de la 17e Avenue", body: "Les restaurants de la 17e Avenue, les bistros de Kensington et les destinations gastronomiques d'Inglewood ajoutent le café personnalisé qui garde leur marque en tête entre les visites." },
    { title: "Bureaux corporatifs et secteur pétrolier", body: "Les entreprises énergétiques, firmes financières et bureaux de services professionnels de Calgary font confiance à EZPZ pour des cadeaux de café premium qui font forte impression sur les clients." },
    { title: "Hôtels et propriétés-boutiques", body: "Les hôtels du centre-ville de Calgary, les hébergements-boutiques de la rue Stephen Avenue et les auberges d'Inglewood personnalisent leur expérience café en chambre pour un séjour mémorable." },
    { title: "Détaillants et marques lifestyle", body: "Les boutiques de Kensington, les commerces lifestyle de Bridgeland et les détaillants de Mission ajoutent le café personnalisé comme produit distinctif qui résonne avec les consommateurs exigeants de Calgary." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans toutes les zones de Calgary : centre-ville, 17e Avenue SO, Kensington, Inglewood, Beltline, Marda Loop et les banlieues environnantes. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Edmonton", href: "/fr/custom-coffee-bags-edmonton" },
    { city: "Vancouver", href: "/fr/custom-coffee-bags-vancouver" },
    { city: "Saskatoon", href: "/fr/custom-coffee-bags-saskatoon" },
    { city: "Regina", href: "/fr/custom-coffee-bags-regina" },
    { city: "Winnipeg", href: "/fr/custom-coffee-bags-winnipeg" },
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Calgary ?", a: "Les commandes de Calgary arrivent généralement en 7 à 10 jours ouvrables par messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total. Les commandes répétées sont plus rapides. Nous livrons dans tous les codes postaux de Calgary : centre-ville, Beltline, 17e Avenue, Kensington, Inglewood et Marda Loop." },
    { q: "Quelles industries de Calgary utilisent le plus le café personnalisé ?", a: "Le secteur énergétique, les firmes de services professionnels, les hôtels-boutiques du centre-ville et les restaurants de la 17e Avenue sont les plus grands utilisateurs. Les cadeaux corporatifs dans le secteur pétrolier et gazier sont particulièrement forts." },
    { q: "Y a-t-il un minimum de commande pour les programmes de cadeaux corporatifs de Calgary ?", a: "Aucun minimum. Que vous ayez besoin de 5 sacs pour une présentation client ou de 5 000 pour un programme annuel de cadeaux corporatifs, EZPZ s'adapte à tout volume. Les commandes de 100 sacs et plus sont admissibles aux tarifs en gros." },
  ],
};

const CalgaryPage = () => <CityPage data={data} frData={frData} />;
export default CalgaryPage;
