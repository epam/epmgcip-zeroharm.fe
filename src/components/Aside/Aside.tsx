import { Flex } from "@chakra-ui/react";
import { Tabs } from "../Tabs/Tabs";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { useParameterData } from "@Hooks";

export const Aside = () => {
  const { parameter } = useParameterData();

  const isAirQualityParameter = parameter === "air_quality";

  return (
    <Flex
      p="0 24px 24px"
      direction="column"
      gap="24px"
      height="calc(100vh - 64px)"
      overflow="auto"
    >
      <LocationSelect />
      <Tabs />
      <IndexDate />
      { isAirQualityParameter && (
        <Indicators />
      ) }
    </Flex>
  );
};
