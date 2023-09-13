import { FC, useEffect } from "react";
import { Box, Tabs as ChakraTabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { resolveTranslationPath, detectBrowser } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";
import { Cards } from "@UI";
import { Map, Footer, CustomScrollbarWrapper } from "@Components";
import { useDetectWidth } from "@Hooks";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";

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
  const { isLargerThan600 } = useDetectWidth();

  const { isFirefox } = detectBrowser();
  const isMobileWidth = !isLargerThan600;

  const tabs = tabsData.map((tabData) => resolveTranslationPath(tabData));
  const currentTab = parameter || tabs[0].tabId;
  const currentTabData = tabs.find(({ tabId }) => tabId === currentTab);
  const defaultTabIndex = tabs.indexOf(currentTabData);

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  const Content = () => (
    <Box>
      <TabPanels
        maxW={{
          base: "343px",
          md: "327px",
          lg: isScrollVisible ? isFirefox ? "387px" : "392px" : "396px"
        }}
        mx={{ base: "auto", md: "0px" }}
      >
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
      {
        isMobileWidth &&
          <>
            <Box
              as="main"
              height="400px"
              w="100vw"
              mt="16px"
            >
              <Map />
            </Box>
            <Footer />
          </>
      }
    </Box>
  );

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
          <Content />
        </CustomScrollbarWrapper>
      </Box>
    </ChakraTabs>
  );
};

