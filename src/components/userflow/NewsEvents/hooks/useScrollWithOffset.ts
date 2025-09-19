import { useCallback, useRef } from "react";

const animateScrollTo = (to: number, duration: number = 200) => {
  try {
    const start = window.pageYOffset || window.scrollY || 0;
    const change = to - start;
    let startTime: number | null = null;

    const easeInOut = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOut(progress);
      const current = start + change * eased;
      window.scrollTo(0, Math.max(0, current));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  } catch {
    // Fallback
    window.scrollTo(0, Math.max(0, to));
  }
};

export const useScrollWithOffset = (offset: number = 200) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    animateScrollTo(y);
  }, [offset]);

  return { ref, scrollTo } as const;
};

export const useScrollWithOffset250 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 270;
    animateScrollTo(y);
  }, []);

  return { ref, scrollTo } as const;
};