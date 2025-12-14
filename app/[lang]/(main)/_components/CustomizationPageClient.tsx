"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ProductProvider, useCart, useProduct } from "@shopify/hydrogen-react";
import { useEffect, useRef } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

import styles from "@/app/styles.module.scss";
import { useCartUI } from "@/components/custom/Cart/CartContext";
import type { GetProductQuery } from "@/gql/graphql";
import { uploadFile } from "@/lib/utils/files";

import CustomizationPanel from "./CustomizationPanel";
import {
  CustomizationFormValues,
  customizationFormSchema,
  defaultFontSizeValue,
  defaultFontWeightValue,
  defaultTemplateValue,
  FONT_SIZE_MULTIPLIERS,
  getOptionLabel,
  getFontFamily,
  getTemplatePreset,
  useGrindOptions,
  useRoastOptions,
  useTemplateOptions,
  type RoastValue,
  type GrindValue,
} from "./formConfig";
import type { PreviewCanvasHandle } from "./PreviewCanvas";
import PreviewDisplay from "./PreviewDisplay";

// Maps form values to Shopify option values
// Update these if your Shopify variant option values differ
const ROAST_OPTION_MAP: Record<RoastValue, string> = {
  light: "Light",
  medium: "Medium",
  dark: "Dark",
};

const GRIND_OPTION_MAP: Record<GrindValue, string> = {
  bean: "Bean",
  coarse: "Coarse",
  fine: "Fine",
};

interface CustomizationPageClientProps {
  product: NonNullable<GetProductQuery["product"]>;
}

const CustomizationContent: React.FC = () => {
  const { selectedVariant, setSelectedOption } = useProduct();
  const { linesAdd, status } = useCart();
  const { openCart } = useCartUI();
  const previewRef = useRef<PreviewCanvasHandle>(null);

  // Get initial values from the default template
  const initialPreset = getTemplatePreset(defaultTemplateValue);

  const formMethods = useForm<CustomizationFormValues>({
    resolver: zodResolver(customizationFormSchema),
    defaultValues: {
      customerName: "",
      nameColor: initialPreset.nameColor,
      labelFont: initialPreset.labelFont,
      labelFontWeight: initialPreset.nameFontWeight,
      labelFontSize: defaultFontSizeValue,
      roastProfile: "medium",
      grindSetting: "bean",
      template: defaultTemplateValue,
      panelColor: initialPreset.panelColor,
      quantity: 1,
      artworkFile: [],
    },
    mode: "onBlur",
  });

  const watchedValues = useWatch({ control: formMethods.control });
  const selectedArtworkFile = watchedValues.artworkFile?.[0];

  // Apply template preset values when template changes
  const templateValue = watchedValues.template;
  useEffect(() => {
    if (templateValue) {
      const preset = getTemplatePreset(templateValue);
      formMethods.setValue("panelColor", preset.panelColor);
      formMethods.setValue("nameColor", preset.nameColor);
      formMethods.setValue("labelFont", preset.labelFont);
      formMethods.setValue("labelFontWeight", preset.nameFontWeight);
    }
  }, [templateValue, formMethods]);

  // Sync form roast/grind selections to Shopify's ProductProvider
  const roastValue = watchedValues.roastProfile;
  const grindValue = watchedValues.grindSetting;

  useEffect(() => {
    if (roastValue) {
      setSelectedOption("Roast", ROAST_OPTION_MAP[roastValue]);
    }
  }, [roastValue, setSelectedOption]);

  useEffect(() => {
    if (grindValue) {
      setSelectedOption("Grind", GRIND_OPTION_MAP[grindValue]);
    }
  }, [grindValue, setSelectedOption]);

  const roastOptions = useRoastOptions();
  const grindOptions = useGrindOptions();
  const templateOptions = useTemplateOptions();

  const roastPreviewLabel = getOptionLabel(watchedValues.roastProfile, roastOptions);
  const grindPreviewLabel = getOptionLabel(watchedValues.grindSetting, grindOptions);
  // Get template preset and label
  const currentTemplate = watchedValues.template ?? defaultTemplateValue;
  const currentTemplatePreset = getTemplatePreset(currentTemplate);
  const templateLabel = getOptionLabel(currentTemplate, templateOptions);
  const labelFontFamily = getFontFamily(watchedValues.labelFont);
  const labelFontWeight = watchedValues.labelFontWeight ?? defaultFontWeightValue;
  const labelFontSizeMultiplier = FONT_SIZE_MULTIPLIERS[watchedValues.labelFontSize ?? defaultFontSizeValue];

  const isAddingToCart = status === "updating";

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = await formMethods.trigger();
    if (!isValid) return;

    const values = formMethods.getValues();

    // Export and upload the label image before adding to cart
    let labelUrl: string | null = null;
    const labelBlob = await previewRef.current?.exportLabelImage();
    if (labelBlob) {
      try {
        labelUrl = await uploadFile({
          pathname: `labels/${crypto.randomUUID()}.png`,
          file: labelBlob,
        });
      } catch (error) {
        console.error("[Label upload failed]", error);
      }
    }

    // Build cart line attributes
    const attributes: { key: string; value: string }[] = [];
    if (labelUrl) {
      attributes.push({ key: "_labelImage", value: labelUrl });
    }
    if (values.customerName?.trim()) {
      attributes.push({ key: "Name", value: values.customerName.trim() });
    }

    if (!selectedVariant?.id) return;
    linesAdd([
      {
        merchandiseId: selectedVariant.id,
        quantity: values.quantity,
        attributes,
      },
    ]);

    // Reset form and open cart
    formMethods.reset();
    openCart();
  };

  return (
    <FormProvider {...formMethods}>
      <div className={styles.container}>
        <div className={styles.panelColumn}>
          <CustomizationPanel
            onSubmit={(event) => void handleFormSubmit(event)}
            isAddingToCart={isAddingToCart}
          />
        </div>
        <div className={styles.previewColumn}>
          <PreviewDisplay
            ref={previewRef}
            formValues={watchedValues}
            roastPreviewLabel={roastPreviewLabel}
            grindPreviewLabel={grindPreviewLabel}
            selectedArtworkFile={selectedArtworkFile}
            templateLabel={templateLabel}
            labelFontFamily={labelFontFamily}
            labelFontWeight={labelFontWeight}
            labelFontSizeMultiplier={labelFontSizeMultiplier}
            templatePreset={currentTemplatePreset}
          />
        </div>
      </div>
    </FormProvider>
  );
};

const CustomizationPageClient: React.FC<CustomizationPageClientProps> = ({ product }) => {
  return (
    <ProductProvider data={product}>
      <CustomizationContent />
    </ProductProvider>
  );
};

export default CustomizationPageClient;
