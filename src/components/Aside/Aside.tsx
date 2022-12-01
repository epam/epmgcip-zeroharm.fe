import { Flex } from "@chakra-ui/react";
import Tabs from "../Tabs/Tabs";
import { IndexDate } from "../IndexDate/IndexDate";
import { Indicators } from "../Indicators/Indicators";
import { Select } from "../Select/Select";

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
