import { FC } from "react";
import { useDetectScrollVisibility, useDetectWidth } from "@Hooks";
import { resolveTranslationPath } from "@Helpers";
import { tabsData } from "@Constants";
import { Tabs } from "../Tabs/Tabs";
import { TabPanelsContent } from "../Tabs/TabpanelsContent";
import { CustomScrollbarWrapper } from "../CustomScrollbarWrapper/CustomScrollbarWrapper";
import { MobileMapAndFooter } from "../MapAndFooter/MobileMapAndFooter";
import { AsideLocationMenu } from "./AsideLocationMenu";
import { AsideWrapper } from "./AsideWrapper";

export const Aside: FC = () => {
  const { ref, isScrollVisible } = useDetectScrollVisibility();
  const { isLargerThan600 } = useDetectWidth();

  const tabs = tabsData.map((tabData) => resolveTranslationPath(tabData));

  const isMobileWidth = !isLargerThan600;

  return (
    <AsideWrapper
      isMobileWidth={isMobileWidth}
      isScrollVisible={isScrollVisible}
    >
      <AsideLocationMenu />
      <Tabs tabs={tabs}>
        <CustomScrollbarWrapper ref={ref}>
          <TabPanelsContent isScrollVisible={isScrollVisible} tabs={tabs} />
          { isMobileWidth && <MobileMapAndFooter /> }
        </CustomScrollbarWrapper>
      </Tabs>
    </AsideWrapper>
  );
};

