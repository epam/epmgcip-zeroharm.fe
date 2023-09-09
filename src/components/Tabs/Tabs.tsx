import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Box, Tabs as ChakraTabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { resolveTranslationPath } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";
import { Cards } from "@UI";
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
      display="flex"
      flex="1"
      gap={{
        base: "16px",
        lg: "24px"
      }}
      flexDirection="column"
      pt={{
        base: "118px", md: "0"
      }}
    >
      <TabList
        mr={{ md: "16px", lg: "20px" }}
        pos={{ base: "fixed", md: "initial" }}
        w={{ base: "343px", md: "initial" }}
        zIndex={{ base: "1099", md: "initial" }}
        bgColor="gray.900"
        transform={{ base: "translate(0, -58px)", md: "initial" }}
      >
        { tabs.map(({ tabId, tabName }) => (
          <Tab
            key={tabId}
            py="8px"
            borderBottom="2px solid gray"
            color="gray"
            flex="1"
            textAlign="center"
            _selected={selected}
            _hover={hover}
            onClick={() => setParameter(tabId)}
          >
            { tabName }
          </Tab>
        )) }
      </TabList>

      <CustomScrollbarWrapper
        isScrollVisible={isScrollVisible}
        setIsScrollVisible={setIsScrollVisible}
      >
        <Content />
      </CustomScrollbarWrapper>
    </ChakraTabs>
  );
};

type CustomScrollbarWrapperProps = {
  children: ReactNode;
  isScrollVisible: boolean;
  setIsScrollVisible: (isScrollVisible: boolean) => void;
}

const DEBOUNCE_TIME = 700;

export const CustomScrollbarWrapper: FC<CustomScrollbarWrapperProps> = ({ children, isScrollVisible, setIsScrollVisible }) => {
  const [bgColor, setBgColor] = useState("transparent");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const tabPanelsRef = useRef(null);
  const tabPanelsNode = tabPanelsRef.current;
  const { isFirefox } = useBrowserDetector();
  const { isTouchScreen } = useDeviceDetector();

  const onScrollStop = () => {
    setIsScrolling(false);
    setBgColor("transparent");
  };

  const onScroll = () => {
    setIsScrolling(true);
    setBgColor("gray.700");
  };

  const handleScroll = () => {
    clearTimeout(scrollTimeout as NodeJS.Timeout);

    onScroll();

    setScrollTimeout(
      setTimeout(() => onScrollStop(),
      DEBOUNCE_TIME)
    );
  };

  useEffect(() => {
    if (!tabPanelsNode) return;

    const resizePanelObserver = new ResizeObserver(() => {
      const { scrollHeight, offsetHeight } = tabPanelsNode;

      setIsScrollVisible(scrollHeight !== offsetHeight);
    });

    resizePanelObserver.observe(tabPanelsNode);

    return () => {
      resizePanelObserver.disconnect();
    };
  }, [tabPanelsNode]);

  return (
    <Box
      pos="relative"
      flex="1"
      w="100%"
      overflow="hidden"
      pr={{
        md: isScrollVisible ? isFirefox ? isTouchScreen ? "5px" : "2px" : "6px" : "16px",
        lg: "20px"
      }}
    >
      <Box
        ref={tabPanelsRef}
        onScroll={handleScroll}
        h="100%"
        w="100%"
        boxSizing="border-box"
        overflowY="auto"
        bgImage="linear-gradient(gray.900, gray.900)"
        bgColor={{
          md: bgColor,
          lg: "gray.100"
        }}
        transition="background-color .5s ease"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: {
            md: `${isScrolling ? "#48494D" : "transparent"} transparent`,
            lg: "white transparent"
          },
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
            display: "none",
            w: 0,
            h: 0
          }
        }}
        _after={{
          md: {},
          lg: {
            content: isFirefox && isScrollVisible ? "''" : undefined,
            pos: "absolute",
            right: isTouchScreen ? "21px" : "22px",
            top: "0",
            w: isTouchScreen ? "4px" : "9px",
            h: "100%",
            borderRadius: "10px",
            bgImage: "linear-gradient(rgba(255,255,255, 0.1), rgba(255,255,255, 0.1))"
          }
        }}
      >
        <Box
          w={{
            md: "327px",
            lg: "auto"
          }}
          pr={{
            md: "0px",
            lg: isScrollVisible ? "20px" : "0px"
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
