import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Sacs de café personnalisés Québec | Aucun minimum | EZPZ Coffee"
    : "Custom Coffee Bags Quebec City | No Minimum Order | EZPZ Coffee";
  const description = isFr
    ? "Sacs de café personnalisés pour les entreprises de Québec, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Québec choisissent EZPZ pour le café de spécialité."
    : "Custom coffee bags for Quebec City businesses, shipped in 7–10 days. No minimum order, full design included. Quebec City brands choose EZPZ for specialty coffee.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-quebec-city`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-quebec-city",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Québec" : "Custom Coffee Bags Quebec City" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Quebec City",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Quebec City",
  headline: "Custom coffee bags for Quebec City brands. Zero minimums.",
  subheadline: "Quebec City's historic hotels, tourism operators, and restaurants trust EZPZ to put their brand on specialty coffee — no minimums, full design included.",
  bodyIntro:
    "From the cobblestone streets of Vieux-Québec to the restaurant-lined corridors of Saint-Roch, from the Montcalm neighbourhood's boutique hotels to the historic properties overlooking the Plains of Abraham — Quebec City businesses operate at the intersection of history, tourism, and world-class hospitality. EZPZ ships custom branded specialty coffee from our Montreal roastery to Quebec City in 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-quebec-city",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your property name or brand message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Quebec City", body: "We ship directly to your Quebec City address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test before you scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal." },
    { n: "04", title: "Built for Quebec City's tourism industry", body: "From historic inns in Vieux-Québec to government event venues near the Assemblée nationale — EZPZ understands the unique hospitality market of Quebec City." },
  ],
  whoWeServe: [
    { title: "Historic Hotels & Inns", body: "Château Frontenac-area properties, Vieux-Québec boutique inns, and Montcalm hotels brand every guest touchpoint with custom EZPZ coffee." },
    { title: "Restaurants & Bistros", body: "Saint-Roch dining destinations and Old City restaurants offer custom branded coffee that extends the guest experience into the home." },
    { title: "Government & Corporate Sector", body: "Quebec City's government offices, embassies, and National Assembly-area organizations use branded coffee as a premium corporate gift." },
    { title: "Tourism & Experience Operators", body: "Tour companies, cultural venues, and Plains of Abraham area experiences use custom coffee as a takeaway that keeps their brand top of mind." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Quebec City in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Quebec City neighbourhoods including Vieux-Québec, Saint-Roch, Montcalm, Limoilou, and Sainte-Foy. First orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is already on file.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Gatineau", href: "/en/custom-coffee-bags-gatineau" },
  ],
  faq: [
    { q: "How long does delivery from Montreal to Quebec City take?", a: "Quebec City is about 2.5 hours from Montreal by road, so shipping is typically 1 to 2 business days. First-time orders take 2 to 3 weeks total from design approval to delivery. Repeat orders arrive in well under a week. We deliver to Vieux-Québec, Saint-Roch, Montcalm, Limoilou, and Sainte-Foy." },
    { q: "Can I get bilingual or French-only bag designs for Quebec City?", a: "Absolutely — our design team handles French-only, English-only, or bilingual French/English layouts at no extra cost. For Quebec City businesses where French is the primary commercial language, we recommend leading with French copy. Both language versions can be produced simultaneously if you serve both markets." },
    { q: "What Quebec City industries use EZPZ most?", a: "Historic hotels and inns in Vieux-Québec, Old City restaurants in Saint-Roch and the Haute-Ville, government and National Assembly-area corporate gifting programs, tour operators in the Plains of Abraham area, and cultural venues throughout the city all use EZPZ. Any Quebec City business adding a premium branded touchpoint is a natural fit." },
  ],
};

const frData: CityPageData = {
  city: "Québec",
  province: "Québec",
  eyebrow: "Sacs de café personnalisés — Québec",
  headline: "Sacs de café personnalisés pour les marques de Québec. Aucun minimum.",
  subheadline: "Les hôtels historiques, opérateurs touristiques et restaurants de Québec font confiance à EZPZ pour mettre leur marque sur un café de spécialité, sans minimum de commande et avec le design inclus.",
  bodyIntro:
    "Des pavés du Vieux-Québec aux corridors gastronomiques de Saint-Roch, des hôtels-boutiques de Montcalm aux propriétés historiques surplombant les Plaines d'Abraham, les entreprises de Québec opèrent au carrefour de l'histoire, du tourisme et de l'hospitalité mondiale. EZPZ livre des sacs de café de spécialité personnalisés depuis notre torréfacteur montréalais jusqu'à Québec en 7 à 10 jours ouvrables. Aucun minimum de commande. Design personnalisé complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-quebec-city",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez le nom de votre établissement ou votre message de marque, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Québec", body: "Nous livrons directement à votre adresse à Québec en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum. Testez avant de développer." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni de fichiers prêts à l'impression requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ provenant d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal." },
    { n: "04", title: "Conçu pour l'industrie touristique de Québec", body: "Des auberges historiques du Vieux-Québec aux salles d'événements gouvernementaux près de l'Assemblée nationale, EZPZ comprend le marché hôtelier unique de Québec." },
  ],
  whoWeServe: [
    { title: "Hôtels historiques et auberges", body: "Les propriétés près du Château Frontenac, les auberges-boutiques du Vieux-Québec et les hôtels de Montcalm personnalisent chaque point de contact client avec le café EZPZ." },
    { title: "Restaurants et bistros", body: "Les restaurants gastronomiques de Saint-Roch et du Vieux-Québec offrent un café personnalisé qui prolonge l'expérience client jusqu'à la maison." },
    { title: "Secteur gouvernemental et corporatif", body: "Les bureaux gouvernementaux, ambassades et organisations près de l'Assemblée nationale utilisent le café personnalisé comme cadeau corporatif haut de gamme." },
    { title: "Opérateurs touristiques", body: "Les entreprises de visites guidées, lieux culturels et expériences des Plaines d'Abraham utilisent le café personnalisé comme souvenir qui garde leur marque en tête." },
  ],
  deliveryBody:
    "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Québec : Vieux-Québec, Saint-Roch, Montcalm, Limoilou et Sainte-Foy. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides, car votre design est déjà en dossier.",
  relatedCities: [
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
    { city: "Gatineau", href: "/fr/custom-coffee-bags-gatineau" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Québec ?", a: "Québec est à environ 2,5 heures de Montréal par la route, donc la livraison prend généralement 1 à 2 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées arrivent en moins d'une semaine. Nous livrons au Vieux-Québec, Saint-Roch, Montcalm, Limoilou et Sainte-Foy." },
    { q: "Puis-je obtenir des designs de sacs bilingues ou en français seulement pour Québec ?", a: "Absolument. Notre équipe de design gère les mises en page en français seulement, en anglais seulement ou bilingues français/anglais sans frais supplémentaires. Pour les entreprises de Québec où le français est la langue commerciale principale, nous recommandons de mettre le français en avant. Les deux versions peuvent être produites simultanément si vous servez les deux marchés." },
    { q: "Quelles industries de Québec utilisent le plus EZPZ ?", a: "Les hôtels historiques et auberges du Vieux-Québec, les restaurants du Saint-Roch et de la Haute-Ville, les programmes de cadeaux corporatifs gouvernementaux près de l'Assemblée nationale, les opérateurs touristiques des Plaines d'Abraham et les lieux culturels à travers la ville utilisent tous EZPZ." },
  ],
};

const QuebecCityPage = () => <CityPage data={data} frData={frData} />;
export default QuebecCityPage;
