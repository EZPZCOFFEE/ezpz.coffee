"use client";

import Image from "next/image";
import { useState } from "react";

import type { DemoProduct } from "@/lib/data/demo-products";

import styles from "./styles.module.scss";

const AccordionItem = ({ label, children }: { label: string; children: React.ReactNode }) => {
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

export const DemoProductView = ({ product }: { product: DemoProduct }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          {/* ── Gallery ── */}
          <div className={styles.gallery}>
            <div className={styles.mainImageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* ── Details ── */}
          <div className={styles.details}>
            <span className={styles.badge}>{product.badge}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.price}>
              {product.price} <span>/ {product.weight}</span>
            </div>

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
              <button type="button" className={styles.addToCartBtn}>
                Add to cart
              </button>
            </div>

            <div className={styles.accordion}>
              <AccordionItem label="Description">
                {product.description}
              </AccordionItem>
              <AccordionItem label="Product details">
                {product.details}
              </AccordionItem>
              <AccordionItem label="Shipping & production">
                {product.shipping}
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
