import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Regina | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Regina | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Regina, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Regina choisissent EZPZ." : "Custom coffee bags for Regina businesses, shipped in 7–10 days. No minimum order, full design included. Regina brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-regina`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-regina",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-regina",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-regina`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Regina" : "Custom Coffee Bags Regina" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Regina",
  province: "Saskatchewan",
  eyebrow: "Custom Coffee Bags — Regina",
  headline: "Custom coffee bags for Regina brands. Zero minimums.",
  subheadline: "Regina's restaurants, government sector, and agriculture businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the charming bungalows and independent restaurants of Cathedral Village to the heritage buildings and cultural venues of the Warehouse District, from the government offices around the Legislative Assembly to the growing entrepreneurial scene downtown — Regina is Saskatchewan's capital and a city with genuine civic pride. EZPZ ships custom branded specialty coffee from our Montreal roastery to Regina in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-regina",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Regina", body: "We ship directly to your Regina address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test before you scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Regina's government and agriculture sectors", body: "Regina's government offices, agriculture companies, and Saskatchewan Crown corporations use EZPZ for premium branded coffee gifts that make a lasting impression on clients and colleagues." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cathedral Village", body: "Cathedral Village restaurants, Warehouse District cafés, and downtown Regina dining spots add custom branded coffee that keeps their brand visible in customers' daily routines." },
    { title: "Government & Crown Corporations", body: "Saskatchewan's Legislative Assembly-area offices, provincial agencies, and Crown corporations use EZPZ for premium branded coffee gifts and corporate hospitality." },
    { title: "Agriculture & Agri-Business", body: "Saskatchewan's agriculture sector, grain companies, and agri-tech businesses use custom coffee as a premium branded gift for clients and trade show giveaways." },
    { title: "Hotels & Event Venues", body: "Regina hotels, Delta conference properties, and event venues brand their hospitality experience with EZPZ custom coffee to deliver a premium, memorable stay." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Regina in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Regina areas including Cathedral Village, Warehouse District, Downtown, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Saskatoon", href: "/en/custom-coffee-bags-saskatoon" },
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Regina take?",
      a: "Regina orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Regina areas including Cathedral Village, the Warehouse District, Downtown, and surrounding communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Regina industries use EZPZ?",
      a: "Saskatchewan government offices and legislative assembly programs, legal and accounting firms in the downtown core, Victoria Avenue restaurants, creative businesses in Cathedral Village, and the growing tech sector at Innovation Place all use EZPZ. Regina's government-heavy economy makes it a natural market for premium corporate and executive gifts.",
    },
    {
      q: "Is there a minimum order for Regina businesses?",
      a: "No minimum. EZPZ serves Regina businesses of every size — from a law firm ordering 10 bags as client holiday gifts to a government department ordering 1,000 for a conference. Same zero-minimum policy, same full design included, same specialty-grade coffee, regardless of quantity.",
    },
  ],
};


const frData: CityPageData = {
  city: "Regina", province: "Saskatchewan",
  eyebrow: "Sacs de café personnalisés — Regina",
  headline: "Sacs de café personnalisés pour les marques de Regina. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et entreprises gouvernementales de Regina font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Des restaurants du quartier Cathedral aux bureaux gouvernementaux du centre-ville, des hôtels de la légendaire rue Albert Street aux entreprises de l'industrie pétrolière et agricole, Regina est la capitale de la Saskatchewan, un marché d'affaires mature et sophistiqué. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Regina en 7 à 10 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-regina",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Regina", body: "Nous livrons directement à votre adresse à Regina en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché gouvernemental et corporatif de Regina", body: "Des bureaux gouvernementaux du centre-ville aux entreprises du secteur agricole, EZPZ livre un café de marque premium qui résonne avec le marché exigeant de Regina." },
  ],
  whoWeServe: [
    { title: "Restaurants et quartier Cathedral", body: "Les restaurants du quartier Cathedral, les bistros du centre-ville et les cafés de Regina utilisent le café personnalisé pour garder leur marque visible." },
    { title: "Hôtels et hébergements d'affaires", body: "Les hôtels d'affaires de Regina personnalisent leur café en chambre pour offrir une expérience client mémorable." },
    { title: "Gouvernement et secteur public", body: "Les ministères du gouvernement provincial, les sociétés d'État et les associations professionnelles de Regina utilisent EZPZ pour des cadeaux de café de marque premium." },
    { title: "Corporatif et agribusiness", body: "Les entreprises agricoles, pétrolières et technologiques de Regina utilisent EZPZ pour des cadeaux de café de marque." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Regina en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Regina. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Saskatoon", href: "/fr/custom-coffee-bags-saskatoon" },
    { city: "Calgary", href: "/fr/custom-coffee-bags-calgary" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Regina ?", a: "Les commandes de Regina arrivent en 7 à 10 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de Regina utilisent le café personnalisé ?", a: "Les ministères du gouvernement provincial, les entreprises agricoles et pétrolières, les restaurants du quartier Cathedral et les hôtels d'affaires sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Regina ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const ReginaPage = () => <CityPage data={data} frData={frData} />;
export default ReginaPage;
