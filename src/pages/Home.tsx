import { Container, Flex } from "@chakra-ui/react";
import { Greetings, Selector } from "@Components";

export const Home = () => {
  return (
    <Container
      as="main"
      maxW="1176px"
      p="0px 28px"
    >
      <Flex justifyContent="space-between">
        <Selector />
        <Greetings />
     </Flex>
    </Container>
  );
};
