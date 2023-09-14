import { FC } from "react";
import { Box, Flex, Image, Divider } from "@chakra-ui/react";
import { AboutPageArticle } from "@Components";
import aboutImage from "@Assets/images/about-full.jpeg";

export const About: FC = () => {

  return (
    <Box
      as="main"
      pb={{ base: "0px", md: "var(--footerHeight)" }}
    >
      <Image
        h={{ base: "165px", md: "116px", lg: "236px" }}
        src={aboutImage}
        width="100%"
        objectFit="cover"
        alt="polluted_air"
        filter="saturate(0)"
      />

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

