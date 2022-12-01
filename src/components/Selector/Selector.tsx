import * as React from "react";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { ReactComponent as IconLocal } from "../../assets/icons/harm-local.svg";
import { Popup } from "../../_UI/Popup/Popup";
import { Link } from "react-router-dom";
import { Select } from "../Select/Select";

const Selector = () => {
  return (
    <Flex
      p="140px 0 0 80px"
      direction="column"
      gap="16px"
      maxWidth="540px"
      width="100%"
      boxSizing="content-box"
    >
      <Text textTransform="uppercase" fontWeight="700">
        get daily tips
      </Text>
      <Heading as="h1" fontSize={44}>
        Protect your health from the environmental pollution effects.
      </Heading>
      <Select />
      <Flex
        direction="row"
        position="relative"
        gap="32px"
        pt="16px"
        justifyContent="space-between"
      >
        <Link to="/map">
          <Button
            leftIcon={<IconLocal />}
            colorScheme="gray"
            color="black"
            variant="solid"
          >
            Open a Map
          </Button>
        </Link>

        <Box>
          <Popup isOpen={true}>
            <Text>Not your location? You may choose yours from the list.</Text>
          </Popup>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Selector;
