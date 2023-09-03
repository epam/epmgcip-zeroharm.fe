import { useEffect, useRef, useState } from "react";
import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels
} from "@chakra-ui/react";
import { resolveTranslationPath } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";
import { Cards } from "@UI";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";

const hover = {
  color: "white"
};
const selected = {
  color: "white",
  borderBottom: "3px solid white"
};

export const Tabs = () => {
  const { parameter, setParameter } = useDataStore();

  const [ isScrollVisible, setIsScrollVisible ] = useState(false);

  const tabPanelsRef = useRef(null);
  const tabPanelsNode = tabPanelsRef.current;

  const tabs = tabsData.map((tabData) => resolveTranslationPath(tabData));
  const currentTab = parameter || tabs[0].tabId;
  const currentTabData = tabs.find(({ tabId }) => tabId === currentTab);
  const defaultTabIndex = tabs.indexOf(currentTabData);

  const changeScrollState = (element: HTMLElement | null) => {
    if (element) {
      const scrollHeight = (element as HTMLElement).scrollHeight;
      const offsetHeight = (element as HTMLElement).offsetHeight;
      setIsScrollVisible(scrollHeight !== offsetHeight);
    }
  };

  const resizePanelObserver = new ResizeObserver(() => {
    changeScrollState(tabPanelsNode);
  });

  tabPanelsNode && resizePanelObserver.observe(tabPanelsNode);

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  return (
    <ChakraTabs
      defaultIndex={defaultTabIndex}
      variant="unstyled"
      overflowY="hidden"
      display="flex"
      flexDirection="column"
    >
      <TabList pb="24px">
        { tabs.map(({ tabId, tabName }) => (
          <Tab
            key={tabId}
            p="0"
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

      <TabPanels
        ref={tabPanelsRef}
        flex="1"
        overflowY="auto"
        pb="9px"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: "white #48494D",
          "&::-webkit-scrollbar": {
            w: "4px",
            bg: "gray.700",
            borderRadius: "50px"
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "50px",
            bg: "white"
          }
        }}
      >
        { tabs.map(({ tabId }) => (
          <TabPanel
            key={tabId}
            display="flex"
            flexDirection="column"
            gap="24px"
            p="0"
            pr={isScrollVisible ? "20px" : "4px"}
          >
            <Cards cardsKey={tabId} />
            <IndexDate />
            { tabId === "air_quality" && <Indicators /> }
          </TabPanel>
        )) }
      </TabPanels>
    </ChakraTabs>
  );
};
