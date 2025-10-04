// src/components/userflow/Home/useIsOverflowing.tsx
import { useEffect, useState } from "react";

const useIsOverflowing = (ref: React.RefObject<HTMLElement | null>) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkOverflow = () => {
      const node = ref.current;
      if (!node) return;
      // +1 to avoid subpixel rounding issues
      setIsOverflowing(node.scrollWidth > node.clientWidth + 1);
    };

    // Initial check after layout
    const raf = requestAnimationFrame(checkOverflow);

    // Observe element resize (more reliable than window resize for flex/scroll containers)
    let resizeObserver: ResizeObserver | undefined;
    const ResizeObsCtor = (window as any).ResizeObserver as typeof ResizeObserver | undefined;
    if (typeof ResizeObsCtor === "function") {
      resizeObserver = new ResizeObsCtor(() => checkOverflow());
      resizeObserver.observe(el as Element);
    }

    // Observe child list/content changes that may affect width
    const mutationObserver = new MutationObserver(() => checkOverflow());
    mutationObserver.observe(el, { childList: true, subtree: true, attributes: true, characterData: true });

    // Fallback: still listen to window resize
    window.addEventListener("resize", checkOverflow);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver?.disconnect?.();
      mutationObserver.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [ref]);

  return isOverflowing;
};

export default useIsOverflowing; 