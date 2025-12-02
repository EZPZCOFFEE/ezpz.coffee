"use client";

import { useTranslations } from "next-intl";
import type { FormEvent } from "react";
import { useFormContext } from "react-hook-form";

import styles from "@/app/styles.module.scss";
import ColorPickerInput from "@/components/form/ColorPickerInput";
import FileUploadInput from "@/components/form/FileUpload";
import NumberInput from "@/components/form/NumberInput";
import OptionsInput from "@/components/form/OptionsInput";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/shared/Button";
import Label from "@/components/shared/Label";

import { type CustomizationFormValues, useRoastOptions, useGrindOptions, useSurfaceOptions } from "./formConfig";

const BAG_PRICE_USD = 25;
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (value: number) => currencyFormatter.format(value);

interface CustomizationPanelProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  statusMessage: string | null;
}

const CustomizationPanel = ({ onSubmit, statusMessage }: CustomizationPanelProps) => {
  const t = useTranslations("home");
  const { watch } = useFormContext<CustomizationFormValues>();
  const watchedQuantity = watch("quantity");
  const quantity =
    typeof watchedQuantity === "number" && Number.isFinite(watchedQuantity) ? watchedQuantity : 0;
  const subtotal = quantity * BAG_PRICE_USD;

  const roastOptions = useRoastOptions();
  const grindOptions = useGrindOptions();
  const surfaceOptions = useSurfaceOptions();

  return (
    <div className={styles.panel}>
      <h1 className={styles.panelTitle}>{t("panelTitle")}</h1>
      <form className={styles.panelForm} onSubmit={(event) => void onSubmit(event)} noValidate>
        <div className={styles.formGroup}>
          <Label>{t("labelSection")}</Label>
          <TextInput name="customerName" label={t("nameLabel")} helperText={t("nameHelper")} />
          <ColorPickerInput name="nameColor" label={t("nameColorLabel")} required />
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
          <OptionsInput name="surfaceLayout" label={t("surfaceLabel")} options={surfaceOptions} />
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
          <NumberInput name="quantity" label={t("quantityLabel")} min={1} max={10} defaultValue={1} required />
        </div>
        <div className={styles.priceBreakdown} aria-live="polite">
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>{t("pricePerBag")}</span>
            <span className={styles.priceValue}>{formatCurrency(BAG_PRICE_USD)}</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>{t("quantity")}</span>
            <span className={styles.priceValue}>{quantity} {t("bags")}</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>{t("subtotal")}</span>
            <span className={styles.priceValue}>{formatCurrency(subtotal)}</span>
          </div>
        </div>
        <Button type="submit" variant="primary">
          {t("addToCart")}
        </Button>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </form>
    </div>
  );
};

export default CustomizationPanel;
