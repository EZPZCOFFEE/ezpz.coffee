import type { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import type { Metadata } from "next";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { getDemoProduct } from "@/lib/data/demo-products";
import { GET_PRODUCT } from "@utils/queries/get-product";

import { ProductPageClient } from "./ProductPageClient";
import { DemoProductView } from "./DemoProductView";

const BASE = "https://www.ezpz.coffee";

const MERCHANT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "CA",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
};

const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: { "@type": "MonetaryAmount", value: "5.00", currency: "CAD" },
  shippingDestination: { "@type": "DefinedRegion", addressCountry: "CA" },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 3, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 2, maxValue: 7, unitCode: "DAY" },
  },
};

interface ProductPageProps {
  params: Promise<{
    handle: string;
    lang: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle, lang } = await params;
  return {
    alternates: { canonical: `/${lang}/product/${handle}` },
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { handle, lang } = await params;
  const pageUrl = `${BASE}/${lang}/product/${handle}`;

  let product: GetProductQuery["product"] | null = null;

  try {
    const data = await shopifyQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, { handle });
    product = data.product ?? null;
  } catch {
    // Shopify unavailable — fall through to demo
  }

  if (product) {
    const minPrice = product.priceRange.minVariantPrice;
    const maxPrice = product.priceRange.maxVariantPrice;
    const samePrice = minPrice.amount === maxPrice.amount;
    const imageUrl = product.featuredImage?.url ?? `${BASE}/assets/banner-01.jpg`;

    const offersBlock = samePrice
      ? {
          "@type": "Offer",
          url: pageUrl,
          priceCurrency: minPrice.currencyCode,
          price: minPrice.amount,
          availability: product.availableForSale
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@type": "Organization", name: "EZPZ Coffee" },
          hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
          shippingDetails: SHIPPING_DETAILS,
        }
      : {
          "@type": "AggregateOffer",
          url: pageUrl,
          priceCurrency: minPrice.currencyCode,
          lowPrice: minPrice.amount,
          highPrice: maxPrice.amount,
          availability: product.availableForSale
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@type": "Organization", name: "EZPZ Coffee" },
          hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
          shippingDetails: SHIPPING_DETAILS,
        };

    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.title,
      description: product.description,
      image: [imageUrl],
      sku: handle,
      brand: { "@type": "Brand", name: "EZPZ Coffee" },
      offers: offersBlock,
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <ProductPageClient product={product} />
      </>
    );
  }

  const demoProduct = getDemoProduct(handle);
  if (demoProduct) {
    const demoPrice = demoProduct.price.replace(/[$,]/g, "");
    const demoSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: demoProduct.name,
      description: demoProduct.description,
      image: [`${BASE}${demoProduct.image}`],
      sku: handle,
      brand: { "@type": "Brand", name: "EZPZ Coffee" },
      offers: {
        "@type": "Offer",
        url: pageUrl,
        priceCurrency: "CAD",
        price: demoPrice,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "EZPZ Coffee" },
        hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
        shippingDetails: SHIPPING_DETAILS,
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(demoSchema) }}
        />
        <DemoProductView product={demoProduct} />
      </>
    );
  }

  return <></>;
};

export default ProductPage;
