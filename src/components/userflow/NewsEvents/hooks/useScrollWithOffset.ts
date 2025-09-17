import { useCallback, useRef } from "react";

export const useScrollWithOffset = (offset: number = 200) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [offset]);

  return { ref, scrollTo } as const;
};

export const useScrollWithOffset250 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 270;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return { ref, scrollTo } as const;
};