import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { useTranslationValues } from "@/hooks/useTranslationValues";
import { useTranslationKeys } from "@/hooks/useTranslationKeys";
import { useState } from "react";
import Cards from "@UI/Card/Cards";

const Tabs = () => {
  const tabValues = useTranslationValues("tabs");
  const tabKeys = useTranslationKeys("tabs");
  const [currentTab, setCurrentTab] = useState(tabKeys[0]);
  // UI
  const selected = { color: "white", borderBottom: "3px solid white" };
  const hover = { color: "white" };

  return (
    <ChakraTabs variant="unstyled">
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
            onClick={() => setCurrentTab(tabKeys[index])}
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
