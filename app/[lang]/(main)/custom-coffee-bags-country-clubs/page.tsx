import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour country clubs | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Country Clubs | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les country clubs. Des cadeaux pour membres à la hauteur de vos standards. Aucun minimum, design inclus." : "Custom branded coffee bags for country clubs. Member gifts that match your club's standards. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-country-clubs`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-country-clubs",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-country-clubs",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-country-clubs`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour country clubs" : "Custom Coffee Bags for Country Clubs" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Country Clubs",
  eyebrow: "Custom Coffee for Country Clubs",
  headline: "A member gift as exclusive as your club.",
  subheadline: "Country club members expect the best. A custom branded specialty coffee bag — from a traceable single origin, roasted fresh in Montreal, with the club's crest — is exactly the kind of detail that makes membership feel special.",
  intro: "Country clubs are in the business of exclusivity. Everything — from the manicured grounds to the dining room silverware to the guest experience — communicates that this is a place where standards are not just maintained but celebrated. Member gifts need to meet that same standard. A custom specialty coffee bag with the club's crest, a traceable single-origin coffee chosen for its exceptional quality, roasted fresh in Montreal — that is a gift that reinforces why membership at this club is worth having. The product is premium without being ostentatious. It is consumable without being forgettable. It carries the club's brand into members' most intimate morning moment — the one quiet ritual before the day begins. That is where brand loyalty is built. Country clubs that have introduced branded coffee report that members appreciate the quality of the product as much as the branding — which is exactly right. The coffee has to be exceptional. EZPZ sources only 80+ SCA specialty-grade beans from fully traceable origins, roasted in small batches at Canadian Roasting Society in Montreal. It meets the standard your members expect.",
  whoOrders: [
    { title: "Tennis and racquet clubs", body: "Multi-sport lifestyle clubs use branded coffee as a seasonal member gift that appeals equally to competitive players and social members — a universal luxury consumable that transcends sport preference." },
    { title: "Private social and lifestyle clubs", body: "Exclusive private clubs in urban centres use branded coffee as a new member welcome gift and a signature item in the club shop that signals the level of curation members can expect from every aspect of membership." },
    { title: "Family and multi-generational clubs", body: "Clubs with family memberships use branded coffee as a parent-focused gift that acknowledges the adult members who drive the family's membership decision and renewal." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your club crest or logo. Heritage design elements — crests, monograms, classic typography — translate beautifully onto premium coffee bags." },
    { n: "02", title: "Choose your coffee", body: "Select from our most premium single-origin offerings. Panamanian, Ethiopian, or Kenyan specialty coffees at the 85+ SCA score level are appropriate for the country club market." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. The quality is consistently exceptional — which is the only standard that works for this audience." },
    { n: "04", title: "Delivered to your club", body: "Shipped directly to your club address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Exclusivity signal that reinforces membership value", body: "A custom specialty coffee that only club members can access is a membership perk in itself. It reinforces the feeling that belonging to this club means access to things unavailable elsewhere." },
    { n: "02", title: "Member appreciation that earns renewal loyalty", body: "Members who feel genuinely appreciated by their club renew at higher rates and refer prospective members more actively. A well-chosen gift at the right moment is one of the most cost-effective retention tools available." },
    { n: "03", title: "New member welcome experience", body: "A branded specialty coffee bag in the new member welcome kit sets the tone for the relationship from day one. It signals quality, curation, and a commitment to the member experience that continues throughout membership." },
    { n: "04", title: "Club shop retail for members and guests", body: "Premium branded coffee in the club shop sells to members who want to gift it and to guests who want to take a piece of the experience home. Strong margins, no minimum reorder commitment." },
  ],
  testimonial: {
    quote: "It elevated our holiday member package from nice to exceptional. The feedback from members was unanimous — and several asked if we could make it a permanent club shop item.",
    author: "Catherine B.",
    role: "Events Director, private country club, British Columbia",
  },
  canonicalPath: "/custom-coffee-bags-country-clubs",
};


const frData: IndustryPageData = {
  industry: "Country clubs",
  eyebrow: "Café personnalisé pour les country clubs",
  headline: "Les standards de votre club. Dans le cadeau que vos membres attendent.",
  subheadline: "Les country clubs sont dans le métier de l'exclusivité. Tout, des pelouses entretenues à l'argenterie de la salle à manger en passant par l'expérience des invités, communique que c'est un endroit où les standards ne sont pas seulement maintenus mais célébrés.",
  intro: "Les country clubs sont dans le métier de l'exclusivité. Tout, des pelouses entretenues à l'argenterie de la salle à manger en passant par l'expérience des invités, communique que c'est un endroit où les standards ne sont pas seulement maintenus mais célébrés. Les cadeaux pour membres doivent respecter ce même standard. La balle de golf standard, le polo de marque générique, la bouteille de vin du supermarché réemballée : aucune de ces choses ne correspond à l'attente d'un membre de country club. Un café de spécialité personnalisé, présenté dans un emballage premium avec la marque et le crest de votre club, est un cadeau qui correspond à l'image que votre club cultive.",
  whoOrders: [
    { title: "Clubs de tennis et de raquette", body: "Les clubs de sports multiples et de lifestyle utilisent le café de marque comme cadeau saisonnier pour les membres qui plaît également aux joueurs compétitifs et aux membres sociaux." },
    { title: "Clubs sociaux privés et de vie exclusive", body: "Les clubs privés exclusifs incluent le café de marque dans les coffrets de bienvenue pour les nouveaux membres, les cadeaux de remise de prix et les paniers des Fêtes premium pour le conseil d'administration." },
    { title: "Clubs de yacht et de sports nautiques", body: "Les clubs maritimes utilisent le café de marque comme article de boutique premium et cadeau pour les membres qui participent aux régates et aux événements saisonniers." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré au club ou directement aux membres", body: "Livré à votre club pour distribution ou directement aux membres par courrier. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "Signal d'exclusivité qui renforce la valeur de l'adhésion", body: "Un café de spécialité personnalisé auquel seuls les membres du club ont accès est un avantage d'adhésion en soi. Il renforce le sentiment d'appartenir à quelque chose de spécial, inaccessible ailleurs." },
    { n: "02", title: "Reconnaissance des membres qui génère des renouvellements", body: "Les membres qui reçoivent des cadeaux de qualité se sentent valorisés par leur club. Ce sentiment de valeur est directement lié à la décision de renouveler l'adhésion, particulièrement pour les membres marginaux." },
    { n: "03", title: "Cadeau pour tournois et cérémonies de remise de prix", body: "Le café de marque est le prix parfait pour les tournois de golf, de tennis et de bridge : premium, mémorable et utilisé quotidiennement bien après la remise." },
    { n: "04", title: "Cohérence avec le positionnement premium du club", body: "Un club qui sert du café de spécialité personnalisé dans sa salle à manger et l'offre comme cadeau à ses membres maintient une cohérence de qualité que les membres remarquent et apprécient." },
  ],
  testimonial: {
    quote: "Ça a élevé notre coffret cadeau de fin d'année de bien à exceptionnel. Les retours des membres ont été unanimes, et plusieurs ont demandé si on pouvait en faire un article permanent de la boutique du club.",
    author: "Philippe M.",
    role: "Directeur général, country club, Québec",
  },
  canonicalPath: "/custom-coffee-bags-country-clubs",
};

const CountryClubsPage = () => <IndustryPage data={data} frData={frData} />;
export default CountryClubsPage;
