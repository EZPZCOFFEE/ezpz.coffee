"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import NextImage, { type StaticImageData } from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import FileUploadInput from "@/components/form/FileUpload";
import NumberInput from "@/components/form/NumberInput";
import OptionsInput from "@/components/form/OptionsInput";
import TextInput from "@/components/form/TextInput";
import Button from "@/components/shared/Button";
import bagMockupBlank from "@/public/bags/mock-up-blank.jpg";
import beanGrindIcon from "@/public/grind/bean.png";
import coarseGrindIcon from "@/public/grind/coarse.png";
import fineGrindIcon from "@/public/grind/fine.png";
import darkRoastIcon from "@/public/roast/dark.png";
import lightRoastIcon from "@/public/roast/light.png";
import mediumRoastIcon from "@/public/roast/medium.png";

import styles from "./styles.module.scss";

const CANVAS_WIDTH = 360;
const CANVAS_HEIGHT = 480;

const roastValues = ["light", "medium", "dark"] as const;
type RoastValue = (typeof roastValues)[number];

const grindValues = ["bean", "coarse", "fine"] as const;
type GrindValue = (typeof grindValues)[number];

interface OptionDefinition<TValue extends string> {
  value: TValue;
  label: string;
  icon: ReactNode;
}

const createOptionIcon = (src: StaticImageData, alt: string) => (
  <NextImage src={src} alt={alt} width={28} height={28} />
);

const roastOptions: readonly OptionDefinition<RoastValue>[] = [
  { value: "light", label: "Light roast", icon: createOptionIcon(lightRoastIcon, "Light roast") },
  { value: "medium", label: "Medium roast", icon: createOptionIcon(mediumRoastIcon, "Medium roast") },
  { value: "dark", label: "Dark roast", icon: createOptionIcon(darkRoastIcon, "Dark roast") },
];

const grindOptions: readonly OptionDefinition<GrindValue>[] = [
  { value: "bean", label: "Whole bean", icon: createOptionIcon(beanGrindIcon, "Whole bean") },
  { value: "coarse", label: "Coarse grind", icon: createOptionIcon(coarseGrindIcon, "Coarse grind") },
  { value: "fine", label: "Fine grind", icon: createOptionIcon(fineGrindIcon, "Fine grind") },
];

const getOptionLabel = <TValue extends string>(
  value: TValue | undefined,
  options: readonly OptionDefinition<TValue>[]
) => options.find((option) => option.value === value)?.label;

const isFileLike = (value: unknown): value is File => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  if (typeof File !== "undefined" && value instanceof File) {
    return true;
  }

  const possibleFile = value as Record<string, unknown>;
  return (
    typeof possibleFile.name === "string" &&
    typeof possibleFile.size === "number" &&
    typeof possibleFile.type === "string"
  );
};

const fileSchema = z.custom<File>((value) => isFileLike(value), {
  message: "Upload a valid artwork file",
});

const customizationFormSchema = z.object({
  customerName: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be 50 characters or fewer"),
  roastProfile: z.enum(roastValues, { message: "Select a roast profile" }),
  grindSetting: z.enum(grindValues, { message: "Select a grind setting" }),
  tastingNote: z
    .string()
    .max(120, "Tasting note must be 120 characters or fewer")
    .optional()
    .or(z.literal("")),
  quantity: z
    .number()
    .int({ message: "Quantity must be a whole number" })
    .min(1, "Select at least 1 bag")
    .max(10, "Limit 10 bags per order"),
  artworkFile: z
    .array(fileSchema)
    .min(1, "Upload your bag artwork")
    .max(1, "Only one artwork file is allowed"),
});

type CustomizationFormValues = z.infer<typeof customizationFormSchema>;

const formatPreviewValue = (value: string | undefined, placeholder: string) =>
  value && value.trim().length > 0 ? value : placeholder;

const Home = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const bagCanvasRef = useRef<HTMLCanvasElement | null>(null);
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

  useEffect(() => {
    const canvas = bagCanvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const image = new Image();
    image.src = bagMockupBlank.src;
    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      const drawWidth = image.width * scale;
      const drawHeight = image.height * scale;
      const offsetX = (canvas.width - drawWidth) / 2;
      const offsetY = (canvas.height - drawHeight) / 2;

      context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.panelTitle}>Customize</h1>
        <FormProvider {...formMethods}>
          <form className={styles.panelForm} onSubmit={(event) => void handleFormSubmit(event)} noValidate>
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
            <TextInput
              name="tastingNote"
              label="Tasting note"
              optionalLabel="Optional"
              helperText="Describe what makes this blend unique."
            />
            <FileUploadInput
              name="artworkFile"
              label="Upload artwork"
              helperText="PNG, JPG, or PDF. Limit 1 file."
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
        </FormProvider>
      </div>
      <div className={styles.display}>
        <h2 className={styles.displayHeader}>
          Preview <span className={styles.productTitle}>225g bag</span>
        </h2>
        <div className={styles.displayContent}>
          <div className={styles.canvasWrapper}>
            <canvas
              ref={bagCanvasRef}
              className={styles.previewCanvas}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              role="img"
              aria-label="Bag mockup preview"
            />
          </div>
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
                {formatPreviewValue(watchedValues.tastingNote, "Tell customers what to expect")}
              </span>
            </li>
            <li>
              <span className={styles.previewLabel}>Quantity</span>
              <span className={styles.previewValue}>
                {`${watchedValues.quantity ?? 1} bag${(watchedValues.quantity ?? 1) > 1 ? "s" : ""}`}
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
