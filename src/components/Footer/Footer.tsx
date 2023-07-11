import * as React from "react";
import { Flex, Button } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Flex p="4px" gap="32px" w="100%">
      <Button size='xs'>Feedback</Button>
    </Flex>
  );
};

export default Footer;
