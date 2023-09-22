import { useEffect, useRef, useState } from "react";

export const useDetectContentOverflow = (direction: "vertical" | "horizontal") => {
  const [ isContentOverflowing, setIsContentOverflowing ] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      const { scrollHeight, offsetHeight, scrollWidth, offsetWidth } = element;

      const isOverflowing = direction === "vertical" ? scrollHeight !== offsetHeight : scrollWidth !== offsetWidth;

      setIsContentOverflowing(isOverflowing);
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { ref, isContentOverflowing };
};
