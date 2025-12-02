"use client";

import { useTranslations } from "next-intl";

import styles from "@/app/styles.module.scss";

import { CustomizationFormValues, SurfaceValue } from "./formConfig";
import PreviewCanvas from "./PreviewCanvas";

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

const PreviewDisplay = ({
  formValues,

  selectedArtworkFile,
  surfaceValue,
  surfacePreviewLabel,
  surfacePreviewDescription,
  labelFontFamily,
  labelFontWeight,
  labelFontSizeMultiplier,
}: PreviewDisplayProps) => {
  const t = useTranslations("home.preview");

  return (
    <div className={styles.display}>
      <h2 className={styles.displayHeader}>
        {t("title")} <span className={styles.productTitle}>{t("productTitle")}</span>
      </h2>
      <div className={styles.displayContent}>
        <PreviewCanvas
          selectedArtworkFile={selectedArtworkFile}
          surfaceValue={surfaceValue}
          customerName={formValues.customerName}
          nameColor={formValues.nameColor}
          panelColor={formValues.panelColor}
          nameFontFamily={labelFontFamily}
          nameFontWeight={labelFontWeight}
          nameFontSizeMultiplier={labelFontSizeMultiplier}
        />
      </div>
      <div className={styles.displayFooter}>
        <span>{t("selectedSurface", { surface: surfacePreviewLabel ?? t("chooseSurface") })}</span>
        <span>{surfacePreviewDescription}</span>
      </div>
    </div>
  );
};

export default PreviewDisplay;
