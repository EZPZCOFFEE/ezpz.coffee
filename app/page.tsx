"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import TextInput from "@/components/form/TextInput";
import Button from "@/components/shared/Button";

import styles from "./styles.module.scss";

const customizationFormSchema = z.object({
  customerName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be 50 characters or fewer"),
  roastProfile: z.string().min(1, "Add a roast profile"),
  grindSetting: z.string().min(1, "Add a grind setting"),
  tastingNote: z
    .string()
    .max(120, "Tasting note must be 120 characters or fewer")
    .optional()
    .or(z.literal("")),
});

type CustomizationFormValues = z.infer<typeof customizationFormSchema>;

const formatPreviewValue = (value: string | undefined, placeholder: string) =>
  value && value.trim().length > 0 ? value : placeholder;

const Home = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const formMethods = useForm<CustomizationFormValues>({
    resolver: zodResolver(customizationFormSchema),
    defaultValues: {
      customerName: "",
      roastProfile: "",
      grindSetting: "",
      tastingNote: "",
    },
    mode: "onBlur",
  });

  const watchedValues = formMethods.watch();

  const onSubmit: SubmitHandler<CustomizationFormValues> = (values) => {
    setStatusMessage(`Saved customization for ${formatPreviewValue(values.customerName, "your blend")}.`);
  };
  const handleFormSubmit = formMethods.handleSubmit(onSubmit);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.panelTitle}>Customize</h1>
        <FormProvider {...formMethods}>
          <form className={styles.panelForm} onSubmit={(event) => void handleFormSubmit(event)} noValidate>
            <TextInput name="customerName" label="Name" helperText="Shown on the front label." />
            <TextInput
              name="roastProfile"
              label="Roast profile"
              helperText="Light, medium, or dark suggestions welcome."
            />
            <TextInput
              name="grindSetting"
              label="Grind setting"
              helperText="Whole bean, espresso, pour-over, etc."
            />
            <TextInput
              name="tastingNote"
              label="Tasting note"
              optionalLabel="Optional"
              helperText="Describe what makes this blend unique."
            />
            <Button type="submit" variant="primary">
              Save customization
            </Button>
            {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
          </form>
        </FormProvider>
      </div>
      <div className={styles.display}>
        <h2 className={styles.displayHeader}>
          Preview <span className={styles.productTitle}>225g bag</span>
        </h2>
        <div className={styles.displayContent}>
          <ul className={styles.previewList}>
            <li>
              <span className={styles.previewLabel}>Name</span>
              <span className={styles.previewValue}>
                {formatPreviewValue(watchedValues.customerName, "Add a name")}
              </span>
            </li>
            <li>
              <span className={styles.previewLabel}>Roast profile</span>
              <span className={styles.previewValue}>
                {formatPreviewValue(watchedValues.roastProfile, "Light / Medium / Dark")}
              </span>
            </li>
            <li>
              <span className={styles.previewLabel}>Grind setting</span>
              <span className={styles.previewValue}>
                {formatPreviewValue(watchedValues.grindSetting, "Whole bean")}
              </span>
            </li>
            <li>
              <span className={styles.previewLabel}>Tasting note</span>
              <span className={styles.previewValue}>
                {formatPreviewValue(watchedValues.tastingNote, "Tell customers what to expect")}
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.displayFooter}>
          <span>Selected option: Bottom</span>
          <span>Works best for pictures with high details</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
