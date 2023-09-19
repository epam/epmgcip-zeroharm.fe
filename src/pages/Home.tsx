import { Container } from "@chakra-ui/react";
import { Selector, Greetings } from "@Components";

export const Home = () => {
  return (
    <Container
      as="main"
      h="100%"
      maxW={{ base: "375px", md: "528px", lg: "1176px" }}
      p={{ base: "8px 16px", md: "24px 28px" }}
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="center"
      gap={{ base: "24px", lg: "0" }}
    >
      <Selector />
      <Greetings />
    </Container>
  );
};
