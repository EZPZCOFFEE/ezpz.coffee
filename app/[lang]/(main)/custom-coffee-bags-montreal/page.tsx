import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Sacs de café personnalisés Montréal | Café marque blanche | EZPZ"
    : "Custom Coffee Bags Montreal | White Label Coffee Montreal | EZPZ";
  const description = isFr
    ? "Sacs de café personnalisés pour les entreprises de Montréal, torréfiés frais à Montréal. Aucun minimum de commande, design inclus. EZPZ dessert les marques montréalaises de toutes tailles."
    : "Custom coffee bags for Montreal businesses, roasted fresh in Montreal. No minimum order, full design included. White label coffee Montreal — EZPZ serves Montreal brands of every size.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-montreal",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Montréal" : "Custom Coffee Bags Montreal" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Montreal",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Montreal",
  headline: "Custom coffee bags for Montreal brands. Roasted here. Zero minimums.",
  subheadline: "The only custom coffee supplier in Canada with no minimum order — and we roast every bag fresh in Montreal.",
  bodyIntro:
    "Looking for white label coffee in Montreal? EZPZ Coffee is Montreal's premier custom coffee bag supplier — roasting specialty coffee at Canadian Roasting Society and delivering branded coffee bags Montreal restaurants, hotels, and businesses trust, with zero minimum order. From the Plateau-Mont-Royal restaurant scene to boutique hotels in Old Montreal, from Mile End coffee shops to Westmount wellness studios — Montreal businesses understand that branding matters. White label coffee Montreal has never been more accessible: full design included, no hidden fees, and your coffee goes from our roastery to your door faster than any other supplier in Canada. Branded coffee bags Montreal businesses rely on — delivered in 2 to 3 weeks.",
  deliveryTime: "2 to 3 weeks",
  canonicalPath: "/custom-coffee-bags-montreal",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Use our online tool to upload your logo, add your brand name or a personal message, and choose your packaging style. Takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees roasted in Montreal. Light, medium, or dark — from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast and pack in Montreal", body: "Your coffee is roasted fresh at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required." },
    { n: "04", title: "Delivered to your Montreal address", body: "We ship directly to your Montreal location within 2 to 3 weeks from order confirmation. Local pickup available by arrangement." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order — anywhere in Canada", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for testing a concept or launching a small batch." },
    { n: "02", title: "Full custom design always included", body: "Bring your logo and brand colors — we handle the rest. Custom bag design is included in every order at no extra cost. No need to hire a designer or supply print-ready files." },
    { n: "03", title: "Specialty grade coffee, roasted fresh", body: "We source only 80+ SCA specialty grade coffees from traceable origins. Every bag is roasted to order at Canadian Roasting Society in Montreal — never sitting on a shelf." },
    { n: "04", title: "Built for Montreal brands", body: "From restaurants on the Plateau to boutiques in Outremont to hotels in Old Montreal — EZPZ works with Montreal businesses of every size and industry. We know your market." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cafés", body: "From Plateau bistros to Old Montreal fine dining — sell your own branded coffee or gift it to guests. A custom bag on the counter becomes part of your brand story." },
    { title: "Boutique Hotels", body: "Hotels in the Golden Square Mile, Vieux-Montreal, and the Latin Quarter trust EZPZ to put specialty coffee in every room under their own brand name." },
    { title: "Retailers & Boutiques", body: "Mont-Royal boutiques, Mile End concept stores, and Westmount gift shops add custom branded coffee as a high-margin, high-repeat product their customers love." },
    { title: "Wellness Studios", body: "Yoga studios, fitness clubs, and wellness brands from Rosemont to NDG use EZPZ to create a branded morning ritual that keeps their community engaged between visits." },
  ],
  deliveryBody:
    "As a Montreal-based business, you benefit from the fastest delivery of any customer we serve. Orders typically ship within 3 to 5 business days from design approval and arrive at your Montreal door within the same week. Local pickup at our southwest Montreal roastery can also be arranged. Repeat orders are even faster since your design is already on file. Call or email us to coordinate a bulk delivery schedule for your restaurant, hotel, or retail location.",
  relatedCities: [
    { city: "Quebec City", href: "/en/custom-coffee-bags-quebec-city" },
    { city: "Laval", href: "/en/custom-coffee-bags-laval" },
    { city: "Longueuil", href: "/en/custom-coffee-bags-longueuil" },
    { city: "Sherbrooke", href: "/en/custom-coffee-bags-sherbrooke" },
    { city: "Gatineau", href: "/en/custom-coffee-bags-gatineau" },
    { city: "Ottawa", href: "/en/custom-coffee-bags-ottawa" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
  faq: [
    { q: "How quickly can I get custom coffee bags delivered in Montreal?", a: "Since EZPZ is based in Montreal — roasting at Canadian Roasting Society in the city's southwest — your order ships faster than any other supplier. First orders take 2 to 3 weeks total from design approval to delivery. Repeat orders ship within 3 to 5 business days. Local pickup at our Montreal roastery is also available by arrangement." },
    { q: "Can I get bilingual French and English text on my bags?", a: "Absolutely. Our design team handles French-only, English-only, or bilingual layouts at no extra cost. Whether you want French-first packaging for a Plateau bistro or bilingual bags for a Westmount corporate gift, we accommodate both official languages without additional fees." },
    { q: "What kinds of Montreal businesses use EZPZ?", a: "We work with restaurants on the Plateau and in Old Montreal, boutique hotels in the Golden Square Mile and Vieux-Montréal, wellness studios in Rosemont and Outremont, Mile End concept stores, Westmount boutiques, and corporate offices downtown. Any Montreal business looking to strengthen their brand with premium, tangible coffee is a natural fit." },
  ],
};

const frData: CityPageData = {
  city: "Montréal",
  province: "Québec",
  eyebrow: "Sacs de café personnalisés — Montréal",
  headline: "Sacs de café personnalisés pour les marques de Montréal. Torréfiés ici. Aucun minimum.",
  subheadline: "Le seul fournisseur de café personnalisé au Canada sans minimum de commande — et nous torréfions chaque sachet frais à Montréal.",
  bodyIntro:
    "Vous cherchez du café marque blanche à Montréal ? EZPZ Coffee est le premier fournisseur de sacs de café personnalisés à Montréal, torréfiant du café de spécialité à la Canadian Roasting Society et livrant des sacs de marque que les restaurants, hôtels et entreprises de Montréal font confiance, sans minimum de commande. Du Plateau-Mont-Royal aux hôtels-boutiques du Vieux-Montréal, des cafés du Mile End aux studios de bien-être de Westmount, les entreprises montréalaises savent que la marque fait la différence. Le café marque blanche à Montréal n'a jamais été aussi accessible : design inclus, aucun frais caché, et votre café passe de notre torréfacteur à votre porte plus vite que tout autre fournisseur au Canada.",
  deliveryTime: "2 à 3 semaines",
  canonicalPath: "/custom-coffee-bags-montreal",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Utilisez notre outil en ligne pour télécharger votre logo, ajouter votre nom de marque ou un message personnalisé, et choisir votre style d'emballage. En moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables torréfiés à Montréal. Torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus encore." },
    { n: "03", title: "Nous torréfions et emballons à Montréal", body: "Votre café est torréfié frais à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucune quantité minimale requise." },
    { n: "04", title: "Livré à votre adresse montréalaise", body: "Nous livrons directement à votre adresse à Montréal en 2 à 3 semaines après confirmation de la commande. Cueillette locale disponible sur arrangement." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum partout au Canada", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum. Idéal pour tester un concept ou lancer une petite série." },
    { n: "02", title: "Design personnalisé complet toujours inclus", body: "Apportez votre logo et vos couleurs de marque, nous nous occupons du reste. Le design du sachet est inclus dans chaque commande sans frais supplémentaires. Pas besoin de designer ni de fichiers prêts à l'impression." },
    { n: "03", title: "Café de grade spécialité, torréfié frais", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines traçables. Chaque sachet est torréfié à la commande à la Canadian Roasting Society à Montréal." },
    { n: "04", title: "Conçu pour les marques de Montréal", body: "Des restaurants du Plateau aux boutiques d'Outremont aux hôtels du Vieux-Montréal, EZPZ travaille avec les entreprises montréalaises de toutes tailles et industries. Nous connaissons votre marché." },
  ],
  whoWeServe: [
    { title: "Restaurants et cafés", body: "Des bistros du Plateau à la gastronomie du Vieux-Montréal, vendez votre propre café ou offrez-le en cadeau à vos clients. Un sachet personnalisé sur le comptoir fait partie de l'histoire de votre marque." },
    { title: "Hôtels-boutiques", body: "Les hôtels du Golden Square Mile, du Vieux-Montréal et du Quartier Latin font confiance à EZPZ pour mettre du café de spécialité dans chaque chambre sous leur propre nom de marque." },
    { title: "Détaillants et boutiques", body: "Les boutiques de la rue Mont-Royal, les concept stores du Mile End et les boutiques cadeaux de Westmount ajoutent le café personnalisé comme produit à forte marge et fidélisant." },
    { title: "Studios de bien-être", body: "Les studios de yoga, clubs de fitness et marques de bien-être de Rosemont à NDG utilisent EZPZ pour créer un rituel matinal de marque qui maintient leur communauté engagée entre les visites." },
  ],
  deliveryBody:
    "En tant qu'entreprise basée à Montréal, vous bénéficiez de la livraison la plus rapide de tous nos clients. Les commandes sont généralement expédiées dans les 3 à 5 jours ouvrables après approbation du design et arrivent à votre porte montréalaise dans la même semaine. La cueillette locale à notre torréfacteur du sud-ouest de Montréal peut également être organisée. Les commandes répétées sont encore plus rapides puisque votre design est déjà en dossier.",
  relatedCities: [
    { city: "Québec", href: "/fr/custom-coffee-bags-quebec-city" },
    { city: "Laval", href: "/fr/custom-coffee-bags-laval" },
    { city: "Longueuil", href: "/fr/custom-coffee-bags-longueuil" },
    { city: "Sherbrooke", href: "/fr/custom-coffee-bags-sherbrooke" },
    { city: "Gatineau", href: "/fr/custom-coffee-bags-gatineau" },
    { city: "Ottawa", href: "/fr/custom-coffee-bags-ottawa" },
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
  ],
  faq: [
    { q: "Combien de temps avant de recevoir mes sacs de café personnalisés à Montréal ?", a: "Puisque EZPZ est basé à Montréal, à la Canadian Roasting Society dans le sud-ouest de la ville, votre commande est expédiée plus vite que tout autre fournisseur. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design jusqu'à la livraison. Les commandes répétées sont expédiées en 3 à 5 jours ouvrables. La cueillette locale à notre torréfacteur est aussi possible sur arrangement." },
    { q: "Puis-je obtenir du texte bilingue français et anglais sur mes sacs ?", a: "Absolument. Notre équipe de design gère les mises en page en français seulement, en anglais seulement ou bilingues français/anglais sans frais supplémentaires. Que vous vouliez un emballage d'abord en français pour un bistro du Plateau ou des sacs bilingues pour un cadeau corporatif de Westmount, nous accommodons les deux langues officielles sans frais additionnels." },
    { q: "Quels types d'entreprises montréalaises utilisent EZPZ ?", a: "Nous travaillons avec des restaurants du Plateau et du Vieux-Montréal, des hôtels-boutiques du Golden Square Mile et du Vieux-Montréal, des studios de bien-être de Rosemont et d'Outremont, des concept stores du Mile End, des boutiques de Westmount et des bureaux corporatifs du centre-ville. Toute entreprise montréalaise qui souhaite renforcer sa marque avec un café premium est un choix naturel." },
  ],
};

const MontrealPage = () => <CityPage data={data} frData={frData} />;
export default MontrealPage;
