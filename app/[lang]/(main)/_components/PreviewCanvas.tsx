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

import {
  type ElementPosition,
  type SurfaceValue,
  type TemplatePreset,
  type TextTransform,
  defaultPanelColor,
  sanitizeHexColor,
} from "./formConfig";

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
const NAME_FONT_MAX = 24 * CANVAS_SCALE;
const NAME_FONT_MIN = 18 * CANVAS_SCALE;
const NAME_PADDING_X = 12 * CANVAS_SCALE;
const NAME_MAX_TEXT_WIDTH = LABEL_RECT.width - NAME_PADDING_X * 2;
const NAME_CHARACTER_LIMIT = Math.max(8, Math.floor(NAME_MAX_TEXT_WIDTH / (NAME_FONT_MIN * 0.55)));
const ROAST_INFO_FONT_SIZE = 24 * CANVAS_SCALE;
const WEIGHT_TEXT = "225g";
const DEFAULT_LABEL_NAME = "Coffee Name";

/**
 * Convert ElementPosition (ratios 0-1) to canvas coordinates.
 * Also returns the appropriate canvas text alignment.
 */
const positionToCanvasCoords = (
  position: ElementPosition,
  labelRect: typeof LABEL_RECT
): { x: number; y: number; textAlign: CanvasTextAlign; textBaseline: CanvasTextBaseline } => {
  // Convert ratio to absolute canvas coordinates
  const x = labelRect.x + position.x * labelRect.width;
  const y = labelRect.y + position.y * labelRect.height;

  // Map anchorX to canvas textAlign
  const textAlign: CanvasTextAlign =
    position.anchorX === "left" ? "left" : position.anchorX === "right" ? "right" : "center";

  // Map anchorY to canvas textBaseline
  const textBaseline: CanvasTextBaseline =
    position.anchorY === "top" ? "top" : position.anchorY === "bottom" ? "bottom" : "middle";

  return { x, y, textAlign, textBaseline };
};

/**
 * Convert ElementPosition to label-relative coordinates (for export).
 */
const positionToLabelCoords = (
  position: ElementPosition,
  labelWidth: number,
  labelHeight: number
): { x: number; y: number; textAlign: CanvasTextAlign; textBaseline: CanvasTextBaseline } => {
  const x = position.x * labelWidth;
  const y = position.y * labelHeight;

  const textAlign: CanvasTextAlign =
    position.anchorX === "left" ? "left" : position.anchorX === "right" ? "right" : "center";

  const textBaseline: CanvasTextBaseline =
    position.anchorY === "top" ? "top" : position.anchorY === "bottom" ? "bottom" : "middle";

  return { x, y, textAlign, textBaseline };
};

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
  customerName?: string;
  nameColor?: string;
  panelColor?: string;
  nameFontFamily?: string;
  nameFontWeight?: string;
  nameFontSizeMultiplier?: number;
  roastLabel?: string;
  /** Full template preset for advanced rendering */
  templatePreset?: TemplatePreset;
  /**
   * @deprecated Use templatePreset instead. Kept for backward compatibility.
   * Only used as fallback when templatePreset is not provided.
   */
  surfaceValue?: SurfaceValue;
}

/**
 * Apply text transform to a string.
 */
const applyTextTransform = (text: string, transform: TextTransform): string => {
  switch (transform) {
    case "uppercase":
      return text.toUpperCase();
    case "lowercase":
      return text.toLowerCase();
    case "capitalize":
      return text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    default:
      return text;
  }
};

