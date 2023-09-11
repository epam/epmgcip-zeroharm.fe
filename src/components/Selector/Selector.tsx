import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { Popup } from "@UI";
import { LocationSelect } from "../LocationSelect/LocationSelect";
import { useDetectWidth } from "@Hooks";
import { ReactComponent as IconLocal } from "@Assets/icons/filled/harm-local.svg";

export const Selector = () => {
  const { isLargerThan600, isLargerThan1024 } = useDetectWidth();

  const linkWidth = isLargerThan1024 ? "auto" : "100%";

  return (
    <Flex
      pt={{ base: "0px", lg: "55px" }}
      direction="column"
      gap={{ base: "8px", lg: "16px" }}
      maxWidth={{ base: "100%", lg: "540px" }}
      width="100%"
      alignItems={{ base: "center", lg: "flex-start" }}
    >
      <Text
        textTransform="uppercase"
        fontWeight="700"
        fontSize={{ base: "tiny", md: "sub_header", lg: "tiny" }}
        lineHeight={{ base: "tiny", md: "sub_header", lg: "tiny" }}
      >
        { t("pages.home.get_tips") }
      </Text>
      <Heading
        as="h1"
        fontSize={{ base: "headers.h5", md: "headers.h3", lg: "headers.h1" }}
        lineHeight={{ base: "26px", md: "headers.h3", lg: "headers.h1" }}
        textAlign={{ base: "center", lg: "start" }}
        maxW={{ base: "100%", lg: "520px" }}
      >
        { t("pages.home.protect") }
      </Heading>
      <Box mt="8px" w="100%">
        <LocationSelect />
      </Box>
      <Flex width="100%" mt={{ base: "8px", lg: "16px" }}>
        <Link to="/map" style={{ width: `${linkWidth}` }}>
          <Button
            leftIcon={
              isLargerThan600 ? (
                <IconLocal width="24px" height="24px" />
              ) : (
                <IconLocal width="20px" height="20px" />
              )
            }
            width={{ base: "100%", lg: "auto" }}
            height="auto"
            p={{ base: "12px 24px", md: "16px 24px" }}
            fontSize={{ base: "small", md: "medium" }}
            lineHeight={{ base: "small", md: "medium" }}
          >
            { t("pages.home.open_map") }
          </Button>
        </Link>
        <Box>
          <Popup isOpen={false}>
            <Text>{ t("pages.home.choose_location") }</Text>
          </Popup>
        </Box>
      </Flex>
    </Flex>
  );
};
