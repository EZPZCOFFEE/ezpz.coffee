import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les bureaux corporatifs de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Corporate Offices | EZPZ Coffee";
  const description = isFr ? "Les entreprises de Québec élèvent leur culture de bureau et leurs cadeaux corporatifs avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Quebec City is the provincial capital. Government, insurance, and Quebec-based corporations demand bilingual, locally roasted gifts. Custom branded specialty coffee, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-corporate-offices-quebec-city`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-corporate-offices-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-corporate-offices-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les bureaux corporatifs de Québec" : "Custom Coffee Bags for Quebec City Corporate Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Quebec City Corporate Offices",
    subheadline:
      "The provincial capital. The insurance sector. Desjardins. A corporate gifting culture that expects French first and premium always.",
    ctaSubject: "Corporate coffee gifting Quebec City",
  },
  aeoAnswer:
    "Quebec City corporate offices can order French-language custom branded specialty coffee bags from EZPZ. No minimum order, starting at 100 bags at $11.75/bag, roasted in Montreal, delivered to Quebec City in 2–3 business days.",
  why: {
    heading: "Quebec City's Corporate Culture and the Gift That Speaks French",
    paragraphs: [
      "Quebec City is the capital of Quebec province, which means its corporate ecosystem is anchored by the provincial government and the thousands of contractors, consulting firms, and regulated industries that orbit it. The Assemblée nationale, provincial ministries, the insurance sector (Beneva — formed by the merger of SSQ and La Capitale — and iA Financial Group are headquartered here), and Videotron/Quebecor together create a corporate community with distinct Quebec identity and strong French-language preferences.",
      "Corporate gifting in Quebec City has a different character than in Toronto or Vancouver. The French-language dimension is not an afterthought — it is the primary filter. A gift that arrives with English-only packaging, regardless of quality, registers as culturally inattentive in a city that is 95% French-speaking and proud of it. A French-language specialty coffee bag, roasted in Montreal, with copy that reflects Quebec's culinary and cultural values, is a gift that passes that filter with distinction.",
      "EZPZ roasts in Montreal — even closer to Quebec City than to any other market we serve. That means 'roasted au Québec' is a defensible and genuine claim, not a marketing stretch. For Quebec City clients who prioritize local provenance in their purchasing decisions, that matters.",
    ],
  },
  useCases: {
    heading: "How Quebec City Companies Use Branded Coffee",
    items: [
      {
        title: "Provincial government contractor gifts",
        body: "Quebec City's government contracting ecosystem maintains dozens of supplier relationships with provincial ministries and Crown bodies. A bilingual or French-only custom coffee bag — roasted in Quebec, premium packaging, your firm's identity — is a gift that fits the cultural expectations of Quebec City's public sector clients.",
      },
      {
        title: "Insurance sector executive gifting",
        body: "iA Financial Group, Beneva, and Desjardins employ thousands of professionals in Quebec City's insurance and financial services sector. Executive-level gifts for this audience need to reflect Quebec values: French-first, premium, locally sourced where possible.",
      },
      {
        title: "Holiday gifts for francophone teams",
        body: "French-only custom coffee bags for Quebec City teams — with your organization's branding and a Quebec origin story — are the holiday gift that lands without friction. No language question. No cultural misstep. Just a quality coffee experience.",
      },
      {
        title: "Videotron and media sector relationships",
        body: "Quebec City's media and telecom sector — Videotron, TVA, Quebecor Digital — entertains and gifts within a French-language creative culture. A custom-branded specialty coffee bag with a design that reflects your firm's brand is a premium relationship gift that travels from the executive boardroom to the kitchen counter.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — delivery to Quebec City is 2–3 business days. French-only and bilingual (French/English) packaging both available. Starting at 100 bags at $11.75/bag.",
  faq: [
    {
      q: "Can you produce French-only packaging for Quebec City clients?",
      a: "Yes. French-only is the default for Quebec City corporate clients. EZPZ can produce French-only packaging fully compliant with Loi 101 commercial requirements.",
    },
    {
      q: "Is the coffee actually roasted in Quebec?",
      a: "Yes. EZPZ roasts at the Canadian Roasting Society facility in Montreal, Quebec. 'Roasted au Québec' is an accurate claim you can include on the bag.",
    },
    {
      q: "What's the lead time for Quebec City orders?",
      a: "2–3 business days from Montreal — among the fastest delivery windows in Canada. Roasted to order, shipped fresh.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Quebec City corporate programs often scale to 500+ bags per quarter for larger client lists.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Cafés · Quebec City", href: "/en/custom-coffee-cafes-quebec-city" },
  ],
  ctaClose:
    "Quebec City's corporate culture is French first and quality always. Your coffee gift should be both.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-corporate-offices-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Bureaux corporatifs",
    parentHref: "/fr/custom-coffee-bags-offices",
    parentLabel: "Bureaux corporatifs",
  },
  hero: {
    h1: "Café personnalisé pour les bureaux et entreprises de Québec",
    subheadline: "Les bureaux et entreprises de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les bureaux et entreprises de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les bureaux et entreprises de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les bureaux de Québec",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Les bureaux de Saint-Roch, Sainte-Foy et le centre-ville accueillent des clients, des candidats et des partenaires qui perçoivent l'environnement de travail comme un signal de la culture d'entreprise. Le café servi en réunion et dans la cuisine parle de cette culture.",
      "Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur chaque sachet, dit à quiconque entre dans vos bureaux que vous faites attention aux détails. Et quand vos employés emportent ce café chez eux ou l'offrent à leurs contacts, votre marque voyage avec eux.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour vos clients VIP individuellement, pour un programme d'office complet ou pour une campagne de cadeaux corporatifs à grande échelle.",
    ],
  },
  useCases: {
    heading: "Comment les entreprises de Québec utilisent le café de marque",
    items: [
    { title: "Café d'office pour l'expérience employé", body: "Remplacez les capsules génériques par votre propre café de spécialité de marque dans la cuisine. C'est un signal de culture qui dit que votre entreprise investit dans l'expérience quotidienne de ses employés." },
    { title: "Cadeau corporatif pour les clients et partenaires", body: "Offrez votre café de marque aux clients clés, aux nouveaux partenaires et aux prospects importants. C'est un cadeau qui s'utilise quotidiennement et maintient votre nom dans leur environnement de travail et de maison." },
    { title: "Expérience de réunion et de présentation", body: "Servez votre café de spécialité dans les réunions importantes, les présentations clients et les sessions de conseil. Le café de maison dit à vos clients que vous faites attention à leur expérience dans votre espace." },
    { title: "Programmes d'onboarding et de reconnaissance", body: "Incluez un sachet de café de marque dans les trousses d'accueil des nouveaux employés et dans les cadeaux de reconnaissance annuelle. C'est un geste mémorable qui renforce le sentiment d'appartenance à votre organisation." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les entreprises de Québec peuvent-elles envoyer le café directement à l'adresse de leurs clients ?", a: "Oui. EZPZ peut expédier directement à chaque adresse client au Canada ou aux États-Unis. C'est particulièrement utile pour les programmes de cadeaux corporatifs qui nécessitent une distribution à plusieurs destinataires sans passer par votre bureau." },
    { q: "Quelle est la tarification pour les commandes corporatives de Québec ?", a: "EZPZ commence à 11,75 $/sachet pour 100 sacs et diminue selon le volume. Pour les commandes de 5 000 sacs et plus, le prix est de 0,85 $/sachet. Des tarifs personnalisés sont disponibles pour les programmes corporatifs récurrents. Aucun minimum par commande." },
  ],
  siblings: [
    { label: "Bureaux corporatifs · Montréal", href: "/fr/custom-coffee-corporate-offices-montreal" },
    { label: "Bureaux corporatifs · Toronto", href: "/fr/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
  ],
  ctaClose: "Votre marque mérite d'être dans la cuisine de vos clients de Québec, chaque matin.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
