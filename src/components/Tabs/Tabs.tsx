import { useEffect } from "react";
import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels
} from "@chakra-ui/react";
import {resolveTranslationPath} from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";

const hover = {
  color: "white"
};
const selected = {
  color: "white",
  borderBottom: "3px solid white"
};

export const Tabs = () => {
  const { parameter, setParameter } = useDataStore();

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
    >
      <TabList>
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

      <TabPanels>
        { tabs.map(({ tabId }) => (
          <TabPanel
            key={tabId}
            p="0"
          />
        )) }
      </TabPanels>
    </ChakraTabs>
  );
};
