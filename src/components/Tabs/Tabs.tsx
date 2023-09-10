import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Box, Tabs as ChakraTabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { resolveTranslationPath } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";
import { Cards } from "@UI";
import { useDetectWidth } from "@Hooks";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";
import * as Bowser from "bowser";

const hover = {
  color: "white"
};
const selected = {
  color: "white",
  borderBottom: "3px solid white"
};

type TabsProps = {
  isScrollVisible: boolean;
  setIsScrollVisible: (isScrollVisible: boolean) => void
}

export const Tabs: FC<TabsProps> = ({ isScrollVisible, setIsScrollVisible }) => {
  const { parameter, setParameter } = useDataStore();
  const { isFirefox } = useBrowserDetector();

  const tabs = tabsData.map((tabData) => resolveTranslationPath(tabData));
  const currentTab = parameter || tabs[0].tabId;
  const currentTabData = tabs.find(({ tabId }) => tabId === currentTab);
  const defaultTabIndex = tabs.indexOf(currentTabData);

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  const Content = () => (
    <TabPanels>
      { tabs.map(({ tabId }) => (
        <TabPanel
          key={tabId}
          display="flex"
          flexDirection="column"
          gap="16px"
          p="0"
        >
          <Cards cardsKey={tabId} />
          <IndexDate />
          { tabId === "air_quality" && <Indicators /> }
        </TabPanel>
      )) }
    </TabPanels>
  );

  return (
    <ChakraTabs
      defaultIndex={defaultTabIndex}
      variant="unstyled"
      overflowY="hidden"
      flex="1"
      display="flex"
      flexDirection="column"
      w="100%"
    >
      <Box
        w="100%"
        bgColor="gray.900"
        pos={{
          base: "fixed",
          md: "initial"
        }}
        zIndex="1098"
      >
        <Box
          m={{
            base: "0 auto 16px",
            md: "0 16px 16px",
            lg: "0 20px 16px 24px"
          }}
          w={{ base: "343px", md: "initial" }}
          mt={{
            base: "68px",
            md: "0px"
          }}
        >
          <TabList>
            { tabs.map(({ tabId, tabName }) => (
              <Tab
                key={tabId}
                borderBottom="2px solid gray"
                color="gray"
                flex="1"
                textAlign="center"
                lineHeight={{
                  base: "13px",
                  lg: "small"
                }}
                fontSize={{
                  base: "small",
                  lg: "medium"
                }}
                h={{
                  base: "34px",
                  lg: "40px"
                }}
                _selected={selected}
                _hover={hover}
                onClick={() => setParameter(tabId)}
              >
                { tabName }
              </Tab>
            )) }
          </TabList>
        </Box>
      </Box>

      <Box
        w="100%"
        flex="1"
        overflow="hidden"
      >
        <Box
          m={{
            base: "0 auto 0",
            md: `0 ${isFirefox ? "3px" : "6px"} 0 16px`,
            lg: "0 20px 0 24px"
          }}
          w={{ base: "343px", md: "initial" }}
          h="100%"
          mt={{
            base: "118px",
            md: "0px"
          }}
          pb="16px"
          overflow="hidden"
        >
          <CustomScrollbarWrapper
            isScrollVisible={isScrollVisible}
            setIsScrollVisible={setIsScrollVisible}
          >
            <Content />
          </CustomScrollbarWrapper>
        </Box>
      </Box>
    </ChakraTabs>
  );
};

type CustomScrollbarWrapperProps = {
  children: ReactNode;
  isScrollVisible: boolean;
  setIsScrollVisible: (isScrollVisible: boolean) => void;
}

const DEBOUNCE_TIME = 700;

const webkitBrowserScrollbarStyles = {
  "::-webkit-scrollbar": {
    w: "4px"
  },
  "::-webkit-scrollbar-thumb": {
    bgColor: "inherit",
    borderRadius: "4px",
    transition: "background-color .5s ease"
  },
  "::-webkit-scrollbar-track": {
    bgColor: {
      md: "transparent",
      lg: "gray.700"
    },
    borderRadius: "4px"
  },
  "::-webkit-scrollbar-button": {
    display: "none"
  }
};

export const CustomScrollbarWrapper: FC<CustomScrollbarWrapperProps> = ({ children, isScrollVisible, setIsScrollVisible }) => {
  const [bgColor, setBgColor] = useState("transparent");
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const tabPanelsRef = useRef(null);
  const { isLargerThan1024 } = useDetectWidth();
  const { isFirefox } = useBrowserDetector();

  const onScrollStop = () => {
    setBgColor("transparent");
  };

  const onScroll = () => {
    setBgColor("#48494D");
  };

  const handleScroll = () => {
    if (isLargerThan1024) return;

    clearTimeout(scrollTimeout as NodeJS.Timeout);

    onScroll();

    setScrollTimeout(
      setTimeout(() => onScrollStop(),
      DEBOUNCE_TIME)
    );
  };

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
  }, [tabPanelsRef]);

  return (
    <Box
      className="custom-scrollbar"
      w="100%"
      h="100%"
      overflow="hidden"
      pos="relative"
    >
      <Box
        ref={tabPanelsRef}
        onScroll={handleScroll}
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        bgImage="linear-gradient(gray.900, gray.900)"
        bgColor={{
          md: bgColor,
          lg: "gray.100"
        }}
        transition="background-color .5s ease"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: {
            md: `${bgColor} transparent`,
            lg: "white transparent"
          },
          ...webkitBrowserScrollbarStyles
        }}
        _after={{
          lg: {
            content: isFirefox && isScrollVisible ? "''" : undefined,
            pos: "absolute",
            w: "6px",
            bgColor: "rgba(255, 255, 255, .2)",
            h: "calc(100% - 2px)",
            borderRadius: "10px",
            right: "2px",
            top: "1px"
          }
        }}
      >
        <Box
          maxW={{
            md: "327px",
            lg: isScrollVisible ? "392px" : "396px"
          }}
        >
          { children }
        </Box>
      </Box>
    </Box>
  );
};

export const useDeviceDetector = () => {
  const isTouchScreen = navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches;

  return { isTouchScreen };
};

export const useBrowserDetector = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);

  const isFirefox = browser.getBrowserName() === "Firefox";
  const isChrome = browser.getBrowserName() === "Chrome";
  const isSafari = browser.getBrowserName() === "Safari";
  const isWebkitBrowser = isChrome || isSafari;

  return {
    isFirefox,
    isChrome,
    isSafari,
    isWebkitBrowser
  };
};
