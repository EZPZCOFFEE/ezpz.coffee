import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour microbrasseries | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Breweries | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les microbrasseries. L'extension de marque naturelle que vos clients de bière artisanale attendent. Aucun minimum, design inclus." : "Custom branded coffee bags for breweries. The natural brand extension your craft beer customers are ready for. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-breweries`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-breweries",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-breweries",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-breweries",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-breweries`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour microbrasseries" : "Custom Coffee Bags for Breweries" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Breweries",
  eyebrow: "Custom Coffee for Breweries",
  headline: "You nailed the craft beer. Now nail the morning after.",
  subheadline: "Craft beer lovers are often specialty coffee enthusiasts. The same values that built the brewery boom — quality, origin, craft, community — are driving the specialty coffee movement.",
  intro: "The craft beer and specialty coffee movements are siblings. Both emerged as a reaction to industrial commoditization. Both built loyal communities around quality, provenance, and the stories behind production. Both attract the same demographic: urban, educated, experience-seeking consumers who will pay more for something that was made with intention. Brewery regulars who love your brand for the beer are highly predisposed to love a specialty coffee that carries that same brand. It's not a stretch — it's a natural extension of the craft identity you've already built. Breweries that have introduced branded specialty coffee at the taproom report that it sells well from the first weekend, particularly among the Friday morning crowd, the merchandise buyers, and the beer club members who want to take more of the brand home. The positioning is also playful: your coffee for the morning after your beer. That joke is on the bag and it works. Tap room merch is a significant revenue stream for most craft breweries — hats, shirts, growlers. Branded coffee fits naturally into that merch ecosystem and gives you a consumable product that drives repeat purchase at a cadence much faster than apparel. No minimum means testing the concept at a single taproom event before committing to ongoing inventory.",
  whoOrders: [
    { title: "Craft breweries with taprooms", body: "Taproom breweries add branded coffee to their merch display and find that it sells steadily — particularly on weekend mornings when regulars are buying for the week ahead." },
    { title: "Brewery taproom and event venues", body: "Breweries that host events, markets, and community gatherings use branded coffee as an event gift bag item, a vendor market product, and a premium giveaway for launch parties." },
    { title: "Beer subscription and club programs", body: "Brewery beer club programs include branded specialty coffee as a seasonal add-on or surprise bonus item that delights subscribers and strengthens their identification with the brand." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your brewery logo and brand. Bold, graphic design aesthetics — the visual language of craft beer labels — translate perfectly to a specialty coffee bag." },
    { n: "02", title: "Choose your coffee", body: "Select an origin with character that fits your brewery's personality. Bold Ethiopian natural process with fruit-forward notes mirrors the complexity your beer drinkers already appreciate." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Test with a taproom batch — sell out in a weekend, then decide on your ongoing volume." },
    { n: "04", title: "Delivered to your brewery", body: "Shipped directly to your taproom or brewery address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Natural brand extension beyond beer", body: "Craft beer regulars are predisposed to love specialty coffee — the values are identical. Your brewery's coffee product is a brand extension that requires zero explanation to your existing audience." },
    { n: "02", title: "Taproom retail with no minimum risk", body: "Test with a small taproom display. Merch buyers who already own your hat and your t-shirt are the natural first buyers of your coffee. Zero minimum means zero inventory risk on the test." },
    { n: "03", title: "Beer club and subscription gifting", body: "Beer club subscribers who receive a branded coffee bag as a seasonal bonus feel like insiders. It strengthens their identification with the brand and their loyalty to the club subscription." },
    { n: "04", title: "Craft community crossover appeal", body: "The craft coffee community and the craft beer community overlap substantially. A specialty coffee product from a brewery creates genuine conversation and cross-community discovery — both audiences win." },
  ],
  testimonial: {
    quote: "Craft coffee, craft beer — our regulars don't see a difference in the philosophy. It sold out the first weekend we put it on the merch shelf.",
    author: "Brendan F.",
    role: "Taproom Owner, craft brewery, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-breweries",
};


const frData: IndustryPageData = {
  industry: "Microbrasseries",
  eyebrow: "Café personnalisé pour les microbrasseries",
  headline: "La microbrasserie et le café de spécialité. La même philosophie, la même communauté.",
  subheadline: "Les mouvements de la bière artisanale et du café de spécialité sont frères. Les deux ont émergé comme réaction à la commoditisation industrielle. Les deux ont construit des communautés fidèles autour de la qualité, de la provenance et des histoires de production.",
  intro: "Les mouvements de la bière artisanale et du café de spécialité sont frères. Les deux ont émergé comme réaction à la commoditisation industrielle. Les deux ont construit des communautés fidèles autour de la qualité, de la provenance et des histoires de production. Les deux attirent le même groupe démographique : urbain, éduqué, axé sur l'expérience et prêt à payer plus pour quelque chose d'authentique. Les habitués de votre brasserie qui lisent attentivement les notes de dégustation sur vos canettes et demandent d'où viennent vos houblons sont prédisposés à aimer le café de spécialité pour exactement les mêmes raisons. L'extension de marque ne nécessite aucune explication à votre public existant.",
  whoOrders: [
    { title: "Brasseries artisanales avec salles de dégustation", body: "Les brasseries avec taproom ajoutent le café de marque à leur présentoir de marchandisage et constatent qu'il se vend régulièrement, particulièrement les matins de week-end quand les habitués achètent pour la semaine à venir." },
    { title: "Brasseries avec salles d'événements et marchés", body: "Les brasseries qui accueillent des événements, des marchés et des rassemblements communautaires ont un public captif prêt à acheter des produits de marque dans le moment de l'expérience." },
    { title: "Brasseries de destination et expériences de tourisme brassicole", body: "Les brasseries de destination intègrent le café de marque dans leurs coffrets cadeaux et souvenirs premium, ciblant les touristes brassicoles qui veulent emporter quelque chose au-delà de la bière." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre brasserie", body: "Livré directement à votre brasserie. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Extension de marque naturelle au-delà de la bière", body: "Les habitués de bière artisanale sont prédisposés à aimer le café de spécialité : les valeurs sont identiques. Le café de votre brasserie est une extension de marque qui ne nécessite aucune explication à votre public existant." },
    { n: "02", title: "Commerce de détail en taproom sans risque de stock minimum", body: "Commencez avec une petite quantité et voyez si ça se vend. Les clients de brasseries artisanales achètent des produits de marque de leur brasserie préférée. Le café se vendra." },
    { n: "03", title: "Expérience de petit-déjeuner et de matin pour compléter la bière", body: "Le café est le produit du matin que la bière ne peut pas être. En offrant les deux, votre brasserie couvre tous les moments de consommation de votre public et augmente les revenus par client fidèle." },
    { n: "04", title: "Coffrets cadeaux et éditions spéciales saisonnières", body: "Combinez votre bière de saison et votre café de marque dans des coffrets cadeaux de Noël, d'automne ou d'anniversaire. Les fans de bière artisanale adorent les collections thématiques." },
  ],
  testimonial: {
    quote: "Café artisanal, bière artisanale. Nos habitués ne voient pas de différence dans la philosophie. Ça s'est vendu lors du premier week-end où on l'a mis sur l'étagère des marchandises.",
    author: "Brendan F.",
    role: "Brasseur, microbrasserie artisanale, Colombie-Britannique",
  },
  canonicalPath: "/custom-coffee-bags-breweries",
};

const BreweriesPage = () => <IndustryPage data={data} frData={frData} />;
export default BreweriesPage;
