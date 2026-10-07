import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour hôtels | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Hotels | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour hôtels. Transformez l'expérience de vos clients en chambre. Aucun minimum, design inclus. Les hôtels au Canada et aux États-Unis choisissent EZPZ." : "Custom branded coffee bags for hotels. Transform your in-room guest experience. No minimum order, full design included. Hotels across Canada and the USA choose EZPZ.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-hotels`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-hotels",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-hotels",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-hotels`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour hôtels" : "Custom Coffee Bags for Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Hotels",
  eyebrow: "Custom Coffee for Hotels",
  headline: "Your hotel's brand. In every guest's morning cup.",
  subheadline: "Guests who wake up to a custom coffee bag with your hotel's name and logo associate quality with your brand — every morning of their stay and long after checkout.",
  intro: "The hospitality industry is in the middle of a shift toward premium branded amenities. Generic instant coffee packets are being replaced by something guests actually notice, remember, and talk about. A custom specialty coffee bag with your hotel's branding is the morning touchpoint that sets the tone for the entire stay. Guests who find a beautifully designed bag on their nightstand or coffee station associate the hotel with thoughtfulness and quality. Fairmont Hotels already works with EZPZ — and the feedback from their guests is exactly what you'd expect: they ask where they can buy more. That's the opportunity. Beyond the room, branded coffee opens up lobby retail revenue, room service premium pairing, and corporate event gifting for conference groups. The hospitality industry's shift toward premium branded amenities is a direct response to the guest's desire for experiences, not just rooms. EZPZ makes it possible to deliver that experience at any scale — whether you're a boutique 12-room property or a full-service resort — with no minimum order and full design included.",
  whoOrders: [
    { title: "Boutique hotels", body: "Independent boutique hotels use branded coffee as a signature brand touchpoint that differentiates them from chain competitors. It signals curation and quality in a way that generic amenities never could." },
    { title: "Luxury resorts", body: "Resorts include branded coffee in VIP room packages, use it as a spa amenity, and offer it as a premium gift for guests celebrating special occasions." },
    { title: "Business hotels", body: "Corporate travel hotels offer branded coffee bags as a conference and meeting room amenity, and include them in executive floor packages to justify premium pricing." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your hotel logo, choose your packaging style, and add your property name and message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees to match your hotel's positioning — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to your property", body: "We ship directly to your hotel address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Premium in-room experience", body: "A branded specialty coffee bag in the room signals quality from the moment guests check in. It transforms the morning ritual into a brand moment they'll remember and mention in reviews." },
    { n: "02", title: "Lobby retail and F&B revenue", body: "Guests who love the in-room coffee want to take it home. A retail display in the lobby with your branded bags generates direct revenue with zero waste and no minimum reorder." },
    { n: "03", title: "Brand recall long after checkout", body: "A guest who takes a bag home brews your hotel's coffee every morning for weeks. That daily brand touchpoint is worth far more than any digital ad spend." },
    { n: "04", title: "Corporate event and group gifting", body: "Hotel groups and conference clients receive branded coffee as a premium welcome or closing gift. It elevates the event experience and gives the hotel a memorable differentiator." },
  ],
  testimonial: {
    quote: "Our guests kept asking where they could buy the coffee from the room. Now we sell it in the lobby and it's one of our best-performing retail items.",
    author: "David M.",
    role: "General Manager, boutique hotel, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-hotels",
};


const frData: IndustryPageData = {
  industry: "Hôtels",
  eyebrow: "Café personnalisé pour les hôtels",
  headline: "Votre marque hôtelière. Dans la tasse de chaque client, chaque matin.",
  subheadline: "Les clients qui se réveillent avec un sachet de café personnalisé à votre nom associent la qualité à votre marque, dès le premier matin de leur séjour et bien après le départ.",
  intro: "L'industrie hôtelière vit une transformation vers les aménités de marque premium. Les sachets de café instantané génériques sont remplacés par quelque chose que les clients remarquent, retiennent et dont ils parlent. Un sachet de café de spécialité personnalisé avec la marque de votre hôtel est le point de contact matinal qui donne le ton pour l'ensemble du séjour. Les clients qui trouvent un sachet magnifiquement conçu sur leur table de nuit ou leur poste café associent l'hôtel à l'attention aux détails et à la qualité. Fairmont Hotels travaille déjà avec EZPZ et les retours de leurs clients sont exactement ceux attendus : ils demandent où acheter d'autres sacs. C'est l'opportunité. Au-delà de la chambre, le café de marque ouvre des revenus de vente au détail dans le lobby, des pairings premium au service aux chambres et des cadeaux d'affaires pour les groupes en conférence. EZPZ rend cela possible à toute échelle : une propriété boutique de 12 chambres ou un resort complet, sans minimum de commande et design inclus.",
  whoOrders: [
    { title: "Hôtels-boutiques", body: "Les hôtels boutiques indépendants utilisent le café de marque comme point de contact signature qui les différencie des chaînes. Il signale la curation et la qualité d'une façon que les aménités génériques ne peuvent jamais transmettre." },
    { title: "Resorts et propriétés de luxe", body: "Les resorts incluent le café de marque dans les forfaits VIP, l'utilisent comme aménité de spa et l'offrent comme cadeau premium pour les clients qui célèbrent des occasions spéciales." },
    { title: "Hôtels d'affaires", body: "Les hôtels pour voyageurs d'affaires offrent le café personnalisé comme aménité de salle de réunion et l'incluent dans les forfaits des étages exécutifs pour justifier une tarification premium." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre propriété", body: "Nous livrons directement à l'adresse de votre hôtel. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Expérience premium en chambre", body: "Un sachet de café de spécialité en chambre signale la qualité dès l'arrivée des clients. Il transforme le rituel matinal en un moment de marque mémorable qu'ils mentionneront dans leurs avis." },
    { n: "02", title: "Vente au détail dans le lobby et revenus restauration", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby génère des revenus directs, sans gaspillage ni minimum de réapprovisionnement." },
    { n: "03", title: "Rappel de marque bien après le départ", body: "Un client qui emporte un sachet chez lui prépare le café de votre hôtel chaque matin pendant des semaines. Ce point de contact quotidien vaut bien plus que tout budget publicitaire." },
    { n: "04", title: "Cadeaux pour événements corporatifs et groupes", body: "Les groupes en conférence reçoivent le café de marque comme cadeau de bienvenue ou de clôture. Cela élève l'expérience de l'événement et donne à l'hôtel un différenciateur mémorable." },
  ],
  testimonial: {
    quote: "Nos clients demandent où acheter le café de la chambre. Maintenant on le vend dans le lobby et c'est l'un de nos meilleurs articles de vente au détail.",
    author: "David M.",
    role: "Directeur général, hôtel-boutique, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-hotels",
};

const HotelsPage = () => <IndustryPage data={data} frData={frData} />;
export default HotelsPage;
