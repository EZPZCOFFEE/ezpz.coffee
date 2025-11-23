import styles from "@/app/styles.module.scss";

import { CustomizationFormValues, formatPreviewValue } from "./formConfig";

interface PreviewSummaryProps {
  formValues: Partial<CustomizationFormValues>;
  roastPreviewLabel?: string;
  grindPreviewLabel?: string;
}

const PreviewSummary = ({ formValues, roastPreviewLabel, grindPreviewLabel }: PreviewSummaryProps) => {
  const quantity = formValues.quantity ?? 1;

  return (
    <ul className={styles.previewList}>
      <li>
        <span className={styles.previewLabel}>Name</span>
        <span className={styles.previewValue}>
          {formatPreviewValue(formValues.customerName, "Add a name")}
        </span>
      </li>
      <li>
        <span className={styles.previewLabel}>Roast profile</span>
        <span className={styles.previewValue}>
          {formatPreviewValue(roastPreviewLabel, "Select a roast profile")}
        </span>
      </li>
      <li>
        <span className={styles.previewLabel}>Grind setting</span>
        <span className={styles.previewValue}>
          {formatPreviewValue(grindPreviewLabel, "Select a grind setting")}
        </span>
      </li>
      <li>
        <span className={styles.previewLabel}>Tasting note</span>
        <span className={styles.previewValue}>
          {formatPreviewValue(formValues.tastingNote, "Tell customers what to expect")}
        </span>
      </li>
      <li>
        <span className={styles.previewLabel}>Quantity</span>
        <span className={styles.previewValue}>{`${quantity} bag${quantity > 1 ? "s" : ""}`}</span>
      </li>
    </ul>
  );
};

export default PreviewSummary;
