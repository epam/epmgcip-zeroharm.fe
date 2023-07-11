import * as React from "react";
import { Flex, Text, Link, Button } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Flex p="4px" gap="32px" w="100%" justify="space-between">
      <Text fontSize='xs'>
        All data is provided in collaboration with the{" "}
        <Link  href="https://hydromet.uz/" isExternal>
          Center of Hydrometeorological Service of the Republic of Uzbekistan
          (Uzhydromet){" "}
        </Link>
      </Text>
      <Button size="xs">Feedback</Button>
    </Flex>
  );
};

export default Footer;
