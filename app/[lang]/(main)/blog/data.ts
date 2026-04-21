export interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  color: string;
  initials: string;
  published: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-launch-coffee-brand-canada-2026",
    category: "Brand Building",
    categoryColor: "#e8521a",
    title: "How to Launch Your Own Coffee Brand in Canada in 2026",
    excerpt:
      "A step-by-step guide to creating a white label coffee product with no minimum order — from choosing your beans to designing your bag.",
    date: "April 10, 2026",
    readTime: "6 min read",
    color: "#1a3a5c",
    initials: "BB",
    published: true,
  },
  {
    slug: "what-makes-specialty-coffee-traceable",
    category: "Coffee Education",
    categoryColor: "#2d4a2d",
    title: "What Makes Specialty Coffee Traceable?",
    excerpt:
      "Learn what farm-to-bag traceability means and why it matters for your brand and your customers.",
    date: "March 18, 2026",
    readTime: "5 min read",
    color: "#3d2a1a",
    initials: "CE",
    published: true,
  },
  {
    slug: "custom-coffee-bags-vs-pre-packaged-coffee",
    category: "Business Tips",
    categoryColor: "#2a1a3d",
    title: "Custom Coffee Bags vs. Pre-Packaged Coffee: What's Right for Your Business?",
    excerpt:
      "We break down the pros and cons to help you make the best decision for your brand.",
    date: "February 25, 2026",
    readTime: "5 min read",
    color: "#4a1a2d",
    initials: "BT",
    published: true,
  },
];
