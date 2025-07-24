import { useEffect } from "react";

const useAutoHorizontalScroll = (scrollRef: React.RefObject<HTMLElement | null>, intervalMs = 5000) => {
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (!scrollContainer) return;
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainer.scrollTo({ left: Math.min(scrollLeft + clientWidth, scrollWidth), behavior: "smooth" });
      }
    }, intervalMs);
    return () => clearInterval(interval);
  }, [scrollRef, intervalMs]);
};

export default useAutoHorizontalScroll; 