import { useEffect, useRef, useState } from "react";

export const useDetectFullView = () => {
  const [isInFullView, setIsInFullView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInFullView(entry.isIntersecting);
      },
      { threshold: 0.99 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isInFullView };
};
