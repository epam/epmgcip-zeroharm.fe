import { useEffect, useRef, useState } from "react";

export const useDetectScrollVisibility = () => {
  const [ isScrollVisible, setIsScrollVisible ] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabPanelsNode = ref.current;

    if (!tabPanelsNode) return;

    const resizePanelObserver = new ResizeObserver(() => {
      const { scrollHeight, offsetHeight } = tabPanelsNode;

      setIsScrollVisible(scrollHeight !== offsetHeight);
    });

    resizePanelObserver.observe(tabPanelsNode);

    return () => {
      resizePanelObserver.disconnect();
    };
  }, []);

  return { ref, isScrollVisible };
};
