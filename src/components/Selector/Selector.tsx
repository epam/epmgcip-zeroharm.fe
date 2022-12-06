import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { ReactComponent as IconLocal } from "../../assets/icons/filled/harm-local.svg";
import { Popup } from "../../_UI/Popup/Popup";
import { Link } from "react-router-dom";
import { Select } from "../Select/Select";
import { t } from "i18next";

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
        {t("pages.home.get_tips")}
      </Text>
      <Heading as="h1" fontSize="headers.h1">
        {t("pages.home.protect")}
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
          <Button leftIcon={<IconLocal />}>{t("pages.home.open_map")}</Button>
        </Link>
        <Box>
          <Popup isOpen={true}>
            <Text>{t("pages.home.chose_location")}</Text>
          </Popup>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Selector;
