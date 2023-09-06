import { Container, Flex } from "@chakra-ui/react";
import { Greetings, Selector } from "@Components";

export const Home = () => {
  return (
    <Container
      as="main"
      maxW="1176px"
      p={{ base: "8px 16px", md: "24px 28px" }}
      h="100%"
      display="flex"
      alignItems="center"
    >
      <Flex
        maxW={{ base: "343px", md: "472px", lg: "100%" }}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems={{ base: "center", lg: "flex-start" }}
        gap={{ base: "24px", lg: "0px" }}
        margin="0px auto"
        flex="1"
      >
        <Selector />
        <Greetings />
      </Flex>
    </Container>
  );
};
