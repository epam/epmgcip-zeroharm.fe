import { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { browserInfo } from "@Helpers";

type CustomScrollbarWrapperProps = {
  children: ReactNode;
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

const styles = {
  "@media (hover: hover), (hover: none) and (min-width: 1024px)": {
    mr: { base: "0", md: isFirefox ? "3px" : "6px", lg: "20px" },
    ...webkitBrowserScrollbarStyles
  },
  "@media (hover: none)": {
    mr: { base: "0", md: "3px", lg: "20px" }
  }
};

export const CustomScrollbarWrapper: FC<CustomScrollbarWrapperProps> = ({ children, setIsScrollVisible }) => {
  const tabPanelsRef = useRef(null);

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
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: "#48494D transparent",
          ...styles
        }}
      >
        { children }
      </Box>
    </Box>
  );
};
