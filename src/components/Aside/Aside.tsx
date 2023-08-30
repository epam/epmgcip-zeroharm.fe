import { Flex } from "@chakra-ui/react";
import { Tabs, IndexDate, Indicators, LocationSelect } from "@Components";
import { Cards } from "@UI";
import { useParameterData } from "@Hooks";
import { tabsData } from "@Constants";

export const Aside = () => {
  const { parameter } = useParameterData();

  const currentTab = parameter || tabsData[0].tabId;
  const isAirQualityParameter = parameter === "air_quality";

  return (
    <Flex
      p="0 24px 24px"
      direction="column"
      gap="24px"
      height="calc(100vh - 64px)"
      overflow="hidden"
    >
      <LocationSelect />
      <Tabs />
      <Flex
        direction="column"
        pr="11px"
        gap="24px"
        overflowY="auto"
        sx={{
          scrollbarWidth: "thin",
          scrollbarColor: "white #48494D",
          "&::-webkit-scrollbar": {
            w: "4px",
            bg: "gray.700",
            borderRadius: "50px"
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "50px",
            bg: "white"
          }
        }}
      >
        <Cards cardsKey={currentTab} />
        <IndexDate />
        { isAirQualityParameter && <Indicators /> }
      </Flex>
    </Flex>
  );
};
