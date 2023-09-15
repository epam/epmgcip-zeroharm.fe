import { FC, useState } from "react";
import { VStack } from "@chakra-ui/react";
import { useDetectWidth } from "@Hooks";
import { resolveTranslationPath } from "@Helpers";
import { tabsData } from "@Constants";
import { Tabs } from "../Tabs/Tabs";
import { TabPanelsContent } from "../Tabs/TabpanelsContent";
import { CustomScrollbarWrapper } from "../CustomScrollbarWrapper/CustomScrollbarWrapper";
import { MobileMapAndFooter } from "../MapAndFooter/MobileMapAndFooter";
import { AsideLocationMenu } from "./AsideLocationMenu";

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
      <AsideLocationMenu />
      <Tabs tabs={tabs}>
        <CustomScrollbarWrapper setIsScrollVisible={setIsScrollVisible}>
          <TabPanelsContent isScrollVisible={isScrollVisible} tabs={tabs} />
          { isMobileWidth && <MobileMapAndFooter /> }
        </CustomScrollbarWrapper>
      </Tabs>
    </VStack>
  );
};

