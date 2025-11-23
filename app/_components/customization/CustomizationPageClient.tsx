"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

import styles from "@/app/styles.module.scss";
import CustomizationPanel from "./CustomizationPanel";
import PreviewDisplay from "./PreviewDisplay";
import {
  CustomizationFormValues,
  customizationFormSchema,
  formatPreviewValue,
  getOptionLabel,
  grindOptions,
  roastOptions,
} from "./formConfig";

const CustomizationPageClient = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const formMethods = useForm<CustomizationFormValues>({
    resolver: zodResolver(customizationFormSchema),
    defaultValues: {
      customerName: "",
      roastProfile: "medium",
      grindSetting: "bean",
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
        <CustomizationPanel statusMessage={statusMessage} onSubmit={handleFormSubmit} />
        <PreviewDisplay
          formValues={watchedValues}
          roastPreviewLabel={roastPreviewLabel}
          grindPreviewLabel={grindPreviewLabel}
          selectedArtworkFile={selectedArtworkFile}
        />
      </div>
    </FormProvider>
  );
};

export default CustomizationPageClient;
