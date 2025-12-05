"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { SubmitHandler, FormProvider, useForm, useWatch } from "react-hook-form";

import styles from "@/app/styles.module.scss";

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
} from "./formConfig";
import PreviewDisplay from "./PreviewDisplay";

const CustomizationPageClient = () => {
  const t = useTranslations("home");
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

  const onSubmit: SubmitHandler<CustomizationFormValues> = (values) => {
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

export default CustomizationPageClient;
