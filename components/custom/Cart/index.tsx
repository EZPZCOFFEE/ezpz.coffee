"use client";

import { Popover, Portal } from "@ark-ui/react";
import { MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Money, Image as ShopifyImage, useCart } from "@shopify/hydrogen-react";
import classNames from "classnames";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";

import Button from "@/components/shared/Button";

import { useCartUI } from "./CartContext";
import styles from "./styles.module.scss";

// ---------------------------------------------------------------------------
// Bag Preview Canvas Component
// ---------------------------------------------------------------------------

const BAG_PREVIEW_DISPLAY_SIZE = 72;
const BAG_PREVIEW_SCALE = 2;
const BAG_PREVIEW_SIZE = BAG_PREVIEW_DISPLAY_SIZE * BAG_PREVIEW_SCALE;
const BAG_PREVIEW_PADDING = 6 * BAG_PREVIEW_SCALE;
const BAG_PREVIEW_INNER = BAG_PREVIEW_SIZE - BAG_PREVIEW_PADDING * 2;
const BAG_MOCKUP_SRC = "/bags/mockup.jpg";

// Label positioning ratios (matching PreviewCanvas.tsx)
const LABEL_WIDTH_RATIO = 0.95;
const LABEL_HEIGHT_RATIO = 0.749;
const LABEL_VERTICAL_OFFSET_RATIO = 0.23;

interface BagPreviewProps {
  labelImageUrl: string;
  className?: string;
}

const BagPreview: React.FC<BagPreviewProps> = ({ labelImageUrl, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bagImage = new window.Image();
    const labelImage = new window.Image();

    let loadedCount = 0;
    const onLoad = () => {
      loadedCount++;
      if (loadedCount < 2) return;

      // Clear and draw bag
      ctx.clearRect(0, 0, BAG_PREVIEW_SIZE, BAG_PREVIEW_SIZE);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, BAG_PREVIEW_SIZE, BAG_PREVIEW_SIZE);

      // Scale bag to fit inner area (with padding)
      const bagScale = Math.min(BAG_PREVIEW_INNER / bagImage.width, BAG_PREVIEW_INNER / bagImage.height);
      const bagWidth = bagImage.width * bagScale;
      const bagHeight = bagImage.height * bagScale;
      const bagX = BAG_PREVIEW_PADDING + (BAG_PREVIEW_INNER - bagWidth) / 2;
      const bagY = BAG_PREVIEW_PADDING + (BAG_PREVIEW_INNER - bagHeight) / 2;

      ctx.drawImage(bagImage, bagX, bagY, bagWidth, bagHeight);

      // Calculate label position and size (relative to inner area)
      const labelWidth = BAG_PREVIEW_INNER * LABEL_WIDTH_RATIO;
      const labelHeight = BAG_PREVIEW_INNER * LABEL_HEIGHT_RATIO;
      const labelX = BAG_PREVIEW_PADDING + (BAG_PREVIEW_INNER - labelWidth) / 2;
      const labelY = BAG_PREVIEW_PADDING + BAG_PREVIEW_INNER * LABEL_VERTICAL_OFFSET_RATIO;

      // Draw label on top
      ctx.drawImage(labelImage, labelX, labelY, labelWidth, labelHeight);

      setIsLoaded(true);
    };

    bagImage.crossOrigin = "anonymous";
    labelImage.crossOrigin = "anonymous";

    bagImage.onload = onLoad;
    labelImage.onload = onLoad;

    bagImage.src = BAG_MOCKUP_SRC;
    labelImage.src = labelImageUrl;

    return () => {
      bagImage.onload = null;
      labelImage.onload = null;
    };
  }, [labelImageUrl]);

  return (
    <canvas
      ref={canvasRef}
      width={BAG_PREVIEW_SIZE}
      height={BAG_PREVIEW_SIZE}
      className={className}
      style={{
        width: BAG_PREVIEW_DISPLAY_SIZE,
        height: BAG_PREVIEW_DISPLAY_SIZE,
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    />
  );
};

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
          <BagPreview labelImageUrl={labelImageUrl} className={styles.lineItemImageInner} />
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
  const { isOpen, setIsOpen } = useCartUI();
  const t = useTranslations("cart");

  const cartLines = lines ?? [];
  const itemCount = totalQuantity ?? 0;
  const hasItems = itemCount > 0;
  const isLoading = status === "fetching";

  return (
    <Popover.Root lazyMount unmountOnExit open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
      <Popover.Trigger asChild>
        {children ?? (
          <button
            type="button"
            className={classNames(styles.cartButton, className)}
            aria-label={t("openCart")}
          >
            <span className={classNames(styles.cartIconWrap, { [styles.cartIconWrapActive]: hasItems })}>
              <ShoppingBagIcon size={30} weight={hasItems ? "fill" : "regular"} aria-hidden />
              {hasItems && <span className={styles.cartBadge}>{itemCount}</span>}
            </span>
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
