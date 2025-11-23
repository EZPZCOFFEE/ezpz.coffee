"use client";

import type { FormEvent } from "react";

import styles from "@/app/styles.module.scss";
import FileUploadInput from "@/components/form/FileUpload";
import NumberInput from "@/components/form/NumberInput";
import OptionsInput from "@/components/form/OptionsInput";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/shared/Button";

import { grindOptions, roastOptions, surfaceOptions } from "./formConfig";

interface CustomizationPanelProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  statusMessage: string | null;
}

const CustomizationPanel = ({ onSubmit, statusMessage }: CustomizationPanelProps) => {
  return (
    <div className={styles.panel}>
      <h1 className={styles.panelTitle}>Customize</h1>
      <form className={styles.panelForm} onSubmit={(event) => void onSubmit(event)} noValidate>
        <TextInput name="customerName" label="Name" helperText="Shown on the front label." />
        <OptionsInput
          name="roastProfile"
          label="Roast profile"
          helperText="Choose the roast intensity."
          options={roastOptions}
        />
        <OptionsInput
          name="grindSetting"
          label="Grind setting"
          helperText="Match the grind to your brew method."
          options={grindOptions}
        />
        <OptionsInput
          name="surfaceLayout"
          label="Bag surface"
          helperText="Decide which part of the bag gets your art."
          options={surfaceOptions}
        />
        <TextInput
          name="tastingNote"
          label="Tasting note"
          optionalLabel="Optional"
          helperText="Describe what makes this blend unique."
        />
        <FileUploadInput
          name="artworkFile"
          label="Upload artwork"
          helperText="Upload one JPG or PNG (max 10MB). Drag to crop in the preview."
          required
        />
        <NumberInput
          name="quantity"
          label="Quantity"
          helperText="Limit 10 bags per order."
          min={1}
          max={10}
          defaultValue={1}
          required
        />
        <Button type="submit" variant="primary">
          Add to cart
        </Button>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </form>
    </div>
  );
};

export default CustomizationPanel;
