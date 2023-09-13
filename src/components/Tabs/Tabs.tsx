import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { Box, Tabs as ChakraTabs, Tab, TabList } from "@chakra-ui/react";
import { resolveTranslationPath } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";
import { CustomScrollbarWrapper } from "@Components";
import { TabPanelsContent } from "./TabpanelsContent";

const hover = {
  color: "white"
};
const selected = {
  color: "white",
  borderBottom: "3px solid white"
};

type TabsProps = {
  isScrollVisible: boolean;
  setIsScrollVisible: Dispatch<SetStateAction<boolean>>
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

  return (
    <ChakraTabs
      defaultIndex={defaultTabIndex}
      variant="unstyled"
      w="100%"
      flex="1"
      display="flex"
      flexDirection="column"
      overflowY="hidden"
    >
      <Box
        w="100%"
        bgColor="gray.900"
        pos={{ base: "fixed", md: "initial" }}
        zIndex={{ base: "1098", md: "initial" }}
        p={{
          base: "68px 0 16px",
          md: "0 16px 16px",
          lg: "0 20px 16px 24px"
        }}
      >
        <TabList
          w={{ base: "343px", md: "initial" }}
          mx="auto"
        >
          { tabs.map(({ tabId, tabName }) => (
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
          )) }
        </TabList>
      </Box>

      <Box
        w="100%"
        flex="1"
        p={{
          base: "118px 0 0 0",
          md: "0 0 16px 16px",
          lg: "0 0 16px 24px"
        }}
        overflow="hidden"
      >
        <CustomScrollbarWrapper
          isScrollVisible={isScrollVisible}
          setIsScrollVisible={setIsScrollVisible}
        >
          <TabPanelsContent {...{ isScrollVisible, setIsScrollVisible, tabs }} />
        </CustomScrollbarWrapper>
      </Box>
    </ChakraTabs>
  );
};
