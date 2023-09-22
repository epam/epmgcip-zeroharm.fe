import { FC, ReactNode, useEffect } from "react";
import { Box, Tabs as ChakraTabs, Flex } from "@chakra-ui/react";
import { useDataStore } from "@Store/useDataStore";
import { TabListContent } from "./TabListContent";

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
      <Flex
        w="100%"
        px={{ md: "16px", lg: "24px" }}
        pr={{ lg: "20px" }}
        justify={{ base: "center", md: "initial" }}
      >
        <TabListContent tabs={tabs} />
      </Flex>

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
