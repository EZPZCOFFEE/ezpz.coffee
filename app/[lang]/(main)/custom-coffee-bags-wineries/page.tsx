import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour vignobles | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Wineries | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les vignobles. Le produit de boutique que vos visiteurs emportent vraiment chez eux. Aucun minimum, design inclus." : "Custom branded coffee bags for wineries. The cellar door retail product your visitors actually take home. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-wineries`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-wineries",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-wineries",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-wineries",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-wineries`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour vignobles" : "Custom Coffee Bags for Wineries" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Wineries",
  eyebrow: "Custom Coffee for Wineries",
  headline: "Your winery's terroir story. Now in coffee form.",
  subheadline: "Wine and specialty coffee share the same vocabulary: terroir, origin, tasting notes, vintage, craft. Winery visitors who love the wine story love the coffee story for the same reasons.",
  intro: "The parallels between wine and specialty coffee are deep and underexplored. Both are agricultural products where terroir — the specific combination of soil, climate, altitude, and microorganism — determines flavor. Both have communities built around provenance, processing methods, and flavor development. Both reward the drinker who asks where it came from and how it was made. Winery visitors already understand and appreciate this language. When they discover a branded coffee at the cellar door shop — traceable to a specific farm, with flavor notes that tell a story parallel to the wine they just tasted — they don't just buy it. They engage with it. Okanagan, Niagara, and Prince Edward County wineries that have introduced branded specialty coffee report that it adds a morning dimension to a brand that has previously only lived in the evening. The wine you sell for dinner; the coffee you sell for morning. It's the brand touchpoint that extends your reach into the part of the day you've never owned. Wine club members are the most natural buyers — they already trust the brand's curation and want to take more of it home. No minimum means testing the concept at the cellar door before committing to a wine club bundle.",
  whoOrders: [
    { title: "Okanagan and BC wineries", body: "BC wine country wineries use branded coffee to extend their visitor experience into a morning ritual product. The terroir storytelling that sells wine sells specialty coffee equally well." },
    { title: "Niagara and Ontario wineries", body: "Ontario wineries include branded coffee in their cellar door retail assortment and in wine club quarterly shipments as a premium add-on that surprises and delights wine club members." },
    { title: "Boutique estate wineries", body: "Small estate producers with strong brand identities use EZPZ to create a coffee product that matches the artisan, provenance-driven positioning of their wine portfolio." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your winery logo and estate branding. Wine brands tend toward elegant, label-inspired design — our tool creates bags that look like they belong alongside your bottles." },
    { n: "02", title: "Choose your coffee", body: "We'll help you select a single-origin coffee with a terroir story that parallels your wine's. Ethiopian origins with their complex flavor profiles are often a natural match for wine-literate audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. Test with a small cellar door batch before adding it to your wine club program." },
    { n: "04", title: "Delivered to your winery", body: "Shipped directly to your estate or winery address. Canada: 3–10 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Natural terroir storytelling parallel", body: "Specialty coffee speaks the same language as wine. Origin, processing, flavor notes — your visitors already understand and appreciate this vocabulary. The coffee story sells itself in a wine environment." },
    { n: "02", title: "Cellar door retail with no minimum risk", body: "Test a small retail display at the cellar door before committing to larger quantities. Winery visitors are proven premium purchasers — sell-through for branded specialty coffee in this environment is consistently strong." },
    { n: "03", title: "Wine club member gifting and retention", body: "A branded coffee bag included in a wine club quarterly shipment delights members with something unexpected. It demonstrates that the winery's curation extends beyond wine — which strengthens club loyalty." },
    { n: "04", title: "Morning brand presence in an evening-dominant category", body: "Wine is an evening product. Coffee gives your winery brand a morning touchpoint — extending your reach into the part of the day that wine has never owned. Every morning your visitor brews it, the estate is there." },
  ],
  testimonial: {
    quote: "It surprised people at the cellar door — suddenly we had a morning product, not just a wine. It added a dimension to the brand that visitors loved, and sales are strong.",
    author: "Laurent M.",
    role: "Winery Owner, Okanagan Valley",
  },
  canonicalPath: "/custom-coffee-bags-wineries",
};