const PreviewCanvas = forwardRef<PreviewCanvasHandle, PreviewCanvasProps>(
  (
    {
      selectedArtworkFile,
      customerName,
      nameColor,
      panelColor,
      nameFontFamily,
      nameFontWeight = "400",
      nameFontSizeMultiplier = 1,
      roastLabel,
      templatePreset,
      surfaceValue = "bottom",
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
    const [fontsReady, setFontsReady] = useState(false);
    // Compute panel windows from template preset if available, otherwise use surface windows
    const activeWindows = useMemo(() => {
      // Border panel creates a frame (4 edge rectangles)
      if (templatePreset?.borderPanel?.visible && templatePreset.borderPanel.sideThicknessRatio > 0) {
        // Side thickness (left/right) - relative to label width
        const sideThickness = Math.round(LABEL_RECT.width * templatePreset.borderPanel.sideThicknessRatio);
        // Edge thickness (top/bottom) - relative to label height, defaults to sideThicknessRatio if not specified
        const edgeThickness = Math.round(
          LABEL_RECT.height *
            (templatePreset.borderPanel.edgeThicknessRatio ?? templatePreset.borderPanel.sideThicknessRatio)
        );
        const windows: SurfaceWindow[] = [
          // Top edge
          { x: LABEL_RECT.x, y: LABEL_RECT.y, width: LABEL_RECT.width, height: edgeThickness },
          // Bottom edge
          {
            x: LABEL_RECT.x,
            y: LABEL_RECT.y + LABEL_RECT.height - edgeThickness,
            width: LABEL_RECT.width,
            height: edgeThickness,
          },
          // Left edge (between top and bottom)
          {
            x: LABEL_RECT.x,
            y: LABEL_RECT.y + edgeThickness,
            width: sideThickness,
            height: LABEL_RECT.height - edgeThickness * 2,
          },
          // Right edge (between top and bottom)
          {
            x: LABEL_RECT.x + LABEL_RECT.width - sideThickness,
            y: LABEL_RECT.y + edgeThickness,
            width: sideThickness,
            height: LABEL_RECT.height - edgeThickness * 2,
          },
        ];
        return windows;
      }

      if (templatePreset?.topPanel || templatePreset?.bottomPanel) {
        const windows: SurfaceWindow[] = [];

        // Top panel
        if (templatePreset.topPanel?.visible && templatePreset.topPanel.heightRatio > 0) {
          const height = Math.round(LABEL_RECT.height * templatePreset.topPanel.heightRatio);
          windows.push({
            x: LABEL_RECT.x,
            y: LABEL_RECT.y,
            width: LABEL_RECT.width,
            height,
          });
        }

        // Bottom panel
        if (templatePreset.bottomPanel?.visible && templatePreset.bottomPanel.heightRatio > 0) {
          const height = Math.round(LABEL_RECT.height * templatePreset.bottomPanel.heightRatio);
          windows.push({
            x: LABEL_RECT.x,
            y: LABEL_RECT.y + LABEL_RECT.height - height,
            width: LABEL_RECT.width,
            height,
          });
        }

        return windows;
      }

      return SURFACE_WINDOWS[surfaceValue] ?? SURFACE_WINDOWS.bottom;
    }, [surfaceValue, templatePreset]);
    const nameTextColor = useMemo<string>(() => sanitizeHexColor(nameColor), [nameColor]);
    const panelFillColor = useMemo<string>(
      () => sanitizeHexColor(panelColor, defaultPanelColor),
      [panelColor]
    );

    // Helper to resolve CSS variable to actual font family
    const resolveFontFamily = useCallback((): string => {
      if (!nameFontFamily) return DEFAULT_NAME_FONT_FAMILY;
      if (!nameFontFamily.startsWith("var(")) return nameFontFamily;

      if (typeof document === "undefined") return DEFAULT_NAME_FONT_FAMILY;

      const varName = nameFontFamily.replace(/var\((--[^)]+)\)/, "$1").trim();
      const computedValue = getComputedStyle(document.body).getPropertyValue(varName);
      return computedValue.trim() || DEFAULT_NAME_FONT_FAMILY;
    }, [nameFontFamily]);

    // Resolved font family - depends on fontsReady to re-resolve after fonts load
    const resolvedFontFamily = useMemo<string>(() => {
      // Force re-computation when fonts are ready
      void fontsReady;
      return resolveFontFamily();
    }, [resolveFontFamily, fontsReady]);

    // Explicitly load the font and trigger re-render when ready
    // document.fonts.load() forces the browser to load the font even if no DOM element uses it
    useEffect(() => {
      if (typeof document === "undefined") return;

      // Reset fontsReady when font family changes
      setFontsReady(false);

      let cancelled = false;

      // Wait for document.fonts.ready first (ensures @font-face rules are parsed and CSS vars available)
      document.fonts.ready
        .then(() => {
          if (cancelled) return;

          // Re-resolve font family after document.fonts.ready (CSS vars now guaranteed available)
          const fontFamily = resolveFontFamily();

          if (fontFamily === DEFAULT_NAME_FONT_FAMILY) {
            setFontsReady(true);
            return;
          }

          // Explicitly load our specific font
          const fontString = `${NAME_FONT_MAX}px ${fontFamily}`;
          return document.fonts.load(fontString);
        })
        .then(() => {
          if (!cancelled) setFontsReady(true);
        })
        .catch(() => {
          // Font failed to load, proceed with fallback
          if (!cancelled) setFontsReady(true);
        });

      return () => {
        cancelled = true;
      };
    }, [resolveFontFamily]);

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

      // Draw body color if template has one (for split-panel designs)
      if (templatePreset?.bodyColor) {
        context.fillStyle = templatePreset.bodyColor;
        context.fillRect(LABEL_RECT.x, LABEL_RECT.y, LABEL_RECT.width, LABEL_RECT.height);
      }

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

      // Get text transform from template preset
      const textTransform = templatePreset?.textTransform ?? "capitalize";
      const isNameItalic = templatePreset?.nameItalic ?? false;

      // Compute effective font weights (template preset overrides prop)
      const effectiveNameFontWeight = templatePreset?.nameFontWeight ?? nameFontWeight;
      const effectiveSecondaryFontWeight =
        templatePreset?.secondaryFontWeight ?? templatePreset?.nameFontWeight ?? nameFontWeight;

      // Compute effective font size multipliers (template preset overrides prop)
      const effectiveNameFontMultiplier = templatePreset?.nameFontSizeMultiplier ?? nameFontSizeMultiplier;
      const effectiveSecondaryFontMultiplier =
        templatePreset?.secondaryFontSizeMultiplier ?? nameFontSizeMultiplier;

      // Default positions if not specified in template
      const defaultNamePosition: ElementPosition = { x: 0.05, y: 0.5, anchorX: "left", anchorY: "middle" };
      const defaultRoastPosition: ElementPosition = { x: 0.05, y: 0.9, anchorX: "left", anchorY: "middle" };
      const defaultWeightPosition: ElementPosition = { x: 0.95, y: 0.9, anchorX: "right", anchorY: "middle" };

      // Draw name text using coordinate-based positioning
      if (sanitizedName) {
        const transformedName = applyTextTransform(sanitizedName, textTransform);
        const italicPrefix = isNameItalic ? "italic " : "";
        const namePlan = planNameRendering(
          context,
          transformedName,
          resolvedFontFamily,
          `${italicPrefix}${effectiveNameFontWeight}`,
          effectiveNameFontMultiplier
        );
        if (namePlan) {
          // Use coordinate-based positioning
          const namePos = templatePreset?.namePosition ?? defaultNamePosition;
          const { x: textX, y: textY, textAlign, textBaseline } = positionToCanvasCoords(namePos, LABEL_RECT);

          context.font = `${italicPrefix}${namePlan.fontWeight} ${namePlan.fontSize}px ${namePlan.fontFamily}`;
          context.textAlign = textAlign;
          context.textBaseline = textBaseline;
          context.fillStyle = nameTextColor;
          context.fillText(namePlan.text, textX, textY, NAME_MAX_TEXT_WIDTH);
        }
      }

      // Draw roast and weight using coordinate-based positioning
      if (roastLabel) {
        const transformedRoast = applyTextTransform(roastLabel, textTransform);
        const transformedWeight = applyTextTransform(WEIGHT_TEXT, textTransform);
        const scaledRoastFontSize = ROAST_INFO_FONT_SIZE * effectiveSecondaryFontMultiplier;
        context.font = `${effectiveSecondaryFontWeight} ${scaledRoastFontSize}px ${resolvedFontFamily}`;
        context.fillStyle = templatePreset?.secondaryTextColor ?? nameTextColor;

        // Draw roast at specified coordinates
        const roastPos = templatePreset?.roastPosition ?? defaultRoastPosition;
        const {
          x: roastX,
          y: roastY,
          textAlign: roastAlign,
          textBaseline: roastBaseline,
        } = positionToCanvasCoords(roastPos, LABEL_RECT);

        context.textAlign = roastAlign;
        context.textBaseline = roastBaseline;
        context.fillText(transformedRoast, roastX, roastY);

        // Draw weight at specified coordinates
        const weightPos = templatePreset?.weightPosition ?? defaultWeightPosition;
        const {
          x: weightX,
          y: weightY,
          textAlign: weightAlign,
          textBaseline: weightBaseline,
        } = positionToCanvasCoords(weightPos, LABEL_RECT);

        context.textAlign = weightAlign;
        context.textBaseline = weightBaseline;
        context.fillText(transformedWeight, weightX, weightY);
      }

      // Draw accent line if configured (using coordinate-based x position)
      if (templatePreset?.accentLine?.visible) {
        const lineColor = templatePreset.accentLine.color;
        const lineXRatio = templatePreset.accentLine.x;
        const lineWidth = 3 * CANVAS_SCALE;
        const lineHeightRatio = templatePreset.accentLine.heightRatio ?? 0.15;
        const lineHeight = LABEL_RECT.height * lineHeightRatio;

        // Convert x ratio to canvas coordinate
        const lineX = LABEL_RECT.x + lineXRatio * LABEL_RECT.width;
        const lineY = LABEL_RECT.y + (LABEL_RECT.height - lineHeight) / 2;

        context.fillStyle = lineColor;
        context.fillRect(lineX - lineWidth / 2, lineY, lineWidth, lineHeight);
      }

      // Draw icon if configured (using coordinate-based positioning)
      if (templatePreset?.icon?.type && templatePreset.icon.type !== "none") {
        const iconSizeRatio = templatePreset.icon.sizeRatio ?? 0.05;
        const iconSize = LABEL_RECT.width * iconSizeRatio;

        // Use coordinate-based positioning
        const iconPos = templatePreset.icon.position;
        const { x: iconX, y: iconY } = positionToCanvasCoords(iconPos, LABEL_RECT);

        context.fillStyle = templatePreset.secondaryTextColor ?? nameTextColor;

        if (templatePreset.icon.type === "star") {
          // Draw 6-point star
          context.beginPath();
          const spikes = 6;
          const outerRadius = iconSize / 2;
          const innerRadius = outerRadius * 0.5;
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * i) / spikes - Math.PI / 2;
            const x = iconX + Math.cos(angle) * radius;
            const y = iconY + Math.sin(angle) * radius;
            if (i === 0) context.moveTo(x, y);
            else context.lineTo(x, y);
          }
          context.closePath();
          context.fill();
        } else if (templatePreset.icon.type === "bean") {
          // Draw coffee bean shape (simplified oval)
          context.beginPath();
          context.ellipse(iconX, iconY, iconSize / 3, iconSize / 2, 0, 0, Math.PI * 2);
          context.fill();
          // Draw center line
          context.strokeStyle = panelFillColor;
          context.lineWidth = 2 * CANVAS_SCALE;
          context.beginPath();
          context.moveTo(iconX, iconY - iconSize / 3);
          context.quadraticCurveTo(iconX + iconSize / 6, iconY, iconX, iconY + iconSize / 3);
          context.stroke();
        } else if (templatePreset.icon.type === "squares") {
          // Draw 3 squares in a row
          const squareSize = iconSize / 4;
          const gap = squareSize / 2;
          for (let i = 0; i < 3; i++) {
            context.fillRect(
              iconX - (squareSize * 1.5 + gap) + i * (squareSize + gap),
              iconY - squareSize / 2,
              squareSize,
              squareSize
            );
          }
        }
      }
    }, [
      activeWindows,
      artworkImage,
      artworkOffset,
      artworkScale,
      bagImage,
      fontsReady,
      nameTextColor,
      sanitizedName,
      panelFillColor,
      resolvedFontFamily,
      nameFontWeight,
      nameFontSizeMultiplier,
      roastLabel,
      templatePreset,
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

      // Fill with body color or panel color as background
      ctx.fillStyle = templatePreset?.bodyColor ?? (artworkImage ? panelFillColor : "#ffffff");
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

      // Get text transform from template preset
      const textTransform = templatePreset?.textTransform ?? "capitalize";
      const isNameItalic = templatePreset?.nameItalic ?? false;

      // Compute effective font weights (template preset overrides prop)
      const effectiveNameFontWeight = templatePreset?.nameFontWeight ?? nameFontWeight;
      const effectiveSecondaryFontWeight =
        templatePreset?.secondaryFontWeight ?? templatePreset?.nameFontWeight ?? nameFontWeight;

      // Compute effective font size multipliers (template preset overrides prop)
      const effectiveNameFontMultiplier = templatePreset?.nameFontSizeMultiplier ?? nameFontSizeMultiplier;
      const effectiveSecondaryFontMultiplier =
        templatePreset?.secondaryFontSizeMultiplier ?? nameFontSizeMultiplier;

      // Default positions if not specified in template
      const defaultNamePosition: ElementPosition = { x: 0.05, y: 0.5, anchorX: "left", anchorY: "middle" };
      const defaultRoastPosition: ElementPosition = { x: 0.05, y: 0.9, anchorX: "left", anchorY: "middle" };
      const defaultWeightPosition: ElementPosition = { x: 0.95, y: 0.9, anchorX: "right", anchorY: "middle" };

      // Draw name text using coordinate-based positioning
      if (sanitizedName) {
        const transformedName = applyTextTransform(sanitizedName, textTransform);
        const italicPrefix = isNameItalic ? "italic " : "";
        const namePlan = planNameRendering(
          ctx,
          transformedName,
          resolvedFontFamily,
          `${italicPrefix}${effectiveNameFontWeight}`,
          effectiveNameFontMultiplier
        );
        if (namePlan) {
          // Use coordinate-based positioning (label-relative)
          const namePos = templatePreset?.namePosition ?? defaultNamePosition;
          const {
            x: textX,
            y: textY,
            textAlign,
            textBaseline,
          } = positionToLabelCoords(namePos, LABEL_WIDTH, LABEL_HEIGHT);

          ctx.font = `${italicPrefix}${namePlan.fontWeight} ${namePlan.fontSize}px ${namePlan.fontFamily}`;
          ctx.textAlign = textAlign;
          ctx.textBaseline = textBaseline;
          ctx.fillStyle = nameTextColor;
          ctx.fillText(namePlan.text, textX, textY, LABEL_WIDTH - NAME_PADDING_X * 2);
        }
      }

      // Draw roast and weight using coordinate-based positioning
      if (roastLabel) {
        const transformedRoast = applyTextTransform(roastLabel, textTransform);
        const transformedWeight = applyTextTransform(WEIGHT_TEXT, textTransform);
        const scaledRoastFontSize = ROAST_INFO_FONT_SIZE * effectiveSecondaryFontMultiplier;
        ctx.font = `${effectiveSecondaryFontWeight} ${scaledRoastFontSize}px ${resolvedFontFamily}`;
        ctx.fillStyle = templatePreset?.secondaryTextColor ?? nameTextColor;

        // Draw roast at specified coordinates
        const roastPos = templatePreset?.roastPosition ?? defaultRoastPosition;
        const {
          x: roastX,
          y: roastY,
          textAlign: roastAlign,
          textBaseline: roastBaseline,
        } = positionToLabelCoords(roastPos, LABEL_WIDTH, LABEL_HEIGHT);

        ctx.textAlign = roastAlign;
        ctx.textBaseline = roastBaseline;
        ctx.fillText(transformedRoast, roastX, roastY);

        // Draw weight at specified coordinates
        const weightPos = templatePreset?.weightPosition ?? defaultWeightPosition;
        const {
          x: weightX,
          y: weightY,
          textAlign: weightAlign,
          textBaseline: weightBaseline,
        } = positionToLabelCoords(weightPos, LABEL_WIDTH, LABEL_HEIGHT);

        ctx.textAlign = weightAlign;
        ctx.textBaseline = weightBaseline;
        ctx.fillText(transformedWeight, weightX, weightY);
      }

      // Draw accent line if configured (using coordinate-based x position)
      if (templatePreset?.accentLine?.visible) {
        const lineColor = templatePreset.accentLine.color;
        const lineXRatio = templatePreset.accentLine.x;
        const lineWidth = 3 * CANVAS_SCALE;
        const lineHeightRatio = templatePreset.accentLine.heightRatio ?? 0.15;
        const lineHeight = LABEL_HEIGHT * lineHeightRatio;

        // Convert x ratio to label-relative coordinate
        const lineX = lineXRatio * LABEL_WIDTH;
        const lineY = (LABEL_HEIGHT - lineHeight) / 2;

        ctx.fillStyle = lineColor;
        ctx.fillRect(lineX - lineWidth / 2, lineY, lineWidth, lineHeight);
      }

      // Draw icon if configured (using coordinate-based positioning)
      if (templatePreset?.icon?.type && templatePreset.icon.type !== "none") {
        const iconSizeRatio = templatePreset.icon.sizeRatio ?? 0.05;
        const iconSize = LABEL_WIDTH * iconSizeRatio;

        // Use coordinate-based positioning (label-relative)
        const iconPos = templatePreset.icon.position;
        const { x: iconX, y: iconY } = positionToLabelCoords(iconPos, LABEL_WIDTH, LABEL_HEIGHT);

        ctx.fillStyle = templatePreset.secondaryTextColor ?? nameTextColor;

        if (templatePreset.icon.type === "star") {
          // Draw 6-point star
          ctx.beginPath();
          const spikes = 6;
          const outerRadius = iconSize / 2;
          const innerRadius = outerRadius * 0.5;
          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (Math.PI * i) / spikes - Math.PI / 2;
            const x = iconX + Math.cos(angle) * radius;
            const y = iconY + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.fill();
        } else if (templatePreset.icon.type === "bean") {
          // Draw coffee bean shape
          ctx.beginPath();
          ctx.ellipse(iconX, iconY, iconSize / 3, iconSize / 2, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = panelFillColor;
          ctx.lineWidth = 2 * CANVAS_SCALE;
          ctx.beginPath();
          ctx.moveTo(iconX, iconY - iconSize / 3);
          ctx.quadraticCurveTo(iconX + iconSize / 6, iconY, iconX, iconY + iconSize / 3);
          ctx.stroke();
        } else if (templatePreset.icon.type === "squares") {
          const squareSize = iconSize / 4;
          const gap = squareSize / 2;
          for (let i = 0; i < 3; i++) {
            ctx.fillRect(
              iconX - (squareSize * 1.5 + gap) + i * (squareSize + gap),
              iconY - squareSize / 2,
              squareSize,
              squareSize
            );
          }
        }
      }

      return new Promise((resolve) => {
        exportCanvas.toBlob((blob) => resolve(blob), "image/png", 1.0);
      });
    }, [
      activeWindows,
      artworkImage,
      artworkOffset,
      artworkScale,
      nameTextColor,
      nameFontSizeMultiplier,
      nameFontWeight,
      panelFillColor,
      resolvedFontFamily,
      sanitizedName,
      roastLabel,
      templatePreset,
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
