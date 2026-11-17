import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour bureaux | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Offices | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les bureaux. Améliorez votre culture café de bureau et votre marque. Aucun minimum, design inclus." : "Custom branded coffee bags for offices. Upgrade your office coffee and brand culture. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-offices`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-offices",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-offices",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-offices",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-offices`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour bureaux" : "Custom Coffee Bags for Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Offices",
  eyebrow: "Custom Coffee for Offices",
  headline: "Your office coffee. Your brand. Your culture.",
  subheadline: "Offices are moving away from generic pods toward branded specialty coffee that reflects their values and impresses the clients who walk through the door.",
  intro: "The office coffee machine is a cultural artifact. It is where teams gather, where conversations happen, and where the tone of the workplace is subtly set every morning. Generic Nespresso pods and bulk grocery-store coffee say something about your company — and it is not the message you want to send to talented employees or visiting clients. Branded specialty coffee from EZPZ says something different: that you care about quality, that you think about details, and that you invest in experiences beyond the transactional minimum. The trend is clear: companies that want to attract and retain top talent are upgrading every touchpoint of the office experience. Specialty coffee is one of the most visible and lowest-cost ways to do that. Beyond the daily ritual, branded coffee bags in the office kitchen are a conversation starter for clients. A visitor who notices that your company has its own branded specialty coffee blend asks about it. That is a brand story moment with zero effort. No minimum means testing with a small order to see how the team responds before committing to a recurring supply.",
  whoOrders: [
    { title: "Tech startups and scale-ups", body: "Tech companies use branded office coffee as a talent retention and culture signal. In a competitive hiring market, every touchpoint of the employee experience matters — including what's in the kitchen." },
    { title: "Creative agencies and studios", body: "Creative agencies use branded coffee as an extension of their brand identity. A design studio with its own specialty coffee blend is consistent with its positioning as a premium, detail-oriented partner." },
    { title: "Professional services firms", body: "Law firms, accounting firms, and consulting companies use branded office coffee to impress clients who visit the office. It signals quality and sets the tone for the relationship before a word is spoken." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your company logo and colors. We'll create a bag that looks like it was made by your brand team — clean, professional, on-brand." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that match your office culture. Bold Colombian for a high-energy startup. Elegant Ethiopian for a premium professional services firm." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Set up a recurring order schedule and we'll have fresh bags ready whenever you need them." },
    { n: "04", title: "Delivered to your office", body: "Shipped directly to your office address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Employee morale and retention signal", body: "Branded specialty coffee in the office kitchen tells employees that the company invests in their experience. It is a small investment with a disproportionate impact on how people feel about their workplace." },
    { n: "02", title: "Client impression on every visit", body: "A client who visits your office and notices your branded specialty coffee blend remembers it. It is a brand story moment that costs less than the coffee service you were already providing." },
    { n: "03", title: "Culture signal for recruits and partners", body: "Every detail of the office communicates culture. Branded specialty coffee signals that your company is thoughtful, detail-oriented, and invested in quality — values that attract great people and great partners." },
    { n: "04", title: "No minimum to test the concept", body: "Order a single bag to see how the team reacts. Order 50 to supply the office for a month. Order 200 to include in a client gift campaign. Zero minimum means zero risk." },
  ],
  testimonial: {
    quote: "It replaced the Nespresso pods and team morale went up. That's not a joke. Three people have mentioned it in their Glassdoor reviews.",
    author: "Sarah W.",
    role: "Office Manager, tech startup, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-offices",
};


const frData: IndustryPageData = {
  industry: "Bureaux",
  eyebrow: "Café personnalisé pour les bureaux",
  headline: "Votre bureau. Un café qui dit quelque chose sur votre culture d'entreprise.",
  subheadline: "La machine à café du bureau est un artefact culturel. C'est là que les équipes se rassemblent, où les conversations se font et où le ton du lieu de travail est subtilement donné chaque matin. Le café générique dit quelque chose sur votre entreprise, et ce n'est pas le message que vous voulez envoyer.",
  intro: "La machine à café du bureau est un artefact culturel. C'est là que les équipes se rassemblent, où les conversations se font et où le ton du lieu de travail est subtilement donné chaque matin. Des capsules génériques et du café de supermarché en vrac disent quelque chose sur votre entreprise, et ce n'est pas le message que vous voulez envoyer. Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur le sachet, dit que vous vous souciez de la qualité et de l'expérience de vos employés. Les équipes de direction qui visitent vos bureaux remarquent ce que vous servez. Les candidats en entretien remarquent ce que vous servez. Les clients qui viennent pour des réunions remarquent ce que vous servez. Chaque point de contact dans l'environnement de bureau contribue à la perception que les gens ont de votre organisation.",
  whoOrders: [
    { title: "Startups technologiques et entreprises en croissance", body: "Les entreprises technologiques utilisent le café de bureau de marque comme signal de rétention de talents et de culture. Dans un marché d'embauche compétitif, chaque point de contact de l'expérience employé compte." },
    { title: "Agences créatives et studios", body: "Les agences créatives utilisent le café de marque comme extension de leur identité de marque. Si votre agence est différente, votre café devrait l'être aussi." },
    { title: "Cabinets professionnels et sièges sociaux", body: "Les firmes juridiques, financières et comptables utilisent le café de marque comme signal subtil de qualité pour les clients qui visitent leurs bureaux." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre bureau", body: "Livré directement à l'adresse de votre bureau. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Signal de moral et de rétention des employés", body: "Le café de spécialité personnalisé dans la cuisine dit aux employés que l'entreprise investit dans leur expérience. C'est un investissement modeste à impact disproportionné sur la façon dont les gens se sentent au travail." },
    { n: "02", title: "Impression client à chaque visite", body: "Un client qui visite votre bureau et remarque un café de spécialité personnalisé comprend immédiatement que vous faites attention aux détails. C'est le même signal que les bureaux bien conçus et l'art soigneusement choisi." },
    { n: "03", title: "Cadeau d'entreprise à partir de votre propre marque", body: "Utilisez votre café de bureau comme cadeau d'entreprise pour les clients, les partenaires et les nouvelles recrues. C'est cohérent, premium et mémorable." },
    { n: "04", title: "Expérience de réunion différenciante", body: "Servir votre propre café de spécialité dans les réunions de conseil d'administration, les présentations clients et les séances de brainstorming transforme un besoin fonctionnel en point de contact de marque." },
  ],
  testimonial: {
    quote: "Ça a remplacé les capsules et le moral de l'équipe a augmenté. Ce n'est pas une blague. Trois personnes en ont parlé dans leurs avis Glassdoor.",
    author: "Sarah W.",
    role: "Responsable des opérations, agence, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-offices",
};

const OfficesPage = () => <IndustryPage data={data} frData={frData} />;
export default OfficesPage;
