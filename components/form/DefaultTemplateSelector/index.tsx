"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

import type { DefaultTemplate } from "@/lib/defaultTemplates";

import styles from "./styles.module.scss";

interface DefaultTemplateSelectorProps {
  templates: readonly DefaultTemplate[];
  selectedTemplateId: string | null;
  onTemplateSelect: (template: DefaultTemplate) => void;
  label?: string;
  className?: string;
}

/**
 * Star icon for the Modern template
 */
const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/**
 * Coffee cup icon for Classic and Playful templates
 */
const CoffeeIcon = () => (
  <span className={styles.coffeeIcon} aria-hidden="true">
    ☕
  </span>
);

/**
 * Three squares indicator for Minimal template
 */
const SquaresIcon = () => (
  <div className={styles.squaresIcon} aria-hidden="true">
    <span className={styles.square} />
    <span className={styles.square} />
    <span className={styles.square} />
  </div>
);

/**
 * Grid pattern overlay component
 */
const GridPattern = ({ color = "rgba(0,0,0,0.1)" }: { color?: string }) => (
  <div
    className={styles.gridPattern}
    style={{
      backgroundImage: `
        linear-gradient(${color} 1px, transparent 1px),
        linear-gradient(90deg, ${color} 1px, transparent 1px)
      `,
    }}
  />
);

/**
 * Template preview card that renders a mini version of the template design
 */
