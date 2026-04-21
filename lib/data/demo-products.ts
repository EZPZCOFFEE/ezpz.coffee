export interface DemoProduct {
  handle: string;
  badge: string;
  name: string;
  description: string;
  price: string;
  image: string;
  weight: string;
  details: string;
  shipping: string;
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    handle: "ethiopian-natural",
    badge: "Single Origin",
    name: "Ethiopian Natural — Yirgacheffe",
    description:
      "Bright and fruity with notes of blueberry, jasmine, and dark chocolate. Naturally processed at 1,900m. Perfect for filter or espresso.",
    price: "$22.00",
    image: "/assets/bag-product.webp",
    weight: "250g",
    details:
      "Origin: Ethiopia — Yirgacheffe. Process: Natural. Altitude: 1,900m. Roast: Light. Available in whole bean, coarse, medium, or fine grind.",
    shipping:
      "Most orders are produced and shipped within 2–3 weeks of design approval. We ship across Canada with tracking included.",
  },
  {
    handle: "colombia-washed",
    badge: "Single Origin",
    name: "Colombian Washed — Huila",
    description:
      "Clean and balanced with notes of red apple, caramel, and hazelnut. Washed process from the Huila region. A crowd-pleaser for any brew method.",
    price: "$20.00",
    image: "/assets/bag-product.webp",
    weight: "250g",
    details:
      "Origin: Colombia — Huila. Process: Washed. Altitude: 1,700m. Roast: Medium. Available in whole bean, coarse, medium, or fine grind.",
    shipping:
      "Most orders are produced and shipped within 2–3 weeks of design approval. We ship across Canada with tracking included.",
  },
  {
    handle: "house-blend",
    badge: "Blend",
    name: "EZPZ House Blend",
    description:
      "Our signature blend — smooth, chocolatey, and consistent. Designed to shine as espresso or in milk-based drinks. No minimum order required.",
    price: "$18.00",
    image: "/assets/bag-product.webp",
    weight: "250g",
    details:
      "A blend of Ethiopian and Colombian beans. Roast: Medium-Dark. Perfect for espresso and milk-based drinks. Available in whole bean or ground.",
    shipping:
      "Most orders are produced and shipped within 2–3 weeks of design approval. We ship across Canada with tracking included.",
  },
];

export const getDemoProduct = (handle: string): DemoProduct | undefined =>
  DEMO_PRODUCTS.find((p) => p.handle === handle);
