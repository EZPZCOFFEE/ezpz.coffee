export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  categoryFr: string;
  title: string;
  titleFr: string;
  excerpt: string;
  excerptFr: string;
  date: string;
  dateFr: string;
  image: string;
  tags: string[];
  tagsFr: string[];
  href: string;
  published: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cafe-public-ezpz-custom-coffee-bags-case-study",
    client: "Café Public",
    category: "Custom Coffee Bags",
    categoryFr: "Sacs de café personnalisés",
    title: "How Café Public Launched Their Own Branded Coffee With EZPZ",
    titleFr: "Comment Café Public a lancé son propre café de marque avec EZPZ",
    excerpt:
      "One of Quebec's most exciting specialty coffee platforms chose EZPZ to create their signature blend. Here is how the Mélange Café Public came to life — roasted at Canadian Roasting Society in Montreal.",
    excerptFr:
      "L'une des plateformes de café de spécialité les plus excitantes du Québec a choisi EZPZ pour créer son mélange signature. Voici comment le Mélange Café Public a vu le jour, torréfié à Canadian Roasting Society à Montréal.",
    date: "June 10, 2026",
    dateFr: "10 juin 2026",
    image: "/assets/blog/cafe-public-case-study.webp",
    tags: ["White Label", "Montreal", "Specialty Coffee", "Quebec"],
    tagsFr: ["Marque blanche", "Montréal", "Café de spécialité", "Québec"],
    href: "/en/blog/cafe-public-ezpz-custom-coffee-bags-case-study",
    published: true,
  },
];
