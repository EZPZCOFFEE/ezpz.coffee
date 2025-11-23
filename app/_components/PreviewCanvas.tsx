"use client";

import {
  type ChangeEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import styles from "@/app/styles.module.scss";
import bagMockupBlank from "@/public/bags/mock-up-blank.jpg";

import { SurfaceValue } from "./formConfig";

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
const BOTTOM_STRIP_HEIGHT = 72;
const PANEL_HEIGHT = 62;
const PANEL_GAP = 30;

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
  const startY = LABEL_RECT.y + (LABEL_RECT.size - totalPanelHeight) / 2;
  return [
    { x: LABEL_RECT.x, y: startY, width: LABEL_RECT.size, height: PANEL_HEIGHT },
    { x: LABEL_RECT.x, y: startY + PANEL_HEIGHT + PANEL_GAP, width: LABEL_RECT.size, height: PANEL_HEIGHT },
  ];
};

const SURFACE_WINDOWS: Record<SurfaceValue, readonly SurfaceWindow[]> = {
  panels: createPanelsWindows(),
  full: [{ x: LABEL_RECT.x, y: LABEL_RECT.y, width: LABEL_RECT.size, height: LABEL_RECT.size }],
  bottom: [
    {
      x: LABEL_RECT.x,
      y: LABEL_RECT.y + LABEL_RECT.size - BOTTOM_STRIP_HEIGHT,
      width: LABEL_RECT.size,
      height: BOTTOM_STRIP_HEIGHT,
    },
  ],
};

interface PreviewCanvasProps {
  selectedArtworkFile: File | undefined;
  surfaceValue: SurfaceValue;
}

const PreviewCanvas = ({ selectedArtworkFile, surfaceValue }: PreviewCanvasProps) => {
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
      activeWindows.forEach((windowRect) => {
        context.rect(windowRect.x, windowRect.y, windowRect.width, windowRect.height);
      });
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
    activeWindows.forEach((windowRect) => {
      context.strokeRect(windowRect.x, windowRect.y, windowRect.width, windowRect.height);
    });
  }, [activeWindows, artworkImage, artworkOffset, artworkScale, bagImage]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const getCanvasPoint = (event: ReactPointerEvent<HTMLCanvasElement>) => {
    const canvas = event.currentTarget;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * canvas.width,
      y: ((event.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const isPointInsideCrop = (point: { x: number; y: number }) =>
    activeWindows.some(
      (windowRect) =>
        point.x >= windowRect.x &&
        point.x <= windowRect.x + windowRect.width &&
        point.y >= windowRect.y &&
        point.y <= windowRect.y + windowRect.height
    );

  const handleCanvasPointerDown = (event: ReactPointerEvent<HTMLCanvasElement>) => {
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
            <p className={styles.cropHint}>
              Drag inside the highlighted area—only the outlined surface prints.
            </p>
          </>
        ) : (
          <p className={styles.cropHint}>Upload an image to unlock the cropper.</p>
        )}
      </div>
    </div>
  );
};

export default PreviewCanvas;
