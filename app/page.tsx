"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import NextImage, { type StaticImageData } from "next/image";
import { type ChangeEvent, type ReactNode, useCallback, useEffect, useRef, useState } from "react";
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
const LABEL_SQUARE_SIZE = 190;
const LABEL_SQUARE_X = (CANVAS_WIDTH - LABEL_SQUARE_SIZE) / 2;
const LABEL_SQUARE_Y = 155;
const LABEL_RECT = {
  x: LABEL_SQUARE_X,
  y: LABEL_SQUARE_Y,
  size: LABEL_SQUARE_SIZE,
} as const;
const ARTWORK_SCALE_MIN = 1;
const ARTWORK_SCALE_MAX = 3;
const ARTWORK_SCALE_STEP = 0.01;

const roastValues = ["light", "medium", "dark"] as const;
type RoastValue = (typeof roastValues)[number];

const grindValues = ["bean", "coarse", "fine"] as const;
type GrindValue = (typeof grindValues)[number];

interface OptionDefinition<TValue extends string> {
  value: TValue;
  label: string;
  icon: ReactNode;
}

interface ArtworkOffset {
  x: number;
  y: number;
}

const createDefaultArtworkOffset = (): ArtworkOffset => ({ x: 0, y: 0 });

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
  const dragStateRef = useRef<{
    pointerId: number | null;
    startPoint: { x: number; y: number } | null;
    originOffset: ArtworkOffset;
  }>({
    pointerId: null,
    startPoint: null,
    originOffset: createDefaultArtworkOffset(),
  });
  const artworkObjectUrlRef = useRef<string | null>(null);
  const [bagImage, setBagImage] = useState<HTMLImageElement | null>(null);
  const [artworkImage, setArtworkImage] = useState<HTMLImageElement | null>(null);
  const [artworkScale, setArtworkScale] = useState(ARTWORK_SCALE_MIN);
  const [artworkOffset, setArtworkOffset] = useState<ArtworkOffset>(createDefaultArtworkOffset);
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

  useEffect(() => {
    const image = new Image();
    image.src = bagMockupBlank.src;
    image.onload = () => {
      setBagImage(image);
    };

    return () => {
      image.onload = null;
    };
  }, []);

  useEffect(() => {
    if (!selectedArtworkFile?.type?.startsWith("image/")) {
      setArtworkImage(null);
      setArtworkScale(ARTWORK_SCALE_MIN);
      setArtworkOffset(createDefaultArtworkOffset());
      if (artworkObjectUrlRef.current) {
        URL.revokeObjectURL(artworkObjectUrlRef.current);
        artworkObjectUrlRef.current = null;
      }
      return;
    }

    const nextUrl = URL.createObjectURL(selectedArtworkFile);
    artworkObjectUrlRef.current = nextUrl;
    const image = new Image();
    image.src = nextUrl;
    image.onload = () => {
      if (artworkObjectUrlRef.current !== nextUrl) return;
      setArtworkImage(image);
      setArtworkScale(ARTWORK_SCALE_MIN);
      setArtworkOffset(createDefaultArtworkOffset());
    };
    image.onerror = () => {
      if (artworkObjectUrlRef.current !== nextUrl) return;
      setArtworkImage(null);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
      URL.revokeObjectURL(nextUrl);
      if (artworkObjectUrlRef.current === nextUrl) {
        artworkObjectUrlRef.current = null;
      }
    };
  }, [selectedArtworkFile]);

  const clampArtworkOffset = useCallback(
    (offset: ArtworkOffset, scaleOverride?: number) => {
      if (!artworkImage) {
        return offset;
      }

      const baseScale = Math.max(LABEL_RECT.size / artworkImage.width, LABEL_RECT.size / artworkImage.height);
      const totalScale = baseScale * (scaleOverride ?? artworkScale);
      const drawWidth = artworkImage.width * totalScale;
      const drawHeight = artworkImage.height * totalScale;
      const maxX = Math.max(0, (drawWidth - LABEL_RECT.size) / 2);
      const maxY = Math.max(0, (drawHeight - LABEL_RECT.size) / 2);

      return {
        x: Math.min(maxX, Math.max(-maxX, offset.x)),
        y: Math.min(maxY, Math.max(-maxY, offset.y)),
      };
    },
    [artworkImage, artworkScale]
  );

  const drawCanvas = useCallback(() => {
    const canvas = bagCanvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!bagImage) return;

    const bagScale = Math.min(canvas.width / bagImage.width, canvas.height / bagImage.height);
    const bagWidth = bagImage.width * bagScale;
    const bagHeight = bagImage.height * bagScale;
    const bagOffsetX = (canvas.width - bagWidth) / 2;
    const bagOffsetY = (canvas.height - bagHeight) / 2;

    context.drawImage(bagImage, bagOffsetX, bagOffsetY, bagWidth, bagHeight);

    context.fillStyle = "rgba(255, 255, 255, 0.88)";
    context.fillRect(LABEL_RECT.x, LABEL_RECT.y, LABEL_RECT.size, LABEL_RECT.size);

    if (artworkImage) {
      const baseScale = Math.max(LABEL_RECT.size / artworkImage.width, LABEL_RECT.size / artworkImage.height);
      const totalScale = baseScale * artworkScale;
      const drawWidth = artworkImage.width * totalScale;
      const drawHeight = artworkImage.height * totalScale;
      const centerX = LABEL_RECT.x + LABEL_RECT.size / 2 + artworkOffset.x;
      const centerY = LABEL_RECT.y + LABEL_RECT.size / 2 + artworkOffset.y;

      context.save();
      context.beginPath();
      context.rect(LABEL_RECT.x, LABEL_RECT.y, LABEL_RECT.size, LABEL_RECT.size);
      context.clip();
      context.drawImage(
        artworkImage,
        centerX - drawWidth / 2,
        centerY - drawHeight / 2,
        drawWidth,
        drawHeight
      );
      context.restore();
    }

    context.strokeStyle = "rgba(255, 137, 92, 0.95)";
    context.lineWidth = 3;
    context.strokeRect(LABEL_RECT.x, LABEL_RECT.y, LABEL_RECT.size, LABEL_RECT.size);
  }, [artworkImage, artworkOffset, artworkScale, bagImage]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const getCanvasPoint = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const isPointInsideCrop = (point: { x: number; y: number }) =>
    point.x >= LABEL_RECT.x &&
    point.x <= LABEL_RECT.x + LABEL_RECT.size &&
    point.y >= LABEL_RECT.y &&
    point.y <= LABEL_RECT.y + LABEL_RECT.size;

  const handleCanvasPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!artworkImage) return;
    const point = getCanvasPoint(event);
    if (!isPointInsideCrop(point)) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStateRef.current = {
      pointerId: event.pointerId,
      startPoint: point,
      originOffset: artworkOffset,
    };
  };

  const handleCanvasPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const dragState = dragStateRef.current;
    if (!artworkImage || dragState.pointerId !== event.pointerId || !dragState.startPoint) {
      return;
    }

    event.preventDefault();
    const point = getCanvasPoint(event);
    const delta = {
      x: point.x - dragState.startPoint.x,
      y: point.y - dragState.startPoint.y,
    };
    const nextOffset = {
      x: dragState.originOffset.x + delta.x,
      y: dragState.originOffset.y + delta.y,
    };
    setArtworkOffset(clampArtworkOffset(nextOffset));
  };

  const resetDragState = (canvas: HTMLCanvasElement, pointerId?: number) => {
    const activePointerId = dragStateRef.current.pointerId;
    if (activePointerId === null) return;
    if (typeof pointerId === "number" && activePointerId !== pointerId) return;

    if (canvas.hasPointerCapture(activePointerId)) {
      canvas.releasePointerCapture(activePointerId);
    }
    dragStateRef.current.pointerId = null;
    dragStateRef.current.startPoint = null;
    dragStateRef.current.originOffset = artworkOffset;
  };

  const handleCanvasPointerUp = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (dragStateRef.current.pointerId !== event.pointerId) return;
    event.preventDefault();
    resetDragState(event.currentTarget, event.pointerId);
  };

  const handleCanvasPointerLeave = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (dragStateRef.current.pointerId === null) return;
    resetDragState(event.currentTarget);
  };

  const handleCanvasPointerCancel = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (dragStateRef.current.pointerId === null) return;
    resetDragState(event.currentTarget);
  };

  const handleScaleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextScale = Number(event.target.value);
    setArtworkScale(nextScale);
    setArtworkOffset((previous) => clampArtworkOffset(previous, nextScale));
  };

  const handleResetArtwork = () => {
    setArtworkScale(ARTWORK_SCALE_MIN);
    setArtworkOffset(createDefaultArtworkOffset());
  };

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
              onPointerDown={handleCanvasPointerDown}
              onPointerMove={handleCanvasPointerMove}
              onPointerUp={handleCanvasPointerUp}
              onPointerLeave={handleCanvasPointerLeave}
              onPointerCancel={handleCanvasPointerCancel}
            />
            <div className={styles.canvasControls}>
              {artworkImage ? (
                <>
                  <div className={styles.canvasControlRow}>
                    <label htmlFor="artwork-scale" className={styles.cropLabel}>
                      Zoom
                    </label>
                    <input
                      id="artwork-scale"
                      className={styles.cropSlider}
                      type="range"
                      min={ARTWORK_SCALE_MIN}
                      max={ARTWORK_SCALE_MAX}
                      step={ARTWORK_SCALE_STEP}
                      value={artworkScale}
                      onChange={handleScaleChange}
                      aria-label="Adjust artwork zoom"
                    />
                    <span className={styles.cropValue}>{Math.round(artworkScale * 100)}%</span>
                  </div>
                  <div className={styles.canvasControlButtons}>
                    <button type="button" className={styles.cropResetButton} onClick={handleResetArtwork}>
                      Center image
                    </button>
                  </div>
                  <p className={styles.cropHint}>Drag inside the square—only the highlighted area prints.</p>
                </>
              ) : (
                <p className={styles.cropHint}>Upload an image to unlock the cropper.</p>
              )}
            </div>
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
