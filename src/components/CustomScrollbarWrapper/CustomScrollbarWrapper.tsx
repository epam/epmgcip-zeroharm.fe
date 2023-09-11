import { FC, ReactNode, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { useDetectWidth, useTouchScreen } from "@Hooks";

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
  const isTouchScreen = useTouchScreen();

  // const { isFirefox } = detectBrowser();
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
      // pos="relative"
      mx={{ base: "auto", md: "initial" }}
    >
      <Box
        ref={tabPanelsRef}
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: "#48494D transparent",
          ...scrollbarStyles
        }}
        // NEEDS APPROVAL
        // _after={{
        //   lg: {
        //     content: isFirefox && isScrollVisible && !isTouchScreen ? "''" : undefined,
        //     pos: "absolute",
        //     w: "6px",
        //     bgColor: "rgba(255, 255, 255, .05)",
        //     h: "calc(100% - 2px)",
        //     borderRadius: "10px",
        //     right: "2px",
        //     top: "1px"
        //   }
        // }}
      >
        { children }
      </Box>
    </Box>
  );
};
