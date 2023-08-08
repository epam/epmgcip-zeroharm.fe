import { Flex } from "@chakra-ui/react";
import Tabs from "@Components/Tabs/Tabs";
import { IndexDate } from "@Components/IndexDate/IndexDate";
import { Indicators } from "@Components/Indicators/Indicators";
import { LocationSelect } from "@/components/LocationSelect/LocationSelect";
import { useDataStore } from "@/store/useDataStore";

const Aside = () => {
  const { parameter } = useDataStore();
  const isAirQualityParameter = parameter === "air_quality";

  return (
    <Flex
      p="0 24px 24px"
      direction="column"
      gap="24px"
      height="calc(100vh - 64px)"
      overflow="overlay"
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

export default Aside;
