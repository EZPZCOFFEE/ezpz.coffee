import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Ottawa | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Ottawa | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises d'Ottawa, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques d'Ottawa choisissent EZPZ pour le café de spécialité premium." : "Custom coffee bags for Ottawa businesses, shipped in 5–7 days. No minimum order, full design included. Ottawa brands choose EZPZ for premium specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-ottawa`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-ottawa",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Ottawa" : "Custom Coffee Bags Ottawa" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Ottawa",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Ottawa",
  headline: "Custom coffee bags for Ottawa brands. Zero minimums.",
  subheadline: "Ottawa's restaurants, hotels, government offices, and tech companies trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From ByWard Market's bustling restaurant scene to the Glebe's independent boutiques, from Centretown government corridors to Westboro's tech and wellness strip — Ottawa is a city where polished branding meets policy power. EZPZ ships custom branded specialty coffee from Montreal to Ottawa in 5 to 7 business days. Whether you are gifting to clients at a Parliament Hill-adjacent firm or branding the coffee in a five-star hotel on the canal, no minimum order applies.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-ottawa",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Ottawa", body: "We ship directly to your Ottawa address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for gifts, events, or full retail rollouts." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Ottawa's sophisticated professional market expects quality — we deliver it." },
    { n: "04", title: "Built for Ottawa's government and tech sectors", body: "From Parliament Hill-area law firms to Kanata tech companies, Ottawa's professional sector trusts EZPZ for branded coffee gifts that make a strong impression on clients and colleagues." },
  ],
  whoWeServe: [
    { title: "Restaurants & ByWard Market", body: "ByWard Market restaurants, Glebe bistros, and Wellington West dining destinations use custom branded coffee to keep their brand in customers' kitchens between visits." },
    { title: "Hotels & Rideau Canal Properties", body: "Ottawa's luxury hotels, heritage inns, and boutique properties brand their in-room coffee to deliver a premium, memorable guest experience." },
    { title: "Government & Corporate Offices", body: "Federal agencies, lobbying firms, and government contractors near Parliament Hill use EZPZ for premium branded coffee gifts that signal quality and professionalism." },
    { title: "Tech Companies & Startups", body: "Kanata tech companies, Centretown startups, and MaRS-linked firms use branded coffee as a premium client gift and office culture touchpoint." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Ottawa in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Ottawa neighbourhoods including ByWard Market, Glebe, Westboro, Centretown, Hintonburg, and Kanata, as well as surrounding areas. First orders take 2 to 3 weeks total from design approval. Repeat orders ship faster.",
  relatedCities: [
    { city: "Gatineau", href: "/en/custom-coffee-bags-gatineau" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Hamilton", href: "/en/custom-coffee-bags-hamilton" },
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
  ],
  faq: [
    {
      q: "How fast can custom coffee bags be delivered to Ottawa?",
      a: "Ottawa is about 2 hours from Montreal by road — shipping typically arrives in 1 to 2 business days from our roastery. First-time orders take 2 to 3 weeks total from design approval. Repeat orders arrive in well under a week. We deliver to ByWard Market, Glebe, Westboro, Centretown, Hintonburg, and all Ottawa postal codes.",
    },
    {
      q: "Do Ottawa government offices and federal departments use EZPZ?",
      a: "Yes — federal agencies, Crown corporations, lobbying and consulting firms on Wellington Street, and associations throughout Ottawa use our custom coffee as a premium corporate gift and boardroom amenity. Ottawa's government and professional services sector is one of our most active markets for branded coffee.",
    },
    {
      q: "Can I get bilingual French and English bag designs for Ottawa clients?",
      a: "Absolutely — bilingual design is standard at no extra cost. Many Ottawa businesses specifically need French/English packaging to reflect the bilingual nature of the National Capital Region. Our design team handles both official language layouts seamlessly, and we can produce French-only and English-only versions simultaneously for different audiences.",
    },
  ],
};


const frData: CityPageData = {
  city: "Ottawa", province: "Ontario",
  eyebrow: "Sacs de café personnalisés — Ottawa",
  headline: "Sacs de café personnalisés pour les marques d'Ottawa. Aucun minimum.",
  subheadline: "Les restaurants, hôtels, bureaux gouvernementaux et entreprises technologiques d'Ottawa font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Du marché By animé aux boutiques du Glebe, des corridors gouvernementaux du centre-ville à la bande technologique de Westboro, Ottawa est une ville où la marque soignée rencontre le pouvoir politique. EZPZ livre des sacs de café de spécialité personnalisés de Montréal à Ottawa en 5 à 7 jours ouvrables. Que vous fassiez des cadeaux à des clients d'une firme près de la Colline du Parlement ou que vous personnalisiez le café d'un hôtel cinq étoiles sur le canal, aucun minimum ne s'applique.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-ottawa",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Ottawa", body: "Nous livrons directement à votre adresse à Ottawa en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour les secteurs gouvernemental et technologique d'Ottawa", body: "Des firmes de droit près de la Colline du Parlement aux entreprises technologiques de Kanata, le secteur professionnel d'Ottawa fait confiance à EZPZ pour des cadeaux de café de marque qui font forte impression." },
  ],
  whoWeServe: [
    { title: "Restaurants et marché By", body: "Les restaurants du marché By, les bistros du Glebe et les destinations gastronomiques de Wellington Ouest utilisent le café personnalisé pour maintenir leur marque dans les cuisines de leurs clients entre les visites." },
    { title: "Hôtels et propriétés sur le canal Rideau", body: "Les hôtels de luxe d'Ottawa, les auberges patrimoniales et les propriétés-boutiques personnalisent leur café en chambre pour offrir une expérience client premium et mémorable." },
    { title: "Bureaux gouvernementaux et corporatifs", body: "Les agences fédérales, firmes de lobbyisme et contractants gouvernementaux près de la Colline du Parlement utilisent EZPZ pour des cadeaux de café de marque premium qui signalent qualité et professionnalisme." },
    { title: "Entreprises technologiques et startups", body: "Les entreprises technologiques de Kanata, les startups du centre-ville et les firmes liées à MaRS utilisent le café de marque comme cadeau client premium et point de contact de culture d'entreprise." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers d'Ottawa : marché By, Glebe, Westboro, centre-ville, Hintonburg et Kanata. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides.",
  relatedCities: [
    { city: "Gatineau", href: "/fr/custom-coffee-bags-gatineau" },
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
    { city: "Hamilton", href: "/fr/custom-coffee-bags-hamilton" },
    { city: "Vancouver", href: "/fr/custom-coffee-bags-vancouver" },
  ],
  faq: [
    { q: "À quelle vitesse peut-on livrer des sacs de café personnalisés à Ottawa ?", a: "Ottawa est à environ 2 heures de Montréal. La livraison arrive généralement en 1 à 2 jours ouvrables depuis notre torréfacteur. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées arrivent en moins d'une semaine. Nous livrons au marché By, au Glebe, à Westboro, au centre-ville, à Hintonburg et dans tous les codes postaux d'Ottawa." },
    { q: "Les bureaux gouvernementaux fédéraux d'Ottawa utilisent-ils EZPZ ?", a: "Oui. Les agences fédérales, sociétés d'État, firmes de lobbyisme sur la rue Wellington et associations dans toute Ottawa utilisent notre café personnalisé comme cadeau corporatif premium et article de salle de conférence. Le secteur gouvernemental et des services professionnels d'Ottawa est l'un de nos marchés les plus actifs pour le café de marque." },
    { q: "Puis-je obtenir des designs de sacs bilingues français et anglais pour les clients d'Ottawa ?", a: "Absolument. Le design bilingue est standard sans frais supplémentaires. Notre équipe de design gère les deux mises en page de langues officielles de manière transparente, et nous pouvons produire simultanément des versions en français seulement et en anglais seulement pour différents publics." },
  ],
};

const OttawaPage = () => <CityPage data={data} frData={frData} />;
export default OttawaPage;
