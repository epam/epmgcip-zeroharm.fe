import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { Popup } from "@UI";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { ReactComponent as IconLocal } from "@Assets/icons/filled/harm-local.svg";

export const Selector = () => {
  return (
    <Flex
      pt="70px"
      direction="column"
      gap="16px"
      maxWidth="540px"
      width="100%"
      boxSizing="content-box"
    >
      <Text textTransform="uppercase" fontWeight="700">
        { t("pages.home.get_tips") }
      </Text>
      <Heading as="h1" fontSize="headers.h1">
        { t("pages.home.protect") }
      </Heading>
      <LocationSelect />
      <Flex
        direction="row"
        position="relative"
        gap="32px"
        pt="16px"
        justifyContent="space-between"
      >
        <Link to="/map">
          <Button leftIcon={<IconLocal width="24px" height="24px" />}>
            { t("pages.home.open_map") }
          </Button>
        </Link>
        <Box>
          <Popup isOpen={false}>
            <Text>
              { t("pages.home.choose_location") }
            </Text>
          </Popup>
        </Box>
      </Flex>
    </Flex>
  );
};
