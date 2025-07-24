import { useEffect, useState } from "react";

const useIsOverflowing = (ref: React.RefObject<HTMLElement | null>) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const el = ref.current;
      if (!el) return;
      setIsOverflowing(el.scrollWidth > el.clientWidth + 1);
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [ref]);

  return isOverflowing;
};

export default useIsOverflowing; 