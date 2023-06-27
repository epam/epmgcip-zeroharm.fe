import { Flex } from "@chakra-ui/react";
import Tabs from "@Components/Tabs/Tabs";
import { IndexDate } from "@Components/IndexDate/IndexDate";
import { Indicators } from "@Components/Indicators/Indicators";
import { Select } from "@/components/LocationSelect/LocationSelect";

const Aside = () => {
  return (
    <Flex p="0 24px 24px" direction="column" gap="24px">
      <Select />
      <Tabs />
      <IndexDate />
      <Indicators />
    </Flex>
  );
};

export default Aside;
