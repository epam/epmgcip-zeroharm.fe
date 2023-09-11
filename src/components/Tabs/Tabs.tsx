import { FC, useEffect } from "react";
import { Box, Tabs as ChakraTabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { resolveTranslationPath, detectBrowser } from "@Helpers";
import { useDataStore } from "@Store/useDataStore";
import { tabsData } from "@Constants";
import { Cards } from "@UI";
import { Map, Footer, CustomScrollbarWrapper } from "@Components";
import { useDetectWidth, useTouchScreen } from "@Hooks";
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
  const isTouchScreen = useTouchScreen();

  const isMobileWidth = !isLargerThan600;

  const tabs = tabsData.map((tabData) => resolveTranslationPath(tabData));
  const currentTab = parameter || tabs[0].tabId;
  const currentTabData = tabs.find(({ tabId }) => tabId === currentTab);
  const defaultTabIndex = tabs.indexOf(currentTabData);

  useEffect(() => {
    setParameter(currentTab);
  }, []);

  const Content = () => (
    <Box
      h="auto"
      display={{
        base: "flex",
        md: "initial"
      }}
      flexDirection="column"
    >
      <TabPanels
        maxW={{
          base: "343px",
          md: "327px",
          lg: isScrollVisible ? "392px" : "396px"
        }}
        mx={{
          base: "auto",
          md: "initial"
        }}
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
      overflowY="hidden"
      flex="1"
      display="flex"
      flexDirection="column"
      w="100%"
    >
      <Box
        w="100%"
        bgColor="gray.900"
        pos={{
          base: "fixed",
          md: "initial"
        }}
        zIndex="1098"
      >
        <Box
          m={{
            base: "0 0 16px",
            md: "0 16px 16px",
            lg: "0 20px 16px 24px"
          }}
          mt={{
            base: "68px",
            md: "0px"
          }}
        >
          <TabList
            w={{
              base: "343px",
              md: "initial"
            }}
            mx={{
              base: "auto"
            }}
          >
            { tabs.map(({ tabId, tabName }) => (
              <Tab
                key={tabId}
                borderBottom="2px solid gray"
                color="gray"
                flex="1"
                textAlign="center"
                lineHeight={{
                  base: "13px",
                  lg: "small"
                }}
                fontSize={{
                  base: "small",
                  lg: "medium"
                }}
                h={{
                  base: "34px",
                  lg: "40px"
                }}
                _selected={selected}
                _hover={hover}
                onClick={() => setParameter(tabId)}
              >
                { tabName }
              </Tab>
            )) }
          </TabList>
        </Box>
      </Box>

      <Box
        w="100%"
        flex="1"
        overflow="hidden"
      >
        <Box
          h="100%"
          m={{
            base: "0",
            md: `0 ${!isTouchScreen ? isFirefox ? "3px" : "6px" : "0px"} 0 16px`,
            lg: "0 20px 0 24px"
          }}
          pt={{
            base: "118px",
            md: "0px"
          }}
          pb={{
            base: "0px",
            md: "16px"
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
      </Box>
    </ChakraTabs>
  );
};

