import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Sacs de café personnalisés Gatineau | Aucun minimum | EZPZ Coffee"
    : "Custom Coffee Bags Gatineau | No Minimum Order | EZPZ Coffee";
  const description = isFr
    ? "Sacs de café personnalisés pour les entreprises de Gatineau, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques de Gatineau et Hull choisissent EZPZ."
    : "Custom coffee bags for Gatineau businesses, shipped in 5–7 days. No minimum order, full design included. Gatineau and Hull businesses choose EZPZ for specialty coffee.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-gatineau`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-gatineau",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-gatineau",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-gatineau`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Gatineau" : "Custom Coffee Bags Gatineau" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Gatineau",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Gatineau",
  headline: "Custom coffee bags for Gatineau brands. Zero minimums.",
  subheadline: "Gatineau businesses — from Hull restaurants to Aylmer boutiques — trust EZPZ to put their brand on specialty coffee. No minimums, full design included.",
  bodyIntro:
    "From the vibrant restaurant scene of the Hull sector to the artsy boutiques of Aylmer, from government-adjacent offices near the Maison du Citoyen to the arts community along the Gatineau River — Gatineau is a bilingual, culturally rich market with strong ties to Ottawa across the river. EZPZ ships custom branded specialty coffee from Montreal to Gatineau in 5 to 7 business days. No minimum order. Full custom design included.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-gatineau",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Gatineau", body: "We ship directly to your Gatineau address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test before you commit." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Bilingual-ready packaging", body: "Gatineau is a bilingual market. We can design your bags with French and English text to serve your full customer base across Hull, Aylmer, and Buckingham." },
  ],
  whoWeServe: [
    { title: "Restaurants & Hull Dining", body: "Hull's lively restaurant and bar scene uses custom branded coffee to create a take-home experience that extends the evening well past last call." },
    { title: "Government & Corporate Offices", body: "Gatineau's proximity to Ottawa means a significant base of government contractors, federal agencies, and corporate offices that use branded coffee as a premium gift." },
    { title: "Hotels & Boutique Stays", body: "Gatineau hotels and Aylmer boutique properties brand their in-room coffee experience to deliver a memorable, locally rooted guest stay." },
    { title: "Arts & Cultural Organizations", body: "Gatineau's vibrant arts community — galleries, performance venues, and cultural organizations — uses custom coffee as a creative, memorable patron gift." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Gatineau in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Gatineau sectors including Hull, Aylmer, Buckingham, Masson-Angers, and Gatineau proper. First orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is already on file.",
  relatedCities: [
    { city: "Ottawa", href: "/en/custom-coffee-bags-ottawa" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
  faq: [
    {
      q: "Can Gatineau businesses order custom coffee bags in French?",
      a: "Oui — our team is fully bilingual. We handle French-language bag copy, French-only communication, and French/English bilingual design at no extra cost. For Gatineau businesses where French is the primary commercial language, we recommend a French-first layout that reflects local culture.",
    },
    {
      q: "How long does shipping from Montreal to Gatineau take?",
      a: "Gatineau is about 2 hours from Montreal. Orders ship via tracked courier and typically arrive the next business day from shipping. First-time orders take 2 to 3 weeks total from design approval. Repeat orders arrive in under a week.",
    },
    {
      q: "Do federal government offices and NGOs in Gatineau use EZPZ?",
      a: "Yes — government departments, federal agencies, and National Capital Region organizations use our custom coffee as a corporate gift and meeting room amenity. The Hull sector's proximity to Ottawa federal offices makes Gatineau a natural market for premium branded coffee. Contact us for volume pricing on institutional orders.",
    },
  ],
};


const frData: CityPageData = {
  city: "Gatineau",
  province: "Québec",
  eyebrow: "Sacs de café personnalisés — Gatineau",
  headline: "Sacs de café personnalisés pour les marques de Gatineau. Aucun minimum.",
  subheadline: "Les entreprises de Gatineau, des restaurants du secteur Hull aux boutiques d'Aylmer, font confiance à EZPZ pour leur café de spécialité. Aucun minimum, design inclus.",
  bodyIntro:
    "De la scène restauratrice animée du secteur Hull aux boutiques artistiques d'Aylmer, des bureaux gouvernementaux près de la Maison du Citoyen à la communauté créative le long de la rivière Gatineau, Gatineau est un marché bilingue culturellement riche, fortement lié à Ottawa de l'autre côté de la rivière. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Gatineau en 5 à 7 jours ouvrables. Aucun minimum de commande. Design personnalisé complet inclus.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-gatineau",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Gatineau", body: "Nous livrons directement à votre adresse à Gatineau en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum. Testez avant de vous engager." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers prêts à l'impression." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Emballage prêt pour le marché bilingue", body: "Gatineau est un marché bilingue. Nous pouvons concevoir vos sacs en français et en anglais pour servir toute votre clientèle à Hull, Aylmer et Buckingham." },
  ],
  whoWeServe: [
    { title: "Restaurants et bars du Hull", body: "La scène animée des restaurants et bars du secteur Hull utilise le café personnalisé pour créer une expérience à emporter qui prolonge la soirée bien après la fermeture." },
    { title: "Bureaux gouvernementaux et corporatifs", body: "La proximité de Gatineau avec Ottawa signifie une base importante de contractants gouvernementaux, d'agences fédérales et de bureaux corporatifs qui utilisent le café de marque comme cadeau premium." },
    { title: "Hôtels et hébergements", body: "Les hôtels de Gatineau et les propriétés d'Aylmer personnalisent leur expérience café en chambre pour offrir un séjour mémorable à saveur locale." },
    { title: "Arts et organisations culturelles", body: "La communauté artistique de Gatineau, galeries, salles de spectacle et organisations culturelles, utilise le café personnalisé comme cadeau créatif et mémorable pour ses mécènes." },
  ],
  deliveryBody:
    "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Gatineau en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les secteurs de Gatineau : Hull, Aylmer, Buckingham, Masson-Angers et Gatineau propre. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier.",
  relatedCities: [
    { city: "Ottawa", href: "/fr/custom-coffee-bags-ottawa" },
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
  ],
  faq: [
    { q: "Les entreprises de Gatineau peuvent-elles commander des sacs de café en français ?", a: "Oui, notre équipe est entièrement bilingue. Nous gérons les textes de sacs en français, les communications en français seulement et le design bilingue français/anglais sans frais supplémentaires. Pour les entreprises de Gatineau où le français est la langue commerciale principale, nous recommandons une mise en page d'abord en français qui reflète la culture locale." },
    { q: "Combien de temps prend la livraison de Montréal à Gatineau ?", a: "Gatineau est à environ 2 heures de Montréal. Les commandes sont expédiées par messagerie suivie et arrivent généralement le lendemain ouvrable après expédition. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées arrivent en moins d'une semaine." },
    { q: "Les organismes gouvernementaux fédéraux à Gatineau utilisent-ils EZPZ ?", a: "Oui. Les ministères, sociétés d'État, firmes de lobbyisme et associations dans toute la région de la capitale nationale utilisent notre café personnalisé comme cadeau corporatif et article de salle de conférence. Contactez-nous pour les tarifs de volume sur les commandes institutionnelles." },
  ],
};

const GatineauPage = () => <CityPage data={data} frData={frData} />;
export default GatineauPage;
