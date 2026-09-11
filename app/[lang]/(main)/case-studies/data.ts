export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  href: string;
  published: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cafe-public-ezpz-custom-coffee-bags-case-study",
    client: "Café Public",
    category: "Custom Coffee Bags",
    title: "How Café Public Launched Their Own Branded Coffee With EZPZ",
    excerpt:
      "One of Quebec's most exciting specialty coffee platforms chose EZPZ to create their signature blend. Here is how the Mélange Café Public came to life — roasted at Canadian Roasting Society in Montreal.",
    date: "June 10, 2026",
    image: "/assets/blog/cafe-public-case-study.webp",
    tags: ["White Label", "Montreal", "Specialty Coffee", "Quebec"],
    href: "/en/blog/cafe-public-ezpz-custom-coffee-bags-case-study",
    published: true,
  },
];
