import { useEffect } from "react";
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
import { IndexDate, Indicators } from "@Components";

const hover = {
  color: "white"
};
const selected = {
  color: "white",
  borderBottom: "3px solid white"
};

export const Tabs = () => {
  const { parameter, setParameter } = useDataStore();

  const isAirQualityParameter = parameter === "air_quality";
  const tabs = tabsData.map((tabData: any) => resolveTranslationPath(tabData));
  const currentTab = parameter || tabs[0].tabId;
  const currentTabData = tabs.find(({ tabId }) => tabId === currentTab);
  const defaultTabIndex = tabs.indexOf(currentTabData);

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  return (
    <ChakraTabs
      defaultIndex={defaultTabIndex}
      variant="unstyled"
      overflowY="hidden"
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
        height="100%"
        overflowY="auto"
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
            p="0 11px 55px 0"
          >
            <Cards cardsKey={tabId} />
            <IndexDate />
            { isAirQualityParameter && <Indicators /> }
          </TabPanel>
        )) }
      </TabPanels>
    </ChakraTabs>
  );
};
