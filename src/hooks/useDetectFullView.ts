import { useEffect, useRef, useState } from "react";

export const useDetectFullView = (shouldObserve: boolean) => {
  const [isInFullView, setIsInFullView] = useState(!shouldObserve);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !shouldObserve) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInFullView(entry.isIntersecting),
      { threshold: 0.99 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [shouldObserve]);

  return { ref, isInFullView };
};
