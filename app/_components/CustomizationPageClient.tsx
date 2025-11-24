"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, FormProvider, useForm } from "react-hook-form";

import styles from "@/app/styles.module.scss";

import CustomizationPanel from "./CustomizationPanel";
import {
  CustomizationFormValues,
  customizationFormSchema,
  defaultNameColor,
  defaultSurfaceValue,
  formatPreviewValue,
  getOptionLabel,
  grindOptions,
  roastOptions,
  surfaceOptions,
  surfacePreviewDetails,
} from "./formConfig";
import PreviewDisplay from "./PreviewDisplay";

const CustomizationPageClient = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const formMethods = useForm<CustomizationFormValues>({
    resolver: zodResolver(customizationFormSchema),
    defaultValues: {
      customerName: "",
      nameColor: defaultNameColor,
      roastProfile: "medium",
      grindSetting: "bean",
      surfaceLayout: defaultSurfaceValue,
      tastingNote: "",
      quantity: 1,
      artworkFile: [],
    },
    mode: "onBlur",
  });

  const watchedValues = formMethods.watch();
  const selectedArtworkFile = watchedValues.artworkFile?.[0];
  const roastPreviewLabel = getOptionLabel(watchedValues.roastProfile, roastOptions);
  const grindPreviewLabel = getOptionLabel(watchedValues.grindSetting, grindOptions);
  const surfaceValue = watchedValues.surfaceLayout ?? defaultSurfaceValue;
  const surfacePreviewLabel = getOptionLabel(surfaceValue, surfaceOptions);
  const surfacePreviewDetail = surfacePreviewDetails[surfaceValue];

  const onSubmit: SubmitHandler<CustomizationFormValues> = (values) => {
    setStatusMessage(
      `Saved ${values.quantity} bag${values.quantity > 1 ? "s" : ""} for ${formatPreviewValue(
        values.customerName,
        "your blend"
      )}.`
    );
  };

  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <FormProvider {...formMethods}>
      <div className={styles.container}>
        <CustomizationPanel
          statusMessage={statusMessage}
          onSubmit={(event) => void handleFormSubmit(event)}
        />
        <PreviewDisplay
          formValues={watchedValues}
          roastPreviewLabel={roastPreviewLabel}
          grindPreviewLabel={grindPreviewLabel}
          selectedArtworkFile={selectedArtworkFile}
          surfaceValue={surfaceValue}
          surfacePreviewLabel={surfacePreviewLabel}
          surfacePreviewDescription={surfacePreviewDetail.description}
        />
      </div>
    </FormProvider>
  );
};

export default CustomizationPageClient;
