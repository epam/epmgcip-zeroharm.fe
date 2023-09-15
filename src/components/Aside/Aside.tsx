import { FC, useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { resolveTranslationPath } from "@Helpers";
import { tabsData } from "@Constants";
import { Tabs } from "../Tabs/Tabs";
import { TabPanelsContent } from "../Tabs/TabpanelsContent";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { CustomScrollbarWrapper } from "../CustomScrollbarWrapper/CustomScrollbarWrapper";
import { Map } from "../Map/Map";
import { Footer } from "../Footer/Footer";

export const Aside: FC = () => {
  const [ isScrollVisible, setIsScrollVisible ] = useState(false);
  const { isLargerThan600 } = useDetectWidth();

  const tabs = tabsData.map((tabData) => resolveTranslationPath(tabData));

  const isMobileWidth = !isLargerThan600;
  const offset = isScrollVisible ? "20px" : "0px";

  return (
    <VStack
      as={isMobileWidth ? "main" : "aside"}
      height="100%"
      w="100%"
      maxW={{
        base: "599px",
        md: "359px",
        lg: `calc(440px + ${offset})`
      }}
      overflow="hidden"
      pt={{ base: "8px", md: "16px" }}
      gap="16px"
    >
      <Box
        w={{ base: "343px", md: "100%" }}
        h="44px"
        px={{ base: "0", md: "16px", lg: "24px" }}
        pr={{ lg: "20px" }}
      >
        <LocationSelect />
      </Box>

      <Tabs
        tabs={tabs}
      >
        <CustomScrollbarWrapper
          setIsScrollVisible={setIsScrollVisible}
        >
          <TabPanelsContent isScrollVisible={isScrollVisible} tabs={tabs} />
          {
            isMobileWidth &&
              <>
                <Box
                  as={isMobileWidth ? undefined : "main"}
                  height="400px"
                  w="100vw"
                  mt="16px"
                >
                  <Map />
                </Box>
                <Footer />
              </>
          }
        </CustomScrollbarWrapper>
      </Tabs>
    </VStack>
  );
};

