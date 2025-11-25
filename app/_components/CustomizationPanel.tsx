"use client";

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

import { type CustomizationFormValues, grindOptions, roastOptions, surfaceOptions } from "./formConfig";

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
  const { watch } = useFormContext<CustomizationFormValues>();
  const watchedQuantity = watch("quantity");
  const quantity =
    typeof watchedQuantity === "number" && Number.isFinite(watchedQuantity) ? watchedQuantity : 0;
  const subtotal = quantity * BAG_PRICE_USD;

  return (
    <div className={styles.panel}>
      <h1 className={styles.panelTitle}>Customize</h1>
      <form className={styles.panelForm} onSubmit={(event) => void onSubmit(event)} noValidate>
        <div className={styles.formGroup}>
          <Label>Name</Label>
          <TextInput name="customerName" label="Name" helperText="Shown on the front label." />
          <ColorPickerInput name="nameColor" label="Name color" required />
        </div>
        <div className={styles.formGroup}>
          <Label>Roast profile</Label>
          <OptionsInput name="roastProfile" label="Roast profile" options={roastOptions} />
        </div>
        <div className={styles.formGroup}>
          <Label>Grind setting</Label>
          <OptionsInput name="grindSetting" label="Grind setting" options={grindOptions} />
        </div>
        <div className={styles.formGroup}>
          <Label>Bag surface</Label>
          <OptionsInput name="surfaceLayout" label="Bag surface" options={surfaceOptions} />
        </div>
        <div className={styles.formGroup}>
          <Label>Upload artwork</Label>
          <FileUploadInput
            name="artworkFile"
            label="Upload artwork"
            helperText="Upload one JPG or PNG (max 10MB). Drag to crop in the preview."
            required
          />
        </div>
        <div className={styles.formGroup}>
          <Label>Quantity</Label>
          <NumberInput name="quantity" label="Quantity" min={1} max={10} defaultValue={1} required />
        </div>
        <div className={styles.priceBreakdown} aria-live="polite">
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Price per bag</span>
            <span className={styles.priceValue}>{formatCurrency(BAG_PRICE_USD)}</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Quantity</span>
            <span className={styles.priceValue}>{quantity}</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.priceLabel}>Subtotal</span>
            <span className={styles.priceValue}>{formatCurrency(subtotal)}</span>
          </div>
        </div>
        <Button type="submit" variant="primary">
          Add to cart
        </Button>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </form>
    </div>
  );
};

export default CustomizationPanel;