const TemplatePreviewCard = ({
  template,
  isSelected,
  onClick,
}: {
  template: DefaultTemplate;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const { preview } = template;

  // Determine the layout structure based on surfaceLayout
  const isSandwich = template.surfaceLayout === "sandwich";
  const isFull = template.surfaceLayout === "full";
  const isBottom = template.surfaceLayout === "bottom";

  const coffeeNameText = preview.isLowercase
    ? "coffee name"
    : preview.isUppercase
      ? "COFFEE NAME"
      : "Coffee Name";

  const roastText = preview.isLowercase
    ? "dark roast"
    : preview.isUppercase
      ? "DARK ROAST"
      : "Dark Roast";

  return (
    <motion.button
      type="button"
      className={classNames(styles.templateCard, {
        [styles.selected]: isSelected,
      })}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isSelected}
      aria-label={`Select ${template.name} template`}
    >
      <div
        className={styles.cardPreview}
        style={{ backgroundColor: preview.bodyColor }}
      >
        {/* Sandwich layout: top header, body, bottom bar */}
        {isSandwich && (
          <>
            {/* Top header */}
            <div
              className={styles.header}
              style={{ backgroundColor: preview.headerColor }}
            >
              {/* Corner accents for Brutalist */}
              {preview.cornerAccents && (
                <>
                  <span
                    className={classNames(styles.cornerAccent, styles.topLeft)}
                    style={{ borderColor: preview.accentColor }}
                  />
                  <span
                    className={classNames(styles.cornerAccent, styles.topRight)}
                    style={{ borderColor: preview.accentColor }}
                  />
                </>
              )}
              {/* Accent line */}
              <span
                className={styles.accentLine}
                style={{ backgroundColor: preview.accentColor }}
              />
              {/* Coffee name */}
              <span
                className={classNames(styles.coffeeName, {
                  [styles.italic]: preview.isItalic,
                })}
                style={{ color: preview.headerTextColor }}
              >
                {coffeeNameText}
              </span>
            </div>

            {/* Body area */}
            <div className={styles.body}>
              {preview.showGrid && <GridPattern />}
            </div>

            {/* Bottom bar */}
            <div
              className={styles.bottomBar}
              style={{ backgroundColor: preview.headerColor }}
            >
              {/* Corner accents for Brutalist */}
              {preview.cornerAccents && (
                <>
                  <span
                    className={classNames(styles.cornerAccent, styles.bottomLeft)}
                    style={{ borderColor: preview.accentColor }}
                  />
                  <span
                    className={classNames(styles.cornerAccent, styles.bottomRight)}
                    style={{ borderColor: preview.accentColor }}
                  />
                </>
              )}
              <div className={styles.bottomContent}>
                <span
                  className={styles.roastText}
                  style={{ color: preview.headerTextColor }}
                >
                  {roastText}
                  {preview.icon === "coffee" && <CoffeeIcon />}
                </span>
                <span
                  className={styles.separator}
                  style={{ backgroundColor: preview.accentColor }}
                />
                <span
                  className={styles.weightText}
                  style={{ color: preview.headerTextColor }}
                >
                  225g
                </span>
              </div>
            </div>
          </>
        )}

        {/* Full layout: solid color background */}
        {isFull && (
          <div className={styles.fullLayout}>
            {/* Coffee name */}
            <div className={styles.fullHeader}>
              <span
                className={classNames(styles.coffeeName, {
                  [styles.italic]: preview.isItalic,
                })}
                style={{ color: preview.headerTextColor }}
              >
                {coffeeNameText}
              </span>
              <span
                className={styles.verticalLine}
                style={{ backgroundColor: preview.accentColor }}
              />
            </div>

            {/* Bottom info */}
            <div className={styles.fullFooter}>
              <span
                className={styles.roastText}
                style={{ color: preview.headerTextColor }}
              >
                {roastText}
              </span>
              {preview.icon === "squares" && <SquaresIcon />}
              <span
                className={styles.weightText}
                style={{ color: preview.headerTextColor }}
              >
                225g
              </span>
            </div>
          </div>
        )}

        {/* Bottom layout: colored body with white bottom bar */}
        {isBottom && (
          <>
            {/* Star icon in corner */}
            {preview.icon === "star" && (
              <span
                className={styles.starIcon}
                style={{ color: preview.secondaryAccentColor }}
              >
                <StarIcon />
              </span>
            )}

            {/* Body area */}
            <div className={styles.bottomBody} />

            {/* Bottom white bar */}
            <div
              className={styles.bottomWhiteBar}
              style={{ backgroundColor: preview.headerColor }}
            >
              <span
                className={classNames(styles.coffeeName, styles.bottomLayoutName)}
                style={{ color: preview.headerTextColor }}
              >
                {coffeeNameText}
              </span>
              <span
                className={styles.separator}
                style={{ backgroundColor: preview.accentColor }}
              />
              <span
                className={styles.roastText}
                style={{ color: preview.accentColor }}
              >
                {roastText}
              </span>
              <span className={styles.weightText} style={{ color: "#666" }}>
                225G
              </span>
            </div>
          </>
        )}
      </div>

      {/* Template name label */}
      <span className={styles.templateName}>{template.name}</span>

      {/* Font indicator */}
      <span className={styles.fontIndicator}>
        FONT: {getFontDisplayName(template.labelFont)}
      </span>
    </motion.button>
  );
};

/**
 * Get display name for font value
 */
const getFontDisplayName = (font: string): string => {
  const fontMap: Record<string, string> = {
    "source-serif": "SOURCE SERIF 4 MEDIUM",
    "pt-sans": "PT SANS BOLD",
    "space-mono": "SPACE MONO BOLD",
    "inknut-antiqua": "INKNUT ANTIQUA BLACK",
  };
  return fontMap[font] || font.toUpperCase().replace("-", " ");
};

/**
 * Default template selector component.
 * Displays visual previews of available templates for user selection.
 */
const DefaultTemplateSelector: React.FC<DefaultTemplateSelectorProps> = ({
  templates,
  selectedTemplateId,
  onTemplateSelect,
  label,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.grid}>
        {templates.map((template) => (
          <TemplatePreviewCard
            key={template.id}
            template={template}
            isSelected={template.id === selectedTemplateId}
            onClick={() => onTemplateSelect(template)}
          />
        ))}
      </div>
    </div>
  );
};

export default DefaultTemplateSelector;
