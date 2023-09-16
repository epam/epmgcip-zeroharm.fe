import { useEffect, useRef, useState } from "react";

export const useDetectScrollVisibility = () => {
  const [ isScrollVisible, setIsScrollVisible ] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const element = ref.current;

  useEffect(() => {

    if (!element) return;

    const resizePanelObserver = new ResizeObserver(() => {
      const { scrollHeight, offsetHeight } = element;

      setIsScrollVisible(scrollHeight !== offsetHeight);
    });

    resizePanelObserver.observe(element);

    return () => {
      resizePanelObserver.disconnect();
    };
  }, [element]);

  return { ref, isScrollVisible };
};
