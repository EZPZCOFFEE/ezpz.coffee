"use client";

import { CaretCircleLeftIcon, CaretCircleRightIcon } from "@phosphor-icons/react/ssr";
import classNames from "classnames";
import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  caretSize?: number;
  showCarets?: boolean;
  dependencies?: React.DependencyList;
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className,
  caretSize = 18,
  showCarets = true,
  dependencies = [],
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasLeftOverflow, setHasLeftOverflow] = useState(false);
  const [hasRightOverflow, setHasRightOverflow] = useState(false);

  const checkOverflow = useCallback(() => {
    if (contentRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;
      const EPSILON = 1; // account for sub-pixel rounding
      const leftOverflow = scrollLeft > EPSILON;
      const rightOverflow = scrollLeft + clientWidth < scrollWidth - EPSILON;
      setHasLeftOverflow(leftOverflow);
      setHasRightOverflow(rightOverflow);
    }
  }, []);

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkOverflow, ...dependencies]);

  const handleScroll = () => {
    checkOverflow();
    // Ensure state sync at the very end of momentum scroll
    // Some browsers report fractional positions slightly before paint
    requestAnimationFrame(checkOverflow);
  };

  const scrollToEnd = (direction: "left" | "right") => {
    if (contentRef.current) {
      const { scrollWidth, clientWidth } = contentRef.current;
      const scrollTo = direction === "left" ? 0 : scrollWidth - clientWidth;
      contentRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={classNames(styles.container, className, {
        [styles.hasLeftOverflow]: hasLeftOverflow,
        [styles.hasRightOverflow]: hasRightOverflow,
      })}
    >
      <div ref={contentRef} className={styles.content} onScroll={handleScroll}>
        {children}
      </div>
      {showCarets && (
        <>
          {hasLeftOverflow && (
            <div
              className={classNames(styles.caret, styles.left, styles.visible)}
              onClick={() => scrollToEnd("left")}
            >
              <CaretCircleLeftIcon size={caretSize} />
            </div>
          )}
          {hasRightOverflow && (
            <div
              className={classNames(styles.caret, styles.right, styles.visible)}
              onClick={() => scrollToEnd("right")}
            >
              <CaretCircleRightIcon size={caretSize} />
            </div>
          )}
        </>
      )}
    </div>
  );
};
