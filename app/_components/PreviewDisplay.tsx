import styles from "@/app/styles.module.scss";

import { CustomizationFormValues } from "./formConfig";
import PreviewCanvas from "./PreviewCanvas";
import PreviewSummary from "./PreviewSummary";

interface PreviewDisplayProps {
  formValues: Partial<CustomizationFormValues>;
  roastPreviewLabel?: string;
  grindPreviewLabel?: string;
  selectedArtworkFile?: File;
}

const PreviewDisplay = ({
  formValues,
  roastPreviewLabel,
  grindPreviewLabel,
  selectedArtworkFile,
}: PreviewDisplayProps) => {
  return (
    <div className={styles.display}>
      <h2 className={styles.displayHeader}>
        Preview <span className={styles.productTitle}>225g bag</span>
      </h2>
      <div className={styles.displayContent}>
        <PreviewCanvas selectedArtworkFile={selectedArtworkFile} />
        <PreviewSummary
          formValues={formValues}
          roastPreviewLabel={roastPreviewLabel}
          grindPreviewLabel={grindPreviewLabel}
        />
      </div>
      <div className={styles.displayFooter}>
        <span>Selected option: Bottom</span>
        <span>Works best for pictures with high details</span>
      </div>
    </div>
  );
};

export default PreviewDisplay;
