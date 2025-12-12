"use client";

import { useTranslations } from "next-intl";
import { forwardRef } from "react";

import styles from "@/app/styles.module.scss";

import { CustomizationFormValues, SurfaceValue } from "./formConfig";
import PreviewCanvas, { type PreviewCanvasHandle } from "./PreviewCanvas";

interface PreviewDisplayProps {
  formValues: Partial<CustomizationFormValues>;
  roastPreviewLabel?: string;
  grindPreviewLabel?: string;
  selectedArtworkFile?: File;
  surfaceValue: SurfaceValue;
  surfacePreviewLabel?: string;
  surfacePreviewDescription: string;
  labelFontFamily?: string;
  labelFontWeight?: string;
  labelFontSizeMultiplier?: number;
}

const PreviewDisplay = forwardRef<PreviewCanvasHandle, PreviewDisplayProps>(
  (
    {
      formValues,
      roastPreviewLabel,
      selectedArtworkFile,
      surfaceValue,
      surfacePreviewLabel,
      surfacePreviewDescription,
      labelFontFamily,
      labelFontWeight,
      labelFontSizeMultiplier,
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
            surfaceValue={surfaceValue}
            customerName={formValues.customerName}
            nameColor={formValues.nameColor}
            panelColor={formValues.panelColor}
            nameFontFamily={labelFontFamily}
            nameFontWeight={labelFontWeight}
            nameFontSizeMultiplier={labelFontSizeMultiplier}
            roastLabel={roastPreviewLabel}
          />
        </div>
        <div className={styles.displayFooter}>
          <span>{t("selectedSurface", { surface: surfacePreviewLabel ?? t("chooseSurface") })}</span>
          <span>{surfacePreviewDescription}</span>
        </div>
      </div>
    );
  }
);

PreviewDisplay.displayName = "PreviewDisplay";

export default PreviewDisplay;
