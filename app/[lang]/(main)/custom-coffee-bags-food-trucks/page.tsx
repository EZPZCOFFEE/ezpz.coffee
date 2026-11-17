import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour camions-restaurants | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Food Trucks | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les camions-restaurants. Commercialisez votre marque auprès de votre base de superfans. Aucun minimum, design inclus." : "Custom branded coffee bags for food trucks. Merchandise your brand to your superfan base. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-food-trucks`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-food-trucks",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-food-trucks",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-food-trucks",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-food-trucks`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour camions-restaurants" : "Custom Coffee Bags for Food Trucks" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Food Trucks",
  eyebrow: "Custom Coffee for Food Trucks",
  headline: "Your food truck's brand. In their kitchen cabinet.",
  subheadline: "Food trucks build intensely loyal followings, and branded merchandise is a significant revenue driver for the best operators. Your branded coffee is the product superfans buy without hesitation.",
  intro: "Food truck culture is built on loyalty. The regulars who find your truck every week, who follow your location updates, who tell everyone they know — these are superfans, and superfans buy branded merchandise. A food truck's custom specialty coffee bag sold at the service window or at weekend markets is the kind of product that superfans purchase immediately, without considering the price. It carries the brand they love into the most intimate part of their daily routine — the morning kitchen. The food truck merch ecosystem typically includes hats and shirts. These work, but they have high production costs, complex sizing inventory, and a slow consumption cycle. A branded coffee bag has none of those problems. It is easy to produce in any quantity (including quantities as small as one bag), it is consumed within weeks, creating repeat purchase opportunities, and it requires zero inventory management beyond a simple reorder. The no-minimum model is particularly powerful for food trucks: test the concept at your next market with 20 bags. If they sell out — and they will — reorder. The investment to test is minimal. The upside is a recurring merchandise revenue stream that your most loyal customers drive for you without any marketing.",
  whoOrders: [
    { title: "Street food and specialty food trucks", body: "Signature food trucks with strong identities and loyal social media followings add branded coffee as a premium merchandise item that superfans buy eagerly and gift to friends who follow the truck." },
    { title: "Coffee and beverage trucks", body: "Mobile coffee and beverage operators use branded bags to extend the in-truck experience into take-home products — a natural extension of what they're already selling by the cup." },
    { title: "Brunch and morning market trucks", body: "Brunch trucks and morning market operators sell branded coffee bags alongside their hot service, giving customers who love the experience a way to recreate it at home on their days off." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your truck logo and artwork. Bold, graphic, personality-driven design — the visual language of great food truck branding — looks exceptional on a specialty coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select a specialty origin that matches your truck's energy. Bold and characterful origins work best for food truck audiences who appreciate things with personality." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society. Start with 20 bags. Sell out at your next market. Reorder with 2 weeks lead time and never run out again." },
    { n: "04", title: "Delivered to your home base", body: "Ship to your commissary kitchen, home address, or storage unit — wherever your operation runs from. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Merchandise revenue from your superfan base", body: "Food truck superfans buy branded merchandise without needing to be sold to. A coffee bag at the window is an impulse purchase for anyone who loves the truck and drinks coffee — which is most of them." },
    { n: "02", title: "A product your most loyal customers want", body: "Regulars who love your truck want to take more of it home. A branded specialty coffee bag lets them bring the brand into their daily morning ritual — the most powerful retention mechanism available." },
    { n: "03", title: "Event and market sales with no minimum risk", body: "Test with 20 bags at a weekend market. If they sell, reorder. If for some reason they don't, you've spent almost nothing on the test. Zero minimum = zero risk on the concept validation." },
    { n: "04", title: "Repeat purchase cycle faster than apparel", body: "A coffee bag is consumed in 2–3 weeks. A hat lasts years. Branded coffee creates a repeat purchase cycle that drives revenue at a frequency that no other food truck merchandise category comes close to." },
  ],
  testimonial: {
    quote: "I put them on the counter at my next market and they sold out before noon. My regulars were buying two at a time — one for themselves, one to give as a gift.",
    author: "Alex R.",
    role: "Food truck owner, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-food-trucks",
};


const frData: IndustryPageData = {
  industry: "Camions-restaurants",
  eyebrow: "Café personnalisé pour les camions-restaurants",
  headline: "Votre marque de camion-restaurant. Dans la cuisine de vos superfans.",
  subheadline: "La culture des camions-restaurants est construite sur la fidélité. Les habitués qui trouvent votre camion chaque semaine, qui suivent vos mises à jour de localisation, qui racontent votre histoire à tout le monde, ce sont des superfans. Et les superfans achètent des produits de marque.",
  intro: "La culture des camions-restaurants est construite sur la fidélité. Les habitués qui trouvent votre camion chaque semaine, qui suivent vos mises à jour de localisation, qui racontent votre histoire à tout le monde, ce sont des superfans. Et les superfans achètent des produits de marque. Un sachet de café de spécialité personnalisé vendu au comptoir de service est le produit de marchandisage parfait pour un food truck : il est portable, consommable, et il reste dans la cuisine de votre client pendant deux à quatre semaines. Chaque matin où il prépare votre café, votre nom et votre logo sont présents. Quand ses amis visitent, le sachet est là sur le comptoir. C'est une publicité involontaire que vous ne pouvez pas acheter. Aucun minimum signifie commencer avec une petite quantité et voir comment vos habitués réagissent.",
  whoOrders: [
    { title: "Camions de rue et de spécialité alimentaire", body: "Les camions de rue avec une identité forte et une base de fans loyaux sur les réseaux sociaux ajoutent le café de marque comme article de marchandisage premium que les superfans achètent avec enthousiasme." },
    { title: "Camions de café et de boissons", body: "Les camions mobiles de café et de boissons vendent leurs propres sacs de café de marque comme article complémentaire naturel : les clients qui aiment votre café veulent en faire chez eux." },
    { title: "Camions de marchés fermiers et événements spéciaux", body: "Les camions qui servent des marchés, des festivals et des événements spéciaux ont un public captif prêt à acheter des produits de marque dans le moment de l'expérience." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre adresse", body: "Livré directement à votre adresse de stationnement ou de commissariat. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "Revenus de marchandisage auprès de votre base de superfans", body: "Les superfans de camions-restaurants achètent des produits de marque sans avoir besoin qu'on les vende. Un sachet de café au comptoir est un achat d'impulsion pour quiconque adore le camion et boit du café." },
    { n: "02", title: "Un produit que vos clients les plus fidèles cadeautent", body: "Les habitués achètent souvent deux sacs : un pour eux, un à offrir. Votre marque se propage dans le réseau de vos meilleurs clients sans aucun effort marketing de votre part." },
    { n: "03", title: "Aucun minimum, aucun risque de stock", body: "Commencez avec 10 sacs et voyez si ça se vend. Ça se vendra. Quand c'est fait, réapprovisionnez. Aucun risque, aucun stock invendu." },
    { n: "04", title: "Extension de marque au-delà de la cuisine", body: "Un food truck qui vend son propre café de spécialité dit à ses clients qu'il est plus qu'un camion de rue. C'est une déclaration d'identité de marque que peu de concurrents font." },
  ],
  testimonial: {
    quote: "Je les ai mis sur le comptoir à mon prochain marché et ils se sont vendus avant midi. Mes habitués en prenaient deux à la fois : un pour eux, un à offrir.",
    author: "Alex P.",
    role: "Propriétaire, food truck, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-food-trucks",
};

const FoodTrucksPage = () => <IndustryPage data={data} frData={frData} />;
export default FoodTrucksPage;
