"use client";

import { useTranslations } from "next-intl";
import type { FormEvent } from "react";
import { useFormContext } from "react-hook-form";

import styles from "@/app/styles.module.scss";
import ColorPickerInput from "@/components/form/ColorPickerInput";
import DefaultTemplateSelector from "@/components/form/DefaultTemplateSelector";
import FileUploadInput from "@/components/form/FileUpload";
import FontSelectInput from "@/components/form/FontSelectInput";
import NumberInput from "@/components/form/NumberInput";
import OptionsInput from "@/components/form/OptionsInput";
import SelectInput from "@/components/form/SelectInput";
import TemplateSelectionInput from "@/components/form/TemplateSelectionInput";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/shared/Button";
import Label from "@/components/shared/Label";
import { DEFAULT_TEMPLATES, type DefaultTemplate } from "@/lib/defaultTemplates";

import {
  type CustomizationFormValues,
  useRoastOptions,
  useGrindOptions,
  useSurfaceOptions,
  useFontOptions,
  useFontWeightOptions,
  useFontSizeOptions,
} from "./formConfig";

// Tiered pricing: minimum quantity -> price per bag
const PRICE_TIERS = [
  { min: 500, price: 15.0 },
  { min: 200, price: 17.5 },
  { min: 100, price: 20.0 },
  { min: 50, price: 22.5 },
  { min: 25, price: 25.0 },
  { min: 12, price: 27.5 },
  { min: 5, price: 30.0 },
  { min: 1, price: 32.5 },
] as const;

const BASE_PRICE = 32.5; // Price for 1 bag

function formatMoney(amount: number, currencyCode = "CAD"): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

/**
 * Get the unit price based on quantity using tiered pricing
 */
function getUnitPrice(quantity: number): number {
  for (const tier of PRICE_TIERS) {
    if (quantity >= tier.min) {
      return tier.price;
    }
  }
  return BASE_PRICE;
}

interface CustomizationPanelProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isAddingToCart?: boolean;
  selectedTemplateId: string | null;
  onTemplateSelect: (template: DefaultTemplate) => void;
}

const CustomizationPanel = ({
  onSubmit,
  isAddingToCart,
  selectedTemplateId,
  onTemplateSelect,
}: CustomizationPanelProps) => {
  const t = useTranslations("home");
  const { watch } = useFormContext<CustomizationFormValues>();
  const watchedQuantity = watch("quantity");
  const quantity =
    typeof watchedQuantity === "number" && Number.isFinite(watchedQuantity) ? watchedQuantity : 1;

  const unitPrice = getUnitPrice(quantity);
  const subtotal = quantity * unitPrice;
  const hasDiscount = unitPrice < BASE_PRICE;
  const savings = hasDiscount ? (BASE_PRICE - unitPrice) * quantity : 0;

  const fontOptions = useFontOptions();
  const fontWeightOptions = useFontWeightOptions();
  const fontSizeOptions = useFontSizeOptions();
  const roastOptions = useRoastOptions();
  const grindOptions = useGrindOptions();
  const surfaceOptions = useSurfaceOptions();

  return (
    <div className={styles.panel}>
      <h1 className={styles.panelTitle}>{t("panelTitle")}</h1>
      <form className={styles.panelForm} onSubmit={(event) => void onSubmit(event)} noValidate>
        <div className={styles.formGroup}>
          <Label>{t("templateSection")}</Label>
          <DefaultTemplateSelector
            templates={DEFAULT_TEMPLATES}
            selectedTemplateId={selectedTemplateId}
            onTemplateSelect={onTemplateSelect}
          />
        </div>
        <div className={styles.formGroup}>
          <Label>{t("labelSection")}</Label>
          <TextInput name="customerName" label={t("nameLabel")} helperText={t("nameHelper")} />
          <ColorPickerInput name="nameColor" label={t("nameColorLabel")} required />
          <FontSelectInput name="labelFont" label={t("fontLabel")} options={fontOptions} />
          <SelectInput name="labelFontWeight" label={t("fontWeightLabel")} options={fontWeightOptions} />
          <OptionsInput name="labelFontSize" label={t("fontSizeLabel")} options={fontSizeOptions} />
        </div>
        <div className={styles.formGroup}>
          <Label>{t("roastSection")}</Label>
          <OptionsInput name="roastProfile" label={t("roastLabel")} options={roastOptions} />
        </div>
        <div className={styles.formGroup}>
          <Label>{t("grindSection")}</Label>
          <OptionsInput name="grindSetting" label={t("grindLabel")} options={grindOptions} />
        </div>
        <div className={styles.formGroup}>
          <Label>{t("surfaceSection")}</Label>
          <TemplateSelectionInput name="surfaceLayout" label={t("surfaceLabel")} options={surfaceOptions} />
          <ColorPickerInput name="panelColor" label={t("panelColorLabel")} required />
        </div>

        <div className={styles.formGroup}>
          <Label>{t("uploadSection")}</Label>
          <FileUploadInput
            name="artworkFile"
            label={t("uploadLabel")}
            helperText={t("uploadHelper")}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <Label>{t("quantitySection")}</Label>
          <NumberInput name="quantity" label={t("quantityLabel")} min={1} defaultValue={1} required />
        </div>
        <div className={styles.priceBreakdown} aria-live="polite">
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>{t("pricePerBag")}</span>
            <span className={styles.priceValue}>
              {hasDiscount && <s className={styles.compareAtPrice}>{formatMoney(BASE_PRICE)}</s>}
              {formatMoney(unitPrice)}
            </span>
          </div>
          <div className={styles.priceBreaks}>
            {PRICE_TIERS.slice()
              .reverse()
              .slice(1)
              .map((tier) => (
                <div
                  key={tier.min}
                  className={`${styles.priceBreak} ${quantity >= tier.min ? styles.priceBreakActive : ""}`}
                >
                  {t("buyXOrMore", { count: tier.min })}: {formatMoney(tier.price)}/bag
                </div>
              ))}
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>{t("quantity")}</span>
            <span className={styles.priceValue}>
              {quantity} {t("bags")}
            </span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>{t("subtotal")}</span>
            <span className={styles.priceValue}>{formatMoney(subtotal)}</span>
          </div>
          {hasDiscount && (
            <div className={styles.savingsRow}>
              <span className={styles.savingsLabel}>{t("youSave")}</span>
              <span className={styles.savingsValue}>{formatMoney(savings)}</span>
            </div>
          )}
        </div>
        <Button type="submit" variant="primary" disabled={isAddingToCart}>
          {isAddingToCart ? t("addingToCart") : t("addToCart")}
        </Button>
      </form>
    </div>
  );
};

export default CustomizationPanel;
