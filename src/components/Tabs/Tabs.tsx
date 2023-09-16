import { FC, ReactNode, useEffect } from "react";
import { Box, Tabs as ChakraTabs, Tab, TabList } from "@chakra-ui/react";
import { useDataStore } from "@Store/useDataStore";

const hover = {
  color: "white"
};
const selected = {
  color: "white",
  borderBottom: "3px solid white"
};

type TabsProps = {
  children: ReactNode;
  tabs: any[];
}

export const Tabs: FC<TabsProps> = ({ children, tabs }) => {
  const { parameter, setParameter } = useDataStore();

  const currentTab = parameter || tabs[0].tabId;
  const defaultTabIndex = tabs.findIndex(({ tabId }) => tabId === currentTab);

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  const tabListToRender = tabs.map(({ tabId, tabName }) => (
    <Tab
      key={tabId}
      h={{ base: "34px", lg: "40px" }}
      flex="1"
      borderBottom="2px solid gray"
      color="gray"
      textAlign="center"
      fontSize={{ base: "small", lg: "medium" }}
      lineHeight={{ base: "13px", lg: "small" }}
      _selected={selected}
      _hover={hover}
      onClick={() => setParameter(tabId)}
    >
      { tabName }
    </Tab>
  ));

  return (
    <ChakraTabs
      defaultIndex={defaultTabIndex}
      variant="unstyled"
      w="100%"
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={{ base: "16px", lg: "24px" }}
      overflowY="hidden"
    >
      <TabList
        w={{ base: "343px", md: "100%" }}
        px={{ base: "auto", md: "16px", lg: "24px" }}
        pr={{ lg: "20px" }}
      >
        { tabListToRender }
      </TabList>

      <Box
        w="100%"
        flex="1"
        p="0"
        pb={{ md: "16px" }}
        pl={{ md: "16px", lg: "24px"}}
        overflow="hidden"
      >
        { children }
      </Box>
    </ChakraTabs>
  );
};
