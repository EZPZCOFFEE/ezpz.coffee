import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour salles de mariage | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Wedding Venues | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les salles de mariage. L'expérience de marque dont les couples et les invités se souviennent. Aucun minimum, design inclus." : "Custom branded coffee bags for wedding venues. The venue-branded experience couples and guests remember. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-wedding-venues`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-wedding-venues",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-wedding-venues",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-wedding-venues`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour salles de mariage" : "Custom Coffee Bags for Wedding Venues" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Wedding Venues",
  eyebrow: "Custom Coffee for Wedding Venues",
  headline: "A wedding favor every guest will use for weeks.",
  subheadline: "Wedding venues are both a direct buyer and a trusted referral source. Branded coffee works for the venue's own welcome experience and for the couples who want to offer a memorable favor.",
  intro: "Wedding venues occupy a unique position in the gift and favor ecosystem. They are the brand behind the couple's most important day, and the hospitality details they provide — from the welcome table to the place settings to the guest takeaways — reflect directly on their reputation and on the couple's taste. A custom specialty coffee bag works in two distinct ways for wedding venues. First, as a venue-branded welcome gift for arriving guests or an in-room amenity for overnight wedding guests: it introduces the venue's brand in a warm, thoughtful way before the ceremony begins. Second, as a referral-generating recommendation to couples: venues that recommend EZPZ to their couples for wedding favor bags become a trusted resource in the planning process, creating a referral relationship that generates ongoing value. Couples who receive the recommendation and use EZPZ for their favor bags mention the venue in reviews alongside the coffee — double brand association from a single product suggestion. No minimum means accommodating couples of every size, from intimate 20-person celebrations to large receptions of 200 or more, without inventory risk or per-order minimums.",
  whoOrders: [
    { title: "Boutique wedding venues", body: "Intimate wedding venues use branded coffee as a signature welcome gift that introduces the venue to arriving guests and sets the tone for a premium, detail-oriented experience." },
    { title: "Estate and manor wedding venues", body: "Large estate properties include branded coffee bags in multi-day wedding weekend packages, as morning amenities for overnight guests, and as a curated element of the premium venue experience." },
    { title: "Hotel and resort wedding venues", body: "Hotel wedding venues include branded coffee in the couple's suite, in the bridal party room, and recommend it to couples for favor bags — creating a cohesive branded experience throughout the wedding day." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your venue logo or recommend the design tool to your couples. For venue-branded bags, we create something that reflects the property's aesthetic. For couple favor bags, they design their own." },
    { n: "02", title: "Choose your coffee", body: "Select from crowd-pleasing specialty origins that appeal to diverse wedding guest palates. Colombian medium roast is a reliable favorite for large mixed audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — accommodates intimate weddings of 20 and large receptions of 300+ with the same process and quality." },
    { n: "04", title: "Delivered to the venue", body: "Shipped directly to the venue address for distribution by staff, or to the couple's home for personal favor assembly. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Venue-branded welcome experience", body: "A custom branded coffee bag as a guest welcome gift or in-room amenity introduces the venue brand in a warm, premium way that sets the emotional tone for the entire event." },
    { n: "02", title: "Trusted vendor recommendation for couples", body: "Venues that recommend EZPZ to couples for favor bags become a trusted planning resource. When couples mention the coffee in reviews, the venue earns association with that quality detail." },
    { n: "03", title: "Premium package add-on revenue", body: "Branded coffee bags included in premium venue packages justify higher package pricing. It's a tangible, premium add-on that makes the price difference feel concrete and justified to couples." },
    { n: "04", title: "Memorable guest takeaway that travels home", body: "Unlike flowers and candles, a coffee bag travels home in every guest's bag and sits on their kitchen counter for weeks. The venue's recommended brand earns daily visibility from guests who loved the day." },
  ],
  testimonial: {
    quote: "Couples mention it in every venue inquiry now after seeing it at other weddings. We added it to our premium package and it's become one of our strongest selling points.",
    author: "Claire R.",
    role: "Venue Manager, estate wedding venue, Quebec",
  },
  canonicalPath: "/custom-coffee-bags-wedding-venues",
};


const frData: IndustryPageData = {
  industry: "Salles de mariage",
  eyebrow: "Café personnalisé pour les salles de mariage",
  headline: "Votre salle de mariage. Une expérience de marque qui perdure après la soirée.",
  subheadline: "Les salles de mariage occupent une position unique dans l'écosystème des cadeaux et faveurs. Elles sont la marque derrière la journée la plus importante du couple, et les détails d'hospitalité qu'elles fournissent reflètent directement sur leur réputation.",
  intro: "Les salles de mariage occupent une position unique dans l'écosystème des cadeaux et faveurs. Elles sont la marque derrière la journée la plus importante du couple, et les détails d'hospitalité qu'elles fournissent reflètent directement sur leur réputation. Les faveurs de mariage génériques, les porte-clés, les bougies non déballées, les petits sacs de dragées, restent sur les tables ou finissent à la poubelle. Un sachet de café de spécialité personnalisé avec la marque de votre salle ou les noms du couple est la faveur que les invités emportent vraiment chez eux. Quand ils le préparent le lundi matin après le mariage, ils repensent à la soirée et au nom de votre salle est là. Cela génère un rappel de marque organique que vous ne pouvez pas acheter.",
  whoOrders: [
    { title: "Salles de mariage boutiques", body: "Les salles de mariage intimes utilisent le café de marque comme cadeau de bienvenue signature qui introduit la salle auprès des invités et donne le ton d'une expérience premium et attentive aux détails." },
    { title: "Domaines et manoirs pour mariages", body: "Les grandes propriétés incluent le café de marque dans les forfaits de chambre pour les invités qui restent sur place, créant un point de contact premium qui prolonge l'expérience au-delà de la réception." },
    { title: "Salles de réception et événements", body: "Les salles de réception qui accueillent des mariages et des événements premium utilisent le café de marque comme faveur standard incluse dans leurs forfaits pour différencier leur offre." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre salle", body: "Livré directement à l'adresse de votre salle de mariage. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Expérience de bienvenue avec la marque de la salle", body: "Un sachet de café de marque comme cadeau de bienvenue pour les invités ou en chambre introduit la salle de façon chaleureuse et premium, donnant le ton émotionnel de toute la soirée." },
    { n: "02", title: "Recommandation de fournisseur de confiance pour les couples", body: "Les salles qui recommandent EZPZ aux couples pour leurs faveurs de mariage ajoutent une ligne de valeur à leur service et renforcent leur positionnement comme partenaire de confiance pour la planification." },
    { n: "03", title: "Présence de marque durable chez les invités", body: "Les invités qui emportent un sachet de café chez eux voient le nom de votre salle sur leur comptoir pendant des semaines. Ce rappel génère des références quand des connaissances planifient leurs propres événements." },
    { n: "04", title: "Faveur premium qui différencie vos forfaits", body: "En incluant le café de marque dans vos forfaits premium, vous créez une différence tangible et mémorable entre vos niveaux de service qui justifie l'écart de prix." },
  ],
  testimonial: {
    quote: "Les couples en parlent dans chaque demande de renseignements maintenant, après l'avoir vu à d'autres mariages. On l'a ajouté à notre forfait premium et c'est devenu l'un de nos meilleurs arguments de vente.",
    author: "Hélène B.",
    role: "Directrice, salle de mariage, Québec",
  },
  canonicalPath: "/custom-coffee-bags-wedding-venues",
};

const WeddingVenuesPage = () => <IndustryPage data={data} frData={frData} />;
export default WeddingVenuesPage;
