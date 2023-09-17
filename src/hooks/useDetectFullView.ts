import { useEffect, useRef, useState } from "react";

export const useDetectFullView = () => {
  const [inFullView, setInFullView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInFullView(entry.isIntersecting);
      },
      { threshold: 0.99 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inFullView };
};
