"use client";

import {
  AddToCartButton,
  Image as ShopifyImage,
  ProductPrice,
  flattenConnection,
  useProduct,
} from "@shopify/hydrogen-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import styles from "./styles.module.scss";

const ACCORDION_ITEMS = [
  { key: "description" as const, label: "Description" },
  { key: "details" as const, label: "Product details" },
  { key: "shipping" as const, label: "Shipping & production" },
];

const STATIC_ACCORDION: Record<string, string> = {
  details:
    "Our coffee bags are 250g, resealable, and fully customizable with your brand. Available in whole bean, coarse grind, medium grind, or fine grind.",
  shipping:
    "Most orders are produced and shipped within 2–3 weeks of design approval. We ship across Canada with tracking included.",
};

const AccordionItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        type="button"
        className={styles.accordionTrigger}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {label}
        <span className={`${styles.accordionIcon} ${open ? styles.accordionIconOpen : ""}`}>+</span>
      </button>
      {open && <div className={styles.accordionBody}>{children}</div>}
    </div>
  );
};

export const ProductView = () => {
  const t = useTranslations("product");
  const { product, selectedVariant, options, setSelectedOption } = useProduct();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const images = product.images ? flattenConnection(product.images) : [];
  const displayImage = images[activeImage] ?? images[0];
  const isAvailable = selectedVariant?.availableForSale ?? true;

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          {/* ── Gallery ── */}
          <div className={styles.gallery}>
            <div className={styles.mainImageWrap}>
              {displayImage && (
                <ShopifyImage
                  data={displayImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={displayImage.altText ?? product.title ?? ""}
                  className={styles.mainImage}
                />
              )}
            </div>
            {images.length > 1 && (
              <div className={styles.thumbnails}>
                {images.map((img, i) =>
                  img ? (
                    <button
                      key={img.id}
                      type="button"
                      className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ""}`}
                      onClick={() => setActiveImage(i)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <ShopifyImage
                        data={img}
                        sizes="72px"
                        alt={img.altText ?? ""}
                        className={styles.thumbImage}
                      />
                    </button>
                  ) : null
                )}
              </div>
            )}
          </div>

          {/* ── Details ── */}
          <div className={styles.details}>
            {product.productType && (
              <span className={styles.badge}>{product.productType}</span>
            )}
            <h1 className={styles.title}>{product.title}</h1>

            <div className={styles.price}>
              <ProductPrice data={product} />
            </div>

            {/* Variant options */}
            {options?.map((option) =>
              option && option.values && option.values.length > 1 ? (
                <div key={option.name} className={styles.variantSection}>
                  <span className={styles.variantLabel}>{option.name}</span>
                  <div className={styles.variantOptions}>
                    {option.values.map((value) => {
                      const isActive =
                        selectedVariant?.selectedOptions?.some(
                          (o) => o?.name === option.name && o?.value === value
                        ) ?? false;
                      return (
                        <button
                          key={value}
                          type="button"
                          className={`${styles.variantBtn} ${isActive ? styles.variantBtnActive : ""}`}
                          onClick={() =>
                            option.name && value
                              ? setSelectedOption(option.name, value)
                              : undefined
                          }
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null
            )}

            {/* Quantity + Add to cart */}
            <div className={styles.purchaseRow}>
              <div className={styles.quantityControl}>
                <button
                  type="button"
                  className={styles.quantityBtn}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button
                  type="button"
                  className={styles.quantityBtn}
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <AddToCartButton
                variantId={selectedVariant?.id}
                quantity={quantity}
                className={styles.addToCartBtn}
                disabled={!isAvailable}
              >
                {isAvailable ? t("addToCart") : t("soldOut")}
              </AddToCartButton>
            </div>

            {/* Accordion */}
            <div className={styles.accordion}>
              {ACCORDION_ITEMS.map(({ key, label }) => (
                <AccordionItem key={key} label={label}>
                  {key === "description"
                    ? product.description
                    : STATIC_ACCORDION[key]}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
