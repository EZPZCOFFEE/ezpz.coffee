import styles from "@/app/styles.module.scss";

import { CustomizationFormValues, SurfaceValue } from "./formConfig";
import PreviewCanvas from "./PreviewCanvas";
import PreviewSummary from "./PreviewSummary";

interface PreviewDisplayProps {
  formValues: Partial<CustomizationFormValues>;
  roastPreviewLabel?: string;
  grindPreviewLabel?: string;
  selectedArtworkFile?: File;
  surfaceValue: SurfaceValue;
  surfacePreviewLabel?: string;
  surfacePreviewDescription: string;
}

const PreviewDisplay = ({
  formValues,
  roastPreviewLabel,
  grindPreviewLabel,
  selectedArtworkFile,
  surfaceValue,
  surfacePreviewLabel,
  surfacePreviewDescription,
}: PreviewDisplayProps) => {
  return (
    <div className={styles.display}>
      <h2 className={styles.displayHeader}>
        Preview <span className={styles.productTitle}>225g bag</span>
      </h2>
      <div className={styles.displayContent}>
        <PreviewCanvas selectedArtworkFile={selectedArtworkFile} surfaceValue={surfaceValue} />
        <PreviewSummary
          formValues={formValues}
          roastPreviewLabel={roastPreviewLabel}
          grindPreviewLabel={grindPreviewLabel}
          surfacePreviewLabel={surfacePreviewLabel}
        />
      </div>
      <div className={styles.displayFooter}>
        <span>Selected surface: {surfacePreviewLabel ?? "Choose a surface"}</span>
        <span>{surfacePreviewDescription}</span>
      </div>
    </div>
  );
};

export default PreviewDisplay;
