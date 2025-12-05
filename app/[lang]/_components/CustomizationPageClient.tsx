"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ProductProvider, useCart, useProduct } from "@shopify/hydrogen-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { SubmitHandler, FormProvider, useForm, useWatch } from "react-hook-form";

import styles from "@/app/styles.module.scss";
import type { GetProductQuery } from "@/gql/graphql";

import CustomizationPanel from "./CustomizationPanel";
import {
  CustomizationFormValues,
  customizationFormSchema,
  defaultNameColor,
  defaultPanelColor,
  defaultSurfaceValue,
  defaultFontValue,
  defaultFontWeightValue,
  defaultFontSizeValue,
  FONT_SIZE_MULTIPLIERS,
  formatPreviewValue,
  getOptionLabel,
  getFontFamily,
  useGrindOptions,
  useRoastOptions,
  useSurfaceOptions,
  useSurfaceDescriptions,
  type RoastValue,
  type GrindValue,
} from "./formConfig";
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
  const t = useTranslations("home");
  const { selectedVariant, setSelectedOption } = useProduct();
  const { linesAdd, status } = useCart();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const formMethods = useForm<CustomizationFormValues>({
    resolver: zodResolver(customizationFormSchema),
    defaultValues: {
      customerName: "",
      nameColor: defaultNameColor,
      labelFont: defaultFontValue,
      labelFontWeight: defaultFontWeightValue,
      labelFontSize: defaultFontSizeValue,
      roastProfile: "medium",
      grindSetting: "bean",
      surfaceLayout: defaultSurfaceValue,
      panelColor: defaultPanelColor,
      quantity: 1,
      artworkFile: [],
    },
    mode: "onBlur",
  });

  const watchedValues = useWatch({ control: formMethods.control });
  const selectedArtworkFile = watchedValues.artworkFile?.[0];

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
  const surfaceOptions = useSurfaceOptions();
  const surfaceDescriptions = useSurfaceDescriptions();

  const roastPreviewLabel = getOptionLabel(watchedValues.roastProfile, roastOptions);
  const grindPreviewLabel = getOptionLabel(watchedValues.grindSetting, grindOptions);
  const surfaceValue = watchedValues.surfaceLayout ?? defaultSurfaceValue;
  const surfacePreviewLabel = getOptionLabel(surfaceValue, surfaceOptions);
  const surfacePreviewDetail = surfaceDescriptions[surfaceValue];
  const labelFontFamily = getFontFamily(watchedValues.labelFont);
  const labelFontWeight = watchedValues.labelFontWeight ?? defaultFontWeightValue;
  const labelFontSizeMultiplier = FONT_SIZE_MULTIPLIERS[watchedValues.labelFontSize ?? defaultFontSizeValue];

  const isAddingToCart = status === "updating";

  const onSubmit: SubmitHandler<CustomizationFormValues> = (values) => {
    if (!selectedVariant?.id) {
      setStatusMessage(t("noVariantError"));
      return;
    }

    linesAdd([
      {
        merchandiseId: selectedVariant.id,
        quantity: values.quantity,
      },
    ]);

    const name = formatPreviewValue(values.customerName, t("defaultBlendName"));
    setStatusMessage(t("savedMessage", { count: values.quantity, name }));
  };

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <FormProvider {...formMethods}>
      <div className={styles.container}>
        <div className={styles.panelColumn}>
          <CustomizationPanel
            statusMessage={statusMessage}
            onSubmit={(event) => void handleFormSubmit(event)}
            isAddingToCart={isAddingToCart}
          />
        </div>
        <div className={styles.previewColumn}>
          <PreviewDisplay
            formValues={watchedValues}
            roastPreviewLabel={roastPreviewLabel}
            grindPreviewLabel={grindPreviewLabel}
            selectedArtworkFile={selectedArtworkFile}
            surfaceValue={surfaceValue}
            surfacePreviewLabel={surfacePreviewLabel}
            surfacePreviewDescription={surfacePreviewDetail}
            labelFontFamily={labelFontFamily}
            labelFontWeight={labelFontWeight}
            labelFontSizeMultiplier={labelFontSizeMultiplier}
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
