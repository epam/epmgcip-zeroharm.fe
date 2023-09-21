import { FC, Fragment, WheelEventHandler, useState } from "react";
import { Box, Spacer, Tab, TabList } from "@chakra-ui/react";
import { useDetectContentOverflow, useDetectFullView } from "@Hooks";
import { useDataStore } from "@Store/useDataStore";

type TabListContentProps = {
  tabs: any[];
}

const borderStyles = {
  borderColor: "borderColor",
  borderStyle: "solid",
  borderBottomWidth: "1px"
};

const tabListShadowsGeneralStyles = {
  position: "absolute",
  width: { base: "34px", lg: "40px" },
  aspectRatio: "1 / 1",
  top: "0"
};

export const TabListContent: FC<TabListContentProps> = ({ tabs }) => {
  const [deltaYHistory, setDeltaYHistory] = useState<number[]>([]);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const { setParameter } = useDataStore();
  const { ref: tabContainerRef, isContentOverflowing } = useDetectContentOverflow("horizontal");
  const { ref: firstTabRef, isInFullView: isFirstTabInFullView } = useDetectFullView(isContentOverflowing);
  const { ref: lastTabRef, isInFullView: isLastTabInFullView } = useDetectFullView(isContentOverflowing);

  const onWheel: WheelEventHandler<HTMLDivElement> = (e) => {
    const node = e.currentTarget;
    const { deltaX, deltaY } = e;

    const absoluteDeltaX = Math.abs(deltaX);
    const absoluteDeltaY = Math.abs(deltaY);

    if (absoluteDeltaX > 0 && absoluteDeltaY <= 0) {
      node.scrollLeft += deltaX;

      return;
    }

    clearTimeout(timer);

    const intDeltaY = Math.floor(absoluteDeltaY);

    if (deltaYHistory.length > 5 && deltaYHistory.every((delta) => delta === intDeltaY)) {
      node.scrollLeft += deltaY;
    }

    setDeltaYHistory((prev) => [...prev, intDeltaY].slice(-20));

    setTimer(() => setTimeout(() => setDeltaYHistory(() => []), 500));
  };

  const tabListToRender = tabs.map(({ tabId, tabName }, index) => {
    const isLastTab = tabs.length - 1 === index;
    const isFirstTab = index === 0;

    const spacerWidth = isLastTab ? "none" : "16px";

    const tabRef = isFirstTab ? firstTabRef : (isLastTab ? lastTabRef : undefined);

    return (
      <Fragment key={tabId + index}>
        <Tab
          ref={tabRef}
          h={{ base: "34px", lg: "40px" }}
          {...borderStyles}
          p="0"
          color="secondaryColor"
          fontSize={{ base: "small", lg: "medium" }}
          lineHeight={{ base: "small", lg: "medium" }}
          whiteSpace="nowrap"
          _selected={{
            color: "primaryColor",
            fontWeight: "700",
            borderColor: "primaryColor",
            borderBottomWidth: "2px"
          }}
          _hover={{
            color: "primaryColor"
          }}
          onClick={() => setParameter(tabId)}
        >
          { tabName }
        </Tab>
        <Spacer
          minW={spacerWidth}
          maxW={spacerWidth}
          {...borderStyles}
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
        content: isFirstTabInFullView ? "none" : "''",
        ...tabListShadowsGeneralStyles,
        left: "0",
        bgImage: "linear-gradient(90deg, primaryBgColor, transparent)"
      }}
      _after={{
        content: isLastTabInFullView ? "none" : "''",
        ...tabListShadowsGeneralStyles,
        right: "0",
        bgImage: "linear-gradient(90deg, transparent, primaryBgColor)"
      }}
    >
      <TabList
        onWheel={onWheel}
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
