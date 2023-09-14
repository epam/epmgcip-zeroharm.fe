import { FC } from "react";
import { useDetectWidth } from "@Hooks";
import { isFirefox } from "@Helpers";
import { Box, TabPanel, TabPanels } from "@chakra-ui/react";
import { Cards} from "@UI";
import { Map } from "../Map/Map";
import { Footer } from "../Footer/Footer";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";

type TabPanelsContentProps = {
  isScrollVisible: boolean;
  tabs: any[]
}

export const TabPanelsContent: FC<TabPanelsContentProps> = ({ isScrollVisible, tabs }) => {
  const { isLargerThan600 } = useDetectWidth();

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
