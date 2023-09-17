import { FC } from "react";
import { Box, Flex, Divider } from "@chakra-ui/react";
import { AboutPageArticle, AboutImage } from "@Components";

export const About: FC = () => {

  return (
    <Box
      as="main"
      pb={{ base: "0px", md: "var(--footerMaxHeight)" }}
    >
      <AboutImage />
      <Divider variant="gradient" />
      <Flex
        justify="center"
        py={{ base: "16px", md: "24px", lg: "40px" }}
        px="16px"
      >
        <AboutPageArticle />
      </Flex>
    </Box>
  );
};

