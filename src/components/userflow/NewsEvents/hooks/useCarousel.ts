// src/components/userflow/NewsEvents/hooks/useCarousel.ts
import { useState, useCallback } from "react";

interface UseCarouselProps {
  items: readonly any[];
  initialIndex?: number;
}

interface UseCarouselReturn {
  currentIndex: number;
  currentItem: any;
  goToPrevious: () => void;
  goToNext: () => void;
  goToIndex: (index: number) => void;
}

export const useCarousel = ({
  items,
  initialIndex = 0,
}: UseCarouselProps): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < items.length) {
        setCurrentIndex(index);
      }
    },
    [items.length]
  );

  const currentItem = items[currentIndex];

  return {
    currentIndex,
    currentItem,
    goToPrevious,
    goToNext,
    goToIndex,
  };
};
