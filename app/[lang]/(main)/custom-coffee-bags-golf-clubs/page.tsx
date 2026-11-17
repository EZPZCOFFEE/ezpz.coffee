import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour clubs de golf | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Golf Clubs | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les clubs de golf. Le cadeau pour membres qui impressionne même ceux qui ont tout. Aucun minimum, design inclus." : "Custom branded coffee bags for golf clubs. The member gift that impresses even those who have everything. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-golf-clubs`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-golf-clubs",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-golf-clubs",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-golf-clubs",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-golf-clubs`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour clubs de golf" : "Custom Coffee Bags for Golf Clubs" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Golf Clubs",
  eyebrow: "Custom Coffee for Golf Clubs",
  headline: "The premium gift for members who have everything.",
  subheadline: "Golf club members are affluent, brand-conscious, and accustomed to premium experiences. A branded specialty coffee bag is the member gift, tournament prize, or holiday thank-you that stands out.",
  intro: "Golf club members are among the hardest people in the world to gift. They have everything, and they have strong opinions about quality. Generic branded merchandise — hats, towels, ball markers — is dismissed as marketing material. What they respond to is genuine quality with a story. A custom specialty coffee bag from a traceable single-origin farm, roasted fresh in Montreal, with the club's crest on the front, is genuinely premium in a way that most club merchandise is not. The product aligns with how golf clubs present themselves: quality, tradition, and attention to detail. Members who receive a bag of the club's branded specialty coffee as a holiday thank-you or a tournament prize don't just use it — they appreciate it. They mention it to other members. They ask the pro shop manager if they can buy more. That is the retail opportunity. Golf clubs that have introduced branded coffee in the pro shop report strong sales to members who want to take a piece of the club experience home with them or gift it to business associates. No minimum means testing the concept at a member event before committing to pro shop inventory.",
  whoOrders: [
    { title: "Private golf clubs", body: "Private clubs use branded coffee as a member appreciation gift, a new member welcome package, and a holiday season gift that reflects the club's commitment to quality and thoughtfulness." },
    { title: "Golf resorts and destination courses", body: "Golf resorts include branded coffee bags in premium stay packages, tournament gift bags, and pro shop retail displays. Resort guests purchase them as a premium take-home memento of their experience." },
    { title: "Country clubs with golf facilities", body: "Multi-sport country clubs use branded coffee as a unified club gift that appeals to golfers, tennis players, and social members alike — one elegant product for the entire membership." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your club crest or logo. Classic, elegant design aesthetics — navy, forest green, gold — work exceptionally well for golf club branding on a premium coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select a premium single-origin coffee that matches the club's positioning. Panamanian Geisha or Ethiopian Yirgacheffe are excellent choices for members who appreciate provenance and quality." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test at a member event before committing to pro shop inventory." },
    { n: "04", title: "Delivered to your club", body: "Shipped directly to your club address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Premium member gift at the right price point", body: "A custom specialty coffee bag is premium without being extravagant — it sits at the ideal gifting price point for a club that wants to signal quality without triggering questions about member dues." },
    { n: "02", title: "Tournament prize and competition award", body: "Tournament prizes that generate genuine excitement are rare. A branded specialty coffee bag as a closest-to-the-pin or longest-drive prize is memorable and appreciated at every skill level." },
    { n: "03", title: "Holiday gifting and member retention", body: "A holiday gift to the full membership — or to the club's top-tier members — is a relationship investment that pays dividends in renewal rates and referrals to prospective members." },
    { n: "04", title: "Pro shop retail with no minimum commitment", body: "Test a small retail display in the pro shop before committing to large quantities. Golf club members are proven luxury consumers — the sell-through rate for premium branded coffee is consistently high." },
  ],
  testimonial: {
    quote: "Our members loved it. Several asked if they could order more bags to give as gifts themselves — so now we sell them in the pro shop and they move consistently.",
    author: "Richard P.",
    role: "General Manager, private golf club, Ontario",
  },
  canonicalPath: "/custom-coffee-bags-golf-clubs",
};


const frData: IndustryPageData = {
  industry: "Clubs de golf",
  eyebrow: "Café personnalisé pour les clubs de golf",
  headline: "Le cadeau qui impressionne les membres de club de golf. Même ceux qui ont tout.",
  subheadline: "Les membres de club de golf sont parmi les personnes les plus difficiles à satisfaire avec un cadeau. Ils ont tout, et ils ont des opinions fortes sur la qualité. Les produits de marque génériques ne les impressionnent pas.",
  intro: "Les membres de club de golf sont parmi les personnes les plus difficiles à satisfaire avec un cadeau. Ils ont tout, et ils ont des opinions fortes sur la qualité. Les produits de marque génériques, les casquettes, les serviettes, les marqueurs de balle, sont perçus comme du matériel promotionnel. Ce qui les touche, c'est la qualité authentique présentée de façon réfléchie. Un café de spécialité traçable, torréfié frais à la commande, dans un emballage premium avec la marque et le crest de votre club, est un cadeau qui répond aux attentes élevées de vos membres. Il est consommable, donc renouvelable. Il est quotidien, donc mémorable. Et il est au bon prix pour un club qui veut signaler la qualité sans sembler extravagant.",
  whoOrders: [
    { title: "Clubs de golf privés", body: "Les clubs privés utilisent le café de marque comme cadeau d'appréciation pour les membres, trousse de bienvenue pour les nouveaux membres et cadeau des Fêtes qui reflète l'engagement du club envers la qualité et l'attention aux détails." },
    { title: "Resorts de golf et parcours de destination", body: "Les resorts de golf incluent le café de marque dans les forfaits de chambre pour les clients qui restent sur place, créant un point de contact premium qui prolonge l'expérience du resort dès le matin." },
    { title: "Clubs semi-privés et tournois de golf", body: "Les clubs semi-privés utilisent le café de marque comme prix de tournoi, cadeau de parrainage et article de pro-shop qui attire les golfeurs qui apprécient les produits de qualité artisanale." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré au pro-shop ou à votre bureau du club", body: "Livré au pro-shop ou au bureau de votre club. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Cadeau premium pour membres au bon prix", body: "Un sachet de café de spécialité est premium sans être extravagant. Il est au prix idéal pour un club qui veut signaler la qualité sans soulever de questions sur les cotisations." },
    { n: "02", title: "Prix de tournoi et de compétition mémorable", body: "Un sachet de café de marque avec le logo du tournoi est plus mémorable que la plupart des prix traditionnels : il s'utilise pendant des semaines et rappelle la victoire à chaque tasse." },
    { n: "03", title: "Ventes dans le pro-shop sans risque de stock minimum", body: "Vendez des sacs dans votre pro-shop aux membres et aux visiteurs. Commencez avec 24 sacs et réapprovisionnez selon la demande. Aucun minimum signifie aucun risque." },
    { n: "04", title: "Coffrets cadeaux pour les sponsors et les commanditaires", body: "Incluez le café de marque dans les coffrets de sponsors de tournois pour créer une expérience de parrainage premium qui dépasse les attentes habituelles des commanditaires." },
  ],
  testimonial: {
    quote: "Nos membres ont adoré. Plusieurs ont demandé s'ils pouvaient commander des sacs supplémentaires à offrir comme cadeaux. Donc maintenant on les vend dans le pro-shop et ils se vendent régulièrement.",
    author: "Robert M.",
    role: "Directeur, club de golf privé, Ontario",
  },
  canonicalPath: "/custom-coffee-bags-golf-clubs",
};

const GolfClubsPage = () => <IndustryPage data={data} frData={frData} />;
export default GolfClubsPage;
