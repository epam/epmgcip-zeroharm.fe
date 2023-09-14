import { FC } from "react";
import { Box, Flex, Image, Divider, VStack } from "@chakra-ui/react";
import { AboutPageTextSections } from "@Components";
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

      <VStack
        my={{ base: "16px", md: "24px", lg: "40px" }}
        mx="auto"
        px="16px"
      >
        <Flex
          as="article"
          maxW={{ base: "343px", md: "604px" }}
          direction="column"
          gap={{ base: "24px", lg: "40px" }}
        >
          <AboutPageTextSections />
        </Flex>
      </VStack>
    </Box>
  );
};

