import * as React from "react";
import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from "@chakra-ui/react";
import Card from "../../_UI/Card/Card";
import { ReactComponent as SadIcon } from "../../assets/icons/forcards/harm-disappointed-face.svg";
import { t } from "i18next";

const Tabs = () => {
  const tabs = [
    t("tabs.air"),
    t("tabs.uv"),
    t("tabs.noise"),
    t("tabs.humidity"),
    t("tabs.pressure"),
  ];
  const colors = ["violet", "ruby", "red", "orange", "yellow", "blue"];
  // UI
  const selected = { color: "white", borderBottom: "3px solid white" };
  const hover = { color: "white" };

  return (
    <ChakraTabs variant="unstyled">
      <TabList>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            p="0"
            borderBottom="2px solid gray"
            color="gray"
            flex="1"
            textAlign="center"
            _selected={selected}
            _hover={hover}
          >
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {colors.map((color, i) => (
          <TabPanel key={color} p="24px 0 0">
            <Card
              color={color}
              subheading={`${tabs[i]} tip`}
              heading={`Very poor ${tabs[i]}`}
              icon={<SadIcon />}
            >
              <Text fontWeight="700">WHY AND WHAT TO DO?</Text>
              <Text>
                Health warnings of emergency conditions. The entire population
                is more likely to be affected.
              </Text>
            </Card>
          </TabPanel>
        ))}
      </TabPanels>
    </ChakraTabs>
  );
};

export default Tabs;
