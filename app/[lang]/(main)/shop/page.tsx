import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";

import { baseUrl } from "@/lib/base-url";

import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Shop Custom Coffee Bags | EZPZ Coffee",
  description:
    "Browse and order custom branded coffee bags, ready-to-drink cans, and Nespresso-compatible capsules. No minimums. Roasted in Montreal, delivered across Canada.",
  openGraph: {
    title: "Shop Custom Coffee Bags | EZPZ Coffee",
    description:
      "Browse and order custom branded coffee bags, ready-to-drink cans, and Nespresso-compatible capsules. No minimums. Roasted in Montreal, delivered across Canada.",
    url: `${baseUrl}/en/shop`,
    siteName: "EZPZ Coffee",
    type: "website",
  },
};

const PRODUCTS_QUERY = `
  query ShopProducts($first: Int!) {
    products(first: $first, sortKey: TITLE) {
      nodes {
        handle
        title
        description
        productType
        availableForSale
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

interface ShopProduct {
  handle: string;
  title: string;
  description: string;
  productType: string;
  availableForSale: boolean;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
}

const formatPrice = (amount: string, currencyCode: string): string =>
  new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(parseFloat(amount));

const truncate = (text: string, max = 120): string => {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
};

async function fetchProducts(): Promise<ShopProduct[]> {
  const domain = process.env.NEXT_PUBLIC_STOREFRONT_ID;
  const token = process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN;
  if (!domain || !token) return [];

  const res = await fetch(`https://${domain}/api/2026-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query: PRODUCTS_QUERY, variables: { first: 50 } }),
    cache: "no-store",
  });

  if (!res.ok) return [];
  const json = (await res.json()) as {
    data?: { products: { nodes: ShopProduct[] } };
  };
  return json.data?.products.nodes ?? [];
}

const ShopPage = async () => {
  const locale = await getLocale();
  let products: ShopProduct[] = [];
  try {
    products = await fetchProducts();
  } catch {
    products = [];
  }

  return (
    <main className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Our Shop</span>
          <h1 className={styles.heroTitle}>
            Your brand. Your coffee.{" "}
            <span className={styles.heroAccent}>Ready to order.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Browse our products and start building your coffee brand today.
          </p>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Products ─────────────────────────────────────────── */}
      <section className={styles.productsSection}>
        <div className={styles.inner}>
          {products.length === 0 ? (
            <p className={styles.empty}>
              Products unavailable at the moment. Check back soon.
            </p>
          ) : (
            <div className={styles.grid}>
              {products.map((product) => (
                <Link
                  key={product.handle}
                  href={`/${locale}/product/${product.handle}`}
                  className={styles.cardLink}
                >
                  <article className={styles.card}>
                    <div className={styles.imageWrap}>
                      {product.featuredImage ? (
                        <Image
                          src={product.featuredImage.url}
                          alt={product.featuredImage.altText ?? product.title}
                          fill
                          className={styles.image}
                          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        />
                      ) : (
                        <div className={styles.imagePlaceholder}>
                          <span className={styles.placeholderText}>EZPZ</span>
                        </div>
                      )}
                    </div>
                    <div className={styles.cardBody}>
                      {product.productType && (
                        <span className={styles.badge}>{product.productType}</span>
                      )}
                      <h2 className={styles.productName}>{product.title}</h2>
                      {product.description && (
                        <p className={styles.description}>
                          {truncate(product.description)}
                        </p>
                      )}
                    </div>
                    <div className={styles.cardFooter}>
                      <span className={styles.price}>
                        {formatPrice(
                          product.priceRange.minVariantPrice.amount,
                          product.priceRange.minVariantPrice.currencyCode
                        )}
                      </span>
                      <span className={styles.btn}>Buy now</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
