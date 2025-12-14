"use client";

import { useTranslations } from "next-intl";
import { forwardRef } from "react";

import styles from "@/app/styles.module.scss";

import { CustomizationFormValues, TemplatePreset } from "./formConfig";
import PreviewCanvas, { type PreviewCanvasHandle } from "./PreviewCanvas";

interface PreviewDisplayProps {
  formValues: Partial<CustomizationFormValues>;
  roastPreviewLabel?: string;
  grindPreviewLabel?: string;
  selectedArtworkFile?: File;
  /** The template name for display in footer */
  templateLabel?: string;
  /** Description text for the footer */
  templateDescription?: string;
  labelFontFamily?: string;
  labelFontWeight?: string;
  labelFontSizeMultiplier?: number;
  templatePreset?: TemplatePreset;
}

const PreviewDisplay = forwardRef<PreviewCanvasHandle, PreviewDisplayProps>(
  (
    {
      formValues,
      roastPreviewLabel,
      selectedArtworkFile,
      templateLabel,
      templateDescription,
      labelFontFamily,
      labelFontWeight,
      labelFontSizeMultiplier,
      templatePreset,
    },
    ref
  ) => {
    const t = useTranslations("home.preview");

    return (
      <div className={styles.display}>
        <h2 className={styles.displayHeader}>
          {t("title")} <span className={styles.productTitle}>{t("productTitle")}</span>
        </h2>
        <div className={styles.displayContent}>
          <PreviewCanvas
            ref={ref}
            selectedArtworkFile={selectedArtworkFile}
            customerName={formValues.customerName}
            nameColor={formValues.nameColor}
            panelColor={formValues.panelColor}
            nameFontFamily={labelFontFamily}
            nameFontWeight={labelFontWeight}
            nameFontSizeMultiplier={labelFontSizeMultiplier}
            roastLabel={roastPreviewLabel}
            templatePreset={templatePreset}
          />
        </div>
        <div className={styles.displayFooter}>
          <span>{t("selectedSurface", { surface: templateLabel ?? t("chooseSurface") })}</span>
          {templateDescription && <span>{templateDescription}</span>}
        </div>
      </div>
    );
  }
);

PreviewDisplay.displayName = "PreviewDisplay";

export default PreviewDisplay;
