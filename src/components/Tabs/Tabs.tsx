import { useEffect } from "react";
import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { t } from "i18next";
import Cards from "@UI/Card/Cards";
import { getTranslationKeys } from "@/helpers";
import { useDataStore } from "@/store/useDataStore";

const Tabs = () => {
  const { parameter, setParameter } = useDataStore();

  const tabKeys = getTranslationKeys("tabs").filter(tab => !["uv", "noise_pollution"].includes(tab));
  const tabValues = tabKeys.map(tabKey => t(`tabs.${tabKey}`));
  const currentTab = parameter || tabKeys[0];
  const defaultTabIndex = tabKeys.indexOf(currentTab);

  const selected = { color: "white", borderBottom: "3px solid white" };
  const hover = { color: "white" };

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  return (
    <ChakraTabs
      defaultIndex={defaultTabIndex}
      variant="unstyled"
    >
      <TabList>
        {tabValues.map((tab, index) => (
          <Tab
            key={tab}
            p="0"
            borderBottom="2px solid gray"
            color="gray"
            flex="1"
            textAlign="center"
            _selected={selected}
            _hover={hover}
            onClick={() => setParameter(tabKeys[index])}
          >
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabKeys.map((tab: any) => (
          <TabPanel key={tab} p="24px 0 0">
            <Cards cardsKey={currentTab} />
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
