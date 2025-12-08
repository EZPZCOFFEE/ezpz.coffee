"use client";

import { Popover, Portal } from "@ark-ui/react";
import { MinusIcon, PlusIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Money, Image as ShopifyImage, useCart } from "@shopify/hydrogen-react";
import classNames from "classnames";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { PropsWithChildren } from "react";

import Button from "@/components/shared/Button";

import styles from "./styles.module.scss";

// ---------------------------------------------------------------------------
// Cart Item Component
// ---------------------------------------------------------------------------

interface CartLineItemProps {
  line: NonNullable<ReturnType<typeof useCart>["lines"]>[number];
}

const CartLineItem: React.FC<CartLineItemProps> = ({ line }) => {
  const { linesUpdate, linesRemove, status } = useCart();
  const t = useTranslations("cart");
  const isUpdating = status === "updating";

  if (!line?.merchandise) return null;

  const { merchandise, quantity, cost, attributes } = line;
  const product = merchandise.product;
  const defaultImage = merchandise.image ?? product?.featuredImage;

  // Check for custom label image in attributes
  const labelImageUrl = attributes?.find((attr) => attr?.key === "_labelImage")?.value;
  const customerName = attributes?.find((attr) => attr?.key === "Name")?.value;

  const handleQuantityChange = (delta: number) => {
    if (!line.id || quantity === undefined) return;
    const newQuantity = quantity + delta;

    if (newQuantity <= 0) {
      linesRemove([line.id]);
    } else {
      linesUpdate([{ id: line.id, quantity: newQuantity }]);
    }
  };

  const handleRemove = () => {
    if (!line.id) return;
    linesRemove([line.id]);
  };

  return (
    <div className={styles.lineItem}>
      <div className={styles.lineItemImage}>
        {labelImageUrl ? (
          <Image
            src={labelImageUrl}
            alt="Custom label"
            width={80}
            height={80}
            className={styles.lineItemImageInner}
            unoptimized
          />
        ) : defaultImage?.url ? (
          <ShopifyImage data={defaultImage} sizes="80px" className={styles.lineItemImageInner} />
        ) : null}
      </div>

      <div className={styles.lineItemContent}>
        <div className={styles.lineItemHeader}>
          <div className={styles.lineItemInfo}>
            <p className={styles.lineItemTitle}>{customerName ?? product?.title}</p>
            {merchandise.title !== "Default Title" && (
              <p className={styles.lineItemVariant}>{merchandise.title}</p>
            )}
          </div>
          <button
            type="button"
            className={styles.removeButton}
            onClick={handleRemove}
            disabled={isUpdating}
            aria-label={t("removeItem")}
          >
            <TrashIcon size={16} weight="regular" />
          </button>
        </div>

        <div className={styles.lineItemFooter}>
          <div className={styles.quantityControl}>
            <button
              type="button"
              className={styles.quantityButton}
              onClick={() => handleQuantityChange(-1)}
              disabled={isUpdating}
              aria-label={t("decreaseQuantity")}
            >
              <MinusIcon size={14} weight="bold" />
            </button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button
              type="button"
              className={styles.quantityButton}
              onClick={() => handleQuantityChange(1)}
              disabled={isUpdating}
              aria-label={t("increaseQuantity")}
            >
              <PlusIcon size={14} weight="bold" />
            </button>
          </div>

          <div className={styles.lineItemPricing}>
            {(() => {
              const price = merchandise.price;
              if (!price?.amount || !cost?.totalAmount?.amount || !quantity) return null;

              const originalTotal = parseFloat(price.amount) * quantity;
              const discountedTotal = parseFloat(cost.totalAmount.amount);

              if (originalTotal <= discountedTotal) return null;

              return (
                <Money
                  data={{ amount: String(originalTotal), currencyCode: price.currencyCode }}
                  className={styles.lineItemCompareAtPrice}
                />
              );
            })()}
            {cost?.totalAmount && <Money data={cost.totalAmount} className={styles.lineItemPrice} />}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Empty Cart Component
// ---------------------------------------------------------------------------

const EmptyCart: React.FC = () => {
  const t = useTranslations("cart");

  return (
    <div className={styles.emptyCart}>
      <div className={styles.emptyCartIcon}>
        <Image src="/cart.svg" alt="" width={48} height={48} />
      </div>
      <p className={styles.emptyCartTitle}>{t("emptyTitle")}</p>
      <p className={styles.emptyCartDescription}>{t("emptyDescription")}</p>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Cart Footer Component
// ---------------------------------------------------------------------------

const CartFooter: React.FC = () => {
  const { cost, checkoutUrl, status, totalQuantity, lines } = useCart();
  const t = useTranslations("cart");
  const isUpdating = status === "updating";
  const hasItems = (totalQuantity ?? 0) > 0;

  if (!hasItems) return null;

  // Calculate total savings: original (unit price * qty) - discounted total
  const totalSavings = (lines ?? []).reduce((acc, line) => {
    const unitPrice = line?.merchandise?.price?.amount;
    const currentTotal = line?.cost?.totalAmount?.amount;
    const qty = line?.quantity;
    if (!unitPrice || !currentTotal || !qty) return acc;

    const originalTotal = parseFloat(unitPrice) * qty;
    const discountedTotal = parseFloat(currentTotal);
    const savings = originalTotal - discountedTotal;

    return savings > 0 ? acc + savings : acc;
  }, 0);

  const hasSavings = totalSavings > 0;
  const currencyCode = cost?.subtotalAmount?.currencyCode ?? "CAD";

  return (
    <div className={styles.cartFooter}>
      <div className={styles.cartSummary}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryLabel}>{t("subtotal")}</span>
          {cost?.subtotalAmount && <Money data={cost.subtotalAmount} className={styles.summaryValue} />}
        </div>
        {hasSavings && (
          <div className={styles.savingsRow}>
            <span className={styles.savingsLabel}>{t("youSave")}</span>
            <Money data={{ amount: String(totalSavings), currencyCode }} className={styles.savingsValue} />
          </div>
        )}
        <p className={styles.taxNote}>{t("taxNote")}</p>
      </div>

      <Button
        variant="primary"
        fullWidth
        disabled={isUpdating || !checkoutUrl}
        onClick={() => {
          if (checkoutUrl) {
            window.location.href = checkoutUrl;
          }
        }}
      >
        {isUpdating ? t("updating") : t("checkout")}
      </Button>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main Cart Component
// ---------------------------------------------------------------------------

interface CartProps extends PropsWithChildren {
  className?: string;
}

const Cart: React.FC<CartProps> = ({ children, className }) => {
  const { lines, totalQuantity, status } = useCart();
  const t = useTranslations("cart");

  const cartLines = lines ?? [];
  const itemCount = totalQuantity ?? 0;
  const hasItems = itemCount > 0;
  const isLoading = status === "fetching";

  return (
    <Popover.Root lazyMount unmountOnExit>
      <Popover.Trigger asChild>
        {children ?? (
          <button
            type="button"
            className={classNames(styles.cartButton, className)}
            aria-label={t("openCart")}
          >
            <Image src="/cart.svg" alt={t("cartAlt")} width={28} height={28} />
            {hasItems && (
              <span className={styles.cartBadge} aria-hidden="true">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>
        )}
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner className={styles.positioner}>
          <Popover.Content className={styles.content}>
            <div className={styles.cartHeader}>
              <Popover.Title className={styles.cartTitle}>
                {t("title")}
                {hasItems && (
                  <span className={styles.itemCount}>
                    ({itemCount} {itemCount === 1 ? t("item") : t("items")})
                  </span>
                )}
              </Popover.Title>
              <Popover.CloseTrigger asChild>
                <button type="button" className={styles.closeButton} aria-label={t("closeCart")}>
                  <XIcon size={20} weight="bold" />
                </button>
              </Popover.CloseTrigger>
            </div>

            <div className={styles.cartBody}>
              {isLoading ? (
                <div className={styles.loading}>
                  <div className={styles.spinner} />
                  <p>{t("loading")}</p>
                </div>
              ) : hasItems ? (
                <div className={styles.lineItems}>
                  {cartLines.map((line) => (
                    <CartLineItem key={line?.id} line={line} />
                  ))}
                </div>
              ) : (
                <EmptyCart />
              )}
            </div>

            <CartFooter />
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

export default Cart;
