import { FC, ReactNode, useEffect, useRef } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { detectBrowser } from "@Helpers";

type CustomScrollbarWrapperProps = {
  children: ReactNode;
  isScrollVisible: boolean;
  setIsScrollVisible: (isScrollVisible: boolean) => void;
}

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
  const [isTouchScreen] = useMediaQuery("(pointer: coarse)", { ssr: false });

  const { isFirefox } = detectBrowser();
  const isMobileTouchDevice = isTouchScreen && !isLargerThan1024;

  const scrollbarStyles = isMobileTouchDevice ? {} : webkitBrowserScrollbarStyles;

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
      className="custom-scrollbar"
      w="100%"
      h="100%"
      overflow="hidden"
      mx={{ base: "auto", md: "initial" }}
    >
      <Box
        ref={tabPanelsRef}
        w="auto"
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        mr={{ base: "0", md: isTouchScreen || isFirefox ? "3px" : "6px", lg: "20px" }}
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: "#48494D transparent",
          ...scrollbarStyles
        }}
      >
        { children }
      </Box>
    </Box>
  );
};
