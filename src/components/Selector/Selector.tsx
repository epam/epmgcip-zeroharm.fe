import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { Popup } from "@UI";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { ReactComponent as IconLocal } from "@Assets/icons/filled/harm-local.svg";

export const Selector = () => {
  return (
    <Flex
      pt={{base: "118px", lg: "123px"}}
      direction="column"
      gap={{base: "8px", lg: "16px"}}
      maxWidth={{base: "100%", lg: "540px"}}
      width="100%"
      alignItems={{base: "center", lg: "flex-start"}}
    >
      <Text
        textTransform="uppercase"
        fontWeight="700"
        fontSize={{base: "sub_header", lg: "tiny"}}
        lineHeight={{base: "sub_header", lg: "tiny"}}
      >
        { t("pages.home.get_tips") }
      </Text>
      <Heading
        as="h1"
        fontSize={{base: "headers.h3", lg: "headers.h1"}}
        lineHeight={{base: "headers.h3", lg: "headers.h1"}}
        textAlign={{base: "center", lg: "start"}}
        maxW={{base: "100%", lg: "520px"}}
        >
        { t("pages.home.protect") }
      </Heading>
      <LocationSelect />
      <Flex
        width="100%"
        mt={{base: "8px", lg: "16px"}}
      >
        <Link to="/map" style={{width: "100%"}}>
          <Button
            leftIcon={<IconLocal width="24px" height="24px" />}
            width={{base: "100%", lg: "auto"}}
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
