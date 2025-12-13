"use client";

import {
  forwardRef,
  type ChangeEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import styles from "@/app/styles.module.scss";
import bagMockup from "@/public/bags/mockup.jpg";

import { SurfaceValue, defaultPanelColor, sanitizeHexColor } from "./formConfig";

export interface PreviewCanvasHandle {
  exportLabelImage: () => Promise<Blob | null>;
}

const CANVAS_SCALE = 2;
const CANVAS_SIDE = Math.round(480 * CANVAS_SCALE);
const CANVAS_WIDTH = CANVAS_SIDE;
const CANVAS_HEIGHT = CANVAS_SIDE;
// Target label dimensions: 6.5" (width) × 5.125" (height) — aspect ratio 1.2683:1
const LABEL_WIDTH_RATIO = 0.95;
const LABEL_HEIGHT_RATIO = 0.749; // 0.95 × (5.125 / 6.5) to maintain aspect ratio
const LABEL_VERTICAL_OFFSET_RATIO = 0.23;
const LABEL_HORIZONTAL_SHIFT_RATIO = 0.0;
const PANEL_GAP_RATIO = 0.6;
const BOTTOM_STRIP_HEIGHT_RATIO = 0.2;
const LABEL_WIDTH = Math.round(CANVAS_SIDE * LABEL_WIDTH_RATIO);
const LABEL_HEIGHT = Math.round(CANVAS_SIDE * LABEL_HEIGHT_RATIO);
const LABEL_SQUARE_X = Math.max(
  0,
  Math.round((CANVAS_WIDTH - LABEL_WIDTH) / 2 - CANVAS_SIDE * LABEL_HORIZONTAL_SHIFT_RATIO)
);
const LABEL_SQUARE_Y = Math.round(CANVAS_HEIGHT * LABEL_VERTICAL_OFFSET_RATIO);
const LABEL_RECT = {
  x: LABEL_SQUARE_X,
  y: LABEL_SQUARE_Y,
  width: LABEL_WIDTH,
  height: LABEL_HEIGHT,
} as const;
const ARTWORK_SCALE_MIN = 1;
const ARTWORK_SCALE_MAX = 3;
const ARTWORK_SCALE_STEP = 0.01;
const BOTTOM_STRIP_HEIGHT = Math.round(LABEL_HEIGHT * BOTTOM_STRIP_HEIGHT_RATIO);
const PANEL_GAP = Math.round(LABEL_HEIGHT * PANEL_GAP_RATIO);
const PANEL_HEIGHT = Math.max(0, Math.round((LABEL_HEIGHT - PANEL_GAP) / 2));

interface ArtworkOffset {
  x: number;
  y: number;
}

const createDefaultArtworkOffset = (): ArtworkOffset => ({ x: 0, y: 0 });

interface SurfaceWindow {
  x: number;
  y: number;
  width: number;
  height: number;
}

const createPanelsWindows = (): readonly SurfaceWindow[] => {
  const totalPanelHeight = PANEL_HEIGHT * 2 + PANEL_GAP;
  const startY = LABEL_RECT.y + (LABEL_RECT.height - totalPanelHeight) / 2;
  return [
    { x: LABEL_RECT.x, y: startY, width: LABEL_RECT.width, height: PANEL_HEIGHT },
    { x: LABEL_RECT.x, y: startY + PANEL_HEIGHT + PANEL_GAP, width: LABEL_RECT.width, height: PANEL_HEIGHT },
  ];
};

const SURFACE_WINDOWS: Record<SurfaceValue, readonly SurfaceWindow[]> = {
  sandwich: createPanelsWindows(),
  full: [],
  bottom: [
    {
      x: LABEL_RECT.x,
      y: LABEL_RECT.y + LABEL_RECT.height - BOTTOM_STRIP_HEIGHT,
      width: LABEL_RECT.width,
      height: BOTTOM_STRIP_HEIGHT,
    },
  ],
};

const DEFAULT_NAME_FONT_FAMILY = 'Helvetica, "Helvetica Neue", Arial, sans-serif';
const NAME_FONT_MAX = 27 * CANVAS_SCALE;
const NAME_FONT_MIN = 18 * CANVAS_SCALE;
const NAME_PADDING_X = 12 * CANVAS_SCALE;
const NAME_VERTICAL_OFFSET = 2 * CANVAS_SCALE;
const NAME_MAX_TEXT_WIDTH = LABEL_RECT.width - NAME_PADDING_X * 2;
const NAME_CHARACTER_LIMIT = Math.max(8, Math.floor(NAME_MAX_TEXT_WIDTH / (NAME_FONT_MIN * 0.55)));
const ROAST_INFO_FONT_SIZE = 16 * CANVAS_SCALE;
const WEIGHT_TEXT = "225g";
const DEFAULT_LABEL_NAME = "Coffee Name";

const planNameRendering = (
  context: CanvasRenderingContext2D,
  rawName: string,
  fontFamily: string,
  fontWeight: string,
  sizeMultiplier: number
): {
  text: string;
  fontSize: number;
  fontFamily: string;
  fontWeight: string;
} | null => {
  const sanitized = rawName.trim();
  if (!sanitized) {
    return null;
  }

  const scaledFontMax = NAME_FONT_MAX * sizeMultiplier;
  const scaledFontMin = NAME_FONT_MIN * sizeMultiplier;

  const hardLimit = Math.max(1, NAME_CHARACTER_LIMIT);
  let workingName = sanitized.length > hardLimit ? sanitized.slice(0, hardLimit) : sanitized;
  let fontSize = scaledFontMax;

  const setFont = (size: number) => {
    context.font = `${fontWeight} ${size}px ${fontFamily}`;
  };

  setFont(fontSize);
  let measuredWidth = context.measureText(workingName).width;

  while (measuredWidth > NAME_MAX_TEXT_WIDTH && fontSize > scaledFontMin) {
    const scale = Math.max(0.5, NAME_MAX_TEXT_WIDTH / measuredWidth);
    const nextFontSize = Math.max(scaledFontMin, Math.floor(fontSize * scale));
    if (nextFontSize === fontSize) {
      fontSize = Math.max(scaledFontMin, fontSize - 1);
    } else {
      fontSize = nextFontSize;
    }
    setFont(fontSize);
    measuredWidth = context.measureText(workingName).width;
  }

  if (measuredWidth > NAME_MAX_TEXT_WIDTH) {
    const ellipsis = "…";
    let truncated = workingName;
    while (
      truncated.length > 1 &&
      context.measureText(`${truncated}${ellipsis}`).width > NAME_MAX_TEXT_WIDTH
    ) {
      truncated = truncated.slice(0, -1);
    }
    workingName = `${truncated}${ellipsis}`;
    fontSize = scaledFontMin;
    setFont(fontSize);
  }

  return {
    text: workingName,
    fontSize,
    fontFamily,
    fontWeight,
  };
};

interface PreviewCanvasProps {
  selectedArtworkFile: File | undefined;
  surfaceValue: SurfaceValue;
  customerName?: string;
  nameColor?: string;
  panelColor?: string;
  nameFontFamily?: string;
  nameFontWeight?: string;
  nameFontSizeMultiplier?: number;
  roastLabel?: string;
}

const PreviewCanvas = forwardRef<PreviewCanvasHandle, PreviewCanvasProps>(
  (
    {
      selectedArtworkFile,
      surfaceValue,
      customerName,
      nameColor,
      panelColor,
      nameFontFamily,
      nameFontWeight = "400",
      nameFontSizeMultiplier = 1,
      roastLabel,
    },
    ref
  ) => {
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
    const activeWindows = useMemo(
      () => SURFACE_WINDOWS[surfaceValue] ?? SURFACE_WINDOWS.bottom,
      [surfaceValue]
    );
    const nameTextColor = useMemo<string>(() => sanitizeHexColor(nameColor), [nameColor]);
    const panelFillColor = useMemo<string>(
      () => sanitizeHexColor(panelColor, defaultPanelColor),
      [panelColor]
    );

    // Resolve CSS variable to actual font family for canvas rendering
    // Next.js localFont sets CSS variables on <body>, not <html>
    const resolvedFontFamily = useMemo<string>(() => {
      if (!nameFontFamily) return DEFAULT_NAME_FONT_FAMILY;
      if (!nameFontFamily.startsWith("var(")) return nameFontFamily;

      if (typeof document === "undefined") return DEFAULT_NAME_FONT_FAMILY;

      const varName = nameFontFamily.replace(/var\((--[^)]+)\)/, "$1").trim();
      const computedValue = getComputedStyle(document.body).getPropertyValue(varName);
      return computedValue.trim() || DEFAULT_NAME_FONT_FAMILY;
    }, [nameFontFamily]);
    const bottomPanelRect = useMemo(() => {
      if (surfaceValue === "sandwich") {
        return SURFACE_WINDOWS.sandwich[1];
      }
      if (surfaceValue === "bottom") {
        return SURFACE_WINDOWS.bottom[0];
      }
      return {
        x: LABEL_RECT.x,
        y: LABEL_RECT.y + LABEL_RECT.height - BOTTOM_STRIP_HEIGHT,
        width: LABEL_RECT.width,
        height: BOTTOM_STRIP_HEIGHT,
      };
    }, [surfaceValue]);

    const topPanelRect = useMemo(() => {
      if (surfaceValue === "sandwich") {
        return SURFACE_WINDOWS.sandwich[0];
      }
      // For bottom and full layouts, use a virtual top panel area
      return {
        x: LABEL_RECT.x,
        y: LABEL_RECT.y,
        width: LABEL_RECT.width,
        height: BOTTOM_STRIP_HEIGHT,
      };
    }, [surfaceValue]);

    useEffect(() => {
      const image = new Image();
      image.src = bagMockup.src;
      image.onload = () => {
        setBagImage(image);
      };

      return () => {
        image.onload = null;
      };
    }, []);

    useEffect(() => {
      if (!selectedArtworkFile?.type?.startsWith("image/")) {
        // Clean up object URL synchronously
        if (artworkObjectUrlRef.current) {
          URL.revokeObjectURL(artworkObjectUrlRef.current);
          artworkObjectUrlRef.current = null;
        }
        // Schedule state resets asynchronously to avoid cascading renders
        queueMicrotask(() => {
          setArtworkImage(null);
          setArtworkScale(ARTWORK_SCALE_MIN);
          setArtworkOffset(createDefaultArtworkOffset());
        });
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

        const baseScale = Math.max(
          LABEL_RECT.width / artworkImage.width,
          LABEL_RECT.height / artworkImage.height
        );
        const totalScale = baseScale * (scaleOverride ?? artworkScale);
        const drawWidth = artworkImage.width * totalScale;
        const drawHeight = artworkImage.height * totalScale;
        const maxX = Math.max(0, (drawWidth - LABEL_RECT.width) / 2);
        const maxY = Math.max(0, (drawHeight - LABEL_RECT.height) / 2);

        return {
          x: Math.min(maxX, Math.max(-maxX, offset.x)),
          y: Math.min(maxY, Math.max(-maxY, offset.y)),
        };
      },
      [artworkImage, artworkScale]
    );

    const trimmedName = customerName?.trim() ?? "";
    const sanitizedName = trimmedName.length > 0 ? trimmedName : DEFAULT_LABEL_NAME;

    const drawCanvas = useCallback(() => {
      const canvas = bagCanvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#fff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      if (!bagImage) return;

      const bagScale = Math.min(canvas.width / bagImage.width, canvas.height / bagImage.height);
      const bagWidth = bagImage.width * bagScale;
      const bagHeight = bagImage.height * bagScale;
      const bagOffsetX = (canvas.width - bagWidth) / 2;
      const bagOffsetY = (canvas.height - bagHeight) / 2;

      // Draw bag
      context.drawImage(bagImage, bagOffsetX, bagOffsetY, bagWidth, bagHeight);

      // Draw artwork clipped to label area
      if (artworkImage) {
        context.save();
        context.beginPath();
        context.rect(LABEL_RECT.x, LABEL_RECT.y, LABEL_RECT.width, LABEL_RECT.height);
        context.clip();

        const baseScale = Math.max(
          LABEL_RECT.width / artworkImage.width,
          LABEL_RECT.height / artworkImage.height
        );
        const totalScale = baseScale * artworkScale;
        const drawWidth = artworkImage.width * totalScale;
        const drawHeight = artworkImage.height * totalScale;
        const centerX = LABEL_RECT.x + LABEL_RECT.width / 2 + artworkOffset.x;
        const centerY = LABEL_RECT.y + LABEL_RECT.height / 2 + artworkOffset.y;

        context.drawImage(
          artworkImage,
          centerX - drawWidth / 2,
          centerY - drawHeight / 2,
          drawWidth,
          drawHeight
        );
        context.restore();
      }

      // Draw panels
      if (activeWindows.length > 0) {
        context.fillStyle = panelFillColor;
        activeWindows.forEach((windowRect) => {
          context.fillRect(windowRect.x, windowRect.y, windowRect.width, windowRect.height);
        });
      }

      // Draw name text
      if (sanitizedName) {
        const namePlan = planNameRendering(
          context,
          sanitizedName,
          resolvedFontFamily,
          nameFontWeight,
          nameFontSizeMultiplier
        );
        if (namePlan) {
          const panelTextMaxWidth = Math.max(40, bottomPanelRect.width - NAME_PADDING_X * 2);
          const textX = bottomPanelRect.x + NAME_PADDING_X;
          const textY = bottomPanelRect.y + bottomPanelRect.height / 2 + NAME_VERTICAL_OFFSET;
          context.font = `${namePlan.fontWeight} ${namePlan.fontSize}px ${namePlan.fontFamily}`;
          context.textAlign = "left";
          context.textBaseline = "middle";
          context.fillStyle = nameTextColor;
          context.fillText(namePlan.text, textX, textY, panelTextMaxWidth);
        }
      }

      // Draw roast label and weight on top panel
      if (roastLabel) {
        const roastInfoText = `${roastLabel} · ${WEIGHT_TEXT}`;
        const roastInfoX = topPanelRect.x + NAME_PADDING_X;
        const roastInfoY = topPanelRect.y + topPanelRect.height / 2 + NAME_VERTICAL_OFFSET;
        const scaledRoastFontSize = ROAST_INFO_FONT_SIZE * nameFontSizeMultiplier;
        context.font = `${nameFontWeight} ${scaledRoastFontSize}px ${resolvedFontFamily}`;
        context.textAlign = "left";
        context.textBaseline = "middle";
        context.fillStyle = nameTextColor;
        context.fillText(roastInfoText, roastInfoX, roastInfoY);
      }
    }, [
      activeWindows,
      artworkImage,
      artworkOffset,
      artworkScale,
      bagImage,
      nameTextColor,
      sanitizedName,
      panelFillColor,
      bottomPanelRect,
      topPanelRect,
      resolvedFontFamily,
      nameFontWeight,
      nameFontSizeMultiplier,
      roastLabel,
    ]);

    useEffect(() => {
      drawCanvas();
    }, [drawCanvas]);

    const exportLabelImage = useCallback(async (): Promise<Blob | null> => {
      const exportCanvas = document.createElement("canvas");
      exportCanvas.width = LABEL_WIDTH;
      exportCanvas.height = LABEL_HEIGHT;
      const ctx = exportCanvas.getContext("2d");
      if (!ctx) return null;

      // Fill with panel color as background (or white if no artwork)
      ctx.fillStyle = artworkImage ? panelFillColor : "#ffffff";
      ctx.fillRect(0, 0, LABEL_WIDTH, LABEL_HEIGHT);

      // Draw artwork (translated so label origin is at 0,0)
      if (artworkImage) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, LABEL_WIDTH, LABEL_HEIGHT);
        ctx.clip();

        const baseScale = Math.max(LABEL_WIDTH / artworkImage.width, LABEL_HEIGHT / artworkImage.height);
        const totalScale = baseScale * artworkScale;
        const drawWidth = artworkImage.width * totalScale;
        const drawHeight = artworkImage.height * totalScale;
        const centerX = LABEL_WIDTH / 2 + artworkOffset.x;
        const centerY = LABEL_HEIGHT / 2 + artworkOffset.y;

        ctx.drawImage(artworkImage, centerX - drawWidth / 2, centerY - drawHeight / 2, drawWidth, drawHeight);
        ctx.restore();
      }

      // Draw panels (translated to label-relative coordinates)
      if (activeWindows.length > 0) {
        ctx.fillStyle = panelFillColor;
        activeWindows.forEach((windowRect) => {
          ctx.fillRect(
            windowRect.x - LABEL_RECT.x,
            windowRect.y - LABEL_RECT.y,
            windowRect.width,
            windowRect.height
          );
        });
      }

      // Draw name text (translated to label-relative coordinates)
      if (sanitizedName) {
        const namePlan = planNameRendering(
          ctx,
          sanitizedName,
          resolvedFontFamily,
          nameFontWeight,
          nameFontSizeMultiplier
        );
        if (namePlan) {
          const translatedPanel = {
            x: bottomPanelRect.x - LABEL_RECT.x,
            y: bottomPanelRect.y - LABEL_RECT.y,
            width: bottomPanelRect.width,
            height: bottomPanelRect.height,
          };
          const panelTextMaxWidth = Math.max(40, translatedPanel.width - NAME_PADDING_X * 2);
          const textX = translatedPanel.x + NAME_PADDING_X;
          const textY = translatedPanel.y + translatedPanel.height / 2 + NAME_VERTICAL_OFFSET;

          ctx.font = `${namePlan.fontWeight} ${namePlan.fontSize}px ${namePlan.fontFamily}`;
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillStyle = nameTextColor;
          ctx.fillText(namePlan.text, textX, textY, panelTextMaxWidth);
        }
      }

      // Draw roast label and weight (translated to label-relative coordinates)
      if (roastLabel) {
        const translatedTopPanel = {
          x: topPanelRect.x - LABEL_RECT.x,
          y: topPanelRect.y - LABEL_RECT.y,
          width: topPanelRect.width,
          height: topPanelRect.height,
        };
        const roastInfoText = `${roastLabel} · ${WEIGHT_TEXT}`;
        const roastInfoX = translatedTopPanel.x + NAME_PADDING_X;
        const roastInfoY = translatedTopPanel.y + translatedTopPanel.height / 2 + NAME_VERTICAL_OFFSET;
        const scaledRoastFontSize = ROAST_INFO_FONT_SIZE * nameFontSizeMultiplier;
        ctx.font = `${nameFontWeight} ${scaledRoastFontSize}px ${resolvedFontFamily}`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillStyle = nameTextColor;
        ctx.fillText(roastInfoText, roastInfoX, roastInfoY);
      }

      return new Promise((resolve) => {
        exportCanvas.toBlob((blob) => resolve(blob), "image/png", 1.0);
      });
    }, [
      activeWindows,
      artworkImage,
      artworkOffset,
      artworkScale,
      bottomPanelRect,
      topPanelRect,
      nameTextColor,
      nameFontSizeMultiplier,
      nameFontWeight,
      panelFillColor,
      resolvedFontFamily,
      sanitizedName,
      roastLabel,
    ]);

    useImperativeHandle(ref, () => ({ exportLabelImage }), [exportLabelImage]);

    const getCanvasPoint = (event: ReactPointerEvent<HTMLCanvasElement>) => {
      const canvas = event.currentTarget;
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((event.clientX - rect.left) / rect.width) * canvas.width,
        y: ((event.clientY - rect.top) / rect.height) * canvas.height,
      };
    };

    const isPointInsideLabel = (point: { x: number; y: number }) =>
      point.x >= LABEL_RECT.x &&
      point.x <= LABEL_RECT.x + LABEL_RECT.width &&
      point.y >= LABEL_RECT.y &&
      point.y <= LABEL_RECT.y + LABEL_RECT.height;

    const isPointInsidePanel = (point: { x: number; y: number }) =>
      activeWindows.some(
        (windowRect) =>
          point.x >= windowRect.x &&
          point.x <= windowRect.x + windowRect.width &&
          point.y >= windowRect.y &&
          point.y <= windowRect.y + windowRect.height
      );

    const isPointInsideArtworkRegion = (point: { x: number; y: number }) =>
      isPointInsideLabel(point) && !isPointInsidePanel(point);

    const handleCanvasPointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
      if (!artworkImage) return;
      const point = getCanvasPoint(event);
      if (!isPointInsideArtworkRegion(point)) return;

      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      dragStateRef.current = {
        pointerId: event.pointerId,
        startPoint: point,
        originOffset: artworkOffset,
      };
    };

    const handleCanvasPointerMove = (event: ReactPointerEvent<HTMLCanvasElement>) => {
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

    const handleCanvasPointerUp = (event: ReactPointerEvent<HTMLCanvasElement>) => {
      if (dragStateRef.current.pointerId !== event.pointerId) return;
      event.preventDefault();
      resetDragState(event.currentTarget, event.pointerId);
    };

    const handleCanvasPointerLeave = (event: ReactPointerEvent<HTMLCanvasElement>) => {
      if (dragStateRef.current.pointerId === null) return;
      resetDragState(event.currentTarget);
    };

    const handleCanvasPointerCancel = (event: ReactPointerEvent<HTMLCanvasElement>) => {
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
      <div className={styles.canvasWrapper}>
        <div className={styles.canvasContainer}>
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
        </div>

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
            </>
          ) : (
            <p className={styles.cropHint}>Upload an image to unlock the cropper.</p>
          )}
        </div>
      </div>
    );
  }
);

PreviewCanvas.displayName = "PreviewCanvas";

export default PreviewCanvas;
