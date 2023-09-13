import { Dispatch, FC, SetStateAction } from "react";
import { useDetectWidth } from "../../hooks";
import { detectBrowser } from "../../helpers";
import { Box, TabPanel, TabPanels } from "@chakra-ui/react";
import { Cards } from "@UI";
import { Map, Footer } from "@Components";
import { Indicators } from "../Indicators/Indicators";
import { IndexDate } from "../IndexDate/IndexDate";

type TabPanelsContentProps = {
  isScrollVisible: boolean;
  setIsScrollVisible: Dispatch<SetStateAction<boolean>>
  tabs: any[]
}

export const TabPanelsContent: FC<TabPanelsContentProps> = ({ isScrollVisible, tabs }) => {
  const { isLargerThan600 } = useDetectWidth();

  const { isFirefox } = detectBrowser();
  const isMobileWidth = !isLargerThan600;

  return (
    <>
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
    </>
  );
};
