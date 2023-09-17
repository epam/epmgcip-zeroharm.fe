import { FC, Fragment } from "react";
import { Box, Spacer, Tab, TabList } from "@chakra-ui/react";
import { useDetectContentOverflow, useDetectFullView } from "@Hooks";
import { useDataStore } from "@Store/useDataStore";

type TabListContentProps = {
  tabs: any[];
}

export const TabListContent: FC<TabListContentProps> = ({ tabs }) => {
  const { ref: tabContainerRef, isContentOverflowing } = useDetectContentOverflow("horizontal");
  const { setParameter } = useDataStore();
  const { ref: firstTabRef, isInFullView: isFirstTabInFullView } = useDetectFullView();
  const { ref: lastTabRef, isInFullView: isLastTabInFullView } = useDetectFullView();

  const tabListToRender = tabs.map(({ tabId, tabName }, index) => {
    const isLastTab = tabs.length - 1 === index;
    const isFirstTab = index === 0;

    const spacerWidth = isLastTab ? "none" : "16px";

    const tabRef = isFirstTab ? firstTabRef : (isLastTab ? lastTabRef : undefined);

    return (
      <Fragment key={tabId}>
        <Tab
          ref={tabRef}
          h={{ base: "34px", lg: "40px" }}
          borderBottom="1px solid gray"
          p="0"
          color="gray"
          fontSize={{ base: "small", lg: "medium" }}
          lineHeight={{ base: "small", lg: "medium" }}
          whiteSpace="nowrap"
          _selected={{
            color: "white",
            borderBottom: "2px solid white"
          }}
          _hover={{
            color: "white"
          }}
          onClick={() => setParameter(tabId)}
        >
          { tabName }
        </Tab>
        <Spacer
          minW={spacerWidth}
          maxW={spacerWidth}
          borderBottom="1px solid gray"
        />
      </Fragment>
    );
  });

  return (
    <Box
      w={{ base: "343px", md: "100%" }}
      overflow="hidden"
      position="relative"
      _before={{
        content: isContentOverflowing && !isFirstTabInFullView ? "''" : undefined,
        position: "absolute",
        width: { base: "34px", lg: "40px" },
        aspectRatio: "1 / 1",
        left: "0",
        top: "0",
        bgImage: "linear-gradient(90deg, gray.900, transparent)"
      }}
      _after={{
        content: isContentOverflowing && !isLastTabInFullView ? "''" : undefined,
        position: "absolute",
        width: { base: "34px", lg: "40px" },
        aspectRatio: "1 / 1",
        right: "0",
        top: "0",
        bgImage: "linear-gradient(90deg, transparent, gray.900)"
      }}
    >
      <TabList
        ref={tabContainerRef}
        overflowY="hidden"
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none"
          },
          scrollbarWidth: "none"
        }}
      >
        { tabListToRender }
      </TabList>
    </Box>
  );
};
