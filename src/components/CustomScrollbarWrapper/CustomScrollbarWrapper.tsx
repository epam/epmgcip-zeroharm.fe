import { ReactNode, forwardRef } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { browserInfo } from "@Helpers";

type CustomScrollbarWrapperProps = {
  children: ReactNode;
}

const { isFirefox } = browserInfo;

const webkitBrowserScrollbarStyles = {
  "::-webkit-scrollbar": {
    w: "4px"
  },
  "::-webkit-scrollbar-thumb": {
    bgColor: "scrollBar.thumb",
    borderRadius: "4px"
  },
  "::-webkit-scrollbar-track": {
    bgColor: {
      md: "transparent",
      lg: "scrollBar.trackLg"
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

export const CustomScrollbarWrapper = forwardRef<HTMLDivElement, CustomScrollbarWrapperProps>(({ children }, ref) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      w="100%"
      h="100%"
      overflow="hidden"
    >
      <Box
        ref={ref}
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: isDark ? "#48494D transparent" : "white transparent",
          ...styles
        }}
      >
        { children }
      </Box>
    </Box>
  );
});