const frData: IndustryPageData = {
  industry: "Vignobles",
  eyebrow: "Café personnalisé pour les vignobles",
  headline: "Les parallèles entre le vin et le café de spécialité. Votre vignoble a quelque chose à dire sur les deux.",
  subheadline: "Les parallèles entre le vin et le café de spécialité sont profonds et sous-exploités. Les deux sont des produits agricoles où le terroir détermine le goût. Les deux ont des communautés construites autour de la provenance et du savoir-faire artisanal.",
  intro: "Les parallèles entre le vin et le café de spécialité sont profonds et sous-exploités. Les deux sont des produits agricoles où le terroir, la combinaison spécifique de sol, de climat, d'altitude et de microorganismes, détermine le goût. Les deux ont des communautés construites autour de la provenance, du processus et du savoir-faire artisanal. La personne qui visite votre cave et écoute attentivement les notes de dégustation et les histoires de millésime comprend parfaitement l'histoire de l'origine d'un café éthiopien de haute altitude. Elle est précisément votre acheteur de café de spécialité personnalisé. La boutique de votre cave peut vendre votre propre café de marque comme produit de petit-déjeuner premium : la paire naturelle du vin.",
  whoOrders: [
    { title: "Vignobles de l'Okanagan et de la Colombie-Britannique", body: "Les vignobles du pays viticole de la CB utilisent le café de marque pour prolonger l'expérience du visiteur dans un produit de rituel matinal. La narration du terroir qui vend le vin vend également très bien le café de spécialité." },
    { title: "Vignobles du Niagara et de l'Ontario", body: "Les vignobles de l'Ontario incluent le café de marque dans leurs coffrets cadeaux et leur boutique de cave comme complément premium au vin, particulièrement pour les visiteurs qui cherchent quelque chose de différent pour offrir." },
    { title: "Vignobles de destination et resorts viticoles", body: "Les resorts viticoles de destination incluent le café de marque dans les expériences d'hébergement, les coffrets de service en chambre et les souvenirs de boutique premium." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre cave ou boutique", body: "Livré directement à votre cave ou boutique de vignoble. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "Parallèle naturel de narration du terroir", body: "Le café de spécialité parle le même langage que le vin : l'origine, le processus, les notes de dégustation. Vos visiteurs comprennent et apprécient déjà ce vocabulaire. L'histoire du café se vend d'elle-même dans un environnement viticole." },
    { n: "02", title: "Commerce de détail en cave sans risque de stock minimum", body: "Ajoutez le café de marque à votre boutique sans commander de gros volumes. Commencez avec 24 ou 48 sacs et voyez comment vos visiteurs réagissent. Aucun minimum signifie aucun risque d'invendu." },
    { n: "03", title: "Produit de week-end et de matin pour compléter le vin", body: "Le café est le produit du matin que le vin ne peut pas être. En offrant les deux, votre boutique couvre deux moments de consommation quotidiens et augmente la valeur par visiteur." },
    { n: "04", title: "Coffrets cadeaux de haute valeur", body: "Combinez votre vin et votre café de marque dans des coffrets cadeaux de haute valeur pour les événements des Fêtes, la Saint-Valentin et les anniversaires de clients." },
  ],
  testimonial: {
    quote: "Ça a surpris les gens à la cave. Soudainement on avait un produit du matin, pas seulement un vin. Ça a ajouté une dimension à la marque que les visiteurs ont adorée, et les ventes sont fortes.",
    author: "Pierre L.",
    role: "Directeur, vignoble, Okanagan",
  },
  canonicalPath: "/custom-coffee-bags-wineries",
};

const WineriesPage = () => <IndustryPage data={data} frData={frData} />;
export default WineriesPage;
