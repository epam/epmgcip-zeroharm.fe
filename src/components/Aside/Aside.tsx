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
    >
      <Box
        w="100%"
        pos={{ base: "fixed", md: "initial" }}
        zIndex={{ base: "1099", md: "initial" }}
        bgColor="gray.900"
      >
        <Box
          w={{ base: "343px", md: "initial" }}
          h="44px"
          m={{
            base: "8px auto 16px",
            md: "16px",
            lg: "16px 20px 16px 24px"
          }}
        >
          <LocationSelect />
        </Box>
      </Box>
      <Tabs
        tabs={tabs}
      >
        <CustomScrollbarWrapper
          isScrollVisible={isScrollVisible}
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

