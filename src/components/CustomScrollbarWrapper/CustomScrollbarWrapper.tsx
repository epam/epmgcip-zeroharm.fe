import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useDetectWidth, useIncludeHover } from "@Hooks";
import { browserInfo } from "@Helpers";

type CustomScrollbarWrapperProps = {
  children: ReactNode;
  isScrollVisible: boolean;
  setIsScrollVisible: Dispatch<SetStateAction<boolean>>
}

const { isFirefox } = browserInfo;

const webkitBrowserScrollbarStyles = {
  "::-webkit-scrollbar": {
    w: "4px"
  },
  "::-webkit-scrollbar-thumb": {
    bgColor: "gray.700",
    borderRadius: "4px"
  },
  "::-webkit-scrollbar-track": {
    bgColor: {
      md: "transparent",
      lg: "gray.800"
    },
    borderRadius: "4px"
  },
  "::-webkit-scrollbar-button": {
    display: "none"
  }
};

export const CustomScrollbarWrapper: FC<CustomScrollbarWrapperProps> = ({ children, isScrollVisible, setIsScrollVisible }) => {
  const tabPanelsRef = useRef(null);
  const { isLargerThan1024 } = useDetectWidth();
  const shouldIncludeHover = useIncludeHover();

  const isMobileTouchDevice = !shouldIncludeHover && !isLargerThan1024;
  const scrollbarWebkitStyles = isMobileTouchDevice ? {} : webkitBrowserScrollbarStyles;

  useEffect(() => {
    const tabPanelsNode = tabPanelsRef.current;
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

  return (
    <Box
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <Box
        ref={tabPanelsRef}
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        mr={{ base: "0", md: !shouldIncludeHover || isFirefox ? "3px" : "6px", lg: "20px" }}
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: "#48494D transparent",
          ...scrollbarWebkitStyles
        }}
      >
        { children }
      </Box>
    </Box>
  );
};
