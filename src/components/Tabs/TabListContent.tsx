import { FC, WheelEventHandler } from "react";
import { Box, Flex, Tab, TabList } from "@chakra-ui/react";
import { useDetectContentOverflow, useDetectFullView } from "@Hooks";
import { useDataStore } from "@Store/useDataStore";

type TabListContentProps = {
  tabs: any[];
}

const tabListShadowsCommonStyles = {
  position: "absolute",
  pointerEvents: "none",
  boxSize: { base: "34px", lg: "40px" },
  top: "0"
};

export const TabListContent: FC<TabListContentProps> = ({ tabs }) => {
  const { setParameter } = useDataStore();
  const { ref: tabContainerRef, isContentOverflowing } = useDetectContentOverflow("horizontal");
  const { ref: firstTabRef, isInFullView: isFirstTabInFullView } = useDetectFullView(isContentOverflowing);
  const { ref: lastTabRef, isInFullView: isLastTabInFullView } = useDetectFullView(isContentOverflowing);

  const onWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    const node = e.currentTarget;
    const { deltaX, deltaY } = e;

    node.scrollLeft += deltaX;
    node.scrollLeft += deltaY / 2;
  };

  return (
    <Box
      w={{ base: "343px", md: "100%" }}
      h={{ base: "34px", lg: "40px" }}
      pos="relative"
      _before={{
        content: isFirstTabInFullView ? "none" : "''",
        ...tabListShadowsCommonStyles,
        left: "0",
        bgImage: "linear-gradient(90deg, primaryBgColor, transparent)"
      }}
      _after={{
        content: isLastTabInFullView ? "none" : "''",
        ...tabListShadowsCommonStyles,
        right: "0",
        bgImage: "linear-gradient(90deg, transparent, primaryBgColor)"
      }}
    >
      <TabList
        ref={tabContainerRef}
        onWheel={onWheel}
        h="100%"
        w="100%"
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none"
          },
          scrollbarWidth: "none"
        }}
      >
        <Flex
          flex="1"
          gap="16px"
          borderBottomWidth="1px"
          borderColor="borderColor"
        >
          {
            tabs.map(({ tabId, tabName }, index) => {
              const isLastTab = tabs.length - 1 === index;
              const isFirstTab = index === 0;

              const tabRef = isFirstTab ? firstTabRef : (isLastTab ? lastTabRef : undefined);

              return (
                <Tab
                  key={`${tabId}-${index}`}
                  ref={tabRef}
                  p="0"
                  whiteSpace="nowrap"
                  color="secondaryColor"
                  fontSize={{ base: "small", lg: "medium" }}
                  lineHeight={{ base: "small", lg: "medium" }}
                  mb="-1px"
                  _hover={{
                    color: "primaryColor"
                  }}
                  _selected={{
                    color: "primaryColor",
                    borderBottomWidth: "2px",
                    borderColor: "primaryColor"
                  }}
                  onClick={() => setParameter(tabId)}
                >
                  { tabName }
                </Tab>
              );
            })
          }
        </Flex>
      </TabList>
    </Box>
  );
};
