import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour organisateurs d'événements | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Event Planners | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour organisateurs d'événements. La faveur qui rentre vraiment chez les participants. Aucun minimum, design inclus." : "Custom branded coffee bags for event planners. The event favor that actually goes home. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-event-planners`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-event-planners",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-event-planners",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-event-planners`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour organisateurs d'événements" : "Custom Coffee Bags for Event Planners" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Event Planners",
  eyebrow: "Custom Coffee for Event Planners",
  headline: "The event favor nobody throws away.",
  subheadline: "Event planners are always looking for unique, memorable favors that stand out from generic options. Custom coffee bags are practical, premium, and completely customizable to any event theme or client brand.",
  intro: "Event planners have seen every favor, swag bag item, and take-home gift that exists. The branded pen. The tote bag. The USB drive. The chocolates. Everything gets used once and forgotten, or put directly in the hotel trash can. A custom specialty coffee bag is different because it goes home. When an attendee decides to pack it in their luggage instead of leaving it behind, that is the moment the product has won. And branded specialty coffee consistently makes the cut — because it is useful, beautiful, and heavy enough to feel like a real product rather than promotional filler. For corporate event planners, a custom coffee bag with the client's brand and event name is a professional, premium favor that attendees associate with the quality of the event itself. For wedding planners, it is the favor that guests specifically mention in their thank-you notes. For conference organizers, it is the one item that generates questions at the registration desk. No minimum is particularly important for event planners: you can order exactly the right quantity for any event size without over-ordering and wasting budget on unused inventory.",
  whoOrders: [
    { title: "Corporate event planners", body: "Corporate planners use branded coffee as a conference bag item, an awards ceremony favor, and a client appreciation event take-home that reflects the quality of the event and the client's brand." },
    { title: "Wedding planners", body: "Wedding planners recommend EZPZ to couples as the favor that guests actually take home and use. Planners who become EZPZ advocates earn ongoing referral relationships with their couple network." },
    { title: "Conference and summit organizers", body: "Conference organizers include branded coffee in attendee welcome kits and use it as a sponsor gift item. It's one of the few conference items that regularly receives positive mention in post-event surveys." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your client's brand or the event identity. Our design tool creates event-specific bags in minutes — no designer or print-ready files required from your team." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing specialty origin that works for a diverse event audience. Medium roast Colombian or a well-rounded blend are reliable choices for large mixed groups." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society. Order exactly the right quantity for the event headcount — no minimum means no waste, no over-ordering, no budget pressure." },
    { n: "04", title: "Delivered to the event venue or your office", body: "Ship to the venue, to the client's office, or to your planning studio. Canada: 3–10 days. USA: 7–14 days. Plan for arrival 2 weeks before the event date." },
  ],
  benefits: [
    { n: "01", title: "The favor attendees actually take home", body: "Most event favors stay behind. A custom specialty coffee bag travels home in attendees' bags and sits on their kitchen counter for weeks — a daily reminder of the event and the brand behind it." },
    { n: "02", title: "Fully customizable to any event theme or brand", body: "The bag design is completely tailored to the client's brand, event theme, or occasion. No off-the-shelf products — every bag is made specifically for the event it represents." },
    { n: "03", title: "No minimum for exact event quantities", body: "Order 25 bags for an intimate corporate dinner or 2,000 for a national conference. Zero minimum means ordering exactly the right quantity with zero waste and zero budget pressure." },
    { n: "04", title: "Premium positioning for your event offering", body: "Planners who include branded specialty coffee in their event proposals stand out from competitors. It signals thoughtfulness, quality, and a vendor network that goes beyond the generic." },
  ],
  testimonial: {
    quote: "I've used EZPZ for three corporate events this year. Every single client has asked for them again at their next event — that's the best endorsement I can give.",
    author: "Amanda K.",
    role: "Corporate Event Planner, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-event-planners",
};


const frData: IndustryPageData = {
  industry: "Organisateurs d'événements",
  eyebrow: "Café personnalisé pour les organisateurs d'événements",
  headline: "La faveur d'événement que les participants emportent vraiment chez eux.",
  subheadline: "Les organisateurs d'événements ont tout vu : le stylo de marque, le sac fourre-tout, la clé USB, les chocolats. Tout se retrouve dans la poubelle de l'hôtel ou dans un tiroir oublié. Un sachet de café de spécialité est différent.",
  intro: "Les organisateurs d'événements ont tout vu : le stylo de marque, le sac fourre-tout, la clé USB, les chocolats. Tout est utilisé une fois et oublié, ou mis directement à la poubelle de l'hôtel. Un sachet de café de spécialité personnalisé est différent parce qu'il s'utilise pendant deux à quatre semaines, chaque matin. La faveur qui reste sur le comptoir de cuisine d'un participant génère un rappel quotidien de la marque de l'événement et de votre talent d'organisateur. Pour les événements corporatifs, c'est le rappel de marque dont votre client a besoin. Pour les mariages, c'est la faveur dont les invités parlent. Pour les conférences, c'est l'article qui différencie votre événement de tous les autres de la saison.",
  whoOrders: [
    { title: "Organisateurs d'événements corporatifs", body: "Les planificateurs corporatifs utilisent le café de marque comme article de sac de conférence, faveur de cérémonie de remise de prix et cadeau d'appréciation client qui reflète la qualité de l'événement." },
    { title: "Organisateurs de mariages", body: "Les wedding planners recommandent EZPZ aux couples comme faveur de mariage premium qui se démarque des options génériques et que les invités emportent vraiment chez eux." },
    { title: "Organisateurs de galas et d'événements de collecte de fonds", body: "Les organisateurs d'événements de bienfaisance utilisent le café de marque comme faveur de table premium qui contribue à la valeur perçue de l'expérience et renforce le don." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre bureau ou directement aux lieux d'événements", body: "Livré à votre bureau pour distribution ou directement au lieu de l'événement. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "La faveur que les participants emportent vraiment chez eux", body: "La plupart des faveurs d'événements restent derrière. Un sachet de café de spécialité personnalisé voyage dans les sacs des participants et se retrouve sur leur comptoir de cuisine pendant des semaines." },
    { n: "02", title: "Entièrement personnalisable selon le thème ou la marque de l'événement", body: "Le sachet porte la marque de votre client, les couleurs de l'événement, le message choisi. Aucun minimum signifie que vous pouvez tester un design avant de commander pour tout l'événement." },
    { n: "03", title: "Marge intégrée à votre service d'organisateur", body: "En proposant EZPZ à vos clients, vous ajoutez une ligne de valeur à vos forfaits qui justifie des honoraires plus élevés et différencie votre offre de la concurrence." },
    { n: "04", title: "Réponse rapide pour les événements de dernière minute", body: "Les commandes standards livrent en 3 à 10 jours ouvrables au Canada. Pour les événements planifiés à l'avance, nous recommandons 3 à 4 semaines pour la première commande." },
  ],
  testimonial: {
    quote: "J'ai utilisé EZPZ pour trois événements corporatifs cette année. Chaque client a demandé à les avoir à nouveau à leur prochain événement. C'est la meilleure recommandation que je puisse donner.",
    author: "Véronique L.",
    role: "Organisatrice d'événements, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-event-planners",
};

const EventPlannersPage = () => <IndustryPage data={data} frData={frData} />;
export default EventPlannersPage;
