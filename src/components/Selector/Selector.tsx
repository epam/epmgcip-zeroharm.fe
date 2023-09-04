import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { Popup } from "@UI";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { ReactComponent as IconLocal } from "@Assets/icons/filled/harm-local.svg";

export const Selector = () => {
  return (
    <Flex
      pt="123px"
      direction="column"
      gap="16px"
      maxWidth="540px"
      width="100%"
      boxSizing="content-box"
    >
      <Text
        textTransform="uppercase"
        fontWeight="700"
        fontSize="tiny"
        lineHeight="tiny"
      >
        { t("pages.home.get_tips") }
      </Text>
      <Heading
        as="h1"
        fontSize="headers.h1"
        lineHeight="headers.h1"
        maxW="520px"
        >
        { t("pages.home.protect") }
      </Heading>
      <LocationSelect />
      <Flex
        direction="row"
        position="relative"
        mt="16px"
        justifyContent="space-between"
      >
        <Link to="/map">
          <Button
            leftIcon={<IconLocal width="24px" height="24px" />}
            height="auto"
            p="16px 24px"
          >
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
