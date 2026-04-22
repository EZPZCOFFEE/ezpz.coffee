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
  image: string;
  published: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mothers-day-coffee-gift-ideas-canada",
    category: "Gift Ideas",
    categoryColor: "#c43e14",
    title: "Why a Custom Coffee Bag Is the Best Mother's Day Gift You Can Give",
    excerpt:
      "Skip the flowers that wilt and the chocolates that disappear. Give her something she will use every morning and smile every time she does.",
    date: "April 2026",
    readTime: "5 min read",
    color: "#2a0d0a",
    initials: "GI",
    image: "/assets/blog/mothers-day-coffee.svg",
    published: true,
  },
  {
    slug: "custom-coffee-bags-corporate-gifts-canada",
    category: "Business Tips",
    categoryColor: "#e8521a",
    title: "Custom Coffee Bags: The Best Corporate Gift for Canadian Businesses in 2026",
    excerpt:
      "Forget generic gifts. Here's why custom branded coffee bags are what your clients will actually remember — and exactly how to do it right.",
    date: "April 2026",
    readTime: "6 min read",
    color: "#1a2a1a",
    initials: "CG",
    image: "/assets/blog/corporate-gifts.svg",
    published: true,
  },
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
    image: "/assets/blog/brand-building.svg",
    published: false,
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
    image: "/assets/blog/coffee-traceable.svg",
    published: false,
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
    image: "/assets/blog/custom-vs-prepackaged.svg",
    published: false,
  },
];
