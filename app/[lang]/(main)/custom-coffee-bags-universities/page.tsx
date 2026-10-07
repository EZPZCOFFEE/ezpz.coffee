import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour universités | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Universities | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les universités. L'engagement des diplômés qui dure au-delà de l'événement. Aucun minimum, design inclus." : "Custom branded coffee bags for universities. Alumni engagement that lasts beyond the event. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-universities`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-universities",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-universities",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-universities`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour universités" : "Custom Coffee Bags for Universities" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Universities",
  eyebrow: "Custom Coffee for Universities",
  headline: "Your university's brand. In every alumnus's morning ritual.",
  subheadline: "Universities have among the most loyal brand communities in the world. Branded specialty coffee turns that loyalty into a daily morning ritual that keeps alumni connected to the institution.",
  intro: "University alumni are among the most brand-loyal communities that exist. They wear the gear, they attend the events, they give when asked — but only when they feel connected. That connection fades with time and distance. A custom branded specialty coffee bag from the university alumni association is the kind of gift that re-establishes that connection in a small but significant way. Every morning the alumnus brews the university's coffee, they think of their time there, the friendships they made, the professors they remember. That is not nostalgia — that is a re-engagement that translates into donation rates, event attendance, and referrals to the admissions office. Universities also have immediate retail applications: the campus café branded with the university's specialty blend, the student union selling branded coffee as a fundraiser, the graduate school welcome kit with a bag of the institution's coffee. Convocation gifting is particularly powerful — a branded coffee bag given at graduation is a daily companion into the next chapter of the graduate's life, associating the institution with their most hopeful mornings. No minimum means running small targeted programs — the MBA cohort welcome, the donor appreciation gift — without institutional purchasing complexity.",
  whoOrders: [
    { title: "Alumni associations", body: "Alumni offices use branded coffee as a donor appreciation gift, a reunion gift, and a direct mail campaign piece that generates responses from lapsed alumni at rates traditional mail never achieves." },
    { title: "Campus cafés and student unions", body: "Campus food service operations add the university's branded specialty coffee to their retail offering. Students buy it as merchandise and gift it to family — generating both revenue and brand reach off-campus." },
    { title: "Graduate schools and academic departments", body: "MBA programs, law schools, and academic departments use branded coffee as a cohort welcome gift, a faculty appreciation gift, and a premium item for donor cultivation events." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your university crest, department logo, or alumni association branding. Academic institutions have rich visual identities — our tool brings them to life on a premium coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that represent the quality of your institution. Single-origin traceable coffees with interesting academic stories — provenance, growing conditions, flavor development — resonate with educated audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Run targeted programs for specific cohorts or departments without bulk purchasing commitments." },
    { n: "04", title: "Delivered to your campus or mailed to alumni", body: "Ship to campus for in-person distribution, or ship individual bags to alumni addresses for direct mail programs. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Alumni engagement that lasts beyond the event", body: "A branded coffee bag given at a reunion or donor event continues to engage the alumnus every morning for weeks. It's a relationship touchpoint that extends the impact of every alumni engagement initiative." },
    { n: "02", title: "Fundraising and donor cultivation tool", body: "Donor cultivation programs that include a premium branded gift see measurably higher response rates. A specialty coffee bag signals that the institution values the relationship before asking for anything." },
    { n: "03", title: "Convocation and graduation gifting", body: "A branded coffee bag given at graduation is a daily companion into the graduate's next chapter. Every morning they brew it during their first job, their first apartment — the institution is there with them." },
    { n: "04", title: "Campus retail and fundraising revenue", body: "University branded coffee sold at campus cafés and student union stores generates direct revenue with strong margins. It's a premium merchandise item that doesn't require a clothing or accessories infrastructure." },
  ],
  testimonial: {
    quote: "Alumni donation rates from cohorts who received the coffee gift were measurably higher at our last giving campaign. It's a small investment with a real return.",
    author: "Patricia N.",
    role: "Director of Alumni Relations, university, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-universities",
};


const frData: IndustryPageData = {
  industry: "Universités",
  eyebrow: "Café personnalisé pour les universités",
  headline: "L'engagement des diplômés. Chaque matin, sur leur comptoir de cuisine.",
  subheadline: "Les diplômés universitaires sont parmi les communautés les plus fidèles à leur marque qui existent. Ils portent les vêtements, ils assistent aux événements, ils donnent quand on le leur demande, mais seulement quand ils se sentent connectés.",
  intro: "Les diplômés universitaires sont parmi les communautés les plus fidèles à leur marque qui existent. Ils portent les vêtements, ils assistent aux événements, ils donnent quand on le leur demande, mais seulement quand ils se sentent connectés. Cette connexion s'estompe avec le temps et la distance. Un sachet de café de spécialité personnalisé avec la marque de l'université est le rappel quotidien qui maintient cette connexion active entre les événements. Le diplômé qui prépare chaque matin le café de son université ne pense pas activement à son alma mater, mais votre nom est là sur son comptoir, dans sa cuisine, faisant partie de son rituel quotidien. Quand la campagne de dons arrive, votre marque n'est pas une abstraction lointaine. Elle est sur son comptoir.",
  whoOrders: [
    { title: "Associations d'anciens élèves", body: "Les bureaux des anciens utilisent le café de marque comme cadeau de reconnaissance pour les donateurs, cadeau de réunion et pièce de campagne courrier direct qui génère des réponses des diplômés inactifs à des taux que le courrier traditionnel n'atteint jamais." },
    { title: "Cafés du campus et syndicats étudiants", body: "Les opérations de restauration du campus ajoutent le café de marque comme article de vente au détail premium dans les cafétérias et les espaces étudiants, créant une ligne de revenus supplémentaire et renforçant l'identité de marque du campus." },
    { title: "Équipes sportives et clubs universitaires", body: "Les programmes sportifs universitaires utilisent le café de marque comme article de marchandisage pour les équipes, les fans et les commanditaires d'athlètes, créant un nouveau point de contact de marque dans la communauté sportive." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré au bureau de l'université ou directement aux diplômés", body: "Livré au bureau de l'université pour distribution ou directement aux diplômés par courrier. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "Engagement des diplômés qui dure au-delà de l'événement", body: "Un sachet de café donné lors d'une réunion ou d'un événement pour donateurs continue d'engager le diplômé chaque matin pendant des semaines. C'est un point de contact de relation qui prolonge l'impact de chaque initiative d'engagement." },
    { n: "02", title: "Culture du don et cultivation des donateurs", body: "Les diplômés qui reçoivent des cadeaux de qualité associent l'université à une gestion attentive et réfléchie. Cette association est directement liée à des taux de dons plus élevés lors des campagnes suivantes." },
    { n: "03", title: "Marchandisage du campus à forte marge", body: "Un sachet de café de marque vendu dans les boutiques du campus génère une marge bien supérieure à la plupart des articles vestimentaires. Il plaît aux diplômés, aux parents, aux visiteurs et aux membres actuels de la communauté." },
    { n: "04", title: "Aucun minimum : adapté à la taille de chaque programme", body: "Que vous gériez un programme pour 50 diplômés VIP ou 50 000 pour une campagne nationale, EZPZ s'adapte sans minimum de commande." },
  ],
  testimonial: {
    quote: "Les taux de dons des cohortes qui ont reçu le café en cadeau ont été mesurément plus élevés lors de notre dernière campagne. C'est un petit investissement avec un vrai retour.",
    author: "Louise B.",
    role: "Directrice des relations avec les anciens, université québécoise",
  },
  canonicalPath: "/custom-coffee-bags-universities",
};

const UniversitiesPage = () => <IndustryPage data={data} frData={frData} />;
export default UniversitiesPage;
